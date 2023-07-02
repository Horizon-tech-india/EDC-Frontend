import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { GetStartupsUserEmail } from '../../../Api/Post'
import { useEffect } from 'react'
import { eventAddSchema } from '../../../validation/formSchema'
import '../styles/adminAddForm.scss'
import { useFormik } from 'formik'
import Chip from '@mui/material/Chip'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

const initialValues = {
  title: '',
  dateTime: '',
  description: '',
}

const EventAddForm = ({ submitEventData, array }) => {
  const { state } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const [membersData, setMembersData] = useState(null)
  const [membersError, setMembersError] = useState(null)
  const token = state.token
  const { data: Data } = GetStartupsUserEmail(token)
  const data = Data?.data?.data

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues,
    validationSchema: eventAddSchema,
    onSubmit: async (values) => {
      if (membersData.length !== 0) {
        setMembersError(null)
        setIsLoading(true)
        const body = {
          title: values.title,
          description: values.description,
          type: 'event',
          dateAndTime: values.dateTime,
          members: membersData,
        }
        //POST REQUEST
        try {
          const res = await submitEventData(body)
          resetForm()
          setIsLoading(false)
        } catch (error) {
          setIsLoading(false)
        }
      } else {
        setMembersError('Atleast choose one member')
      }
    },
  })

  const handleMembersData = (values) => {
    const selectedMembers = data?.filter((email) => values.includes(email))
    setMembersData(selectedMembers)
  }

  return (
    <div className="  w-full">
      <form onSubmit={handleSubmit} className="overflow-hidden ">
        <h1 className="w-full text-2xl text-center font-light">Add New Event</h1>
        <div className="grid cols-span-12 my-5  gap-3 w-full max-w-5xl">MC</div>
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
  )
}

export default EventAddForm
