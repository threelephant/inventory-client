import axios from 'axios'
const url = 'http://192.168.0.104:5000/api/operations'

const setToken = newToken => {
  return `bearer ${newToken.token}`
}

const getAll = () => {
  
  const request = axios.get(url, {}, { "auth": setToken(window.localStorage.getItem('loggedUser'))})
  return request.then(response => response.data.operations)
}

export default { getAll }