import axios from 'axios'
import { useQuery } from 'react-query'

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
  const queryFn = () => API('get', '/admin/all-startup-details', {}, token)
  const queryConfig = {
    cacheTime: 10 * 60 * 10000,
    refetchOnWindowFocus: false, // disable refetching when the window gains focus
    refetchOnMount: false, // disable refetching on initial mount
  }
  const { refetch, ...queryResult } = useQuery(queryKey, queryFn, queryConfig)
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
  const queryFn = () => API('get', '/admin/get-lastmonth-startups?days=60', {}, token)
  const queryConfig = {
    cacheTime: 10 * 60 * 10000,
    refetchOnWindowFocus: false, // disable refetching when the window gains focus
    refetchOnMount: false, // disable refetching on initial mount
  }
  const { refetch, ...queryResult } = useQuery(queryKey, queryFn, queryConfig)
  const refetchAllStartup = () => {
    refetch()
  }
  return {
    refetch: refetchAllStartup,
    ...queryResult,
  }
}
