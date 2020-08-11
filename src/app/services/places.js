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
  newObject.division = 'd1fc87f0-fe78-44b1-aaaf-9731152c862d'
  const request = axios.post(urlPlace, newObject, token)
  return request.then(response => response.data)
}

export default { createDivision, createPlacement }