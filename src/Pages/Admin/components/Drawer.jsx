import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import AdminLogo from '../../../assets/icons/svg/AdminLogo.svg'
import category from '../../../assets/icons/svg/category.svg'
import gallery from '../../../assets/icons/svg/gallery.svg'
import logoutIcon from '../../../assets/icons/svg/logout.svg'
import profile from '../../../assets/icons/svg/profile.svg'
import notification from '../../../assets/icons/svg/notification.svg'
import avatar from '../../../assets/icons/svg/avatar.svg'
import receipt from '../../../assets/icons/svg/receipt-2.svg'
import setting from '../../../assets/icons/svg/setting-2.svg'
import calendar from '../../../assets/icons/svg/calendar.svg'
// import '../styles/drawer.css'
import DateTime from './DateTime'
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
const Drawer = () => {
  const navigate = useNavigate()
  const { logout } = useContext(AuthContext)
  const { pathname } = useLocation()
  const Styles = {
    li: 'flex flex-row justify-start px-2 rounded-md my-1 py-2 hover:bg-gray-100  items-start w-full',
    liActive: 'flex flex-row bg-[#b4cd93] my-1 py-2  rounded-md justify-start px-2 items-start w-full',
    btn: 'flex flex-row',
  }
  //console.log(pathname)
  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <div className="h-screen max-w-xs flex flex-col justify-between w-full bg-[#e5e5e5]">
      <div className="p-2 h-40 flex flex-col justify-between items-center w-full">
        <img src={AdminLogo} alt="" />
        <div className="w-60">
          <UserProfile />
        </div>
      </div>
      <div>
        <ul className="h-full p-2 grid grid-cols-1 w-full">
          <NavLink className={Styles.btn} to="/admin/dashboard">
            <li className={pathname === '/admin/dashboard' ? Styles.liActive : Styles.li}>
              <img src={category} alt="" />
              <span className="ml-4">Dashboard</span>
            </li>
          </NavLink>
          <NavLink className={Styles.btn} to="/admin/meetings">
            <li className={pathname === '/admin/meetings' ? Styles.liActive : Styles.li}>
              <img src={gallery} alt="" />
              <span className="ml-4">Meeting</span>
            </li>
          </NavLink>
          <NavLink className={Styles.btn} to="/admin/events">
            <li className={pathname === '/admin/events' ? Styles.liActive : Styles.li}>
              <img src={receipt} alt="" />
              <span className="ml-4">Schedule Events</span>
            </li>
          </NavLink>
          <NavLink className={Styles.btn} to="/admin/manage-coordinators">
            <li className={pathname === '/admin/manage-coordinators' ? Styles.liActive : Styles.li}>
              <img src={profile} alt="" />
              <span className="ml-4">Manage Coordinators</span>
            </li>
          </NavLink>
          <NavLink className={Styles.btn} to="/admin/calendar">
            <li className={pathname === '/admin/calendar' ? Styles.liActive : Styles.li}>
              <img src={calendar} alt="" />
              <span className="ml-4">Calendar</span>
            </li>
          </NavLink>
          <NavLink className={Styles.btn} to="/admin/dashboard">
            <li className={Styles.li}>
              <img src={setting} alt="" />
              <span className="ml-4">Settings</span>
            </li>
          </NavLink>
          <li className={Styles.li}>
            <button className={Styles.btn} onClick={handleLogout}>
              <img src={logoutIcon} alt="" />
              <span className="ml-4">Logout</span>
            </button>
          </li>
        </ul>
      </div>
      <DateTime />
    </div>
  )
}

export default Drawer
