import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import MaterialReactTable from 'material-react-table'
import { Alert, Box, IconButton, Snackbar, Typography } from '@mui/material'
import EventAddModal from './EventAddModal'
import ModalEventMeeting from './ModalEventMeeting'

import { Preview as PreviewIcon } from '@mui/icons-material'

const CalendarTable = ({ data, refetch }) => {
  const [open, setOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
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
      size: 100,
    },
    {
      accessorFn: (row) => {
        const date2 = new Date(row.dateAndTime)
        return date2.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })
      },
      header: 'Time',
      Cell: ({ cell }) => (
        <Box component="span" className="capitalize">
          <span className="font-light text-black"> {cell.getValue()}</span>
        </Box>
      ),
      size: 100,
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
    //console.log(rowData)
    setModalData(rowData)
    setModalOpen(!modalOpen)
  }

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
        data={data}
        columns={columns}
        enableStickyHeader
        enableStickyFooter
        positionActionsColumn="last"
        positionToolbarAlertBanner="bottom"
        initialState={{ density: 'compact' }}
        muiTableContainerProps={{ sx: { height: '90vh' } }}
        enableRowActions
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
            <button
              className="bg-[#b4cd93] ml-2   font-light h-6 w-10 rounded-md hover:bg-[#6b9239]"
              onClick={() => handlePreview(row.original)}
            >
              View
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

export default CalendarTable
