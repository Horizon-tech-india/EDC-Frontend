import React from 'react'
import { useState } from 'react'
import '../../../styles/adminApplication.css'
import SearchBar from './SearchBar'
import Last30Days from './Last30Days'
import StartupsDetailsSection from './StartupsDetailsSection'
import AdminAddSection from './AdminAddSection'
import MeetingAddSection from './MeetingAddSection'
import EventAddSection from './EventAddSection'
import SidebarRight from './SidebarRight'

const AdminApplicationSection = ({ page }) => {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className="bg-white flex flex-col justify-start h-screen">
      <div className="h-[35vh] w-full">
        <div className="grid grid-cols-12 w-full p-5">
          <div className="col-span-8">
            <SearchBar query={query} setQuery={setQuery} />
            <Last30Days />
          </div>
          <div className="col-span-4">
            <SidebarRight />
          </div>
        </div>
      </div>
      <section className="h-[65vh] w-full">
        {page === 'dashboard' ? (
          <StartupsDetailsSection />
        ) : page === 'meetings' ? (
          <MeetingAddSection open={open} handleOpen={handleOpen} handleClose={handleClose} />
        ) : page === 'events' ? (
          <EventAddSection />
        ) : (
          <AdminAddSection />
        )}
      </section>
    </div>
  )
}

export default AdminApplicationSection
