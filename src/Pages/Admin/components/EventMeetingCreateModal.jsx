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

const EventMeetingCreateModal = ({ isOpen, onClose, refetch, myMeetingsRefetch, myEventRefetch, array, type }) => {
  const { state } = useContext(AuthContext)
  const [openMsg, setOpenMsg] = useState('')
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    onClose()
    setMembersData([])
    refetch()
    myEventRefetch()
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
        let body = {}
        if (type === 'event') {
          body = {
            title: values.title,
            description: values.description,
            type: 'event',
            dateAndTime: values.dateTime,
            members: membersData,
          }
        } else {
          body = {
            title: values.title,
            link: values.link,
            type: 'meeting',
            dateAndTime: values.dateTime,
            members: membersData,
          }
        }

        try {
          console.log(body)
          const res = await submitEventData(body)
          resetForm()
          setIsLoading(false)
        } catch (error) {
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
        <Box sx={style}>
          <div className="w-full bg-gray-100 shadow-xl rounded-md p-5">
            <div className="  w-full">
              <form onSubmit={handleSubmit} className="overflow-hidden ">
                <h1 className="w-full text-2xl text-center font-light">Add New {type}</h1>
                <div className="grid cols-span-12 my-5  gap-3 w-full max-w-5xl">
                  <div className="input__container  w-full col-span-6">
                    <label htmlFor="firstName">Title</label>
                    <input
                      className="border border-gray-400 w-full"
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Enter Title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.title && touched.title ? <p className="input-block__error">{errors.title}</p> : null}
                  </div>
                  <div className="input__container w-full  col-span-6">
                    <label htmlFor="dateTime">Date and Time</label>
                    <input
                      className="border border-gray-400 w-full"
                      type="datetime-local"
                      name="dateTime"
                      id="dateTime"
                      value={values.dateTime}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.dateTime && touched.dateTime ? (
                      <p className="input-block__error">{errors.dateTime}</p>
                    ) : null}
                  </div>
                  {type === 'event' ? (
                    <div className="input__container w-full  col-span-12">
                      <label htmlFor="description">Event Details</label>
                      <textarea
                        className="border rounded-md bg-[#f3ebeb] w-full  border-gray-400"
                        type="tel"
                        id="description"
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.description && touched.description ? (
                        <p className="input-block__error">{errors.description}</p>
                      ) : null}
                    </div>
                  ) : (
                    <div className="col-span-12   mb-5">
                      <label htmlFor="link">Meeting Link</label>
                      <input
                        className="border rounded-md bg-[#f3ebeb] w-full py-2 border-gray-400"
                        type="tel"
                        id="link"
                        name="link"
                        value={values.link}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.link && touched.link ? <p className="input-block__error">{errors.link}</p> : null}
                    </div>
                  )}
                  <div className="max-w-5xl w-full border  ">
                    {array.map((option, index) => (
                      <Chip variant="outlined" key={index} label={option} />
                    ))}
                  </div>
                </div>
                {isLoading ? (
                  <button className="admin-add__submit my-5" type="button" disabled>
                    Submitting...
                  </button>
                ) : (
                  <button className="admin-add__submit my-5" type="submit" onClick={() => handleSubmit()}>
                    Schedule Event
                  </button>
                )}
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default EventMeetingCreateModal
