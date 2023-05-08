import React, { useState, useEffect, useContext } from 'react'
import dayjs from 'dayjs'
import { AuthContext } from '../../../context/AuthContext'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import CalendarTable from './CalendarTable'
import Spinner from '../../../components/Layout/Spinner'
import { GetAllMeetingsEventsData } from '../../../Api/Post'

const Calendar = () => {
  const { state } = useContext(AuthContext)
  const currentDate = new Date()
  const [date, setDate] = useState(dayjs(currentDate))
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

  // useEffect(() => {
  //   getAllMeetingsEventsData()
  // }, [date])
  const currentDateIs = date.toDate().toISOString().split('T')[0]
  const {data , isLoading, error} =GetAllMeetingsEventsData(currentDateIs, state.token)
console.log(data)
  return (
    <div className="calendar-container">
      <div className="calendar">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            showDaysOutsideCurrentMonth
            fixedWeekNumber={6}
            value={date}
            onChange={(newValue) => setDate(newValue)}
          />
        </LocalizationProvider>
      </div>
      <div className="calendar-table">{data && <CalendarTable data={[...data.data.events, ...data.data.meetings]} />}</div>
    </div>
  )
}

export default Calendar
