import axios from 'axios'
import token from './auth/token'
import apiHost from './auth/apiHost'
const url = `${apiHost}/report/balance`

const get = (division, placement) => {
  const request = axios.get(`${url}/division/${division}/placement/${placement}`, token)
  return request.then(response => {console.log("HLOL", response.data); return response.data})
}

export default { get }