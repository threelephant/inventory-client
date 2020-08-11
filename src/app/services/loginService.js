import axios from 'axios'
import api from './auth/apiHost'
const urlLogin = `${api}/login`
const urlRegister = `${api}/register`
// const urlLogin = 'http://192.168.0.106:5000/api/login'
// const urlRegister = 'http://192.168.0.106:5000/api/register'

const login = async credentials => {
  const response = await axios.post(urlLogin, {}, credentials)
  return response.data
}

const register = async credentials => {
  const response = await axios.post(urlRegister, credentials)
  return response
}

export default { login, register }