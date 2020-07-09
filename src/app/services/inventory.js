import axios from 'axios'
const url = 'http://localhost:3001/api/object'

const create = newObject => {
  const request = axios.post(url, newObject)
  return request.then(response => response.data)
}

export default { create: create }