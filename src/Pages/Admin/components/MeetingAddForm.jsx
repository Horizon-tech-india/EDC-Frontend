import React from 'react'
import { meetingAddSchema } from '../../../validation/formSchema'
import '../styles/adminAddForm.scss'
import { useFormik } from 'formik'
import axios from 'axios'

const initialValues = {
  title: '',
  time: '',
  members: '',
  link: '',
}

const MeetingAddForm = ({ data, setData }) => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: meetingAddSchema,
    onSubmit: (values) => {
      console.log(values)
      const body = values
      const dataCopy = [...data, values]
      setData(dataCopy)
      resetForm({ values: initialValues })
      //POST REQUEST
      axios
        .post('http://localhost:9000/', body)
        .then((response) => {})
        .catch((error) => {
          console.error(error)
        })
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
            {errors.title && touched.title ? (
              <p className="input-block__error">{errors.title}</p>
            ) : null}
          </div>
          <div className="input__container">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              name="time"
              id="time"
              value={values.time}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.time && touched.time ? (
              <p className="input-block__error">{errors.time}</p>
            ) : null}
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
            {errors.members && touched.members ? (
              <p className="input-block__error">{errors.members}</p>
            ) : null}
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
            {errors.link && touched.link ? (
              <p className="input-block__error">{errors.link}</p>
            ) : null}
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
