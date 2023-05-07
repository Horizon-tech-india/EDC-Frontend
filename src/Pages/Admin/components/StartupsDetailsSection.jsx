import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import StartupsTable from './StartupsTable'
import { GetAllStartup } from '../../../Api/Post'
import { Spinner } from 'react-bootstrap'

export const StartupsDetailsSection = () => {
  const { state } = useContext(AuthContext)

  const { data, isError, isLoading, refetch} = GetAllStartup(state.token)
  const fetchData = () => {}

  useEffect(() => {
    fetchData()
  }, []) // Fetch data on component mount

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 w-full h-full grid-rows-1">
          {data && data.data && <StartupsTable data={data?.data?.data} refetch={refetch} />}
          {isError && isError}
        </div>
      )}
    </>
  )
}

export default StartupsDetailsSection
