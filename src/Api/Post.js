import axios from 'axios'

export function API(method, endpoint, payload) {
  const url = 'http://localhost:9000'
  const encrypted = localStorage.getItem('token')
  return axios({
    method: method.toLowerCase(),
    url: `${url}/${endpoint.startsWith('/') ? endpoint.slice(1) : endpoint}`,
    data: payload,
    headers: {
      Authorization: `Bearer ${encrypted}`,
    },
  })
}
