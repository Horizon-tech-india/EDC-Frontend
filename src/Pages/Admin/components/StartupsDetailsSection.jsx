import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import StartupsTable from './StartupsTable'
import { API } from '../../../Api/Post'
export const StartupsDetailsSection = () => {
  const { state } = useContext(AuthContext)
  const [query, setQuery] = useState('')
  const [tabledata, setTabledata] = useState([])
  const search = (companies) => {
    return companies.filter((item) => item.name.toLowerCase().includes(query))
  }
  useEffect(() => {
    API('get', '/admin/all-startup-details', {}, state.token)
      .then((res) => {
        setTabledata(res.data.data)
        console.log(res.data.message)
      })
      .catch((error) => {
        console.error(error.message)
      })
  }, [])
  return (
    <>
      <div className="grid grid-cols-1 w-full h-full grid-rows-1">
        <StartupsTable data={search(tabledata)} />
      </div>
    </>
  )
}

export default StartupsDetailsSection
