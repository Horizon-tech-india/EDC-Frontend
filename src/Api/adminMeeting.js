import { useQuery } from '@tanstack/react-query'
import { API } from './Post'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export  function GetAllMeeting( token ) {
  // return API('get', 'admin/get-all-meeting-and-events', {}, token)
  //   .then((res) => {
  //     return res
  //   })
  //   .catch((error) => {
  //     return error
  //   })

  const {state} =useContext(AuthContext)

  return useQuery(['all-meeting'],()=>  API('get','admin/get-all-meeting-and-events',{},state.token,{
    cacheTime: 10 * 60 * 1000, // cache for 10 minutes
  }))
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
