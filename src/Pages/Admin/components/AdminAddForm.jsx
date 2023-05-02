import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { adminAddSchema } from '../../../validation/formSchema'
import '../styles/adminAddForm.scss'
import { useFormik } from 'formik'
import { API } from '../../../Api/Post'
import Chip from '@mui/material/Chip'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phoneNumber: '',
}

const AdminAddForm = ({ data, setTableData, submitAdminData }) => {
  const options = ['Valsad Startup Studio', 'Rajkot Startup Studio', 'Ahemdabad Startup Studio', 'Surat Startup Studio']
  const [branch, setBranch] = useState([options[0]])
  const { state } = useContext(AuthContext)
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: adminAddSchema,
    onSubmit: (values) => {
      console.log(branch)
      const body = { ...values, branch }
      //POST REQUEST
      submitAdminData(body, resetForm)
    },
  })

  console.log(values, branch)

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
          <div></div>
          <div className="input__container">
            <label htmlFor="tags-filled">Branches</label>
            <Autocomplete
              multiple
              id="tags-filled"
              options={options}
              defaultValue={[options[0]]}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => <Chip variant="outlined" label={option} {...getTagProps({ index })} />)
              }
              renderInput={(params) => (
                <TextField name="branch" {...params} variant="filled" label="" placeholder="Branches" />
              )}
              onChange={(event, value) => setBranch(value)}
            />
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
