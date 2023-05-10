import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import StartupsTable from './StartupsTable'
import { GetAllStartup } from '../../../Api/Post'
import { Spinner } from 'react-bootstrap'

export const StartupsDetailsSection = () => {
  const { state } = useContext(AuthContext)
  const { data, isLoading, refetch } = GetAllStartup(state.token)

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : data ? (
        <StartupsTable data={data?.data?.data} refetch={refetch} />
      ) : (
        <div>No data found</div>
      )}
    </>
  )
}

export default StartupsDetailsSection
