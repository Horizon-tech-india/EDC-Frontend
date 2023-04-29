import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { forgotPasswordSchemaStep3 } from '../../validation/formSchema'
import '../../styles/login.scss'
import '../../styles/signup.scss'
import lock from '../../assets/icons/svg/lock.svg'
import eyeOff from '../../assets/icons/svg/eye-off.svg'
import axios from 'axios'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

const initialValues = {
  new_password: '',
  confirm_password: '',
}

const SignUpStep3 = ({ email }) => {
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const [isLoading, setIsLoading] = useState(false)

  const [passwordHidden1, setPasswordHidden1] = useState(true)
  const [passwordHidden2, setPasswordHidden2] = useState(true)

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchemaStep3,
    onSubmit: (values) => {
      setIsLoading(true)

      const body = {
        email,
        newPassword: values.new_password,
        confirmNewPassword: values.confirm_password,
      }
      //POST REQUEST
      axios
        .post('http://localhost:9000/users/set-new-password', body)
        .then((response) => {
          setTimeout(() => {
            // If successful, redirect to dashboard
     
            navigate('/login')
            setIsLoading(false)
          }, 2000)
        })
        .catch((error) => {
          console.error(error)
          setError(error.response.data.message)
          setOpen(true)
          setTimeout(() => {
            // If successful, redirect to dashboard
        
            setIsLoading(false)
          }, 2000)
        })
    },
  })
  const navigate = useNavigate()

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
      <div className="login__head">
        <h2>Create New Password</h2>
        <p>Enter the new password for your account</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="new_password">New Password</label>
          <div className="input-block__input">
            <span>
              <img src={lock} alt="" />
            </span>
            <input
              type={passwordHidden1 ? 'password' : 'text'}
              id="new_password"
              name="new_password"
              value={values.new_password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="New Password"
            />
            <span onClick={() => setPasswordHidden1(!passwordHidden1)}>
              <img src={eyeOff} alt="" />
            </span>
          </div>
          {errors.new_password && touched.new_password ? (
            <p className="input-block__error">{errors.new_password}</p>
          ) : null}
        </div>
        <div className="input-block">
          <label htmlFor="confirm_password">Confirm Password</label>
          <div className="input-block__input">
            <span>
              <img src={lock} alt="" />
            </span>
            <input
              type={passwordHidden2 ? 'password' : 'text'}
              id="confirm_password"
              name="confirm_password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Confirm Password"
            />
            <span onClick={() => setPasswordHidden2(!passwordHidden2)}>
              <img src={eyeOff} alt="" />
            </span>
          </div>
          {errors.confirm_password && touched.confirm_password ? (
            <p className="input-block__error">{errors.confirm_password}</p>
          ) : null}
        </div>
        <div className="input-block">
          <button className="submit-btn" type="submit">
          {isLoading ? (
                  <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-t-4 border-b-4 border-blue-500"></div>
                  </div>
                ) : (
                  'Reset Password'
                )}  
          </button>
        </div>
      </form>
    </>
  )
}

export default SignUpStep3
