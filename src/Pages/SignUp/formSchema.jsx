import * as Yup from 'yup'

export const signupSchemaStep1 = Yup.object({
  firstName: Yup.string().required('Please enter your Full Name'),
  lastName: Yup.string().required('Please enter your Full Name'),
  email: Yup.string().email().required('Please enter your Email'),
  phoneNumber: Yup.string().matches(/^[0-9]\d{9}$/, {
    message: 'Please enter valid number.',
    excludeEmptyString: false,
  }),
  password: Yup.string().min(6).required('Please enter your Password'),
})

export const signupSchemaStep2 = Yup.object({
  startup_name: Yup.string().required('Please enter your Startup Name'),
  applying_to: Yup.string(),
  profession: Yup.string(),
  website_link: Yup.string(),
})
