import * as Yup from 'yup'

export const signupSchemaStep1 = Yup.object({
  firstName: Yup.string().required('Please enter your Full Name'),
  lastName: Yup.string().required('Please enter your Full Name'),
  email: Yup.string().email().required('Please enter your Email'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]\d{9}$/, {
      message: 'Please enter valid number.',
      excludeEmptyString: false,
    })
    .required('Please enter your Phone number'),
  password: Yup.string()
    .min(8, 'Password must be atleast 8 characters')
    .matches(/^(?=.*[a-z])/, 'Password must contain at least 1 lower case letter')
    .matches(/^(?=.*[A-Z])/, 'Password must contain at least 1 upper case letter')
    .matches(/^(?=.*[0-9])/, 'Password must contain at least 1 number')
    .matches(/^(?=.*[!@#\$%\^&\*])/, 'Password must contain at least 1 special case character')
    .required('Please enter a password'),
})

export const signupSchemaStep2 = Yup.object({
  startup_name: Yup.string().required('Please enter your Startup Name'),
  applying_to: Yup.string(),
  profession: Yup.string(),
  website_link: Yup.string(),
})

export const loginSchema = Yup.object({
  password: Yup.string().min(8, 'Password must be atleast 8 characters').required('Please enter your Password'),
  email: Yup.string().email().required('Please enter your Email'),
  rememberMe: Yup.bool(),
})

export const forgotPasswordSchemaStep1 = Yup.object({
  email: Yup.string().email().required('Please enter your Email'),
})

export const forgotPasswordSchemaStep3 = Yup.object({
  new_password: Yup.string()
    .min(8, 'Password must be atleast 8 characters')
    .matches(/^(?=.*[a-z])/, 'Password must contain at least 1 lower case letter')
    .matches(/^(?=.*[A-Z])/, 'Password must contain at least 1 upper case letter')
    .matches(/^(?=.*[0-9])/, 'Password must contain at least 1 number')
    .matches(/^(?=.*[!@#\$%\^&\*])/, 'Password must contain at least 1 special case character')
    .required('Please enter a password'),
  confirm_password: Yup.string().oneOf([Yup.ref('new_password'), null], 'Passwords must match'),
})

export const adminAddSchema = Yup.object({
  firstName: Yup.string().required('Please enter a first name'),
  lastName: Yup.string().required('Please enter a last name'),
  email: Yup.string().email().required('Please enter an Email'),
  password: Yup.string()
    .min(8, 'Password must be atleast 8 characters')
    .matches(/^(?=.*[a-z])/, 'Password must contain at least 1 lower case letter')
    .matches(/^(?=.*[A-Z])/, 'Password must contain at least 1 upper case letter')
    .matches(/^(?=.*[0-9])/, 'Password must contain at least 1 number')
    .matches(/^(?=.*[!@#\$%\^&\*])/, 'Password must contain at least 1 special case character')
    .required('Please enter a password'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]\d{9}$/, {
      message: 'Please enter a valid number.',
      excludeEmptyString: false,
    })
    .required('Please enter a Phone number'),
})

export const meetingAddSchema = Yup.object({
  title: Yup.string().required('Please enter a title'),
  dateTime: Yup.string().required('Please choose a date'),
  link: Yup.string().required('Please enter a link'),
})
export const eventAddSchema = Yup.object({
  title: Yup.string().required('Please enter a title'),
  dateTime: Yup.string().required('Please choose a date'),
  description: Yup.string().required('Please enter description'),
})

export const userCommonApplicationFormSchema = Yup.object({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string().email().required('Please enter your Email ID'),
  contact: Yup.string()
    .matches(/^[0-9]\d{9}$/, {
      message: 'Please enter a 10 digit valid number.',
      excludeEmptyString: false,
    })
    .required('Please enter your Phone number'),
  location: Yup.string().required('Please choose a location'), // applying from - PU, VSS, ASS, RSS, SSS
  institute: Yup.string(),
  otherInstitute: Yup.string(),
  aadhar: Yup.string().matches(/^[0-9]\d{9}$/, {
    message: 'Please enter a 12 digit valid aadhar number.',
    excludeEmptyString: false,
  }),
  category: Yup.string(), // application category - student,staff,alumni,other
  categoryOther: Yup.string(), //
  otherUniversity: Yup.string(),
  otherOrganisation: Yup.string(),
  designation: Yup.string(),
  enrollmentNum: Yup.string(),
  teamSize: Yup.string(),
  teamMembers: Yup.string(),
  title: Yup.string(),
  uniqueFeatures: Yup.string(),
  currentStage: Yup.string(),
})
