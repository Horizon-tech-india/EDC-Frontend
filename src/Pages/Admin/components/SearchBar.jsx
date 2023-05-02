import searchIcon from '../../../assets/search-normal.svg'
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { API } from '../../../Api/Post'

function SearchBar() {
  const [allStartups, setAllStartups] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [open, setOpen] = useState(true)
  const { state } = useContext(AuthContext)

  useEffect(() => {
    API('get', '/admin/all-startup-details', {}, state.token)
      // .then((data) => console.log(`SEARCH BAR FILTER`, data?.data?.data))
      .then((data) => setAllStartups(data?.data?.data))
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    if (Array.isArray(allStartups)) {
      const filtered = allStartups.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()))
      setFilteredData(filtered)
    } else {
      console.log(`not an array`)
    }
  }, [allStartups, inputValue])

  const handleInputChange = (event) => {
    console.log(filteredData)
    setInputValue(event.target.value)
    const value = event.target.value.trim()
    if (value.length > 0) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  return (
    <div className=" search-bar w-full">
      <div className="search-wrapper">
        <img src={searchIcon} alt="searchbar" className="search-icon" />
        <input
          className="search-input  "
          type="text"
          placeholder="Search startups"
          onChange={handleInputChange}
          value={inputValue}
        />
      </div>

      <div
        className={`fixed ${
          open ? 'hidden' : 'block'
        }  h-auto w-full max-w-3xl top-16 z-50 p-2 bg-[#fafafa] border border-gray-200  rounded-md`}
        id="filter-results"
      >
        {filteredData.map((item) => (
          <div
            className="bg-white text-xs capitalize font-light border border-gray-200 p-2 w-full rounded-md my-1"
            key={item.startupId}
          >
            <ul className="grid grid-cols-12">
              <li className='col-span-2'> {item.name}</li>
              <li className='col-span-3'> {item.email}</li>
              <li className='col-span-2'> {item.location}</li>
              <li className='col-span-1'> {item.branch}</li>
              <li className='col-span-2'> {item.startupId}</li>
              <li className='col-span-2'> {item.title}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchBar
