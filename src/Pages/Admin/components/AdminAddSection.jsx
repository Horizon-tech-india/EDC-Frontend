import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import AdminAddForm from './AdminAddForm'
import DataTable from './DataTable'
import { API } from '../../../Api/Post'
import Spinner from '../../../components/Layout/Spinner'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

const AdminAddSection = ({ open, handleClose }) => {
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

  const handleDelete = (email) => {
    API('get', `admin/delete-admin?email=${email}`, {}, state.token)
      .then((res) => {
        setTableData(res.data.data)
        const filteredData = tableData.filter((admin) => admin.email !== email)
        setTableData(filteredData)
      })
      .catch((error) => {
        console.error(error.message)
      })
  }

  const submitAdminData = (body) => {
    console.log(body, tableData)
    API('post', 'admin/create-admin', body, state.token)
      .then((res) => {
        setTableData([...tableData, body])
        handleClose()
      })
      .catch((error) => {
        console.error(error.message)
      })
  }

  useEffect(() => {
    API('get', 'admin/get-all-admin', {}, state.token)
      .then((res) => {
        setTableData(res.data.data)
      })
      .catch((error) => {
        console.error(error.message)
        console.error(error)
      })
  }, [])

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AdminAddForm data={tableData} setTableData={setTableData} submitAdminData={submitAdminData} />
        </Box>
      </Modal>
      <div className="all-applications-wrapper">
        <div className="all-applications-header">
          <h2>All Admin</h2>
        </div>

        <div className="all-applications-body">
          {tableData ? <DataTable data={tableData} handleDelete={handleDelete} /> : <Spinner />}
        </div>
      </div>
    </div>
  )
}

export default AdminAddSection
