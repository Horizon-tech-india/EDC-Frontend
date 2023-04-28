import React, { useContext, useEffect, useState } from 'react'
import SidebarRight from './components/SidebarRight'
import AdminApplicationSection from './components/AdminApplicationSection'
import { AuthContext } from '../../context/AuthContext'

import Spinner from '../../components/Layout/Spinner'

const ROLES = {
  ADMIN: 'admin',
  MASTER_ADMIN: 'master admin',
  STUDENT: 'student',
}

const Dashboard = () => {
  const { state } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // simulate an API call to check state's role
    setTimeout(() => {
      setIsLoading(false)
      if (state.role !== ROLES.ADMIN && state.role !== ROLES.MASTER_ADMIN) {
        window.location.href = '/'
      }
    }, 2000)
  }, [history, state])

  return (
    <>
      {isLoading ? (
        <div className="h-screen w-screen flex justify-center items-center z-50">
          <Spinner />
        </div>
      ) : state.role === ROLES.ADMIN || state.role === ROLES.MASTER_ADMIN ? (
        <div>
          <SidebarRight />
          <AdminApplicationSection />
        </div>
      ) : (
        <div style={{ color: 'red', fontSize: '24px' }}>Access denied.</div>
      )}
    </>
  )
}

export default Dashboard
