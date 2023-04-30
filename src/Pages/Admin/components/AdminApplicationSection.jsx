import React from 'react'
import { useState, useEffect } from 'react'
import '../../../styles/adminApplication.css'
import SearchBar from './SearchBar'
import Last30Days from './Last30Days'
import StartupsDetailsSection from './StartupsDetailsSection'
import AdminAddSection from './AdminAddSection'
import MeetingAddSection from './MeetingAddSection'
import EventAddSection from './EventAddSection'

const AdminApplicationSection = ({ page }) => {
  const [query, setQuery] = useState('')

  return (
    <div className="bg-white flex flex-col justify-start h-screen">
      <SearchBar query={query} setQuery={setQuery} />
      <Last30Days />
      <section className='h-full w-full p-5'>
        {page === 'dashboard' ? (
          <StartupsDetailsSection />
        ) : page === 'meetings' ? (
          <MeetingAddSection />
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
