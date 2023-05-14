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
import { GetAllMeetingsEventsData, GetAllMeetingsEventsDates } from '../../../Api/Post'
import Typography from '@mui/material/Typography'

const Calendar = () => {
  const { state } = useContext(AuthContext)
  const currentDate = new Date()
  const [date, setDate] = useState(dayjs(currentDate))
  const [month, setMonth] = useState(date.toDate().toISOString().slice(0, 7))
  const [highlightedDays, setHighlightedDays] = useState([])

  const currentDateIs = date.toDate().toISOString().split('T')[0]
  const { data, isLoading, refetch } = GetAllMeetingsEventsData(currentDateIs, state.token)
  useEffect(() => {
    refetch()
  }, [date])

  const { data: dataDates, refetch: refetchDates } = GetAllMeetingsEventsDates(month, state.token)

  useEffect(() => {
    setHighlightedDays(
      dataDates?.data?.eventDates || dataDates?.data?.meetingDates
        ? [...dataDates?.data?.eventDates, ...dataDates?.data?.meetingDates]
        : [],
    )
  }, [dataDates])

  const handleMonthChange = (monthNew) => {
    setHighlightedDays([])
    setMonth(monthNew.toDate().toISOString().slice(0, 7))
    console.log(month)
    refetchDates()
  }

  function ServerDay(props) {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props

    const isSelected = !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) > 0

    return (
      <Badge key={props.day.toString()} overlap="circular" badgeContent={isSelected ? '🔴' : undefined}>
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
