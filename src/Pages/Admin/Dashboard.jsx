import React from 'react'
import SidebarRight from './components/SidebarRight'
import AdminApplicationSection from './components/AdminApplicationSection'

const Dashboard = () => {
  return (
    <div className="admin-container">
      <AdminApplicationSection />
      <SidebarRight />
    </div>
  )
}

export default Dashboard
