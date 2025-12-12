import React from 'react'

export default function Hero({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden rounded-3xl mx-6 my-8">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-brand/50 to-accent-light/10 animate-pulse-slow" />
      <div className="relative glass-card p-12 md:p-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
            <span className="gradient-text">{title}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#work" className="btn-primary px-8 py-4 text-lg">
              Explore Our Work
            </a>
            <button className="btn-secondary px-8 py-4 text-lg flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Video
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent-light/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  )
}