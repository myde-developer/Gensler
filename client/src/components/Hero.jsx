import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="block">We are creating a better world</span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl text-gray-300 mt-6">
              through the power of design.
            </span>
          </h1>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Gensler is a global architecture, design, and planning firm with 56 locations across Asia, Europe, Australia, the Middle East, and the Americas. Every day we impact millions of people's lives with the spaces we create, which is why people are at the center of everything we do. Designing for the human experience is what allows us to tackle the toughest challenges facing cities and shape a more resilient and inclusive future for everyone.
          </p>
          
          <div className="mt-8">
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-white hover:text-gray-300 font-medium text-lg"
            >
              LEARN MORE ABOUT GENSLER
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
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