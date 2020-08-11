import axios from 'axios'
import token from './auth/token'
import api from './auth/apiHost'
const url = `${api}/operations`

const getAll = () => {
  const request = axios.get(url, token)
  return request.then(response => response.data.operations)
}

export default { getAll }