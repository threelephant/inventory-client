import axios from 'axios'
import token from './auth/token'
import api from './auth/apiHost'
const url = `${api}/placement`
// const url = 'http://localhost:3001/api/placement'

const get = (division) => {
  const request = axios.get(`${url}/${division}`, token)
  return request.then(response => response.data)
}

export default { get }