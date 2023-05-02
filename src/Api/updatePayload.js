import { API } from './Post'

export async function UpdatePayload({ value, StartupId, token }) {
  const payload = {
    startupId: StartupId,
    status: value,
  }
  console.info(`PAYLOAD`, payload)
  return API('patch', '/admin/update-startup-details', payload, token)
    .then((res) => {
      console.log(res.data.data)
      return res
    })
    .catch((error) => {
      console.error(error.message)
      return error
    })
}
