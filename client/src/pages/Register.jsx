import React from 'react'
import api from '../api'
import { useNavigate, Link } from 'react-router-dom'

export default function Register() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const navigate = useNavigate()

  // Redirect if already logged in
  React.useEffect(() => {
    const token = sessionStorage.getItem('token')
    if (token) {
      navigate('/', { replace: true })
    }
  }, [navigate])

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    try {
      const res = await api.post('/auth/register', { name, email, password })
      // Use sessionStorage (clears when browser closes)
      sessionStorage.setItem('token', res.data.token)
      navigate('/', { replace: true })
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-accent/20"></div>
      
      <div className="relative w-full max-w-md z-10">
        <div className="glass-card shadow-2xl rounded-3xl p-10">
          <div className="text-center mb-10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
              <span className="text-3xl font-bold text-white">G</span>
            </div>
            <h2 className="text-4xl font-bold gradient-text mb-2">
              Create Account
            </h2>
            <p className="text-gray-400">Join our platform</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-300 rounded-xl">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-gray-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-gray-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-gray-500"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-center text-gray-400">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-semibold text-accent-light hover:text-white hover:underline"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}