import React, { useState, useEffect, useContext, useRef } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { GetAllMeetingsEventsData, GetAllMeetingsEventsDates } from '../../../Api/Post'
import ModalEventMeeting from './ModalEventMeeting'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const Calendar = () => {
  const { state } = useContext(AuthContext)
  const currentDate = new Date()
  const [month, setMonth] = useState(currentDate.toISOString().slice(0, 7))
  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState(null)

  const { data, refetch } = GetAllMeetingsEventsData(month + '-27', state.token)

  const NEW_EVENTS = [
    {
      title: 'sample 222',
      link: 'http:///',
      members: ['admin4@gmail.com', 'student1@gmail.com'],
      start: '2023-07-27T08:08:00.000Z',
      type: 'meeting',
      filters: [],
      createdByName: 'Jayant',
      createdByEmail: 'jrohila55@gmail.com',
      createdAt: '2023-05-25T08:09:40.882Z',
      updatedAt: '2023-05-25T08:09:40.882Z',
    },
    {
      title: 'sample 2',
      link: 'http:///',
      members: ['admin4@gmail.com', 'student1@gmail.com'],
      start: '2023-07-27T08:08:00.000Z',
      type: 'meeting',
      filters: [],
      createdByName: 'Jayant',
      createdByEmail: 'jrohila55@gmail.com',
      createdAt: '2023-05-25T08:09:40.882Z',
      updatedAt: '2023-05-25T08:09:40.882Z',
    },
    {
      title: 'sample 2222',
      link: 'http:///',
      members: ['admin4@gmail.com', 'student1@gmail.com'],
      start: '2023-07-27T08:08:00.000Z',
      type: 'event',
      filters: [],
      createdByName: 'Jayant',
      createdByEmail: 'jrohila55@gmail.com',
      createdAt: '2023-05-25T08:09:40.882Z',
      updatedAt: '2023-05-25T08:09:40.882Z',
    },
  ]
  const [currentEvents, setCurrentEvents] = useState([])

  function renderEventContent(eventInfo) {
    return (
      <>
        <div
          className={
            eventInfo.event?._def?.extendedProps?.type === 'meeting'
              ? 'bg-blue-600 rounded-md px-[3px] cursor-pointer'
              : 'bg-green-600 rounded-md px-[3px] cursor-pointer'
          }
        >
          <b>{eventInfo.timeText} </b>
          <i>{eventInfo.event.title}</i>
        </div>
      </>
    )
  }

  const handlePreview = (rowData) => {
    setModalData(rowData.event)
    setModalOpen(!modalOpen)
  }

  useEffect(() => {
    refetch()
  }, [month])

  console.log(data?.data)
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
        initialEvents={[]}
        events={currentEvents}
        eventContent={renderEventContent}
        eventClick={(clickInfo) => handlePreview(clickInfo)}
        datesSet={(arg) => setMonth(arg.view.currentEnd.toISOString().slice(0, 7))}
        height={'100vh'}
      />
    </div>
  )
}

export default Calendar
