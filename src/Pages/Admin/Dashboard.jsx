import React from 'react'
import SidebarRight from './components/SidebarRight'
import AdminApplicationSection from './components/AdminApplicationSection'
import "./styles/dashboard.css";

const Dashboard = ({ page }) => {
  return (
    <div className="admin-container">
      <AdminApplicationSection page={page} />
      <SidebarRight/>
    </div>
  )
}

export default Dashboard
