import React from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState(null)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const res = await api.post('/auth/register', { name, email, password })
      localStorage.setItem('token', res.data.token)
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.error || 'Register failed')
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white p-10 rounded shadow-lg w-full">
      <h2 className="text-2xl font-bold mb-4">Create account</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input className="mt-1 w-full p-2 border rounded" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input className="mt-1 w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" className="mt-1 w-full p-2 border rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded inline-block" type="submit">Create account</button>
        </div>
      </div>
    </div>
  )
}
