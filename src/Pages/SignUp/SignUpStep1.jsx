import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import '../../styles/login.scss'
import '../../styles/signup.scss'
import { signupSchemaStep1 } from '../../validation/formSchema'
import lock from '../../assets/lock.svg'
import mail from '../../assets/mail.svg'
import eyeOff from '../../assets/eye-off.svg'
import phone from '../../assets/phone.svg'
import axios from 'axios'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

const initialValues = {
  firstName: '',
  lastName: '',
  password: '',
  email: '',
  phoneNumber: '',
}

const SignUpStep1 = ({ setEmail }) => {
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const [passwordHidden, setPasswordHidden] = useState(true)
  const navigate = useNavigate()

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signupSchemaStep1,
      onSubmit: (values) => {
        setEmail(values.email)
        //POST REQUEST
        axios
          .post('http://localhost:9000/users/signup', values)
          .then((response) => {
            navigate('/signup/2')
          })
          .catch((error) => {
            console.error(error)
            setError(error.response.data.message)
            setOpen(true)
          })
      },
    })
  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
      <div className="login__head">
        <h2>Register your account</h2>
        <p>Fill the details below to submit register account</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <div className="input-block--grid">
            <div>
              <label htmlFor="firstName">First Name</label>
              <div className="input-block__input">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Firstname"
                />
              </div>
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <div className="input-block__input">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Lastname"
                />
              </div>
            </div>
          </div>
          {(errors.firstName || errors.lastName) &&
          (touched.firstName || touched.lastName) ? (
            <p className="input-block__error">
              {errors.firstName ? errors.firstName : errors.lastName}
            </p>
          ) : null}
        </div>
        <div className="input-block">
          <label htmlFor="email">Email</label>
          <div className="input-block__input">
            <span>
              <img src={mail} alt="" />
            </span>
            <input
              type="text"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your email"
            />
          </div>
          {errors.email && touched.email ? (
            <p className="input-block__error">{errors.email}</p>
          ) : null}
        </div>
        <div className="input-block">
          <label htmlFor="phoneNumber">Phone Number</label>
          <div className="input-block__input">
            <span>
              <img src={phone} alt="" />
            </span>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="(+123) 9876543210"
            />
          </div>
          {errors.phoneNumber && touched.phoneNumber ? (
            <p className="input-block__error">{errors.phoneNumber}</p>
          ) : null}
        </div>
        <div className="input-block">
          <label htmlFor="password">Password</label>
          <div className="input-block__input">
            <span>
              <img src={lock} alt="" />
            </span>
            <input
              type={passwordHidden ? 'password' : 'text'}
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your password"
            />
            <span onClick={() => setPasswordHidden(!passwordHidden)}>
              <img src={eyeOff} alt="" />
            </span>
          </div>
          {errors.password && touched.password ? (
            <p className="input-block__error">{errors.password}</p>
          ) : null}
        </div>
        <div className="input-block__terms">
          By signing in, you're agreeing to our{' '}
          <span>
            <Link>Terms & Condition</Link>
          </span>
          and
          <span>
            <Link>Privacy Policy</Link>*
          </span>
        </div>
        <div className="input-block">
          <button className="submit-btn" type="submit">
            Continue
          </button>
        </div>
      </form>
      <div className="login-link">
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </div>
    </>
  )
}

export default SignUpStep1
