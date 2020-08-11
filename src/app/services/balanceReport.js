import axios from 'axios'
import token from './auth/token'
import apiHost from './auth/apiHost'
const url = `${apiHost}/report_balance`

const get = () => {
  const request = axios.get(url, token)
  return request.then(response => response.data)
}

export default { get }