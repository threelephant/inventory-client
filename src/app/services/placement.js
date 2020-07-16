import axios from 'axios'
const url = 'http://localhost:3001/api/placement'

const get = (division) => {
  const request = axios.get(`${url}/${division}`)
  return request.then(response => { 
    if (response.data.length > 1) {
      return []
    }

    if (response.data[0] === undefined) {
      return []
    }
    
    return response.data[0].array
  })
}

export default { get }