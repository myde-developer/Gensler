import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedItem, setExpandedItem] = useState(null)
  
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
  
  const toggleSubMenu = (itemName) => {
    setExpandedItem(expandedItem === itemName ? null : itemName)
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4 border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            <Link 
              to="/" 
              className="flex items-center"
            >
              <span className="font-bold text-2xl text-red-900">
                Gensler
              </span>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/research" className="text-gray-700 hover:text-black text-sm transition-colors">Research</Link>
              <Link to="/projects" className="text-gray-700 hover:text-black text-sm transition-colors">Projects</Link>
              <Link to="/careers" className="text-gray-700 hover:text-black text-sm transition-colors">Careers</Link>
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
              <Link to="/research" className="block text-gray-700 hover:text-black py-2" onClick={() => setMenuOpen(false)}>Research</Link>
              <Link to="/projects" className="block text-gray-700 hover:text-black py-2" onClick={() => setMenuOpen(false)}>Projects</Link>
              <Link to="/careers" className="block text-gray-700 hover:text-black py-2" onClick={() => setMenuOpen(false)}>Careers</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex pt-16">
        <div className="hidden lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 overflow-y-auto z-40">
          <div className="py-6">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name} className="border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center justify-between">
                    {item.hasSubmenu ? (
                      <button
                        onClick={() => toggleSubMenu(item.name)}
                        className="w-full text-left p-4 hover:bg-gray-50 transition-colors flex items-center justify-between group"
                      >
                        <span className="text-sm font-medium text-gray-900 group-hover:text-gray-700">
                          {item.name}
                        </span>
                        <svg 
                          className={`w-4 h-4 text-gray-400 transform transition-transform ${expandedItem === item.name ? 'rotate-180' : ''}`}
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
                        className="w-full text-left p-4 hover:bg-gray-50 transition-colors block"
                      >
                        <span className="text-sm font-medium text-gray-900 hover:text-gray-700">
                          {item.name}
                        </span>
                      </Link>
                    )}
                  </div>

                  {item.hasSubmenu && expandedItem === item.name && (
                    <ul className="bg-gray-50 border-t border-gray-200">
                      {item.subItems.map((subItem) => (
                        <li key={subItem}>
                          <Link
                            to={`/${item.name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}/${subItem.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                            className="block py-3 px-8 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors font-normal border-l-4 border-transparent hover:border-gray-400"
                          >
                            {subItem}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <main className="lg:ml-64 flex-1">
        </main>
      </div>
    </>
  )
}