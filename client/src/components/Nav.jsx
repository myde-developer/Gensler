import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
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
        scrolled ? 'bg-white shadow-sm py-3' : 'bg-white py-4 border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
           
            <Link 
              to="/" 
              className="flex items-center flex-shrink-0"
            >
              <span className="font-bold text-3xl text-red-900 tracking-tight">
                Gensler
              </span>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div 
                  key={item.name}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => item.hasSubmenu && setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.hasSubmenu ? (
                    <button className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors whitespace-nowrap py-2">
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors whitespace-nowrap py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {item.hasSubmenu && hoveredItem === item.name && (
                    <div className="absolute left-0 top-full mt-2 min-w-64 bg-white shadow-lg rounded-lg border border-gray-200 z-50 animate-fadeIn">
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
            menuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="pb-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasSubmenu ? (
                    <div className="border-b border-gray-100">
                      <div className="px-4 py-3 text-gray-700 font-medium">
                        {item.name}
                      </div>
                      <div className="pl-6 pb-2 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem}
                            to={`/${item.name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}/${subItem.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            onClick={() => setMenuOpen(false)}
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors border-b border-gray-100"
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
              transform: translateY(-5px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.2s ease-out;
          }
        `}</style>
      </nav>
      
      <div className="h-16"></div>
    </>
  )
}