import axios from 'axios'
const url = 'http://localhost:3001/api/objects/name'

const searchTest = (name) => {
  const request = axios.get(`${url}/${name.name}`)
  return request.then(response => { 
    return response.data
  })
}

const search = params => {
  const request = axios.post(url, params)
  return request.then(response => response.data)
}

export default { search, searchTest }