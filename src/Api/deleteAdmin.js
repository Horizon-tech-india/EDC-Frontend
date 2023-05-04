import { API } from './Post'

export async function DeleteAdmin({ email, token }) {
  const payload = {}
  return API('get', `/admin/delete-admin?email=${email}`, payload, token)
    .then((res) => {
      console.log(res.data.data)
      return res
    })
    .catch((error) => {
      console.error(error.message)
      return error
    })
}
