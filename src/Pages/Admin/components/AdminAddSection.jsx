import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import AdminAddForm from './AdminAddForm'
import AdminManageTable from './AdminManageTable'
import Spinner from '../../../components/Layout/Spinner'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { CreateNewAdmin, DeleteAdmin, GetAllAdmin } from '../../../Api/Post'

const AdminAddSection = () => {
  const { state } = useContext(AuthContext)
  const { data, isLoading, error, refetch } = GetAllAdmin(state.token)
  console.log(data?.data?.data, error)
  return (
    <div>
      <div className="all-applications-wrapper">
        <div className="all-applications-body">
          {isLoading ? <></> : <AdminManageTable data={data?.data?.data} refetch={refetch} />}
        </div>
      </div>
    </div>
  )
}

export default AdminAddSection
