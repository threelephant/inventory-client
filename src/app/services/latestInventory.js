import axios from 'axios'
const url = 'http://localhost:3001/api/objects'

const getLatest = (id) => {
  const request = axios.get(`${url}/${id}`)
  return request.then(response => response.data[0])
}

export default { getLatest }