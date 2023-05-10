import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/login.scss'
import '../../styles/signup.scss'
import { API } from '../../Api/Post'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

const SignUpStep3 = ({ email }) => {
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (value, event) => {
    let otpCopy = otp
    otpCopy[value - 1] = event.target.value
    setOtp(otpCopy)
  }

  const inputfocus = (elmnt) => {
    if (elmnt.key === 'Delete' || elmnt.key === 'Backspace') {
      const next = elmnt.target.tabIndex - 2
      if (next > -1) {
        elmnt.target.form.elements[next].focus()
      }
    } else {
      const next = elmnt.target.tabIndex
      if (next < 6) {
        elmnt.target.form.elements[next].focus()
      }
    }
  }

  const handleSubmit = (event) => {
    setIsLoading(true)

    event.preventDefault()
    const body = { email: email, otp: otp.join(''), isForgotPassword: false }
    //POST REQUEST
    API('post', '/api/users/verify-mail-otp', body, '')
      .then((response) => {
        setTimeout(() => {
          // If successful, redirect to dashboard
          setIsLoading(false)
          navigate('/login')
        }, 1000)
      })
      .catch((error) => {
        console.error(error)
        setError(error.response.data.message)
        setOpen(true)
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
      })
  }

  const handleResendCode = () => {
    const body = { email: email, isForgotPassword: false }
    API('post', '/api/users/resend-otp', body, '')
      .then((response) => {
        setError('Code sent')
        setOpen(true)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
      <div className="login__head">
        <h2>Check your Mail</h2>
        <p>We've sent a 6 digit confirmation code to username@gmail.com. Make sure you enter correct code</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="otpContainer">
          <input
            name="otp1"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otp.otp1}
            onChange={(e) => handleChange(1, e)}
            tabIndex="1"
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
          />
          <input
            name="otp2"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otp.otp2}
            onChange={(e) => handleChange(2, e)}
            tabIndex="2"
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
          />
          <input
            name="otp3"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otp.otp3}
            onChange={(e) => handleChange(3, e)}
            tabIndex="3"
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
          />
          <input
            name="otp4"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otp.otp4}
            onChange={(e) => handleChange(4, e)}
            tabIndex="4"
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
          />

          <input
            name="otp5"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otp.otp5}
            onChange={(e) => handleChange(5, e)}
            tabIndex="5"
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
          />
          <input
            name="otp6"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otp.otp6}
            onChange={(e) => handleChange(6, e)}
            tabIndex="6"
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
          />
        </div>
        <div className="input-block">
          <button disabled={isLoading} className="submit-btn" type="submit">
            {isLoading ? (
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-6 w-6 border-t-4 border-b-4 border-blue-500"></div>
              </div>
            ) : (
              'Verify'
            )}
          </button>
        </div>
      </form>
      <div className="login-link">
        <p>Didn't Receive code?</p>
        <Link onClick={handleResendCode}>Resend Code</Link>
      </div>
    </>
  )
}

export default SignUpStep3
