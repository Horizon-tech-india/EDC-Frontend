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

export function GetAllStartup(token){
  return new Promise((resolve, reject) => {
    fetch('http://localhost:9000/admin/all-startup-details' , { 
      method: 'get', 
      headers: new Headers({
          'Authorization': 'Bearer '+ token, 
      })
    }).then(res =>{
      resolve(res.json()) 
    }
    ).catch(err => {
      reject(err)
    })
  });
}