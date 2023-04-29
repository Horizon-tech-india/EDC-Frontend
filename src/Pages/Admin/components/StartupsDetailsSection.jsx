import React, { useState, useEffect } from 'react'
import searchIcon from '../../../assets/search-normal.svg'
import FilterStartupsButton from './FilterStartupsButton'
import StartupsTable from './StartupsTable'
import { API } from '../../../Api/Post'

export const StartupsDetailsSection = () => {
  const [query, setQuery] = useState('')
  const [query2, setQuery2] = useState('')
  const [tabledata, setTabledata] = useState([])

  const search = (companies) => {
    return companies.filter((item) => item.name.toLowerCase().includes(query))
  }

  useEffect(() => {
    API(
      'get',
      '/admin/all-startup-details',
    )
      .then((res) => {
        console.log(res.data.data)
        setTabledata(res.data.data)
        console.log('application data', tabledata)
        setOpen(true)
      })
      .catch((error) => {
        console.error(error.message)
        console.error(error)
        console.log(error.response)
        // alert(error.response.data.message)
      })
  },[])

  return (
    <>
      <div className="all-applications-wrapper">
        <div className="all-applications-header">
          <div className="all-applications-header-left">
            <h2>All Applications</h2>
            <p>Approved and Pending Both</p>
          </div>
          <div className="all-applications-header-right">
            <div className="all-applications-header-search">
              <div className="search-bar">
                <div className="search-wrapper">
                  <img src={searchIcon} className="search-icon" />
                  <input
                    className="search-input"
                    type="text"
                    placeholder="Search startups"
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
          <StartupsTable companies={search(tabledata)} />
        </div>
      </div>
    </>
  )
}

export default StartupsDetailsSection
