const getToken = () => {
  const token = window.localStorage.getItem('loggedUser')
  const authHeader = `Bearer ${token}`
  const config = {
    headers: {
      "Authorization": authHeader
    }
  }
  
  return config
}

const token = getToken()

export default token