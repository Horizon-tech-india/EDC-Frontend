import React from 'react'

const SidebarCard = ({ children, title }) => {
  return (
    <div className="sidebar-right__card">
      <h2 className="sidebar-right__card-title">{title}</h2>
      {children}
      <button className="sidebar-right__card-button">View all</button>
    </div>
  )
}

export default SidebarCard
