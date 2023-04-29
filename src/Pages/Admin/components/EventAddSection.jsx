import React, { useState, useEffect } from 'react'
import searchIcon from '../../../assets/search-normal.svg'
import FilterStartupsButton from './FilterStartupsButton'
import MeetingDetailsTable from './MeetingDetailsTable'
import MeetingAddForm from './MeetingAddForm'

const EventAddSection = () => {
  const initialData = [
    {
      title: 'event',
      time: '13:15',
      members: 'Raj, rohit, atul',
      link: 'https://www.example1.com',
    },
    {
      title: 'Tuesday event',
      time: '11:15',
      members: 'Raj, rohit, atul',
      link: 'https://www.example2.com',
    },
    {
      title: 'Important event',
      time: '11:00',
      members: 'Raj, rohit, atul',
      link: 'https://www.example3.com',
    },
    {
      title: 'Daily event',
      time: '11:15',
      members: 'Raj, rohit, atul',
      link: 'https://www.example4.com',
    },
    {
      title: 'Daily event',
      time: '11:15',
      members: 'Raj, rohit, atul',
      link: 'https://www.example5.com',
    },
    {
      title: 'Daily event',
      time: '11:15',
      members: 'Raj, rohit, atul',
      link: 'https://www.example6.com',
    },
    {
      title: 'Daily event',
      time: '11:15',
      members: 'Raj, rohit, atul',
      link: 'https://www.example7.com',
    },
    {
      title: 'Daily event',
      time: '11:15',
      members: 'Raj, rohit, atul',
      link: 'https://www.example8.com',
    },
  ]
  const [data, setData] = useState(initialData)
  const [query2, setQuery2] = useState('')

  return (
    <div>
      <MeetingAddForm data={data} setData={setData} />
      <div className="all-applications-wrapper">
        <div className="all-applications-header">
          <div className="all-applications-header-left">
            <h2>All Evets</h2>
          </div>
          <div className="all-applications-header-right">
            <div className="all-applications-header-search">
              <div className="search-bar">
                <div className="search-wrapper">
                  <img src={searchIcon} className="search-icon" />
                  <input
                    className="search-input"
                    type="text"
                    placeholder="Search events"
                    // onChange={props.onChange}
                    onChange={(e) => setQuery2(e.target.value)}
                    value={query2}
                  />
                </div>
              </div>
            </div>
            <div className="all-applications-header-filter">
              <FilterStartupsButton />
            </div>
          </div>
        </div>

        <div className="all-applications-body">
          <MeetingDetailsTable data={data} />
        </div>
      </div>
    </div>
  )
}

export default EventAddSection
