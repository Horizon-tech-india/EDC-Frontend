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
  members: '',
  link: '',
}

const MeetingAddForm = ({ data, setData }) => {
  const [membersData, setMembersData] = useState(null)

  const handleMembersData = (value) => {
    console.log(value)
    const newData = value.map((member) => {
      const membersObj = options.find((option) => `${option.firstName} ${option.lastName}` === member)
      return membersObj.email
    })
    setMembersData(newData)
    console.log(newData)
  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: meetingAddSchema,
    onSubmit: (values) => {
      console.log(values)
      const body = values
      const dataCopy = [...data, values]
      setData(dataCopy)
      //POST REQUEST
    },
  })

  console.log(values)

  return (
    <div className="admin-add">
      <form onSubmit={handleSubmit} className="admin-add__form">
        <div className="admin-add__form-wrapper--meeting">
          <div className="input__container">
            <label htmlFor="title">Title</label>
            <input
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
          <div className="input__container">
            <label htmlFor="time">Date</label>
            <input type="date" name="date" id="date" value={values.date} onChange={handleChange} onBlur={handleBlur} />
            {errors.date && touched.date ? <p className="input-block__error">{errors.date}</p> : null}
          </div>
          <div className="input__container">
            <label htmlFor="time">Time</label>
            <input type="time" name="time" id="time" value={values.time} onChange={handleChange} onBlur={handleBlur} />
            {errors.time && touched.time ? <p className="input-block__error">{errors.time}</p> : null}
          </div>
          <div className="input__container">
            <label htmlFor="members">Members</label>
            <input
              type="text"
              name="members"
              id="members"
              placeholder="Enter Members"
              value={values.members}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.members && touched.members ? <p className="input-block__error">{errors.members}</p> : null}
          </div>
          <div className="input__container">
            <label htmlFor="tags-filled">Branches</label>
            <Autocomplete
              multiple
              id="tags-filled"
              options={options.map((option, index) => `${option.firstName} ${option.lastName}`)}
              defaultValue={[]}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => <Chip variant="outlined" label={option} {...getTagProps({ index })} />)
              }
              renderInput={(params) => {
                return <TextField name="branch" {...params} variant="filled" label="" placeholder="Branches" />
              }}
              onChange={(event, value) => handleMembersData(value)}
            />
          </div>
          <div className="input__container">
            <label htmlFor="link">Meeting Link</label>
            <input
              type="text"
              id="link"
              name="link"
              value={values.link}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="https://www.example.com"
            />
            {errors.link && touched.link ? <p className="input-block__error">{errors.link}</p> : null}
          </div>
        </div>
        <button className="admin-add__submit" type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default MeetingAddForm
