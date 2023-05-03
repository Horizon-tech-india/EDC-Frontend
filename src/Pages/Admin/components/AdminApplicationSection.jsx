import React from 'react'
import { useState, useEffect } from 'react'
import '../../../styles/adminApplication.css'
import SearchBar from './SearchBar'
import Last30Days from './Last30Days'
import StartupsDetailsSection from './StartupsDetailsSection'
import AdminAddSection from './AdminAddSection'
import MeetingAddSection from './MeetingAddSection'
import EventAddSection from './EventAddSection'
import SidebarRight from './SidebarRight'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

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
            <Box sx={{ textAlign: 'center', mt: 5 }}>
              <Button variant="contained" onClick={handleOpen} className="add-admin-btn">
                ADD ADMIN
              </Button>
            </Box>
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
          <MeetingAddSection />
        ) : page === 'events' ? (
          <EventAddSection />
        ) : (
          <AdminAddSection open={open} handleOpen={handleOpen} handleClose={handleClose} />
        )}
      </section>
    </div>
  )
}

export default AdminApplicationSection
