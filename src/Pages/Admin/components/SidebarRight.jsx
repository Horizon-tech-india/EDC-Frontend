import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import SidebarCard from './SidebarCard'
import '../styles/sidebarRight.scss'
import avatar from '../../../assets/icons/svg/avatar.svg'
import { GetAllEvent } from '../../../Api/Post'

const UpcomingMeetingList = () => {
  const { state } = useContext(AuthContext)
  const { data, isLoading, refetch } = GetAllEvent(state.token)
  const upcomingMeetingData = data?.data?.meetings?.slice(0, 3) || []

  const DATE = (val) => {
    const date = new Date(val)
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }
  const TIME = (val) => {
    const date = new Date(val)
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }
  return (
    <ul className="grid gap-4 w-72   py-4 h-full">
      {upcomingMeetingData.map((meeting, index) => {
        return (
          <li key={index} className="flex justify-center flex-row gap-2">
            <div className="flex flex-row w-32 text-left  ">
              <div className="h-6 w-6">
                <img src={meeting.img || avatar} alt="avatar" />
              </div>
              <p className="text-xs font-normal">{meeting.title} </p>
            </div>
            <div className="flex flex-row w-40  text-left ">
              <p className="text-xs font-light">{DATE(meeting.dateAndTime)}</p>
              <p className="text-xs px-0.5 text-[#b4cd93] font-semibold">{TIME(meeting.dateAndTime)}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

const SidebarRight = () => {
  return (
    <SidebarCard title="Upcoming Scheduled meetings">
      <UpcomingMeetingList />
    </SidebarCard>
  )
}

export default SidebarRight
