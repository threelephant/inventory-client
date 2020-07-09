import axios from 'axios'
const url = 'http://localhost:3001/api/division'

const get = () => {
  const request = axios.get(url)
  return request.then(response => response.data)
}

const getEnglish = () => {
  const request = axios.get(`${url}/english`)
  return request.then(response => response.data)
}

export default { get, getEnglish }