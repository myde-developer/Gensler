import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import './index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
