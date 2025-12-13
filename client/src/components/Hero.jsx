import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Hero({ title, subtitle, description }) {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    
    if (titleRef.current) observer.observe(titleRef.current)
    if (subtitleRef.current) observer.observe(subtitleRef.current)
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-90"
          poster="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-architect-walking-through-a-modern-house-41575-large.mp4" 
            type="video/mp4" 
          />
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop" 
            alt="Architectural design"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 mb-12 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full animate-fade-in border border-white/20">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-white/90 text-sm font-medium tracking-wider">DESIGN FORECAST 2026</span>
        </div>
        
        <h1 
          ref={titleRef}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-10 leading-tight opacity-0 translate-y-10 animate-slide-up"
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-100">
            {title}
          </span>
          <span className="block text-4xl sm:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-green-400 mt-6">
            {subtitle}
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-16 opacity-0 translate-y-10 animate-slide-up leading-relaxed font-light"
          style={{animationDelay: '0.3s'}}
        >
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Link 
            to="/forecast" 
            className="group relative px-10 py-5 bg-white text-black font-semibold rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore the Full Forecast
              <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-emerald-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </Link>
          
          <Link 
            to="/insights" 
            className="group px-10 py-5 border-2 border-white/40 text-white font-semibold rounded-full hover:border-white/80 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            <span className="flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              </svg>
              Watch Introduction
            </span>
          </Link>
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-fade-in" style={{animationDelay: '0.9s'}}>
          {[
            { number: '56', label: 'Global Offices' },
            { number: '6K+', label: 'Professionals' },
            { number: '150+', label: 'Countries' },
            { number: '25K+', label: 'Projects' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group cursor-pointer hover:border-white/60">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </div>
    </section>
  )
}