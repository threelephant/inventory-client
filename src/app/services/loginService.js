import axios from 'axios'
const url = 'http://192.168.0.104:5000/api/login'

const login = async credentials => {
  console.log(credentials)
  const response = await axios.post(url, {}, credentials)
  return response.data
}

export default { login }