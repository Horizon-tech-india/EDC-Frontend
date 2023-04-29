import React from 'react'
import { adminAddSchema } from '../../../validation/formSchema'
import '../styles/adminAddForm.scss'
import { useFormik } from 'formik'
import axios from 'axios'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phoneNumber: '',
  branch: '',
}

const AdminAddForm = ({ data, setData }) => {
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
        <div className="admin-add__form-wrapper--admin-add">
          <div className="input__container">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstName && touched.firstName ? (
              <p className="input-block__error">{errors.firstName}</p>
            ) : null}
          </div>
          <div className="input__container">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastName && touched.lastName ? (
              <p className="input-block__error">{errors.lastName}</p>
            ) : null}
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
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="input-block__error">{errors.email}</p>
            ) : null}
          </div>
          <div className="input__container">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              onBlur={handleBlur}
              placeholder="(+123) 9876543210"
            />
            {errors.phoneNumber && touched.phoneNumber ? (
              <p className="input-block__error">{errors.phoneNumber}</p>
            ) : null}
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
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="input-block__error">{errors.password}</p>
            ) : null}
          </div>
          <div className="input__container">
            <label htmlFor="branch">Branch</label>
            <select
              name="branch"
              id="branch"
              className="input-block_input--dropdown"
              value={values.branch}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" disabled defaultValue hidden>
                VSS, RSS, AHSS, or Surat Branch
              </option>
              <option value="VSS">VSS</option>
              <option value="RSS">RSS</option>
              <option value="AHSS">AHSS</option>
              <option value="Surat Branch">Surat Branch</option>
            </select>
          </div>
        </div>
        <button className="admin-add__submit" type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default AdminAddForm
