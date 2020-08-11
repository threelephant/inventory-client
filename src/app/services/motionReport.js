import axios from 'axios'
import token from './auth/token'
import api from './auth/apiHost'
const url = `${api}/report/motion`
// const url = 'http://localhost:3001/api/report_motion'
const urlTest = 'http://localhost:3001/api/report_motion_test'

const send = (params) => {
  const request = axios.post(url, params, token)
  return request.then(response => response.data)
}

const resTest = () => {
  const request = axios.get(urlTest)
  return request.then(response => response.data)
}

export default { send, resTest }