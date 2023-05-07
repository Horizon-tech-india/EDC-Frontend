import { API } from './Post'

export async function GetAllMeetingsEventsData({ currentDate, token }) {
  return API('get', `admin/get-all-meeting-and-events?date=${currentDate}`, {}, token)
    .then((res) => {
      return res
    })
    .catch((error) => {
      return error
    })
}
