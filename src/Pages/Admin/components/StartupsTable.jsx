import React from 'react'
import MaterialReactTable from 'material-react-table'
import { Box, Button, MenuItem, Typography } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import { ExportToCsv } from 'export-to-csv' //or use your library of choice here

const StartupsTable = ({ data }) => {
  const columns = [
    {
      accessorKey: 'name',
      header: 'Company',
    },
    {
      accessorKey: 'status',
      header: 'Status',
      size: 100,
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

  const btnStyl = 'bg-[#b4cd93] mx-1 hover:bg-[#5c664f] hover:text-white  px-2 py-1 rounded-md'
  const liStyl = 'font-bold px-0.5 capitalize text-xs text-[#b4cd93]'
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
  console.table(data)
  const handleExportRows = (rows) => {
    csvExporter.generateCsv(rows.map((row) => row.original))
  }

  const handleExportData = () => {
    csvExporter.generateCsv(data)
  }

  return (
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
      muiTableContainerProps={{ sx: { maxHeight: '35%' } }}
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
        </Box>
      )}
      renderRowActionMenuItems={({ row }) => [
        <MenuItem key="edit" onClick={() => console.info('Edit', row.original.aadhar)}>
          Edit
        </MenuItem>,
        <MenuItem key="delete" onClick={() => console.info('Delete', row.original.aadhar)}>
          Delete
        </MenuItem>,
      ]}
      muiTablePaperProps={{
        elevation: 0, //change the mui box shadow
        //customize paper styles
        sx: {
          borderRadius: '0',
          border: '0px',
        },
      }}
      renderDetailPanel={({ row }) => (
        <Box className="grid grid-cols-3 gap-1 w-auto">
          <Typography className="text-xs  ">
            <span className={liStyl}> aadhar:</span>
            <span className="text-xs  ">{row.original.aadhar || 'N/A'} </span>
          </Typography>
          <Typography className="text-xs  ">
            <span className={liStyl}> branch:</span>
            <span className="text-xs  ">{row.original.branch} </span>
          </Typography>
          <Typography className="text-xs  ">
            <span className={liStyl}> category:</span>
            <span className="text-xs  ">{row.original.category} </span>
          </Typography>
          <Typography className="text-xs  ">
            <span className={liStyl}> categoryOther:</span>
            <span className="text-xs  ">{row.original.categoryOther} </span>
          </Typography>
          <Typography className="text-xs  ">
            <span className={liStyl}> contact:</span>
            <span className="text-xs  ">{row.original.contact} </span>
          </Typography>
          <Typography className="text-xs  ">
            <span className={liStyl}> currentStage:</span>
            <span className="text-xs  ">{row.original.currentStage} </span>
          </Typography>
          <Typography className="text-xs  ">
            <span className={liStyl}> designation:</span>
            <span className="text-xs  ">{row.original.designation} </span>
          </Typography>
          <Typography className="text-xs  ">
            <span className={liStyl}> email:</span>
            <span className="text-xs  ">{row.original.email} </span>
          </Typography>
          <Typography className="text-xs  ">
            <span className={liStyl}> enrollmentNum:</span>
            <span className="text-xs  ">{row.original.enrollmentNum} </span>
          </Typography>
          <Typography className="text-xs  ">
            <span className={liStyl}> institute:</span>
            <span className="text-xs  ">{row.original.institute} </span>
          </Typography>
          <Typography className="text-xs  ">
            <span className={liStyl}> location:</span>
            <span className="text-xs  ">{row.original.location} </span>
          </Typography>
          <Typography className="text-xs  ">
            <span className={liStyl}> name:</span>
            <span className="text-xs  ">{row.original.name} </span>
          </Typography>
          <Typography className="text-xs  ">
            <span className={liStyl}> otherInstitute:</span>
            <span className="text-xs  ">{row.original.otherInstitute} </span>
          </Typography>

          <Typography className="text-xs  ">
            <span className={liStyl}> otherOrganisation:</span>
            <span className="text-xs  ">{row.original.otherOrganisation} </span>
          </Typography>

          <Typography className="text-xs  ">
            <span className={liStyl}> otherUniversity:</span>
            <span className="text-xs  ">{row.original.otherUniversity} </span>
          </Typography>
          <Typography className="text-xs  ">
            <span className={liStyl}> startupId:</span>
            <span className="text-xs  ">{row.original.startupId} </span>
          </Typography>
          <Typography className="text-xs  ">
            <span className={liStyl}> status:</span>
            <span className="text-xs  ">{row.original.status} </span>
          </Typography>
          <Typography className="text-xs  ">
            <span className={liStyl}> teamMembers:</span>
            <span className="text-xs  ">{row.original.teamMembers} </span>
          </Typography>
          <Typography className="text-xs  ">
            <span className={liStyl}> teamSize:</span>
            <span className="text-xs  ">{row.original.teamSize} </span>
          </Typography>
          <Typography className="text-xs  ">
            <span className={liStyl}> title:</span>
            <span className="text-xs  ">{row.original.title} </span>
          </Typography>
          <Typography className="text-xs  ">
            <span className={liStyl}> uniqueFeatures:</span>
            <span className="text-xs  ">{row.original.uniqueFeature}</span>
          </Typography>
        </Box>
      )}
      muiTableHeadCellProps={{
        //easier way to create media queries, no useMediaQuery hook needed.
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
    />
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
