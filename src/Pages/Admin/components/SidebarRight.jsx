import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import SidebarCard from './SidebarCard'
import '../styles/sidebarRight.scss'
import avatar from '../../../assets/icons/svg/avatar.svg'
const UpcomingMeetingList = () => {
  const upcomingMeetingData = [
    {
      img: '',
      name: 'Atul Singh',
      meetingTime: '10:30 AM',
      meetingDate: 'Today',
    },
    {
      img: '',
      name: 'Atul Singh',
      meetingTime: '10:30 AM',
      meetingDate: 'Today',
    },
    {
      img: '',
      name: 'Atul Singh',
      meetingTime: '10:30 AM',
      meetingDate: 'Today',
    },
  ]

  return (
    <ul className="grid gap-4 py-4 h-full">
      {upcomingMeetingData.map((meeting, index) => {
        return (
          <li key={meeting.name + index} className="flex flex-row gap-2 ">
            <div className="h-6 w-6">
              <img src={meeting.img || avatar} alt="avatar" />
            </div>
            <p className="text-base font-semibold">{meeting.name}</p>
            <p className="text-base font-semibold">{meeting.meetingTime}</p>
            <p className="text-sm">{meeting.meetingDate}</p>
          </li>
        )
      })}
    </ul>
  )
}

const SidebarRight = () => {
  return (
    <SidebarCard title="Upcoming Scheduled meeting">
      <UpcomingMeetingList />
    </SidebarCard>
  )
}

export default SidebarRight
