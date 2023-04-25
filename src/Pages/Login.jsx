import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import '../styles/login.scss'
import { loginSchema } from '../validation/formSchema'
import lock from '../assets/lock.svg'
import mail from '../assets/mail.svg'
import eyeOff from '../assets/eye-off.svg'
import facebook from '../assets/facebook.svg'
import google from '../assets/google.svg'
import linkedin from '../assets/linkedin.svg'
import axios from 'axios'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

const initialValues = {
  email: '',
  password: '',
  rememberMe: false,
}

const Login = ({ loggedIn, setLoggedIn }) => {
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const [passwordHidden, setPasswordHidden] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (loggedIn) navigate('/home')
  }, [])

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        //POST REQUEST
        axios
          .post('http://localhost:9000/users/login', values)
          .then((res) => {
            const { token } = res.data.data
            console.log(res)
            // save the token to localStorage
            localStorage.setItem('token', token)
            localStorage.setItem('pu-edc-auth-token', res.data.token)
            localStorage.setItem('pu-edc-email', res.data.email)
            setLoggedIn(true)
            navigate('/home')
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
      <div className="wrapper">
        <div className="banner">
          <h1 className="banner__text banner__text--1">Welcome to</h1>
          <h1 className="banner__text banner__text--2">PU EDC</h1>
        </div>
        <div className="login__container">
          <div className="signup-link">
            <p>Don't have an account?</p>
            <Link to="/signup/1">Signup</Link>
          </div>
          <div className="login__head">
            <h2>Welcome</h2>
            <p>Login to continue</p>
          </div>
          <form onSubmit={handleSubmit}>
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
            <div className="input-block login__remember">
              <div>
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  value={values.rememberMe}
                  onChange={handleChange}
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <Link to="/forgot-password/1">Forgot Password?</Link>
            </div>
            <div className="input-block">
              <button className="submit-btn" type="submit">
                Login
              </button>
            </div>
          </form>
          <section className="other-login-options">
            <p>or continue with</p>
            <ul className="other-login-options__list">
              <li className="other-login-options__item">
                <span>
                  <img src={facebook} alt="" />
                </span>
              </li>
              <li className="other-login-options__item">
                <span>
                  <img src={google} alt="" />
                </span>
              </li>
              <li className="other-login-options__item">
                <span>
                  <img src={linkedin} alt="" />
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}

export default Login
