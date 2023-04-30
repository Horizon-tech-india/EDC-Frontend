import React from 'react'
import searchIcon from '../../../assets/search-normal.svg'

const SearchBar = ({ query, setQuery }) => {
  return (
    <section className='h-20 w-full  flex justify-center items-center p-2'>
      <div className="search-bar">
        <div className="search-wrapper">
          <img src={searchIcon} className="search-icon" />
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
    </section>
  )
}

export default SearchBar
