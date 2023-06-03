import React, { useState, useEffect, useContext } from 'react'
import dayjs from 'dayjs'
import { AuthContext } from '../../../context/AuthContext'
import Badge from '@mui/material/Badge'
import { PickersDay } from '@mui/x-date-pickers/PickersDay'
import { GetAllMeetingsEventsData, GetAllMeetingsEventsDates } from '../../../Api/Post'
import ModalEventMeeting from './ModalEventMeeting'

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
  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState(null)

  // const currentDateIs = date.toDate().toISOString().split('T')[0]
  // const { data, isLoading, refetch } = GetAllMeetingsEventsData(currentDateIs, state.token)
  // useEffect(() => {
  //   refetch()
  // }, [date])

  // const { data: dataDates, refetch: refetchDates } = GetAllMeetingsEventsDates(month, state.token)

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
    // {
    //   id: createEventId(),
    //   title: 'All-day event',
    //   start: todayStr,
    // },
    // {
    //   id: createEventId(),
    //   title: 'Timed event',
    //   start: todayStr + 'T12:00:00',
    // },
    {
      title: 'sample event',
      members: ['admin4@gmail.com'],
      start: '2023-06-27T08:15:00.000Z',
      type: 'event',
      filters: [],
      createdByName: 'Jayant',
      createdByEmail: 'jrohila55@gmail.com',
      description: 'sameeffff',
      createdAt: '2023-05-25T08:15:40.042Z',
      updatedAt: '2023-05-25T08:15:40.042Z',
    },
    {
      title: 'sample',
      link: 'http:///',
      members: ['admin4@gmail.com', 'student1@gmail.com'],
      start: '2023-06-27T08:08:00.000Z',
      type: 'meeting',
      filters: [],
      createdByName: 'Jayant',
      createdByEmail: 'jrohila55@gmail.com',
      createdAt: '2023-05-25T08:09:40.882Z',
      updatedAt: '2023-05-25T08:09:40.882Z',
    },
    {
      title: 'sample4433',
      link: 'http:///',
      members: ['admin4@gmail.com', 'student1@gmail.com'],
      start: '2023-06-27T08:08:00.000Z',
      type: 'meeting',
      filters: [],
      createdByName: 'Jayant',
      createdByEmail: 'jrohila55@gmail.com',
      createdAt: '2023-05-25T08:09:40.882Z',
      updatedAt: '2023-05-25T08:09:40.882Z',
    },
    {
      title: 'sample55',
      link: 'http:///',
      members: ['admin4@gmail.com', 'student1@gmail.com'],
      start: '2023-06-27T08:08:00.000Z',
      type: 'meeting',
      filters: [],
      createdByName: 'Jayant',
      createdByEmail: 'jrohila55@gmail.com',
      createdAt: '2023-05-25T08:09:40.882Z',
      updatedAt: '2023-05-25T08:09:40.882Z',
    },
    {
      title: 'sample9',
      link: 'http:///',
      members: ['admin4@gmail.com', 'student1@gmail.com'],
      start: '2023-06-27T08:08:00.000Z',
      type: 'meeting',
      filters: [],
      createdByName: 'Jayant',
      createdByEmail: 'jrohila55@gmail.com',
      createdAt: '2023-05-25T08:09:40.882Z',
      updatedAt: '2023-05-25T08:09:40.882Z',
    },
    {
      title: 'sample3',
      link: 'http:///',
      members: ['admin4@gmail.com', 'student1@gmail.com'],
      start: '2023-06-27T08:08:00.000Z',
      type: 'meeting',
      filters: [],
      createdByName: 'Jayant',
      createdByEmail: 'jrohila55@gmail.com',
      createdAt: '2023-05-25T08:09:40.882Z',
      updatedAt: '2023-05-25T08:09:40.882Z',
    },
  ]

  function createEventId() {
    return String(eventGuid++)
  }

  const handleDateSelect = (selectInfo) => {}

  const handleEventClick = (clickInfo) => {
    handlePreview(clickInfo)
  }

  const handleEvents = (events) => {
    setCurrentEvents(events)
  }

  function renderEventContent(eventInfo) {
    return (
      <>
        {/* <b>{eventInfo.timeText}</b> */}
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  const handlePreview = (rowData) => {
    setModalData(rowData.event)
    setModalOpen(!modalOpen)
  }

  const handleMonthChange = (arg) => {
    const month = arg.view.currentEnd.toISOString().slice(0, 7)
    //console.log(month)
  }

  return (
    <div className="calendar-container">
      <ModalEventMeeting
        isOpen={modalOpen}
        data={modalData}
        onClose={() => {
          setModalOpen(!modalOpen)
        }}
      />
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
        datesSet={handleMonthChange}
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
