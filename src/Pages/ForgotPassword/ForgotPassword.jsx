import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ForgotPasswordStep1 from './ForgotPasswordStep1'
import ForgotPasswordStep2 from './ForgotPasswordStep2'
import ForgotPasswordStep3 from './ForgotPasswordStep3'
import '../../styles/login.scss'
import left from '../../assets/icons/svg/left.svg'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { ROLES } from '../../constant/ROLES'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useEffect } from 'react'
const ForgotPassword = ({ step }) => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { state, login } = useContext(AuthContext)
  useEffect(() => {
    setIsLoading(false)
    if (state?.isAuthenticated === true) {
      return navigate('/Admin')
    }
  }, [state])
  return (
    <div className="wrapper">
      <div className="banner">
        <h1 className="banner__text banner__text--1">Welcome to</h1>
        <h1 className="banner__text banner__text--2">PU EDC</h1>
      </div>
    </div>
  )
}

export default ForgotPassword
