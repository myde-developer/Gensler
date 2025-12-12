import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  React.useEffect(() => {
    if (!token) navigate('/login')
  }, [token])

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Nav />
      <main className="py-8">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default App
