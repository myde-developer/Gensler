import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  const token = sessionStorage.getItem('token')
  
  if (!token) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App