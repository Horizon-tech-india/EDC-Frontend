import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/UI/parul-logo.svg'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Navigation = () => {
  const { state, logout, isLoading } = useContext(AuthContext)
  const location = useLocation()
  const activePage = location.pathname

  const styles = {
    header: 'fixed z-50 h-[88px] px-5 w-full bg-[#101524] flex flex-row items-center justify-between',
    class: 'hover:text-white pb-2 text-gray-400 transition duration-200',
    activeClass: 'hover:text-white border-b-4 pb-2 text-white transition duration-200',
    button:
      'hover:text-white bg-blue-500 px-5 py-2 rounded-md hover:bg-blue-700 transition duration-200 text-white transition duration-200',
  }
  const handleLogout = async () => {
    await logout()
  }
  return (
    <nav className={styles.header}>
      <img className="h-[53px] p-1 w-[251px]" src={logo} alt="" />
      <ul className="text-white w-auto h-[53px] flex flex-row items-center gap-5">
        <li className="">
          <NavLink to="/" className={activePage === '/' ? styles.activeClass : styles.class}>
            Home
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/application" className={activePage === '/application' ? styles.activeClass : styles.class}>
          Apply Now
          </NavLink>
        </li>

        {!state.isAuthenticated ? (
          <></>
        ) : (
          <>
            <li className="">
              <NavLink to="/document" className={activePage === '/document' ? styles.activeClass : styles.class}>
                Document
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard" className={activePage === '/dashboard' ? styles.activeClass : styles.class}>
                Dashboard
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/report" className={activePage === '/report' ? styles.activeClass : styles.class}>
                Report
              </NavLink>
            </li>
          </>
        )}

        <li className="">
          {isLoading ? (
            <button className={styles.button}>Loading...</button>
          ) : (
            <>
              {state.isAuthenticated !== true ? (
                <Link to="/login">
                  <button className={styles.button}>Login</button>
                </Link>
              ) : (
                <button onClick={handleLogout} className={styles.button}>
                  Logout
                </button>
              )}
            </>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
