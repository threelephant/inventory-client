import axios from 'axios'
const url = 'http://localhost:3001/api/placement'

const get = (division) => {
  const request = axios.get(`${url}/${division}`)
  return request.then(response => response.data[0].array)
}

export default { get }