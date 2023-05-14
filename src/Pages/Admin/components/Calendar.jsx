import React, { useState, useEffect, useContext } from 'react'
import dayjs from 'dayjs'
import { AuthContext } from '../../../context/AuthContext'
import Badge from '@mui/material/Badge'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton'
import { PickersDay } from '@mui/x-date-pickers/PickersDay'
import CalendarTable from './CalendarTable'
import { GetAllMeetingsEventsData } from '../../../Api/Post'
import Typography from '@mui/material/Typography'

const Calendar = () => {
  const { state } = useContext(AuthContext)
  const currentDate = new Date()
  const [date, setDate] = useState(dayjs(currentDate))
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 10, 11, 12, 15])
  // const [data, setData] = useState(null)
  //console.log(date.toDate())

  // const getAllMeetingsEventsData = async () => {
  //   const token = state.token
  //   const currentDate = date.toDate().toISOString().split('T')[0]
  //   //console.log(currentDate)
  //   try {
  //     const res = await GetAllMeetingsEventsData({ currentDate, token })
  //     if (res.status === 200) {
  //       setData(res.data)
  //       //handleClose()
  //     }
  //   } catch (error) {
  //     console.error(error.message)
  //   }
  // }

  const currentDateIs = date.toDate().toISOString().split('T')[0]
  const { data, isLoading, error, refetch } = GetAllMeetingsEventsData(currentDateIs, state.token)
  useEffect(() => {
    refetch()
  }, [date])
  console.log(data)

  const handleMonthChange = (date) => {
    //setHighlightedDays([])
    //fetchHighlightedDays(date);
  }

  function ServerDay(props) {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props

    const isSelected = !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) > 0

    return (
      <Badge key={props.day.toString()} overlap="circular" badgeContent={isSelected ? '🟡' : undefined}>
        <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
      </Badge>
    )
  }

  return (
    <div className="calendar-container">
      <div className="calendar-section">
        <Typography
          className="calendar-section-head"
          id="modal-modal-title justify-items-center"
          variant="h4"
          component="h4"
        >
          Calendar
        </Typography>
        <p className="calendar-section-description">
          Click on a particular date in the calendar to see the meetings and events of that date
        </p>
        <div className="calendar">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              showDaysOutsideCurrentMonth
              fixedWeekNumber={6}
              value={date}
              onChange={(newValue) => setDate(newValue)}
              loading={isLoading}
              onMonthChange={handleMonthChange}
              renderLoading={() => <DayCalendarSkeleton />}
              slots={{
                day: ServerDay,
              }}
              slotProps={{
                day: {
                  highlightedDays,
                },
              }}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div className="calendar-table">
        <CalendarTable isLoading={isLoading} data={data ? [...data?.data?.events, ...data?.data?.meetings] : []} />
      </div>
    </div>
  )
}

export default Calendar
