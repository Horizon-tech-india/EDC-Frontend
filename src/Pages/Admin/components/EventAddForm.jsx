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
  date: '',
  time: '',
  link: '',
}

const EventAddForm = ({ submitEventData }) => {
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
        type: 'event',
        dateAndTime: values.date + ' ' + values.time,
        filters: [
          {
            branch: 'PA',
          },
          {
            title: 'test..',
          },
        ],
      }
      //POST REQUEST
      try {
        const res = await submitEventData(body)
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
    <div className="  w-full">
      <form onSubmit={handleSubmit} className=" ">
        <h1 className="w-full text-2xl text-center font-light" >
          Add New Event
        </h1>
        <div className="grid cols-span-12 my-2 gap-1 w-full max-w-5xl">
          <div className="input__container w-48  col-span-4">
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
          <div className="input__container w-48  col-span-4">
            <label htmlFor="date">Date</label>
            <input
              className="border border-gray-400"
              type="date"
              name="date"
              id="date"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.date && touched.date ? <p className="input-block__error">{errors.date}</p> : null}
          </div>
          <div className="input__container w-48  col-span-4">
            <label htmlFor="time">Time</label>
            <input
              className="border border-gray-400"
              type="time"
              name="time"
              id="time"
              value={values.time}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.time && touched.time ? <p className="input-block__error">{errors.time}</p> : null}
          </div>
          <div className="input__container w-full px-1  col-span-12">
            <label htmlFor="link">Event Details</label>
            <textarea
              className="border rounded-md bg-[#f3ebeb] w-full  border-gray-400"
              type="tel"
              id="link"
              name="link"
              value={values.link}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.link && touched.link ? <p className="input-block__error">{errors.link}</p> : null}
          </div>
          <div className="input__container w-full px-1  col-span-12">
            <label htmlFor="tags-filled">Add Members</label>
            <Autocomplete
              multiple
              id="tags-filled"
              options={options.map((option) => `${option.firstName} ${option.lastName}`)}
              defaultValue={[]}
              freeSolo
              className="w-full"
              renderTags={(value, getTagProps) =>
                value.map((option, index) => <Chip variant="outlined" label={option} {...getTagProps({ index })} />)
              }
              renderInput={(params) => (
                <TextField
                className="border rounded-md bg-[#f3ebeb] w-full  border-gray-400"
                  name="branch"
                  {...params}
                  variant="outlined"
                  label=""
                  placeholder="Choose Filters"
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
          <button className="admin-add__submit my-5" type="button" disabled>
            Submitting...
          </button>
        ) : (
          <button className="admin-add__submit my-5" type="submit">
            Schedule Event
          </button>
        )}
      </form>
    </div>
  )
}

export default EventAddForm
