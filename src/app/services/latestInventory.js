import axios from 'axios'
import token from './auth/token'
import api from './auth/apiHost'
const url = `${api}/object`
// const url = 'http://localhost:3001/api/objects/object_id'
// const postUrl = 'http://localhost:3001/api/object_post'

const getLatest = (id) => {
  const request = axios.get(`${url}/${id}/latest`)
  return request.then(response => { 
    console.log(response.status)
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
  const request = axios.post(url, newObject, token)
  return request.then(response => response.data)
}

export default { getLatest, create }