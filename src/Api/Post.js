import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


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

export function GetAllStartup(token) {
  console.log("sdf")
  return useQuery(['allStartUp'], () => API('get', '/admin/all-startup-details', {}, token),{
    cacheTime: 10 * 60 * 1000, // cache for 10 minutes
  })
}
