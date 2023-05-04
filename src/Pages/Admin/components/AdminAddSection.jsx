import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { GetAllAdmin, CreateNewAdmin, DeleteAdmin } from '../../../Api/manageCoordinators'
import AdminAddForm from './AdminAddForm'
import DataTable from './DataTable'
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

  const columns = [
    {
      accessorFn: (row) => `${row.firstName} ${row.lastName}`,
      header: 'Name',
      Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span>,
      size: 150,
    },
    {
      accessorKey: 'email',
      header: 'Email',
      size: 200,
    },
    {
      accessorKey: 'phoneNumber',
      header: 'Phone no.',
      size: 100,
    },
    {
      accessorKey: 'branch',
      header: 'Branch',
      size: 100,
    },
  ]

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
        handleClose()
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  const getAllAdmin = async () => {
    const token = state.token
    try {
      const res = await GetAllAdmin({ token })
      if (res.status === 200) {
        setTableData(res.data.data)
        handleClose()
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getAllAdmin()
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
          {tableData ? <DataTable data={tableData} columns={columns} handleDelete={handleDelete} /> : <Spinner />}
        </div>
      </div>
    </div>
  )
}

export default AdminAddSection
