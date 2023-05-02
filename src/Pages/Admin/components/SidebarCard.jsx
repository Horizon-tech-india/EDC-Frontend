import React from 'react'

const SidebarCard = ({ children, title }) => {
  return (
    <div className="flex flex-col  max-w-xs mx-auto h-full bg-gray-50 p-2  justify-between items-center w-full  rounded-md">
      <h2 className="font-bold capitalize">{title}</h2>
      {children}
      <button className="sidebar-right__card-button pb-2">View all</button>
    </div>
  )
}

export default SidebarCard
