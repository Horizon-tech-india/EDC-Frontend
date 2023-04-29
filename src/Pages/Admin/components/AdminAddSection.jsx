import React, { useState, useEffect } from 'react'
import searchIcon from '../../../assets/search-normal.svg'
import FilterStartupsButton from './FilterStartupsButton'
import AdminDetailsTable from './AdminDetailsTable'
import AdminAddForm from './AdminAddForm'

const AdminAddSection = () => {
  const initialData = [
    {
      firstName: 'sam',
      lastName: 'sss',
      email: 'sam@gmail.com',
      phoneNumber: '5563278335',
      password: 'sam@123',
      branch: 'RSS',
    },
    {
      firstName: 'anjal',
      lastName: 'sss',
      email: 'anjal@gmail.com',
      phoneNumber: '5563278335',
      password: 'anjal@123',
      branch: 'AHSS',
    },
    {
      firstName: 'ram',
      lastName: 'sss',
      email: 'ram@gmail.com',
      phoneNumber: '5563278335',
      password: 'ram@123',
      branch: 'Surat Branch',
    },
    {
      firstName: 'nikhil',
      lastName: 'sss',
      email: 'nikhil@gmail.com',
      phoneNumber: '5563278335',
      password: 'nikhil@123',
      branch: 'VSS',
    },
    {
      firstName: 'parul',
      lastName: 'sss',
      email: 'parul@gmail.com',
      phoneNumber: '5563278335',
      password: 'parul@123',
      branch: 'RSS',
    },
  ]
  const [data, setData] = useState(initialData)

  const handleDelete = (email) => {
    const filteredData = data.filter((admin) => admin.email !== email)
    setData(filteredData)
  }

  const [query2, setQuery2] = useState('')

  return (
    <div>
      <AdminAddForm data={data} setData={setData} />
      <div className="all-applications-wrapper">
        <div className="all-applications-header">
          <div className="all-applications-header-left">
            <h2>All Admin</h2>
          </div>
          <div className="all-applications-header-right">
            <div className="all-applications-header-search">
              <div className="search-bar">
                <div className="search-wrapper">
                  <img src={searchIcon} className="search-icon" />
                  <input
                    className="search-input"
                    type="text"
                    placeholder="Search admin"
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
          <AdminDetailsTable
            companies={data}
            data={data}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  )
}

export default AdminAddSection
