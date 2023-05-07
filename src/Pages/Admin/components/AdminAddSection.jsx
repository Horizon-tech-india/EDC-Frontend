import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import AdminAddForm from './AdminAddForm'
import AdminManageTable from './AdminManageTable'
import Spinner from '../../../components/Layout/Spinner'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { CreateNewAdmin, DeleteAdmin, GetAllAdmin } from '../../../Api/Post'

const AdminAddSection = () => {
  const { state } = useContext(AuthContext)
  const [tableData, setTableData] = useState(null)

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

  const handleDelete = async (email) => {
    const token = state.token
    try {
      const res = await DeleteAdmin({ email, token })
      if (res.status === 200) {
        const filteredData = tableData.filter((admin) => admin.email !== email)
        setTableData(filteredData)
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  const submitAdminData = async (body) => {
    const token = state.token
    try {
      const res = await CreateNewAdmin({ body, token })
      if (res.status === 200) {
        setTableData([...tableData, body])
        //handleClose()
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  // const getAllAdmin = async () => {
  //   const token = state.token
  //   try {
  //     const res = await GetAllAdmin({ token })
  //     if (res.status === 200) {
  //       setTableData(res.data.data)
  //       //handleClose()
  //     }
  //   } catch (error) {
  //     console.error(error.message)
  //   }
  // }

  // useEffect(() => {
  //   // getAllAdmin()
  // }, [])
  
  const { data, isError, isLoading, refetch} = GetAllAdmin(state.token)
console.log(data)
  return (
    <div>
      <div className="all-applications-wrapper">
        <div className="all-applications-body">
          {data ? <AdminManageTable data={data?.data?.data} refetch={refetch} /> : <Spinner />}
        </div>
      </div>
    </div>
  )
}

export default AdminAddSection
