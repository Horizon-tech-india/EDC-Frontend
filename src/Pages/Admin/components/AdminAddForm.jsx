import React from 'react'
import { adminAddSchema } from '../../../validation/formSchema'
import '../styles/adminAddForm.scss'
import { useFormik } from 'formik'
import axios from 'axios'

const initialValues = {
  name: '',
  email: '',
  password: '',
  branch: '',
}

const AdminAddForm = ({ data, setData }) => {
  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: adminAddSchema,
    onSubmit: (values) => {
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

  return (
    <div className="admin-add">
      <form onSubmit={handleSubmit} className="admin-add__form">
        <div className="input__container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="input__container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="input__container">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter Password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="input__container">
          <label htmlFor="branch">Branch</label>
          <select
            name="branch"
            id="branch"
            className="input-block_input--dropdown"
            value={values.branch}
            onChange={handleChange}
          >
            <option value="VSS">VSS</option>
            <option value="RSS">RSS</option>
            <option value="AHSS">AHSS</option>
            <option value="Surat Branch">Surat Branch</option>
          </select>
        </div>
        <button className="admin-add__submit" type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default AdminAddForm
