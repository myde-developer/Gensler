import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  // Use sessionStorage for auto-clear when browser closes
  const token = sessionStorage.getItem('token')
  
  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/login" replace />
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