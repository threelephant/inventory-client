import axios from 'axios'
const url = 'http://localhost:3001/api/objects'
const postUrl = 'http://localhost:3001/api/object_post'

const getLatest = (id) => {
  const request = axios.get(`${url}/${id}`)
  return request.then(response => { 
    if (response.data.length !== 1) {
      return {
        object_id: "", 
        name: "",
        description: "",
        barcode: "",
        operation: "",
        division: "",
        placement: "",
        movement: "",
        movement_info: "",
        date: ""
      }
    }

    return response.data[0]
  })
}

const create = newObject => {
  const request = axios.post(postUrl, newObject)
  return request.then(response => response.data)
}

export default { getLatest, create }