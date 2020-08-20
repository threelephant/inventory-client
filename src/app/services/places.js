import axios from 'axios'
import token from './auth/token'
import api from './auth/apiHost'
const urlDiv = `${api}/division`
const urlPlace = `${api}/placement`

const createDivision = (newObject) => {
  const request = axios.post(urlDiv, newObject, token)
  return request.then(response => response.data)
}

const createPlacement = (newObject) => {
  const request = axios.post(urlPlace, newObject, token)
  return request.then(response => response.data)
}

export default { createDivision, createPlacement }