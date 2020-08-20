import axios from 'axios'
import token from './auth/token'
import api from './auth/apiHost'
const url = `${api}/object/find`
// const url = 'http://localhost:3001/api/objects/name'

const searchTest = (name) => {
  const request = axios.get(`${url}/${name.name}`)
  return request.then(response => { 
    return response.data
  })
}

const search = params => {
  const request = axios.post(url, params, token)
  return request.then(response => {console.log("HLOL", response.data); return response.data})
}

export default { search, searchTest }