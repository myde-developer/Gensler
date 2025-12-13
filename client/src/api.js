import axios from 'axios'

const BASE_URL = 'https://gensler.onrender.com/api'

const api = axios.create({ 
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add token to requests ONLY for protected routes
api.interceptors.request.use(
  (config) => {
    if (!config.url.includes('/auth/register') && !config.url.includes('/auth/login')) {
      const token = sessionStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  }
)

export default api