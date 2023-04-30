import React from 'react'

const SidebarCard = ({ children, title }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-xs bg-gray-50 rounded-md p-2">
      <h2 className="sidebar-right__card-title">{title}</h2>
      {children}
      <button className="sidebar-right__card-button">View all</button>
    </div>
  )
}

export default SidebarCard
