import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { NavLink, useLocation } from 'react-router-dom'
import AdminLogo from '../../../assets/icons/svg/AdminLogo.svg'
import category from '../../../assets/icons/svg/category.svg'
import gallery from '../../../assets/icons/svg/gallery.svg'
import logoutIcon from '../../../assets/icons/svg/logout.svg'
import profile from '../../../assets/icons/svg/profile.svg'
import receipt from '../../../assets/icons/svg/receipt-2.svg'
import setting from '../../../assets/icons/svg/setting-2.svg'
import '../styles/drawer.css'

const Drawer = () => {
  const { logout } = useContext(AuthContext)
  const { pathname } = useLocation()

  const handleLogout = async () => {
    await logout()
  }
  
  return (
    <div className="drawer__container h-full w-full">
      <div className="drawer__logo">
        <img src={AdminLogo} alt="" />
      </div>
      <div>
        <ul className="drawer__list">
          <li className={pathname === '/admin/dashboard' ? 'drawer__item drawer__item--active' : 'drawer__item'}>
            <NavLink to="/admin/dashboard">
              <img src={category} alt="" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="drawer__item">
            <NavLink to="/admin/dashboard">
              <img src={profile} alt="" />
              <span>Filters</span>
            </NavLink>
          </li>
          <li className={pathname === '/admin/meetings' ? 'drawer__item drawer__item--active' : 'drawer__item'}>
            <NavLink to="/admin/meetings">
              <img src={gallery} alt="" />
              <span>Meeting</span>
            </NavLink>
          </li>
          <li className={pathname === '/admin/events' ? 'drawer__item drawer__item--active' : 'drawer__item'}>
            <NavLink to="/admin/events">
              <img src={receipt} alt="" />
              <span>Schedule Events</span>
            </NavLink>
          </li>
          <li
            className={pathname === '/admin/manage-coordinators' ? 'drawer__item drawer__item--active' : 'drawer__item'}
          >
            <NavLink to="/admin/manage-coordinators">
              <img src={profile} alt="" />
              <span>Manage Coordinators</span>
            </NavLink>
          </li>
          <li className="drawer__item">
            <NavLink to="/admin/dashboard">
              <img src={setting} alt="" />
              <span>Settings</span>
            </NavLink>
          </li>
          <li className="flex flex-row justify-start px-6 items-start">
            <button className="flex flex-row p-2 gap-2" onClick={handleLogout}>
              <img src={logoutIcon} alt="" />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Drawer
