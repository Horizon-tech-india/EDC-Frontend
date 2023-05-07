import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import MaterialReactTable from 'material-react-table'
import { Alert, Box, IconButton, Snackbar, Typography } from '@mui/material'
import { ExportToCsv } from 'export-to-csv' //or use your library of choice here
// import { DeleteAdmin } from '../../../Api/deleteAdmin' //or use your library of choice here
import AdminAddModal from './AdminAddModal'
import { DeleteAdmin } from '../../../Api/Post'
const AdminManageTable = ({ data, refetch }) => {
  const { state } = useContext(AuthContext)
  const [openMsg, setOpenMsg] = useState('')
  const [open, setOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const btnStyl = 'bg-[#b4cd93] mx-1 disabled:hidden  hover:bg-[#5c664f] hover:text-white  px-2 py-1 rounded-md'
  const liStyl = 'font-bold px-0.5 capitalize text-xs text-[#b4cd93]'
  const columns = [
    {
      accessorFn: (row) => `${row.firstName} ${row.lastName}`,
      header: 'Name',
      Cell: ({ cell }) => (
        <Box component="span" className="capitalize">
          <span className="font-light text-black"> {cell.getValue()}</span>
        </Box>
      ),
      size: 150,
    },
    {
      accessorKey: 'email',
      header: 'Email',
      Cell: ({ cell }) => (
        <Box component="span" className="capitalize">
          <span className="font-light text-black"> {cell.getValue()}</span>
        </Box>
      ),
      size: 200,
    },
    {
      accessorKey: 'phoneNumber',
      header: 'Phone no.',
      Cell: ({ cell }) => (
        <Box component="span" className="capitalize">
          <span className="font-light text-black"> {cell.getValue()}</span>
        </Box>
      ),
      size: 100,
    },
    {
      accessorKey: 'branch',
      header: 'Branch',
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
  const handleClickDelete = async (email) => {
    console.log(`HANDEL DELETE`, email)
    const { token } = state
    try {
      const res = await DeleteAdmin({ email, token })
      if (res.status === 200) {
        setOpenMsg(res.data.message)
        setOpen(true)
        handleRefresh()
      }
    } catch (error) {
      setOpenMsg(error.message)
    }
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
      <AdminAddModal isOpen={isOpen} refetch={refetch} onClose={toggleOpen} />
      <MaterialReactTable
        data={data}
        columns={columns}
        enableStickyHeader
        enableStickyFooter
        enableRowActions
        enableRowSelection
        positionActionsColumn="last"
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
              Add New Admin
            </button>
          </Box>
        )}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
            <IconButton onClick={() => handleClickDelete(row.original.email)}>
              <span className="px-2 py-1 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Delete
              </span>
            </IconButton>
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

export default AdminManageTable
