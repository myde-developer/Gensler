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
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <Link 
            to="/" 
            className="flex items-center space-x-3 transform transition-transform hover:scale-105"
          >
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className={`font-bold text-2xl transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Gensler
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink scrolled={scrolled} to="/research">Research & Insights</NavLink>
            <NavLink scrolled={scrolled} to="/expertise">Expertise</NavLink>
            <NavLink scrolled={scrolled} to="/projects">Projects</NavLink>
            <NavLink scrolled={scrolled} to="/people">People</NavLink>
            <NavLink scrolled={scrolled} to="/offices">Offices</NavLink>
            <NavLink scrolled={scrolled} to="/about">About</NavLink>
            
            <button
              onClick={logout}
              className={`px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 ${
                scrolled 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
              }`}
            >
              Logout
            </button>
          </div>
          
          <button 
            className="md:hidden z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-gray-900' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
            <div className={`w-6 h-0.5 my-1.5 transition-all ${scrolled ? 'bg-gray-900' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-gray-900' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
          </button>
        </div>
        
        <div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>
          <div className={`absolute top-0 right-0 h-full w-64 bg-white transform transition-transform duration-500 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="p-8 pt-20">
              <div className="space-y-6">
                <MobileNavLink to="/research">Research & Insights</MobileNavLink>
                <MobileNavLink to="/expertise">Expertise</MobileNavLink>
                <MobileNavLink to="/projects">Projects</MobileNavLink>
                <MobileNavLink to="/people">People</MobileNavLink>
                <MobileNavLink to="/offices">Offices</MobileNavLink>
                <MobileNavLink to="/about">About</MobileNavLink>
                
                <div className="pt-6 border-t border-gray-200">
                  <button
                    onClick={logout}
                    className="w-full px-4 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ scrolled, to, children }) {
  return (
    <Link 
      to={to}
      className={`font-medium transition-all relative group text-sm ${
        scrolled ? 'text-gray-700 hover:text-black' : 'text-white/90 hover:text-white'
      }`}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full"></span>
    </Link>
  )
}

function MobileNavLink({ to, children }) {
  return (
    <Link 
      to={to}
      className="block px-4 py-3 text-gray-900 font-medium hover:bg-gray-100 rounded-lg"
    >
      {children}
    </Link>
  )
}