import PropTypes from 'prop-types'
import searchIcon from '../../../assets/search-normal.svg'
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { API } from '../../../Api/Post'

function SearchBar( ) {
  const [allStartups, setAllStartups] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [inputValue, setInputValue] = useState('')
  const { state } = useContext(AuthContext)

  useEffect(() => {
    API('get', '/admin/all-startup-details', {}, state.token)
      .then((data) => console.log(data))
      .then((data) => setAllStartups(data))
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    if (Array.isArray(allStartups)) {
      const filtered = allStartups.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()))
      setFilteredData(filtered)
    }
  }, [allStartups, inputValue])

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div className="search-bar w-full">
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
        // className="fixed h-40 w-full max-w-2xl top-20 z-50 p-5 bg-gray-100 shadow-2xl rounded-md"
        id="filter-results"
      >
        {filteredData.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  )
}

export default SearchBar
