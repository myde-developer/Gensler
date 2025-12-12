import React from 'react'

export default function FeatureCard({ title, description }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02]">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative glass-card p-8 h-full">
        <div className="mb-6 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
            <span className="text-2xl font-bold text-white">G</span>
          </div>
        </div>
        <h3 className="text-2xl font-serif font-bold text-center mb-4 gradient-text">
          {title}
        </h3>
        <p className="text-gray-300 text-center leading-relaxed mb-6">
          {description}
        </p>
        <div className="text-center">
          <button className="inline-flex items-center gap-2 text-accent-light hover:text-white transition-colors duration-300 group/link">
            <span className="font-medium">Learn More</span>
            <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}