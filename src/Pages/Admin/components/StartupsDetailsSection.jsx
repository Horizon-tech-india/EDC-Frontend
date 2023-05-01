import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import searchIcon from '../../../assets/search-normal.svg'
import FilterStartupsButton from './FilterStartupsButton'
import StartupsTable from './StartupsTable'
import { API } from '../../../Api/Post'

export const StartupsDetailsSection = () => {
  const { state } = useContext(AuthContext)

  const [query, setQuery] = useState('')
  const [query2, setQuery2] = useState('')
  const [tabledata, setTabledata] = useState([])

  const search = (companies) => {
    return companies.filter((item) => item.name.toLowerCase().includes(query))
  }

  useEffect(() => {
    API('get', '/admin/all-startup-details', {}, state.token)
      .then((res) => {
        console.log(res.data.data)
        setTabledata(res.data.data)
        console.log('application data', tabledata)
        // setOpen(true)
      })
      .catch((error) => {
        console.error(error.message)
        console.error(error)
        //console.log(error.response)
        // alert(error.response.data.message)
      })
  }, [])

  return (
    <>
      <div className="h-80 w-full">
        <StartupsTable data={search(tabledata)} />
      </div>
    </>
  )
}

export default StartupsDetailsSection
