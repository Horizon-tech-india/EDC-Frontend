import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import MaterialReactTable from 'material-react-table'
import { Alert, Box, IconButton, Snackbar, Typography } from '@mui/material'
import { ExportToCsv } from 'export-to-csv' //or use your library of choice here
import { DeleteAdmin } from '../../../Api/deleteAdmin' //or use your library of choice here
import EventAddModal from './EventAddModal'

const CalendarTable = ({ refetch }) => {
  const { state } = useContext(AuthContext)
  const [openMsg, setOpenMsg] = useState('')
  const [open, setOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const btnStyl = 'bg-[#b4cd93] mx-1 disabled:hidden  hover:bg-[#5c664f] hover:text-white  px-2 py-1 rounded-md'
  const liStyl = 'font-bold px-0.5 capitalize text-xs text-[#b4cd93]'

  const data = [
    {
      title: 'Event 1',
      link: 'https://www.example.com',
      members: [
        'aspp775@gmail.com',
        'guptashrestha7@gmail.com',
        'xeyeham833@larland.com',
        'the.shubham045@gmail.com',
        'haxon98536@jobbrett.com',
      ],
      dateAndTime: '2023-05-21T13:06:00.000Z',
      type: 'event',
      filters: [
        {
          branch: 'PA',
        },
        {
          title: 'test..',
        },
      ],
      createdAt: '2023-05-04T13:03:03.137Z',
      updatedAt: '2023-05-04T13:03:03.137Z',
    },
    {
      title: 'Event 2',
      link: 'https://www.example.com',
      members: [
        'aspp775@gmail.com',
        'guptashrestha7@gmail.com',
        'xeyeham833@larland.com',
        'the.shubham045@gmail.com',
        'haxon98536@jobbrett.com',
      ],
      dateAndTime: '2023-05-12T13:09:00.000Z',
      type: 'event',
      filters: [
        {
          branch: 'PA',
        },
        {
          title: 'test..',
        },
      ],
      createdAt: '2023-05-04T13:08:04.105Z',
      updatedAt: '2023-05-04T13:08:04.105Z',
    },
  ]

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
      header: 'Meeting Link',
      Cell: ({ cell }) => (
        <Box component="span" className="capitalize">
          <span className="font-light text-black"> {cell.getValue()}</span>
        </Box>
      ),
      size: 100,
    },
  ]
  const csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: false,
    headers: columns.map((c) => c.header),
  }
  const csvExporter = new ExportToCsv(csvOptions)
  // console.table(data)
  const handleExportRows = (rows) => {
    csvExporter.generateCsv(rows.map((row) => row.original))
  }
  const handleExportData = () => {
    csvExporter.generateCsv(data)
  }
  const handleRefresh = () => {
    refetch()
  }

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
        muiTableContainerProps={{ sx: { height: '35vh' } }}
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
          elevation: 0, //change the mui box shadow
          //customize paper styles
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
