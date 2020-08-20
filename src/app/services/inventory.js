import axios from 'axios'
import token from './auth/token'
import api from './auth/apiHost'
const url = `${api}/object/new`

const create = newObject => {
  const request = axios.post(url, newObject, token)
  return request.then(response => response.data)
}

export default { create }