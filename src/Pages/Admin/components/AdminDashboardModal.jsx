import React from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'

const AdminDashboardModal = ({ data, isOpen, onClose }) => {
  const handleClose = () => onClose()
  console.log(data)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: '24px',
    borderRadius: '10px',
    p: 4,
  }

  const toDate = (date) => {
    return new Date(date)
  }

  const modalData = {
    title: data?.title,
    aadhar: data?.aadhar,
    branch: data?.branch,
    category: data?.category,
    categoryOther: data?.categoryOther,
    contact: data?.contact,
    designation: data?.designation,
    email: data?.email,
    enrollmentNum: data?.enrollmentNum,
    institute: data?.institute,
    location: data?.location,
    name: data?.name,
    otherInstitute: data?.otherInstitute,
    otherOrganisation: data?.otherOrganisation,
    otherUniversity: data?.otherUniversity,
    startupId: data?.startupId,
    status: data?.status,
    teamMembers: data?.teamMembers,
    teamSize: data?.teamSize,
    uniqueFeatures: data?.uniqueFeatures,
    updatedAt: toDate(data?.updatedAt).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
    currentStage: data?.currentStage,
  }

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="w-full ">
            <Typography
              className="capitalize pb-5 w-full text-center"
              id="modal-modal-title "
              variant="h6"
              component="h5"
            >
              {modalData?.title} Details
            </Typography>
            <div className="grid grid-cols-2	">
              {Object?.entries(modalData).map((entry) => {
                return (
                  <div key={modalData?.title} className="grid py-1 grid-cols-12">
                    <span className="capitalize font-semibold text-xs col-span-3 text-[#b4cd93] m-0"> {entry[0]} </span>
                    <span className="capitalize text-xs col-span-9 h-auto ">{entry[1]} </span>
                  </div>
                )
              })}
            </div>
            <div className="w-full flex my-2 justify-center items-center">
              <Button onClick={handleClose} size="sm" variant="contained" color="success">
                Close
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default AdminDashboardModal
