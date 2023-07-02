import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { Alert, Snackbar } from '@mui/material'
import { CreateNewEvent } from '../../../Api/Post'
import { eventAddSchema } from '../../../validation/formSchema'
import { meetingAddSchema } from '../../../validation/formSchema'
import '../styles/adminAddForm.scss'
import { useFormik } from 'formik'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'

const EventMeetingCreateModal = ({
  isOpen,
  handleResetArray,
  onClose,
  refetch,
  myMeetingsRefetch,
  myEventRefetch,
  array,
  type,
}) => {
  const { state } = useContext(AuthContext)
  const [openMsg, setOpenMsg] = useState('')
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    onClose()
    refetch()
    myEventRefetch()
    handleResetArray()
    myMeetingsRefetch()
  }
  const [isLoading, setIsLoading] = useState(false)
  const [membersData, setMembersData] = useState(array)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '650px',
    transform: 'translate(-50%, -50%)',
  }
  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const initialValues = {
    title: '',
    dateTime: '',
    description: '',
    link: '',
  }
  const submitEventData = async (body) => {
    const token = state.token
    try {
      const res = await CreateNewEvent({ body, token })
      handleClose()
      setOpenMsg(res.data.message)
      setOpen(true)
      refetch()
      return res
    } catch (error) {
      setOpenMsg(error.message)
    }
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues,
    validationSchema: type === 'event' ? eventAddSchema : meetingAddSchema,
    onSubmit: async (values) => {
      if (array.length !== 0) {
        setIsLoading(true)
        const body = {
          title: values.title,
          type: type === 'event' ? 'event' : 'meeting',
          dateAndTime: values.dateTime,
          members: array,
          ...(type === 'event' ? { description: values.description } : { link: values.link }),
        }

        try {
          console.log(body)
          const res = await submitEventData(body)
          resetForm()
        } catch (error) {
          console.error(error)
        } finally {
          setIsLoading(false)
        }
      }
    },
  })

  return (
    <div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseAlert}>
        <Alert variant="filled" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {openMsg && openMsg}
        </Alert>
      </Snackbar>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        University
      </Modal>
    </div>
  )
}

export default EventMeetingCreateModal
