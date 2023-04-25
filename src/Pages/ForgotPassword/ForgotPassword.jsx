import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/login.scss'
import ForgotPasswordStep1 from './ForgotPasswordStep1'
import ForgotPasswordStep2 from './ForgotPasswordStep2'
import ForgotPasswordStep3 from './ForgotPasswordStep3'
import left from '../../assets/left.svg'

const ForgotPassword = ({ step }) => {
  const [email, setEmail] = useState('')

  return (
    <div className="wrapper">
      <div className="banner">
        <h1 className="banner__text banner__text--1">Welcome to</h1>
        <h1 className="banner__text banner__text--2">PU EDC</h1>
      </div>
      <div className="login__container signup__container">
        <nav className="signup__nav">
          <div className="signup__nav-link">
            <span>
              <img src={left} alt="" />
            </span>
            <Link
              to={
                step === 1
                  ? '/login'
                  : step === 2
                  ? '/forgot-password/1'
                  : '/forgot-password/2'
              }
            >
              Back
            </Link>
          </div>
          <div className="signup__nav-current">
            <p className="signup__nav-current--1">Step {step} of 3</p>
            <p className="signup__nav-current--2">Forgot Password</p>
          </div>
        </nav>
        {step === 1 ? (
          <ForgotPasswordStep1 setEmail={setEmail} />
        ) : step === 2 ? (
          <ForgotPasswordStep2 email={email} />
        ) : (
          <ForgotPasswordStep3 email={email} />
        )}
      </div>
    </div>
  )
}

export default ForgotPassword
