import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { GetAllMeeting } from '../../../Api/adminMeeting'
import MeetingManageTable from './MeetingManageTable'
import Spinner from '../../../components/Layout/Spinner'

const MeetingAddSection = () => {
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

  const getAllMeeting = async () => {
    const token = state.token
    try {
      setLoading(true)
      const res = await GetAllMeeting({ token })
      if (res.status === 200) {
        setTableData(res.data.meetings)
        //handleClose()
      }
    } catch (error) {
      console.error(error.message)
    }
    setLoading(false)
  }

  useEffect(() => {
    getAllMeeting()
  }, [])

  return (
    <div>
      <div className="all-applications-wrapper">
        <div className="all-applications-body">
          {loading ? (
            <Spinner />
          ) : tableData ? (
            <MeetingManageTable data={tableData} refetch={getAllMeeting} />
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MeetingAddSection
