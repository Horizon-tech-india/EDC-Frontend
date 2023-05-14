import React, { useState } from 'react'
import { meetingAddSchema } from '../../../validation/formSchema'
import '../styles/adminAddForm.scss'
import { useFormik } from 'formik'
import Chip from '@mui/material/Chip'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

const options = [
  {
    firstName: 'first1',
    lastName: 'last',
    email: 'fewfewf1@gmail.com',
  },
  {
    firstName: 'first2',
    lastName: 'last',
    email: 'fewfewf2@gmail.com',
  },
  {
    firstName: 'first3',
    lastName: 'last',
    email: 'fewfewf3@gmail.com',
  },
]

const initialValues = {
  title: '',
  dateTime: '',
  link: '',
}

const MeetingAddForm = ({ submitMeetingData }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [membersData, setMembersData] = useState(null)

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues,
    validationSchema: meetingAddSchema,
    onSubmit: async (values) => {
      setIsLoading(true)
      const body = {
        title: values.title,
        link: values.link,
        type: 'meeting',
        dateAndTime: values.dateTime,
        members: membersData,
      }
      //POST REQUEST
      try {
        const res = await submitMeetingData(body)
        resetForm()
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
        console.log(res.data) // success message from server
      } catch (error) {
        console.error(error)
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
      }
    },
  })

  console.log(values)

  const handleMembersData = (value) => {
    console.log(value)
    const newData = value.map((member) => {
      const membersObj = options.find((option) => `${option.firstName} ${option.lastName}` === member)
      return membersObj.email
    })
    setMembersData(newData)
    console.log(newData)
  }

  return (
    <div className="admin-add">
      <form onSubmit={handleSubmit} className="admin-add__form">
        <h1
          className="w-full text-2xl text-center font-light
        "
        >
          Add New Meeting
        </h1>
        <div className="grid cols-span-12 w-full gap-3 max-w-3xl">
          <div className="input__container col-span-5">
            <label htmlFor="firstName">Title</label>
            <input
              className="border border-gray-400"
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

          <div className="input__container w-full col-span-6">
            <label htmlFor="dateTime">Date and Time</label>
            <input
              className="border border-gray-400"
              type="datetime-local"
              name="dateTime"
              id="dateTime"
              value={values.dateTime}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.dateTime && touched.dateTime ? <p className="input-block__error">{errors.dateTime}</p> : null}
          </div>

          <div className="col-span-12 px-4 mb-5">
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

          <div className="col-span-12 px-4 mb-5">
            <label htmlFor="tags-filled">Members</label>
            <Autocomplete
              multiple
              id="tags-filled"
              options={options.map((option) => `${option.firstName} ${option.lastName}`)}
              defaultValue={[]}
              freeSolo
              className="bg-white "
              renderTags={(value, getTagProps) =>
                value.map((option, index) => <Chip variant="outlined" label={option} {...getTagProps({ index })} />)
              }
              renderInput={(params) => (
                <TextField
                  className="bg-[#f3ebeb] max-w-md"
                  name="branch"
                  {...params}
                  variant="outlined"
                  label=""
                  placeholder="Members"
                  sx={{
                    outline: 'none',
                  }}
                />
              )}
              onChange={(event, value) => handleMembersData(value)}
            />
          </div>
        </div>
        {isLoading ? (
          <button className="admin-add__submit" type="button" disabled>
            Submitting...
          </button>
        ) : (
          <button className="admin-add__submit" type="submit">
            Schedule Meeting
          </button>
        )}
      </form>
    </div>
  )
}

export default MeetingAddForm
