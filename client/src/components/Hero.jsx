import React from 'react'

export default function Hero({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden rounded-lg hero-bg">
      <div className="bg-gradient-to-r from-slate-800 via-brand to-gray-700 text-white p-20 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight">{title}</h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">{subtitle}</p>
          <div className="mt-8">
            <a href="#work" className="inline-block bg-white text-slate-900 px-5 py-3 rounded-md font-medium shadow">Explore Work</a>
          </div>
        </div>
      </div>
    </section>
  )
}
