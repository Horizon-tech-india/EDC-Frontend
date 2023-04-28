import React from 'react'
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
    <ul className="sidebar-right__card-list">
      {upcomingMeetingData.map((meeting, index) => {
        return (
          <li key={meeting.name + index} className="sidebar-right__card-item">
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

const FiltersList = () => {
  const filtersData = [
    'EDTech',
    'FinTech',
    'Cloth',
    'Ser',
    'Marketplace',
    'D2C',
    'B2B',
    'SofTech',
    'HealthCare',
  ]

  return (
    <ul className="sidebar-right__card-list sidebar-right__card-list--flex-wrap">
      {filtersData.map((filter) => {
        return (
          <li key={filter} className="sidebar-right__card-item">
            <button>{filter}</button>
          </li>
        )
      })}
    </ul>
  )
}

const SidebarRight = () => {
  return (
    <div className="sidebar-right">
      <section className="user-profile">
        <img className="user-profile__avatar" src={avatar} alt="avatar" />
        <div className="user-profile__info">
          <p className="user-profile__info-name">Admin Name</p>
          <p className="user-profile__info-type">Admin</p>
        </div>
        <button className="user-profile__notification">
          <img
            className="user-profile__notification-image"
            src={notification}
            alt="notification"
          />
        </button>
      </section>
      <SidebarCard title="Upcoming Scheduled meeting">
        <UpcomingMeetingList />
      </SidebarCard>
      <SidebarCard title="Quick Filters">
        <FiltersList />
      </SidebarCard>
      <DateTime />
    </div>
  )
}

export default SidebarRight
