import axios from 'axios'
const urlLogin = 'http://192.168.0.104:5000/api/login'
const urlRegister = 'http://192.168.0.104:5000/api/register'

const login = async credentials => {
  const response = await axios.post(urlLogin, {}, credentials)
  return response.data
}

const register = async credentials => {
  const response = await axios.post(urlRegister, credentials)
  console.log(response)
  return response
}

export default { login, register }