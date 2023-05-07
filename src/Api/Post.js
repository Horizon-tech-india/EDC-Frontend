import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


const queryConfig = {
  cacheTime: 10 * 60 * 10000,
  refetchOnWindowFocus: false, // disable refetching when the window gains focus
  refetchOnMount: false, // disable refetching on initial mount
}

const url ={
  allStartUp:'/admin/all-startup-details',
  statsKey:'/admin/get-lastmonth-startups?days=60',
  allMeetingEvents:'/admin/get-all-meeting-and-events',
  scheduleEvent:'/admin/schedule-event-meeting',
  allMeetingsEventsData:'admin/get-all-meeting-and-events?date',
  deleteAdmin:'/admin/delete-admin?email',
  getAllAdmin:'/admin/get-all-admin',
  createNewAdmin:'admin/create-admin',
  updatePayload:'/admin/update-startup-details',

}
export function API(method, endpoint, payload, token) {
  const url = 'http://localhost:9000'
  const encrypted = '' || token
  //console.log(endpoint, encrypted)
  return axios({
    method: method.toLowerCase(),
    url: `${url}/${endpoint.startsWith('/') ? endpoint.slice(1) : endpoint}`,
    data: payload,
    headers: {
      Authorization: `Bearer ${encrypted}`,
    },
  })
}

///  HOW TO USE   const { data, isLoading, isError, refetch } = fnc('your-token');

export function GetAllStartup(token) {
  const queryKey = 'allStartUp'
  const queryFn = () => API('get', url.allStartUp, {}, token)
  
  const { refetch, ...queryResult } = useQuery({queryKey:[queryKey], queryFn:queryFn, queryConfig})
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
  
  const { refetch, ...queryResult } = useQuery({queryKey:[queryKey], queryFn:queryFn, queryConfig})
  const refetchAllStartup = () => {
    refetch()
  }
  return {
    refetch: refetchAllStartup,
    ...queryResult,
  }
}

//Event api

export  function GetAllEvent( token ) {
  const queryKey = 'allMeetingEvents'
  const queryFn = () => API('get', url.allMeetingEvents, {}, token)
  
  const { refetch, ...queryResult } = useQuery({queryKey:[queryKey], queryFn:queryFn, queryConfig})
  const refetchAllStartup = () => {
    refetch()
  }
  return {
    refetch: refetchAllStartup,
    ...queryResult,
  }
}

export  function CreateNewEvent({ body, token }) {
  return API('post', '/admin/schedule-event-meeting', body, token)
    .then((res) => {
      return res
    })
    .catch((error) => {
      return error
    })
}

//Meeting api

export  function GetAllMeeting( token ) {
  const queryKey = 'allMeetingEvents'
  const queryFn = () => API('get', url.allMeetingEvents, {}, token)
  
  const { refetch, ...queryResult } = useQuery({queryKey:[queryKey], queryFn:queryFn, queryConfig})
  const refetchAllStartup = () => {
    refetch()
  }
  return {
    refetch: refetchAllStartup,
    ...queryResult,
  }
 
}

export async function CreateNewMeeting({ body, token }) {
  return API('post', 'admin/schedule-event-meeting', body, token)
    .then((res) => {
      return res
    })
    .catch((error) => {
      return error
    })
}

// Calender Meeting Events Api

export  function GetAllMeetingsEventsData( currentDate, token ) {

  const queryKey = 'allMeetingsEventsData'
  const queryFn = () => API('get', `${url.allMeetingsEventsData}=${currentDate}`, {}, token)
  
  const { refetch, ...queryResult } = useQuery({queryKey:[queryKey], queryFn:queryFn, queryConfig})
  const refetchAllStartup = () => {
    refetch()
  }
  return {
    refetch: refetchAllStartup,
    ...queryResult,
  }
 
}

// Admin Delete Api

export  async function DeleteAdmin({ email, token }) {
  const payload = {}

  return API('get', `${url.deleteAdmin}=${email}`, payload, token)
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

export  function GetAllAdmin( token ) {

  const queryKey = 'getAllAdmin'
  const queryFn = () =>  API('get', url.getAllAdmin, {}, token)
  
  const { refetch, ...queryResult } = useQuery({queryKey:[queryKey], queryFn:queryFn, queryConfig})
  const refetchAllStartup = () => {
    refetch()
  }
  return {
    refetch: refetchAllStartup,
    ...queryResult,
  }

}

export  async function CreateNewAdmin({ body, token }) {
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
  console.info(`PAYLOAD`, payload)
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
