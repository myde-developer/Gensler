import React from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [token, setToken] = React.useState(localStorage.getItem('token'))
  
  React.useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem('token'))
    }
    
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])
  
  React.useEffect(() => {
    if (!token && location.pathname !== '/login' && location.pathname !== '/register') {
      navigate('/login', { replace: true })
    }
  }, [token, navigate, location.pathname])

  if (!token) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-dark via-brand to-brand-light">
      <Nav />
      <main className="pt-4">
        <Outlet />
      </main>
    </div>
  )
}

export default App