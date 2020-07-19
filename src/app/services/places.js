import axios from 'axios'
const urlDiv = 'http://localhost:3001/api/setdivision'
const urlPlace = 'http://localhost:3001/api/setplacement'

const createDivision = (newObject) => {
  const request = axios.post(urlDiv, newObject)
  return request.then(response => response.data)
}

const createPlacement = (newObject) => {
  const request = axios.post(urlPlace, newObject)
  return request.then(response => response.data)
}

export default { createDivision, createPlacement }