import React from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const AdminViewModal = ({ data, isOpen, onClose }) => {
  const handleClose = () => onClose()
  const style = {
    position: 'absolute',
    width: '500px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  const toDate = (date) => {
    return new Date(date)
  }

  const modalData = {
    Name: data?.firstName + ' ' + data?.lastName,
    Email: data?.email,
    Number: data?.phoneNumber,
    Role: data?.role,
    Branch: data?.branch.map((val, index) => {
      return (
        <span className=" px-2 py-0.5  m-1  border-2 bg-[#cad3be] rounded-xl text-xs" key={index + val}>
          {val}
          <br />
        </span>
      )
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
    
      </Modal>
    </div>
  )
}

export default AdminViewModal
