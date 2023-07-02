import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { API, ResendOtp } from '../../Api/Post'
import { forgotPasswordSchemaStep1 } from '../../validation/formSchema'
import '../../styles/login.scss'
import '../../styles/signup.scss'
import mail from '../../assets/icons/svg/mail.svg'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { useMutation } from '@tanstack/react-query'

const initialValues = {
  email: '',
}

const SignUpStep1 = ({ setEmail }) => {
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  // const resendMutation = ResendOtp()
  const resendMutation = useMutation({
    mutationFn: (values) => ResendOtp(values),
    onError: (values) => alert('error', values),
    onSuccess: () => {
      setOpen(true)
      setIsLoading(false)
      setTimeout(() => {
        navigate('/forgot-password/2')
      }, 1000)
    },
  })
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchemaStep1,
    onSubmit: (values) => {
      setIsLoading(true)

      setEmail(values.email)
      const body = { email: values.email, isForgotPassword: true }

      resendMutation.mutate(body)

      // setOpen(true)
      // resendMutation.isSuccess
      //   ? setTimeout(() => {
      //       setIsLoading(false)
      //       navigate('/forgot-password/2')
      //     }, 10000)
      //   : setIsLoading(false)

      // API('post', '/api/users/resend-otp', body, '')
      //   .then((response) => {
      //     setTimeout(() => {
      //       navigate('/forgot-password/2')
      //       setIsLoading(false)
      //     }, 1000)
      //   })
      //   .catch((error) => {
      //     console.error(error)
      //     setError(error.response.data.message)
      //     setOpen(true)
      //     setTimeout(() => {
      //       setIsLoading(false)
      //     }, 1000)
      //   })

      // resendMutation.isSuccess ? setIsLoading(false).then(()=> navigate('/forgot-password/2')) : setIsLoading(false);
    },
  })

  return (
    <>
      <div className="login__head">
        <h2>Forgot Password</h2>
        <p>Enter the email of your account and we will send the email to reset your password</p>
      </div>
    </>
  )
}

export default SignUpStep1
