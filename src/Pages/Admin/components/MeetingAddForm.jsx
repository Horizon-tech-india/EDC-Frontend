import React, { useState, useEffect } from 'react'
import { meetingAddSchema } from '../../../validation/formSchema'
import '../styles/adminAddForm.scss'
import { useFormik } from 'formik'
import Chip from '@mui/material/Chip'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

const initialValues = {
  title: '',
  dateTime: '',
  link: '',
}

const MeetingAddForm = ({ submitMeetingData, array }) => {
  const [isLoading, setIsLoading] = useState(false)

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues,
    validationSchema: meetingAddSchema,
    onSubmit: async (values) => {
      setIsLoading(true)
      const body = {
        title: values?.title,
        link: values?.link,
        type: 'meeting',
        dateAndTime: values?.dateTime,
        members: values?.members || [],
      }
      try {
        const res = await submitMeetingData(body)
        resetForm()
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
      }
    },
  })

  // useEffect(() => {
  //   if (Array.isArray(array)) {
  //     values?.members = [...values?.members, ...array]
  //   }
  // }, [array])
  return (
    <div className="admin-add">
      <form onSubmit={handleSubmit} className="admin-add__form">
        <h1
          className="w-full text-2xl text-center font-light
        "
        >
          Add New Meeting
        </h1>
        <div className="grid cols-span-12 w-full gap-5 max-w-5xl">
          <div className="input__container col-span-6">
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

          <div className="col-span-12  mb-5">
            <label htmlFor="tags-filled">Members</label>
            <Autocomplete
              multiple
              id="tags-filled"
              options={values.members}
              defaultValue={values.members}
              freeSolo
              className="bg-white "
              renderTags={(value, getTagProps) =>
                value.map((option, index) => <Chip variant="outlined" label={option} {...getTagProps({ index })} />)
              }
              renderInput={(params) => (
                <TextField
                  className="bg-[#f3ebeb] max-w-md max-h-96 overflow-auto"
                  name="members"
                  {...params}
                  variant="outlined"
                  label=""
                  placeholder="Members"
                  sx={{
                    outline: 'none',
                  }}
                />
              )}
              onChange={(event, value) => handleChange({ target: { name: 'members', value } })}
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
