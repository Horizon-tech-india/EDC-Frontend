import React, { useState } from 'react'
import { adminAddSchema } from '../../../validation/formSchema'
import '../styles/adminAddForm.scss'
import { useFormik } from 'formik'
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

const AdminAddForm = ({ submitAdminData }) => {
  const [isLoading, setIsLoading] = useState(false)
  const options = ['Valsad Startup Studio', 'Rajkot Startup Studio', 'Ahemdabad Startup Studio', 'Surat Startup Studio']
  const [branch, setBranch] = useState([options[0]])
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: adminAddSchema,
    onSubmit: async (values) => {
      setIsLoading(true)
      const body = { ...values, branch }
      //POST REQUEST
      try {
        const res = await submitAdminData(body, resetForm)
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

  console.log(values, branch)

  return (
    <div className="admin-add">
      <form onSubmit={handleSubmit} className="admin-add__form">
        <h1
          className="w-full text-2xl text-center font-light
        "
        >
          Add New Admin
        </h1>
        <div className="grid cols-span-12 w-full max-w-3xl">
          <div className="input__container col-span-6">
            <label htmlFor="firstName">First Name</label>
            <input
              className="border border-gray-400"
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
          <div className="input__container col-span-6">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="border border-gray-400"
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
          <div className="input__container col-span-6">
            <label htmlFor="email">Email</label>
            <input
              className="border border-gray-400"
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
          <div className="input__container col-span-6">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              className="border border-gray-400"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="(+123) 9876543210"
            />
            {errors.phoneNumber && touched.phoneNumber ? (
              <p className="input-block__error">{errors.phoneNumber}</p>
            ) : null}
          </div>
          <div className="input__container col-span-6">
            <label htmlFor="password">Password</label>
            <input
              className="border border-gray-400"
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
          <div className="col-span-12 px-4 mb-5">
            <label htmlFor="tags-filled">Branches</label>
            <Autocomplete
              multiple
              id="tags-filled"
              options={options}
              defaultValue={[options[0]]}
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
                  placeholder="Branches"
                  sx={{
                    outline: 'none',
                  }}
                />
              )}
              onChange={(event, value) => setBranch(value)}
            />
          </div>
        </div>
        {isLoading ? (
          <button className="admin-add__submit" type="button" disabled>
            Submitting...
          </button>
        ) : (
          <button className="admin-add__submit" type="submit">
            Add Admin
          </button>
        )}
      </form>
    </div>
  )
}

export default AdminAddForm
