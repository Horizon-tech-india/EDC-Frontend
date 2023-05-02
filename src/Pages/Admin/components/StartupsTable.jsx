import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import MaterialReactTable from 'material-react-table'
import { Box, MenuItem, Snackbar, Typography } from '@mui/material'
import { ExportToCsv } from 'export-to-csv' //or use your library of choice here
import { UpdatePayload } from '../../../Api/updatePayload' //or use your library of choice here
import { Alert } from 'react-bootstrap'

const StartupsTable = ({ data, refetch }) => {
  const { state } = useContext(AuthContext)
  const [openMsg, setOpenMsg] = useState('')
  const [open, setOpen] = useState(false)

  const btnStyl = 'bg-[#b4cd93] mx-1 disabled:hidden  hover:bg-[#5c664f] hover:text-white  px-2 py-1 rounded-md'
  const liStyl = 'font-bold px-0.5 capitalize text-xs text-[#b4cd93]'
  const columns = [
    {
      accessorKey: 'name',
      header: 'Company',
    },

    {
      accessorKey: 'status',
      // filterVariant: 'range', //if not using filter modes feature, use this instead of filterFn
      filterFn: 'between',
      header: 'Status',
      size: 100,
      //custom conditional format and styling
      Cell: ({ cell }) => (
        <Box
          component="span"
          className="capitalize"
          sx={(theme) => ({
            backgroundColor:
              (cell.getValue() === 'verified' && '#b4cd93') ||
              (cell.getValue() === 'rejected' && '#bd2219') ||
              (cell.getValue() === 'pending' && '#1f6feb'),

            borderRadius: '0.25rem',
            color: '#fff',
            maxWidth: '9ch',
            p: '0.35rem',
          })}
        >
          {cell.getValue()}
        </Box>
      ),
    },
    {
      accessorKey: 'changeAmount',
      header: 'Account Status',
    },
    {
      accessorKey: 'branch',
      header: 'Branch',
      size: 100,
    },
    {
      accessorKey: 'valuation',
      header: 'Company Valuation',
      size: 100,
    },
  ]
  // const [isLoading, setIsLoading] = useState(false)

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
  const handleClickPayload = async ({ value, StartupId }) => {
    console.log(value, StartupId)

    const { token } = state
    try {
      const res = await UpdatePayload({ value, StartupId, token })
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
  const statusMenuItems = {
    pending: { label: 'Pending', value: 'pending' },
    verified: { label: 'Verify', value: 'verified' },
    rejected: { label: 'Reject', value: 'rejected' },
  }
  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          variant="filled"
          className="bg-[#b4cd93] p-5 rounded-md"
          onClose={handleClose}
          severity="success"
          sx={{ width: '100%' }}
        >
          {openMsg && openMsg}
        </Alert>
      </Snackbar>
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
              //only export selected rows
              onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
            >
              Export Selected Rows
            </button>
          </Box>
        )}
        renderRowActionMenuItems={({ row }) => {
          const menuItems = Object.values(statusMenuItems)
            .filter((item) => item.value !== row.original.status)
            .map((item) => (
              <MenuItem
                key={item.value}
                onClick={() =>
                  handleClickPayload({
                    value: item.value,
                    StartupId: row.original.startupId,
                  })
                }
              >
                {item.label}
              </MenuItem>
            ))

          return menuItems
        }}
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

export default StartupsTable

// const newRow = {
//   aadhar: row.original.aadhar,
//   branch: row.original.branch,
//   category: row.original.category,
//   categoryOther: row.original.categoryOther,
//   contact: row.original.contact,
//   currentStage: row.original.currentStage,
//   designation: row.original.designation,
//   email: row.original.email,
//   enrollmentNum: row.original.enrollmentNum,
//   institute: row.original.institute,
//   location: row.original.location,
//   name: row.original.name,
//   otherInstitute: row.original.otherInstitute,
//   otherOrganisation: row.original.otherOrganisation,
//   otherUniversity: row.original.otherUniversity,
//   startupId: row.original.startupId,
//   status: row.original.status,
//   teamMembers: row.original.teamMembers,
//   teamSize: row.original.teamSize,
//   title: row.original.title,
//   uniqueFeatures: row.original.uniqueFeatures,
// }
