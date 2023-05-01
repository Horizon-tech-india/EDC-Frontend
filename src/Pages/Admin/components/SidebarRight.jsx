import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import SidebarCard from './SidebarCard'
import DateTime from './DateTime'
import '../styles/sidebarRight.scss'
import notification from '../../../assets/icons/svg/notification.svg'
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
    <ul className="grid">
      {upcomingMeetingData.map((meeting, index) => {
        return (
          <li key={meeting.name + index} className="flex flex-row gap-4 my-2">
            <div className="card__avatar">
              <img src={meeting.img || avatar} alt="avatar" />
            </div>
            <p className="card__meeting-name">{meeting.name}</p>
            <p className="card__meeting-time">{meeting.meetingTime}</p>
            <p className="card__meeting-date">{meeting.meetingDate}</p>
          </li>
        )
      })}
    </ul>
  )
}

const UserProfile = () => {
  const { state } = useContext(AuthContext)

  return (
    <section className="flex flex-row justify-center items-center w-full max-w-xs  rounded-md px-2">
      <img className="user-profile__avatar" src={avatar} alt="avatar" />
      <div className="user-profile__info">
        <p className="user-profile__info-name">{state.firstName + ' ' + state?.lastName}</p>
        <p className="user-profile__info-type">{state?.role}</p>
      </div>
      <button className="user-profile__notification">
        <img className="user-profile__notification-image" src={notification} alt="notification" />
      </button>
    </section>
  )
}

// const FiltersList = () => {
//   const filtersData = ['EDTech', 'FinTech', 'Cloth', 'Ser', 'Marketplace', 'D2C', 'B2B', 'SofTech', 'HealthCare']

//   return (
//     <ul className="sidebar-right__card-list sidebar-right__card-list--flex-wrap">
//       {filtersData.map((filter) => {
//         return (
//           <li key={filter} className="sidebar-right__card-item">
//             <button>{filter}</button>
//           </li>
//         )
//       })}
//     </ul>
//   )
// }

const SidebarRight = () => {
  return (
    <div className="bg-white h-screen p-5 flex justify-between flex-col">
      <UserProfile />
      <SidebarCard title="Upcoming Scheduled meeting">
        <UpcomingMeetingList />
      </SidebarCard>
      {/* <SidebarCard title="Quick Filters">
        <FiltersList />
      </SidebarCard> */}
      <DateTime />
    </div>
  )
}

export default SidebarRight
