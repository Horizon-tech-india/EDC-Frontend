import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
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

  const fetchData = () => {
    API('get', '/admin/all-startup-details', {}, state.token)
      .then((res) => {
        //console.log(res.data.data)
        setTabledata(res.data.data)
        //console.log('application data', tabledata)
      })
      .catch((error) => {
        console.error(error.message)
        console.error(error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="grid grid-cols-1 w-full h-full grid-rows-1">
        <StartupsTable data={search(tabledata)} refetch={fetchData} />
      </div>
    </>
  )
}

export default StartupsDetailsSection
