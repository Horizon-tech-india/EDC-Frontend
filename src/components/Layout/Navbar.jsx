import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/parul-logo.svg'

const Navigation = ({ loggedIn, setLoggedIn }) => {
  const navigate = useNavigate()
  const activePage = window.location.pathname
  console.log(activePage)

  const handleLogin = () => {
    if (loggedIn) {
      localStorage.removeItem('pu-edc-email')
      localStorage.removeItem('pu-edc-auth-token')
      setLoggedIn(false)
      navigate('/login')
    } else {
      navigate('/login')
    }
  }
  const styles = {
    header:
      'fixed z-50 h-[88px] px-5 w-full bg-[#101524] flex flex-row items-center justify-between',
    class: 'hover:text-white pb-2 text-gray-400 transition duration-200',
    activeClass:
      'hover:text-white border-b-4 pb-2 text-white transition duration-200',
    button:
      'hover:text-white bg-blue-500 px-5 py-2 rounded-md hover:bg-blue-700 transition duration-200 text-white transition duration-200',
  }
  return (
    <nav className={styles.header}>
      <img className="h-[53px] p-1 w-[251px]" src={logo} alt="" />
      <ul className="text-white w-auto h-[53px] flex flex-row items-center gap-5">
        <li className="">
          <NavLink
            to="/"
            className={activePage === '/' ? styles.activeClass : styles.class}
          >
            Home
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/application"
            className={
              activePage === '/application' ? styles.activeClass : styles.class
            }
          >
            Application Status
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/document"
            className={
              activePage === '/document' ? styles.activeClass : styles.class
            }
          >
            Document
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/dashboard"
            className={
              activePage === '/dashboard' ? styles.activeClass : styles.class
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/report"
            className={
              activePage === '/report' ? styles.activeClass : styles.class
            }
          >
            Report
          </NavLink>
        </li>
        <li className="">
          <button onClick={handleLogin} className={styles.button}>
            {loggedIn ? 'Logout' : 'Login'}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
