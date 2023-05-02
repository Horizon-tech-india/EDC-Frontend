import { API } from './Post'

export async function UpdatePayload({ value, StartupId, token }) {
  const payload = {
    value,
    StartupId,
  }
  console.info(`PAYLOAD`, payload)
  return API('patch', '/admin/update-startup-details', payload, token)
    .then((res) => {
      console.log(res.data.data)
      console.log('application data')
    })
    .catch((error) => {
      console.error(error.message)
    })
}
