import searchIcon from '../../../assets/search-normal.svg'
import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="search-bar w-full">
      <div className="search-wrapper">
        <img src={searchIcon} alt="searchbar" className="search-icon" />
        <input
          className="search-input  "
          type="text"
          placeholder="Search startups"
          // onChange={props.onChange}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </div>
    </div>
  )
}

export default SearchBar
