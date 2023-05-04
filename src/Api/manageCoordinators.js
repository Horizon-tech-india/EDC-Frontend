import { API } from './Post'

export async function GetAllAdmin({ token }) {
  return API('get', 'admin/get-all-admin', {}, token)
    .then((res) => {
      return res
    })
    .catch((error) => {
      return error
    })
}

export async function CreateNewAdmin({ body, token }) {
  return API('post', 'admin/create-admin', body, token)
    .then((res) => {
      return res
    })
    .catch((error) => {
      return error
    })
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
