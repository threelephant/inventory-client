import axios from 'axios'
import token from './auth/token'
import api from './auth/apiHost'
const url = `${api}/division`

const get = () => {
  const request = axios.get(url, token)
  return request.then(response => response.data)
}

const getEnglish = () => {
  const request = axios.get(`${url}/english`)
  return request.then(response => response.data)
}

export default { get, getEnglish }