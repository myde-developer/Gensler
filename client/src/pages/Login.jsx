import React from 'react'
import api from '../api'
import { useNavigate, Link, useLocation } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [registrationSuccess, setRegistrationSuccess] = React.useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  React.useEffect(() => {
    const token = sessionStorage.getItem('token')
    if (token) {
      navigate('/', { replace: true })
    }
    
    // Check if redirected from registration
    if (location.state?.fromRegister) {
      setRegistrationSuccess(true)
      // Clear the state after showing message
      window.history.replaceState({}, document.title)
    }
  }, [navigate, location])

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setRegistrationSuccess(false)
    
    try {
      const res = await api.post('/auth/login', { email, password })
      sessionStorage.setItem('token', res.data.token)
      navigate('/', { replace: true })
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed. Please check your credentials.')
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
              Welcome Back
            </h2>
            <p className="text-gray-400">Sign in to your account</p>
          </div>

          {registrationSuccess && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 text-green-300 rounded-xl">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Registration successful! Please log in with your credentials.</span>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-300 rounded-xl">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
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
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-center text-gray-400">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="font-semibold text-accent-light hover:text-white hover:underline"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}