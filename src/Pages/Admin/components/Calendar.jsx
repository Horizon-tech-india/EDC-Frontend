import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import CalendarTable from './CalendarTable'

const Calendar = () => {
  const currentDate = new Date()
  const [date, setDate] = useState(dayjs(currentDate))
  const [scale, setScale] = useState(2)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    return () => window.removeEventListener('resize', setWidth(window.innerWidth))
  }, [])

  useEffect(() => {
    setScale(width * 0.00115)
  }, [width])

  return (
    <div>
      <div className="calendar-container" style={{ transform: `scale(${scale})` }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            showDaysOutsideCurrentMonth
            fixedWeekNumber={6}
            value={date}
            onChange={(newValue) => setDate(newValue)}
          />
        </LocalizationProvider>
      </div>
      <div className="tables-container">
        <CalendarTable />
        <CalendarTable />
      </div>
    </div>
  )
}

export default Calendar
