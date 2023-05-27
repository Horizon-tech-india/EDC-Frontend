import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
const BASE_URL = process.env.REACT_APP_API_URL
///  HOW TO USE   const { data, isLoading, isError, refetch } = fnc('your-token');
const queryConfig = {
  cacheTime: 10 * 60 * 10000,
  refetchOnWindowFocus: false,
  refetchOnMount: false,
  staleTime: Infinity,
}

// ALL GET URLS
const url = {
  allStartUp: '/admin/all-startup-details',
  statsKey: '/admin/get-lastmonth-startups?days=30',
  allMeetingEvents: '/admin/get-all-meeting-and-events',
  scheduleEvent: '/admin/schedule-event-meeting',
  allMeetingsEventsData: '/admin/get-all-meeting-and-events?date',
  allMeetingsEventsDates: '/admin/event-meeting-dates?yearAndMonth',
  deleteAdmin: '/admin/delete-admin?email',
  getAllAdmin: '/admin/get-all-admin',
  getAdminNotifications: '/admin/notifications',
  createNewAdmin: '/admin/create-admin',
  updatePayload: '/admin/update-startup-details',
  deleteStartup: '/admin/delete-startup?startupId',
  userSignup: '/users/signup',
  userVerifyMailOtp: '/users/verify-mail-otp',
  userResendOtp: '/users/resend-otp',
  setNewPassword: '/users/set-new-password',
  getStartupsUserEmail: '/admin/get-startups-user-email',
  userStartupStatus: '/users/startup-status',
  clearNotifications: '/admin/clear-notifications?',
  finance: '/admin/finance',
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
export function GetStartupsUserEmail(token) {
  const queryKey = 'getStartupsUserEmail'
  const queryFn = () => API('get', url.getStartupsUserEmail, {}, token)
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

// Calendar Meetings Events Highlighted dates api

export function GetAllMeetingsEventsDates(currentMonth, token) {
  const queryKey = 'allMeetingsEventsDates'
  const queryFn = () => API('get', `${url.allMeetingsEventsDates}=${currentMonth}`, {}, token)
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

export async function DeleteStartup(rowData, token) {
  const payload = {}
  return API('DELETE', `${url.deleteStartup}=${rowData}`, payload, token)
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

export function GetAdminNotifications(token) {
  const queryKey = 'getAdminNotifications'
  const queryFn = () => API('get', url.getAdminNotifications, {}, token)
  const { refetch, ...queryResult } = useQuery([queryKey], queryFn, queryConfig)
  const refetchAllStartup = () => {
    refetch()
  }
  return {
    refetch: refetchAllStartup,
    ...queryResult,
  }
}

export async function ClearAdminNotifications({ query, token }) {
  const payload = {}
  return API('get', `${url.clearNotifications}${query}`, payload, token)
    .then((res) => {
      console.log(res.data.data)
      return res
    })
    .catch((error) => {
      console.error(error.message)
      return error
    })
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
  return API('post', '/users/startup-details', values, token)
    .then((res) => {
      return res
    })
    .catch((error) => {
      return error
    })
}

export function GetUserStartupStatus(token) {
  const queryKey = 'userStartupStatus'
  const queryFn = () => API('get', url.userStartupStatus, {}, token)
  const { refetch, ...queryResult } = useQuery([queryKey], queryFn, queryConfig)
  const refetchAllStartup = () => {
    refetch()
  }
  return {
    refetch: refetchAllStartup,
    ...queryResult,
  }
}

// Signup1 Api

export const Signup1 = (values) => {
  return useMutation(async (formData) => {
    const response = await API('post', url.userSignup, formData, '')
    return response.data
  })
}

// verifyOtp APi
export const VerifyOtp = () => {
  return useMutation(async (values) => {
    const response = await API('post', url.userVerifyMailOtp, values, '')
    return response.data
  })
}

// Resend Otp Api
export const ResendOtp = () => {
  return useMutation(async (formData) => {
    const response = await API('post', url.userResendOtp, formData, '')
    return response.data
  })
}

// ForgotPAssword Api
export const ForgotPassword = () => {
  return useMutation(async (body) => {
    const response = await API('post', url.setNewPassword, body, '')
    return response.data
  })
}

// Startup detail insert
export const StartupData = (formdata, token) => {
  API('post', url.submitApplicationForm, formdata, token)
}

// export async function SubmitFinance() {
 
//   return useMutation(async(values )=>{
//    const response = await API('post', url.finance, values, '');
//    return response.data;
//   })
// }

export const SubmitFinance = () => {
  return useMutation(async (formData) => {
    const response = await API('post', url.finance, formData, '')
    return response.data
  })
}
