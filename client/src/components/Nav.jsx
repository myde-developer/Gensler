import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)
  
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
    { 
      name: 'Research & Insights', 
      hasSubmenu: true,
      subItems: [
        'Gensler Research Institute',
        'Latest Research & Insights',
        'Design Forecast',
        'dialogue Blog',
        'Workplace Surveys',
        'City Pulse Survey'
      ]
    },
    { 
      name: 'Expertise', 
      hasSubmenu: true,
      subItems: [
        'Aviation',
        'Brand Design',
        'Cities & Urban Design',
        'Commercial Office',
        'Cultural & Civic',
        'Education',
        'Healthcare',
        'Hospitality',
        'Industrial & Logistics',
        'Mixed-Use',
        'Residential',
        'Retail',
        'Science & Technology',
        'Sports',
        'Transportation',
        'Workplace'
      ]
    },
    { 
      name: 'Projects', 
      hasSubmenu: true,
      subItems: [
        'Featured Projects',
        'All Projects',
        'By Sector',
        'By Location'
      ]
    },
    { 
      name: 'People', 
      hasSubmenu: true,
      subItems: [
        'Leadership',
        'Our People',
        'Designers',
        'By Office'
      ]
    },
    { 
      name: 'Offices', 
      hasSubmenu: true,
      subItems: [
        'North America',
        'Latin America',
        'Europe',
        'Middle East',
        'Greater China',
        'Asia Pacific'
      ]
    },
    { 
      name: 'About', 
      hasSubmenu: true,
      subItems: [
        'Firm Profile',
        'Our Impact',
        'Awards',
        'In the Media',
        'Press Releases'
      ]
    },
    { 
      name: 'Careers', 
      hasSubmenu: false,
      path: '/careers'
    },
    { 
      name: 'Contact Us', 
      hasSubmenu: false,
      path: '/contact'
    }
  ]
  
  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-0' : 'bg-white py-0 border-b border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            <Link 
              to="/" 
              className="flex items-center flex-shrink-0"
            >
              <span className="font-bold text-2xl text-red-900 tracking-tight">
                Gensler
              </span>
            </Link>
           
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-1 relative">
                {navItems.map((item) => (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.hasSubmenu && setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.hasSubmenu ? (
                      <button className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 font-medium transition-colors flex items-center">
                        {item.name}
                        <svg 
                          className={`w-4 h-4 ml-1 text-gray-500 transition-transform ${hoveredItem === item.name ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 font-medium transition-colors block"
                      >
                        {item.name}
                      </Link>
                    )}
                   
                    {item.hasSubmenu && hoveredItem === item.name && (
                      <div className="absolute left-0 top-full mt-1 w-64 bg-white shadow-lg rounded-lg border border-gray-200 z-50 animate-fadeIn">
                        <div className="py-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem}
                              to={`/${item.name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}/${subItem.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                              onClick={() => setHoveredItem(null)}
                            >
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
           
              <button 
                className="lg:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <div className={`w-6 h-0.5 bg-gray-900 transition-all ${menuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
                <div className={`w-6 h-0.5 my-1.5 bg-gray-900 transition-all ${menuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-gray-900 transition-all ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
              </button>
            </div>
          </div>
  
          {searchOpen && (
            <div className="border-t border-gray-200 py-4 animate-slideDown">
              <div className="max-w-xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Gensler..."
                    className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    autoFocus
                  />
                  <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          )}
          
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-screen opacity-100 border-t border-gray-200' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasSubmenu ? (
                    <div className="border-b border-gray-100 last:border-b-0">
                      <button
                        onClick={() => setHoveredItem(hoveredItem === item.name ? null : item.name)}
                        className="w-full text-left px-4 py-3 text-gray-700 hover:text-gray-900 font-medium flex items-center justify-between"
                      >
                        {item.name}
                        <svg 
                          className={`w-4 h-4 text-gray-500 transform transition-transform ${hoveredItem === item.name ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {hoveredItem === item.name && (
                        <div className="pl-6 pb-2 space-y-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem}
                              to={`/${item.name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}/${subItem.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                              onClick={() => {
                                setHoveredItem(null)
                                setMenuOpen(false)
                              }}
                            >
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-4 py-3 text-gray-700 hover:text-gray-900 font-medium border-b border-gray-100 last:border-b-0"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.2s ease-out;
          }
          
          .animate-slideDown {
            animation: slideDown 0.3s ease-out;
          }
        `}</style>
      </nav>
      
      <div className={`h-16 ${searchOpen ? 'h-32' : ''} transition-all duration-300`}></div>
    </>
  )
}