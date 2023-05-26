import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import { useFormik } from 'formik'
import { adminAddSchema } from '../../../validation/formSchema'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phoneNumber: '',
}

const StageTwoForm = () => {
  const location = useLocation()
  const startupDetails = location.state
  const { state } = useContext(AuthContext)
  const [openMsg, setOpenMsg] = useState('')
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const options = ['Valsad Startup Studio', 'Rajkot Startup Studio', 'Ahemdabad Startup Studio', 'Surat Startup Studio']

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues,
    validationSchema: adminAddSchema,
    onSubmit: async (values) => {
      // setIsLoading(true)
      // const body = { ...values, branch }
      // try {
      //   const res = await CreateNewAdmin(body, state.token)
      //   console.log(`first`, res)
      //   if (res?.response?.status === 400) {
      //     setIsLoading(false)
      //     setOpenMsg(res?.response?.data?.message)
      //   }
      //   if (res?.status === 200) {
      //     setOpenMsg(res?.data?.message)
      //     setOpen(true)
      //     resetForm()
      //     handleClose()
      //     handleRefresh()
      //   }
      // } catch (error) {
      //   setOpenMsg(error?.message)
      //   resetForm()
      //   setIsLoading(false)
      // }
    },
  })

  return (
    <div>
      <form onSubmit={handleSubmit} className="admin-add__form">
        <h1
          className="w-full text-2xl text-center font-light
"
        >
          {startupDetails.name}
        </h1>

        <div className="grid cols-span-12 gap-5 w-full max-w-3xl">
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
        </div>
        <div className="w-full flex justify-center items-center">
          <span className="text-xl text-red-500  mx-auto text-center px-2 py-2"> {openMsg && openMsg}</span>
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

export default StageTwoForm
