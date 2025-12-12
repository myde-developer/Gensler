import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  
  function logout() {
    localStorage.removeItem('token')
    navigate('/login')
  }
  
  return (
    <nav className="glass-card sticky top-0 z-50 mx-6 mt-4 rounded-2xl shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-serif font-bold gradient-text">
            Gensler
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/" className="hover:text-accent-light transition-colors duration-300">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Work
              </span>
            </Link>
            <a href="#" className="hover:text-accent-light transition-colors duration-300">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                People
              </span>
            </a>
            <a href="#" className="hover:text-accent-light transition-colors duration-300">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Insights
              </span>
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {!token ? (
            <Link to="/login" className="btn-secondary">
              Sign In
            </Link>
          ) : (
            <button 
              onClick={logout}
              className="btn-secondary flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}