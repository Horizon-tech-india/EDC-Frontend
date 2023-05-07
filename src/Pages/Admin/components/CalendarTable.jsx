import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import MaterialReactTable from 'material-react-table'
import { Alert, Box, IconButton, Snackbar, Typography } from '@mui/material'
import EventAddModal from './EventAddModal'
import { Preview as PreviewIcon } from '@mui/icons-material'

const CalendarTable = ({ data, refetch }) => {
  const [openMsg, setOpenMsg] = useState('')
  const [open, setOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const btnStyl = 'bg-[#b4cd93] mx-1 disabled:hidden  hover:bg-[#5c664f] hover:text-white  px-2 py-1 rounded-md'
  const liStyl = 'font-bold px-0.5 capitalize text-xs text-[#b4cd93]'

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

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert variant="filled" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {openMsg && openMsg}
        </Alert>
      </Snackbar>
      <EventAddModal isOpen={isOpen} refetch={refetch} onClose={toggleOpen} />
      <MaterialReactTable
        data={data}
        columns={columns}
        enableStickyHeader
        enableStickyFooter
        positionToolbarAlertBanner="bottom"
        initialState={{ density: 'compact' }}
        muiTableContainerProps={{ sx: { height: '90vh' } }}
        enableRowActions
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
            <IconButton color="primary" onClick={() => console.log(row.original)}>
              <PreviewIcon />
            </IconButton>
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
