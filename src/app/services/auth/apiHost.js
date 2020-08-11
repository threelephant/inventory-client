const host = process.env.HOST || "http://192.168.0.106"
const port = process.env.PORT || 5000

const api = `${host}:${port}/api`

export default api