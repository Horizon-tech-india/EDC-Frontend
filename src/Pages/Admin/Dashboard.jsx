import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Spinner from '../../components/Layout/Spinner'

import SidebarRight from './components/SidebarRight'
import AdminApplicationSection from './components/AdminApplicationSection'
import Drawer from './components/Drawer'
import { useNavigate } from 'react-router-dom'

const ROLES = {
  ADMIN: 'admin',
  MASTER_ADMIN: 'master admin',
  STUDENT: 'student',
}
import './styles/dashboard.css'

const Dashboard = ({ page }) => {
  const navigate = useNavigate()

  const { state } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // simulate an API call to check state's role

    setIsLoading(false)
    if (state.role !== ROLES.ADMIN && state.role !== ROLES.MASTER_ADMIN) {
      navigate('/')
    }
  }, [state])

  return (
    <>
      {isLoading ? (
        <div className="h-screen bg-black opacity-40 w-screen flex justify-center items-center z-50">
          <Spinner />
        </div>
      ) : state.role === ROLES.ADMIN || state.role === ROLES.MASTER_ADMIN ? (
        <div>
          <div className="grid justify-center items-stretch w-screen bg-black  grid-cols-12 ">
            <div className='col-span-2'>
              <Drawer />
            </div>
            <div className="col-span-7">
              <AdminApplicationSection page={page} />
            </div>{' '}
            <div className="col-span-3">
              <SidebarRight />
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen w-screen bg-black opacity-40 flex justify-center items-center z-50">
          <Spinner />
        </div>
      )}
    </>
  )
}

export default Dashboard
