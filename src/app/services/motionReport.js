import axios from 'axios'
const url = 'http://localhost:3001/api/report_motion'
const urlTest = 'http://localhost:3001/api/report_motion_test'

const send = (params) => {
  const request = axios.post(url, params)
  return request.then(response => response.data)
}

const resTest = () => {
  const request = axios.get(urlTest)
  return request.then(response => response.data)
}

export default { send, resTest }