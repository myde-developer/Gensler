import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function FeatureCard({ title, description, category, image, index, metadata }) {
  const cardRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )
    
    if (cardRef.current) {
      observer.observe(cardRef.current)
      cardRef.current.style.transitionDelay = `${(index % 4) * 0.1}s`
    }
    
    return () => observer.disconnect()
  }, [index])
  
  return (
    <div 
      ref={cardRef}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200"
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease, border-color 0.3s ease'
      }}
    >
      {category && (
        <div className="absolute top-4 left-4 z-10">
          <span className={`px-3 py-1.5 backdrop-blur-sm text-xs font-semibold rounded-full ${
            category === 'Blog' 
              ? 'bg-blue-50 text-blue-700' 
              : 'bg-gray-50 text-gray-700'
          }`}>
            {category}
          </span>
        </div>
      )}
      
      <div className="relative h-56 overflow-hidden bg-gray-100">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">G</span>
            </div>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <div className="p-6">
        {metadata?.date && (
          <div className="text-sm text-gray-500 mb-2">{metadata.date}</div>
        )}
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
          {description}
        </p>
        
        {metadata?.author && (
          <div className="text-sm text-gray-500 mb-4">By {metadata.author}</div>
        )}
        
        <Link 
          to={`/insights/${title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-')}`}
          className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group/link hover:text-blue-700"
        >
          <span>Read more</span>
          <svg 
            className="w-4 h-4 transform group-hover/link:translate-x-2 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
      
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-2xl transition-colors duration-500 pointer-events-none"></div>
    </div>
  )
}