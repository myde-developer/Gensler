import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mb-12">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <span className="text-sm font-medium tracking-wider">DESIGN FORECAST 2026</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block">Creating a Better World</span>
            <span className="block text-4xl sm:text-6xl lg:text-7xl text-gray-300 mt-6">
              Through the Power of Design
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Gensler is a global architecture, design, and planning firm with 56 locations across Asia, Europe, Australia, the Middle East, and the Americas. Every day we impact millions of people's lives with the spaces we create, which is why people are at the center of everything we do.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/research" 
              className="px-8 py-4 bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
            >
              VIEW LATEST RESEARCH
            </Link>
            <Link 
              to="/blog" 
              className="px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              VIEW DIALOGUE BLOG
            </Link>
          </div>
        </div>
        
        <div className="mt-20">
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white font-medium"
          >
            LEARN MORE ABOUT GENSLER
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}