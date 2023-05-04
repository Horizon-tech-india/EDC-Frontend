import { API } from './Post'

export async function GetAllEvent({ token }) {
  return API('get', 'admin/get-all-meeting-and-events', {}, token)
    .then((res) => {
      return res
    })
    .catch((error) => {
      return error
    })
}

export async function CreateNewEvent({ body, token }) {
  return API('post', 'admin/schedule-event-meeting', body, token)
    .then((res) => {
      return res
    })
    .catch((error) => {
      return error
    })
}
