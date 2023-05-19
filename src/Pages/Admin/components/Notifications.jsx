import React, { useState } from 'react'
import MaterialReactTable from 'material-react-table'
import { Box } from '@mui/material'
import ModalEventMeeting from './ModalEventMeeting'

const Notifications = () => {
  const data = [
    {
      title: 'Event 1',
      members: ['anitin@mailinator.com'],
      dateAndTime: '2023-05-16T04:07:00.000Z',
      type: 'event',
      filters: [],
      createdByName: 'Admin',
      createdByEmail: 'shrikant.nemiwal1@gmail.com',
      description:
        'vewv www gjig ging gingirngig grgnrignring grngorngelrg gnrig lergnrng ernginrig  gerigg rngerig rierngirn',
      createdAt: '2023-05-16T04:07:36.778Z',
      updatedAt: '2023-05-16T04:07:36.778Z',
    },
    {
        "title": "Meet 1",
        "link": "https://www.example.com",
        "members": [],
        "dateAndTime": "2023-05-20T04:08:00.000Z",
        "type": "meeting",
        "filters": [],
        "createdByName": "Admin",
        "createdByEmail": "shrikant.nemiwal1@gmail.com",
        "createdAt": "2023-05-16T04:08:31.249Z",
        "updatedAt": "2023-05-16T04:08:31.249Z"
    }
  ]

  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState(data[0])

  const columns = [
    {
      accessorKey: 'title',
      header: 'Title',
      Cell: ({ cell }) => (
        <Box component="span" className="capitalize">
          <span className="font-light text-black"> {cell.getValue()}</span>
        </Box>
      ),
      size: 100,
    },
    {
      accessorKey: 'type',
      header: 'Type',
      Cell: ({ cell }) => (
        <Box component="span" className="capitalize">
          <span className="font-light text-black"> {cell.getValue()}</span>
        </Box>
      ),
      size: 50,
    },
    {
      accessorFn: (row) => {
        const date = new Date(row.createdAt)
        const date2 = date.toLocaleDateString('en-US', {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
        const time = date.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })
        return time + ' ' + date2
      },
      header: 'Time and Date',
      Cell: ({ cell }) => (
        <Box component="span" className="capitalize">
          <span className="font-light text-black"> {cell.getValue()}</span>
        </Box>
      ),
      size: 50,
    },
    {
      accessorKey: 'link',
      header: 'Link',
      Cell: ({ cell }) => (
        <Box component="span" className="capitalize">
          <span className="font-light text-black"> {cell.getValue()}</span>
        </Box>
      ),
      size: 100,
    },
  ]

  const handlePreview = (rowData) => {
    setModalData(rowData)
    setModalOpen(!modalOpen)
  }

  const handleClear = (rowData) => {}

  return (
    <>
      <ModalEventMeeting
        isOpen={modalOpen}
        data={modalData}
        onClose={() => {
          setModalOpen(!modalOpen)
        }}
      />
      <MaterialReactTable
        // state={{ isLoading: isLoading }}
        data={data}
        columns={columns}
        enableStickyHeader
        enableStickyFooter
        positionActionsColumn="last"
        positionToolbarAlertBanner="bottom"
        initialState={{ density: 'compact' }}
        muiTableContainerProps={{ sx: { height: '75vh' } }}
        enableRowActions
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
            <button
              className="bg-[#b4cd93] ml-2   font-light h-6 w-10 rounded-md hover:bg-[#6b9239]"
              onClick={() => handlePreview(row.original)}
            >
              View
            </button>
            <button
              className="bg-[#b4cd93] ml-2   font-light h-6 w-10 rounded-md hover:bg-[#6b9239]"
              onClick={() => handleClear(row.original)}
            >
              Clear
            </button>
          </Box>
        )}
        muiTableHeadCellProps={{
          sx: {
            fontSize: {
              xs: '8px',
              sm: '11px',
              md: '12px',
              lg: '13px',
              xl: '14px',
            },
          },
        }}
        muiTablePaperProps={{
          elevation: 0,
          sx: {
            borderRadius: '12px',
            border: '0px',
          },
        }}
      />
    </>
  )
}

export default Notifications
