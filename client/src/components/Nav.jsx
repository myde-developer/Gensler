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
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-brand text-lg font-serif">Gensler</Link>
          <div className="hidden md:flex items-center gap-4 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900">Work</Link>
            <a className="hover:text-gray-900" href="#">People</a>
            <a className="hover:text-gray-900" href="#">Insights</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {!token ? (
            <>
              <Link to="/login" className="text-sm text-gray-700">Sign in</Link>
            </>
          ) : (
            <button onClick={logout} className="text-sm text-gray-700">Logout</button>
          )}
        </div>
      </div>
    </nav>
  )
}
