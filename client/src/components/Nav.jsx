import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  function logout() {
    sessionStorage.removeItem('token')
    navigate('/login', { replace: true })
  }
  
  const navItems = [
    'Research & Insights',
    'Expertise', 
    'Projects',
    'People',
    'Offices',
    'About',
    'Careers',
    'Contact Us'
  ]
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4 border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <Link 
            to="/" 
            className="flex items-center"
          >
            <span className="font-bold text-2xl text-gray-900">
              Gensler
            </span>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item}
                to={`/${item.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                className="text-gray-700 hover:text-black text-sm transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
          
          <button 
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`w-6 h-0.5 bg-gray-900 transition-all ${menuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
            <div className={`w-6 h-0.5 my-1.5 bg-gray-900 transition-all ${menuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-900 transition-all ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
          </button>
        </div>
        
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="space-y-4 pb-4">
            {navItems.map((item) => (
              <Link 
                key={item}
                to={`/${item.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                className="block text-gray-700 hover:text-black py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}