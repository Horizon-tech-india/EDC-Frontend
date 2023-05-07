import { API } from './Post'



export async function DeleteAdmin({ email, token }) {
  return API('get', `admin/delete-admin?email=${email}`, {}, token)
    .then((res) => {
      return res
    })
    .catch((error) => {
      return error
    })
}
