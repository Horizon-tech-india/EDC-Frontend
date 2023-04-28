import axios from 'axios'

export function API(method, endpoint, payload, token) {
  const url = 'http://localhost:9000'
  const encrypted = '' || token
  console.log(endpoint, encrypted)
  return axios({
    method: method.toLowerCase(),
    url: `${url}/${endpoint.startsWith('/') ? endpoint.slice(1) : endpoint}`,
    data: payload,
    headers: {
      Authorization: `Bearer ${encrypted}`,
    },
  })
}
