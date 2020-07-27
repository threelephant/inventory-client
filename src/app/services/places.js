import axios from 'axios'
const urlDiv = 'http://localhost:3001/api/setdivision'
const urlPlace = 'http://192.168.0.104:5000/api/placement'

const createDivision = (newObject) => {
  const request = axios.post(urlDiv, newObject)
  return request.then(response => response.data)
}

const createPlacement = (newObject) => {
  newObject.division = 'd1fc87f0-fe78-44b1-aaaf-9731152c862d'
  const request = axios.post(urlPlace, newObject)
  return request.then(response => response.data)
}

export default { createDivision, createPlacement }