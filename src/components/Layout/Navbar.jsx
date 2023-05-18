import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/UI/parul-logo.svg'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
const Navigation = () => {
  const { state, logout, isLoading } = useContext(AuthContext)
  const location = useLocation()
  const activePage = location.pathname
  const [open, setOpen] =useState(false)
  const styles = {
    header: 'fixed z-50 h-[88px] px-5 w-full bg-[#101524] flex flex-row items-center justify-between',
    class: 'hover:text-white pb-2 text-gray-400 transition duration-200 mr-0',
    activeClass: 'hover:text-white border-b-4 pb-2 text-white transition duration-200',
    button:
      'hover:text-white bg-blue-500 px-5 py-2 rounded-md hover:bg-blue-700 transition duration-200 text-white transition duration-200',
  }
  const handleLogout = async () => {
    await logout()
  }
  return (
    // <nav className={styles.header}>
    //   <img className="h-[53px] p-1 w-[251px]" src={logo} alt="" />

    //   <div className='lg:hidden md:hidden xl:hidden '>
    //   <MenuIcon  onClick={()=>console.log("sdfsjdh")}/>
    //   </div>
    //   <ul className="text-white w-auto h-[53px] lg:flex lg:flex-row md:flex items-center gap-5 sm:hidden">
    //     <li className="">
          // <NavLink to="/" className={activePage === '/' ? styles.activeClass : styles.class}>
          //   Home
          // </NavLink>
    //     </li>
    //     <li className="">
          // <NavLink to="/application" className={activePage === '/application' ? styles.activeClass : styles.class}>
          //   Apply Now
          // </NavLink>
    //     </li>

    //     {!state.isAuthenticated ? (
    //       <></>
    //     ) : (
    //       <>
    //         <li className="">
    //           <NavLink to="/document" className={activePage === '/document' ? styles.activeClass : styles.class}>
    //             Document
    //           </NavLink>
    //         </li>
    //         <li className="">
    //           <NavLink to="/dashboard" className={activePage === '/dashboard' ? styles.activeClass : styles.class}>
    //             Dashboard
    //           </NavLink>
    //         </li>
    //         <li className="">
    //           <NavLink to="/report" className={activePage === '/report' ? styles.activeClass : styles.class}>
    //             Report
    //           </NavLink>
    //         </li>
    //       </>
    //     )}

    //     <li className="">
    //       {isLoading ? (
    //         <button className={styles.button}>Loading...</button>
    //       ) : (
    //         <>
    //           {state.isAuthenticated !== true ? (
    //             <Link to="/login">
    //               <button className={styles.button}>Login</button>
    //             </Link>
    //           ) : (
    //             <button onClick={handleLogout} className={styles.button}>
    //               Logout
    //             </button>
    //           )}
    //         </>
    //       )}
    //     </li>
    //   </ul>
    // </nav>

    // <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //     <a href="#" className="flex items-center">
    //       <img className="h-[53px] p-1 w-[251px]" src={logo} alt="" />

    //     </a>
    //     <button data-collapse-toggle="navbar-dropdown" onClick={()=>{setOpen(!open); console.log("dfg",open)}} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
    //       <span className="sr-only">Open main menu</span>
    //       <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    //     </button>
    //     <div className={` ${open ? 'md:block' :'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
    //       <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //         <li className='mt-3'>
            
    //           <NavLink to="/" className={activePage === '/' ? styles.activeClass : styles.class}>
    //             Home
    //           </NavLink>
            
    //         </li>
    //         <li className='mt-3'>
    //           <NavLink to="/application" className={activePage === '/application' ? styles.activeClass : styles.class}>
    //             Apply Now
    //           </NavLink>
    //         </li>
    //         {!state.isAuthenticated ? (
    //           <></>
    //         ) : (
    //           <>
                // <li className='mt-3'>
                //   <NavLink to="/document" className={activePage === '/document' ? styles.activeClass : styles.class}>
                //     Document
                //   </NavLink>
                // </li>
                // <li className='mt-2'>
                //   <NavLink to="/dashboard" className={activePage === '/dashboard' ? styles.activeClass : styles.class}>
                //     Dashboard
                //   </NavLink>
                // </li>
                // <li className='mt-2'>
                //   <NavLink to="/report" className={activePage === '/report' ? styles.activeClass : styles.class}>
                //     Report
                //   </NavLink>
                // </li>
    //           </>
    //         )}

            // <li className='mt-2'>
            //   {isLoading ? (
            //     <button className={styles.button}>Loading...</button>
            //   ) : (
            //     <>
            //       {state.isAuthenticated !== true ? (
            //         <Link to="/login">
            //           <button className={styles.button}>Login</button>
            //         </Link>
            //       ) : (
            //         <button onClick={handleLogout} className={styles.button}>
            //           Logout
            //         </button>
            //       )}
            //     </>
            //   )}
            // </li>

    //       </ul>
    //     </div>
    //   </div>
    // </nav>






    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    
        <div class=" flex flex-wrap items-center justify-between mx-auto p-4">
         
           
            <img className="h-[53px] p-1 w-[251px]" src={logo} alt="" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
         
            </span>
          
          <div class="flex md:order-2">
            
            <button
              data-collapse-toggle="navbar-sticky"
              onClick={() => setOpen(!open)}
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class={`items-center justify-between ${
              open ? "block " : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className='mt-3'>
                {/* <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a> */}
                <NavLink to="/" className={activePage === '/' ? styles.activeClass : styles.class}>
            Home
          </NavLink>
              </li>
              <li className='mt-3'>
                {/* <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a> */}
                <NavLink to="/application" className={activePage === '/application' ? styles.activeClass : styles.class}>
            Apply Now
          </NavLink>
              </li>
              {!state.isAuthenticated ? (
                <></>
              ):(
              <>
              <li className='mt-3'>
                  <NavLink to="/document" className={activePage === '/document' ? styles.activeClass : styles.class}>
                    Document
                  </NavLink>
                </li>
                <li className='mt-3'>
                  <NavLink to="/dashboard" className={activePage === '/dashboard' ? styles.activeClass : styles.class}>
                    Dashboard
                  </NavLink>
                </li>
                <li className='mt-3'>
                  <NavLink to="/report" className={activePage === '/report' ? styles.activeClass : styles.class}>
                    Report
                  </NavLink>
                </li>
              </>
              )}
              <li className='mt-2'>
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
          </div>
        </div>
      </nav> 



  )
}

export default Navigation
