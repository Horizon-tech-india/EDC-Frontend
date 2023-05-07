import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import MeetingManageTable from './MeetingManageTable'
import Spinner from '../../../components/Layout/Spinner'
import { GetAllEvent } from '../../../Api/Post'

const MeetingAddSection = () => {
  const { state } = useContext(AuthContext)

const {data,isLoading ,error, refetch} = GetAllEvent(state.token)
  return (
    <div>
      <div className="all-applications-wrapper">
        <div className="all-applications-body">
          {isLoading ? (
            <Spinner />
          ) : data ? (
            <MeetingManageTable data={data?.data?.meetings} refetch={refetch} />
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MeetingAddSection
