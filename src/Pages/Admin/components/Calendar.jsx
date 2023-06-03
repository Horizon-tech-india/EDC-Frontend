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

import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

function ServerDay(props) {
  const { highlightedEventDays = [], highlightedMeetingDays = [], day, outsideCurrentMonth, ...other } = props

  const isEventSelected = !outsideCurrentMonth && highlightedEventDays.includes(day.date())
  const isMeetingSelected = !outsideCurrentMonth && highlightedMeetingDays.includes(day.date())

  if (isEventSelected && isMeetingSelected) {
    return (
      <Badge key={props.day.toString()} overlap="circular" color="info" variant="dot">
        <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
      </Badge>
    )
  } else if (isEventSelected) {
    return (
      <Badge key={props.day.toString()} overlap="circular" color="success" variant="dot">
        <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
      </Badge>
    )
  } else if (isMeetingSelected) {
    return (
      <Badge key={props.day.toString()} overlap="circular" color="error" variant="dot">
        <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
      </Badge>
    )
  } else {
    return <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
  }
}

const Calendar = () => {
  const { state } = useContext(AuthContext)
  const currentDate = new Date()
  const [date, setDate] = useState(dayjs(currentDate))
  const [month, setMonth] = useState(date.toDate().toISOString().slice(0, 7))
  const [highlightedEventDays, setHighlightedEventDays] = useState([])
  const [highlightedMeetingDays, setHighlightedMeetingDays] = useState([])

  // const currentDateIs = date.toDate().toISOString().split('T')[0]
  // const { data, isLoading, refetch } = GetAllMeetingsEventsData(currentDateIs, state.token)
  // useEffect(() => {
  //   refetch()
  // }, [date])

  // const { data: dataDates, refetch: refetchDates } = GetAllMeetingsEventsDates(month, state.token)

  // useEffect(() => {
  //   setHighlightedEventDays(dataDates?.data?.eventDates)
  //   setHighlightedMeetingDays(dataDates?.data?.meetingDates)
  // }, [dataDates])

  // const handleMonthChange = (monthNew) => {
  //   setHighlightedEventDays([])
  //   setHighlightedMeetingDays([])
  //   setMonth(monthNew.toDate().toISOString().slice(0, 7))
  //   console.log(month)
  //   refetchDates()
  // }

  let eventGuid = 0
  let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
  const [currentEvents, setCurrentEvents] = useState([])

  const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: 'All-day event',
      start: todayStr,
    },
    {
      id: createEventId(),
      title: 'Timed event',
      start: todayStr + 'T12:00:00',
    },
  ]

  function createEventId() {
    return String(eventGuid++)
  }

  const handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible,
    })
  }

  const handleDateSelect = (selectInfo) => {
    // let title = prompt('Please enter a new title for your event')
    // let calendarApi = selectInfo.view.calendar
    // calendarApi.unselect() // clear date selection
    // if (title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay,
    //   })
    // }
  }

  const handleEventClick = (clickInfo) => {
    // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    //   clickInfo.event.remove()
    // }
    console.log(clickInfo)
  }

  const handleEvents = (events) => {
    setCurrentEvents(events)
  }

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: '',
        }}
        initialView="dayGridMonth"
        editable={false}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
        select={handleDateSelect}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        height={'100vh'}
        /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
      />

      {/* <div className="calendar-section">
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

        <div className="mx-2 mt-10 flex items-center justify-between">
          <span className="w-3 h-3 rounded-full bg-[#4caf50]" />
          <span className="mr-2">Event</span>
          <span className="w-3 h-3 rounded-full bg-[#f44336]" />
          <span className="mr-2">Meeting</span>
          <span className="w-3 h-3 rounded-full bg-[#2196f3]" />
          <span className="mr-2">Event & Meeting</span>
        </div>

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
                  highlightedEventDays,
                  highlightedMeetingDays,
                },
              }}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div className="calendar-table">
        <CalendarTable isLoading={isLoading} data={data ? [...data?.data?.events, ...data?.data?.meetings] : []} />
      </div> */}
    </div>
  )
}

export default Calendar
