import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
const BASE_URL = process.env.REACT_APP_API_URL
///  HOW TO USE   const { data, isLoading, isError, refetch } = fnc('your-token');
const queryConfig = {
  // cacheTime: 10 * 60 * 1000,
  refetchOnWindowFocus: true,
  refetchOnMount: true,
  // staleTime: Infinity,
}

// ALL GET URLS
const url = {
<<<<<<< Updated upstream
  allStartUp: '/admin/all-startup-details',
  statsKey: '/admin/get-lastmonth-startups?days=30',
  allMeetingEvents: '/admin/get-all-meeting-and-events',
  scheduleEvent: '/admin/schedule-event-meeting',
  allMeetingsEventsData: '/admin/get-all-meeting-and-events?date',
  deleteAdmin: '/admin/delete-admin?email',
  getAllAdmin: '/admin/get-all-admin',
  createNewAdmin: '/admin/create-admin',
  updatePayload: '/admin/update-startup-details',
  submitApplicationForm: '/users/startup-details',
=======
  allStartUp: '/api/admin/all-startup-details',
  statsKey: '/api/admin/get-lastmonth-startups?days=30',
  allMeetingEvents: '/api/admin/get-all-meeting-and-events',
  scheduleEvent: '/api/admin/schedule-event-meeting',
  allMeetingsEventsData: '/api/admin/get-all-meeting-and-events?date',
  deleteAdmin: '/api/admin/delete-admin?email',
  getAllAdmin: '/api/admin/get-all-admin',
  createNewAdmin: '/api/admin/create-admin',
  updatePayload: '/api/admin/update-startup-details',
  userSignup:'/users/signup',
  userVerifyMailOtp: '/users/verify-mail-otp',
  userResendOtp:'/users/resend-otp',
  setNewPassword:'/users/set-new-password'
>>>>>>> Stashed changes
}
export function API(method, endpoint, payload, token) {
  const encrypted = '' || token
  return axios({
    method: method.toLowerCase(),
    url: `${BASE_URL}/${endpoint.startsWith('/') ? endpoint.slice(1) : endpoint}`,
    data: payload,
    headers: {
      Authorization: `Bearer ${encrypted}`,
    },
  })
}

export function GetAllStartup(token) {
  const queryKey = 'allStartUp'
  const queryFn = () => API('get', url.allStartUp, {}, token)
  const { refetch, ...queryResult } = useQuery([queryKey], queryFn, queryConfig)
  const refetchAllStartup = () => {
    refetch()
  }
  return {
    refetch: refetchAllStartup,
    ...queryResult,
  }
}

export function GetStatsNumber(token) {
  const queryKey = 'statsKey'
  const queryFn = () => API('get', url.statsKey, {}, token)
  const { refetch, ...queryResult } = useQuery([queryKey], queryFn, queryConfig)
  const refetchAllStartup = () => {
    refetch()
  }
  return {
    refetch: refetchAllStartup,
    ...queryResult,
  }
}

//Event api

export function GetAllEvent(token) {
  const queryKey = 'allMeetingEvents'
  const queryFn = () => API('get', url.allMeetingEvents, {}, token)
  const { refetch, ...queryResult } = useQuery([queryKey], queryFn, queryConfig)
  const refetchAllStartup = () => {
    refetch()
  }
  return {
    refetch: refetchAllStartup,
    ...queryResult,
  }
}

export function CreateNewEvent({ body, token }) {
  return API('post', '/admin/schedule-event-meeting', body, token)
    .then((res) => {
      return res
    })
    .catch((error) => {
      return error
    })
}

//Meeting api

export function GetAllMeeting(token) {
  const queryKey = 'allMeetingEvents'
  const queryFn = () => API('get', url.allMeetingEvents, {}, token)
  const { refetch, ...queryResult } = useQuery([queryKey], queryFn, queryConfig)
  const refetchAllStartup = () => {
    refetch()
  }
  return {
    refetch: refetchAllStartup,
    ...queryResult,
  }
}

export async function CreateNewMeeting({ body, token }) {
  return API('post', '/admin/schedule-event-meeting', body, token)
    .then((res) => {
      return res
    })
    .catch((error) => {
      return error
    })
}

// Calender Meeting Events Api

export function GetAllMeetingsEventsData(currentDate, token) {
  const queryKey = 'allMeetingsEventsData'
  const queryFn = () => API('get', `${url.allMeetingsEventsData}=${currentDate}`, {}, token)
  const { refetch, ...queryResult } = useQuery([queryKey], queryFn, queryConfig)
  const refetchAllStartup = () => {
    refetch()
  }
  return {
    refetch: refetchAllStartup,
    ...queryResult,
  }
}

// Admin Delete Api

export async function DeleteAdmin({ email, token }) {
  const payload = {}
  return API('DELETE', `${url.deleteAdmin}=${email}`, payload, token)
    .then((res) => {
      console.log(res.data.data)
      return res
    })
    .catch((error) => {
      console.error(error.message)
      return error
    })
}

//Manage and Cordinate Api

export function GetAllAdmin(token) {
  const queryKey = 'getAllAdmin'
  const queryFn = () => API('get', url.getAllAdmin, {}, token)
  const { refetch, ...queryResult } = useQuery([queryKey], queryFn, queryConfig)
  const refetchAllStartup = () => {
    refetch()
  }
  return {
    refetch: refetchAllStartup,
    ...queryResult,
  }
}

export async function CreateNewAdmin(body, token) {
  return API('post', url.createNewAdmin, body, token)
    .then((res) => {
      return res
    })
    .catch((error) => {
      return error
    })
}

// Upload Payload Api

export async function UpdatePayload({ value, StartupId, token }) {
  const payload = {
    startupId: StartupId,
    status: value,
  }
  return API('patch', url.updatePayload, payload, token)
    .then((res) => {
      console.log(res.data.data)
      return res
    })
    .catch((error) => {
      console.error(error.message)
      return error
    })
}

// submit user common application form
export async function SubmitApplicationForm({ values, token }) {
  return API('post', url.submitApplicationForm, values, token)
    .then((res) => {
      return res
    })
    .catch((error) => {
      return error
    })
}

// Signup1 Api

export const signup1 = (values) => {
  API('post', url.userSignup, values, '')
}

// verifyOtp APi
export const VerifyOtp = (values) => {
<<<<<<< Updated upstream
  API('post', '/users/verify-mail-otp', values, '')
}

// Resend Otp Api
export const ResendOtp = (body) => {
  API('post', '/users/resend-otp', body, '')
}
=======
  API('post', url.userVerifyMailOtp, values, '')
};

// Resend Otp Api
export const ResendOtp = (body) => {
  API('post', url.userResendOtp , body, '')
};
>>>>>>> Stashed changes

// ForgotPAssword Api
export const ForgotPassword = (body) => {
  API('post', url.setNewPassword, body, '')
}

// Startup detail insert
export const StartupData = (formdata, token) => {
  API('post', '/api/users/startup-details', formdata, token)
}