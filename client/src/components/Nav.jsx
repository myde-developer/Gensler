import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {
  const navigate = useNavigate()
  
  function logout() {
    // Clear session storage
    sessionStorage.removeItem('token')
    // Force redirect to login
    navigate('/login', { replace: true })
  }
  
  return (
    <nav className="glass-card sticky top-0 z-50 mx-6 mt-4 rounded-2xl shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-serif font-bold gradient-text">
            Gensler
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={logout}
            className="btn-secondary flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}