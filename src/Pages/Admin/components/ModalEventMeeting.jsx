import React from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const ModalEventMeeting = ({ data, isOpen, onClose }) => {
  const handleClose = () => onClose()
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  const toDate = (date) => {
    return new Date(date)
  }

  const modalData = {
    title: data.title,
    link: data.link,
    type: data.type,
    date: toDate(data.dateAndTime).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
    time: toDate(data.dateAndTime).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    }),
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
          <div className="w-full bg-gray-100 shadow-xl rounded-md p-10">
            <Typography id="modal-modal-title justify-items-center" variant="h6" component="h5">
              {modalData.type.charAt(0).toUpperCase() + modalData.type.slice(1)} Details
            </Typography>
            {Object.entries(modalData).map((entry) => {
              return (
                <Typography key={modalData.title} id="modal-modal-title justify-items-center" variant="p" component="p">
                  <span className="capitalize text-green-600 m-3"> {entry[0]} </span> - {entry[1]}
                </Typography>
              )
            })}
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalEventMeeting
