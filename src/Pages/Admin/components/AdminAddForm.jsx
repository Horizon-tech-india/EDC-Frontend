import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { adminAddSchema } from '../../../validation/formSchema'
import '../styles/adminAddForm.scss'
import { useFormik } from 'formik'
import { API } from '../../../Api/Post'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phoneNumber: '',
  branch: '',
}

const AdminAddForm = ({ data, setTableData }) => {
  const { state } = useContext(AuthContext)
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: adminAddSchema,
    onSubmit: (values) => {
      const body = { ...values, branch: [values.branch] }

      //POST REQUEST
      API('post', 'admin/create-admin', body, state.token)
        .then((res) => {
          // setOpen(true)
          const dataCopy = [...data, values]
          setTableData(dataCopy)
          resetForm({ values: initialValues })
        })
        .catch((error) => {
          console.error(error.message)
          console.error(error)
          //console.log(error.response)
          // alert(error.response.data.message)
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
            {errors.firstName && touched.firstName ? <p className="input-block__error">{errors.firstName}</p> : null}
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
            {errors.lastName && touched.lastName ? <p className="input-block__error">{errors.lastName}</p> : null}
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
            {errors.email && touched.email ? <p className="input-block__error">{errors.email}</p> : null}
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
            {errors.password && touched.password ? <p className="input-block__error">{errors.password}</p> : null}
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
              <option value="Valsad Startup Studio">VSS</option>
              <option value="Rajkot Startup Studio">RSS</option>
              <option value="Ahemdabad Startup Studio">AHSS</option>
              <option value="Surat Startup Studio">Surat Branch</option>
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
