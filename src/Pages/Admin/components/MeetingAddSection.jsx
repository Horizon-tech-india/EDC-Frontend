import React, { useState, useEffect } from 'react'
import MeetingAddForm from './MeetingAddForm'
import DataTable from './DataTable'
import Spinner from '../../../components/Layout/Spinner'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

const MeetingAddSection = ({ open, handleClose }) => {
  const initialData = [
    {
      title: 'meet',
      time: '13:15',
      members: 'Raj, rohit, atul',
      link: 'https://www.example1.com',
    },
    {
      title: 'Tuesday meet',
      time: '11:15',
      members: 'Raj, rohit, atul',
      link: 'https://www.example2.com',
    },
    {
      title: 'Important meet',
      time: '11:00',
      members: 'Raj, rohit, atul',
      link: 'https://www.example3.com',
    },
    {
      title: 'Daily meet',
      time: '11:15',
      members: 'Raj, rohit, atul',
      link: 'https://www.example4.com',
    },
    {
      title: 'Daily meet',
      time: '11:15',
      members: 'Raj, rohit, atul',
      link: 'https://www.example5.com',
    },
    {
      title: 'Daily meet',
      time: '11:15',
      members: 'Raj, rohit, atul',
      link: 'https://www.example6.com',
    },
    {
      title: 'Daily meet',
      time: '11:15',
      members: 'Raj, rohit, atul',
      link: 'https://www.example7.com',
    },
    {
      title: 'Daily meet',
      time: '11:15',
      members: 'Raj, rohit, atul',
      link: 'https://www.example8.com',
    },
  ]
  const [data, setData] = useState(initialData)
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

  const handleDelete = () => {}

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MeetingAddForm data={data} setData={setData} />
        </Box>
      </Modal>

      <div className="all-applications-wrapper">
        <div className="all-applications-header">
          <h2>All Meetings</h2>
        </div>

        <div className="all-applications-body">
          {data ? <DataTable data={data} columns={columns} handleDelete={handleDelete} /> : <Spinner />}
        </div>
      </div>
    </div>
  )
}

export default MeetingAddSection
