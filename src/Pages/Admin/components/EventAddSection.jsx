import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import EventManageTable from './EventManageTable'
import { GetAllEvent, CreateNewEvent } from '../../../Api/adminEvent'
import Spinner from '../../../components/Layout/Spinner'

const EventAddSection = () => {
  const { state } = useContext(AuthContext)
  const [tableData, setTableData] = useState(null)
  const [loading, setLoading] = useState(false)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  // const getAllEvent = async () => {
  //   const token = state.token
  //   try {
  //     setLoading(true)
  //     const res = await GetAllEvent({ token })
  //     if (res.status === 200) {
  //       setTableData(res.data.events)
  //       //handleClose()
  //     }
  //   } catch (error) {
  //     console.error(error.message)
  //   }
  //   setLoading(false)
  // }


  // useEffect(() => {
  //   getAllEvent()
  // }, [])
const getAllEvent = ()=>{}
  const { isLoading, error, data } = GetAllEvent(state.token)
console.log(data?.data)
  return (
    <div>
      <div className="all-applications-wrapper">
        <div className="all-applications-body">
          {isLoading ? (
            <Spinner />
          ) : data ? (
            <EventManageTable data={data?.data?.events} refetch={getAllEvent} />
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EventAddSection
