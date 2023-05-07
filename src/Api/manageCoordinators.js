import { useQuery } from '@tanstack/react-query'
import { API } from './Post'

export  function GetAllAdmin( token ) {
  return useQuery(['all-admin'], () => API('get', 'admin/get-all-admin', {}, token),{
    cacheTime: 10 * 60 * 1000, // cache for 10 minutes
  })
}

export  function CreateNewAdmin({ body, token }) {
  // return API('post', 'admin/create-admin', body, token)
  //   .then((res) => {
  //     return res
  //   })
  //   .catch((error) => {
  //     return error
  //   })
  
}

export async function DeleteAdmin({ email, token }) {
  return API('get', `admin/delete-admin?email=${email}`, {}, token)
    .then((res) => {
      return res
    })
    .catch((error) => {
      return error
    })
}
