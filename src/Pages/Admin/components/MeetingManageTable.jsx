import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import MaterialReactTable from 'material-react-table'
import { Alert, Box, IconButton, Snackbar, Typography } from '@mui/material'
import { ExportToCsv } from 'export-to-csv' //or use your library of choice here
import { DeleteAdmin } from '../../../Api/deleteAdmin' //or use your library of choice here
import MeetingAddModal from './MeetingAddModal'

const MeetingManageTable = ({ data, refetch }) => {
  const { state } = useContext(AuthContext)
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
      size: 150,
    },
    {
      accessorFn: (row) => {
        const date = new Date(row.dateAndTime)
        return date.toLocaleDateString('en-US', {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      },
      header: 'Date',
      Cell: ({ cell }) => (
        <Box component="span" className="capitalize">
          <span className="font-light text-black"> {cell.getValue()}</span>
        </Box>
      ),
      size: 150,
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
    {
      accessorKey: 'members',
      header: 'Members',
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
      <MeetingAddModal isOpen={isOpen} refetch={refetch} onClose={toggleOpen} />
      <MaterialReactTable
        data={data}
        columns={columns}
        enableStickyHeader
        enableStickyFooter
        enableRowSelection
        enableMultiRowSelection={true}
        positionToolbarAlertBanner="bottom"
        initialState={{ density: 'compact' }}
        muiTableContainerProps={{ sx: { height: '45vh' } }}
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
        renderTopToolbarCustomActions={({ table }) => (
          <Box sx={{ display: 'flex', gap: '0.1rem', p: '0.5rem', flexWrap: 'wrap' }}>
            <button className={btnStyl} onClick={handleExportData}>
              Export All Data
            </button>
            <button
              className={btnStyl}
              disabled={table.getPrePaginationRowModel().rows.length === 0}
              //export all rows, including from the next page, (still respects filtering and sorting)
              onClick={() => handleExportRows(table.getPrePaginationRowModel().rows)}
            >
              Export All Rows
            </button>
            <button
              className={btnStyl}
              disabled={table.getRowModel().rows.length === 0}
              //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
              onClick={() => handleExportRows(table.getRowModel().rows)}
            >
              Export Page Rows
            </button>
            <button
              className={btnStyl}
              disabled={!table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()}
              onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
            >
              Export Selected Rows
            </button>
            <button className={btnStyl} onClick={() => toggleOpen()}>
              Add New Meeting
            </button>
          </Box>
        )}
        muiTablePaperProps={{
          elevation: 0, //change the mui box shadow
          //customize paper styles
          sx: {
            borderRadius: '12px',
            border: '0px',
          },
        }}
        renderDetailPanel={({ row }) => (
          <Box className="grid grid-cols-4 bg-gray-50 p-2 rounded-md shadow  bg gap-1 w-auto">
            {Object.entries(row.original).map(([key, value]) => (
              <Typography key={key} className="text-sm">
                <span className={liStyl}>{key}:</span>
                <span className="text-sm  ">{value || 'N/A'}</span>
              </Typography>
            ))}
          </Box>
        )}
      />
    </>
  )
}

export default MeetingManageTable
