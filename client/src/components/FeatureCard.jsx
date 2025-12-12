import React from 'react'

export default function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold font-serif">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="mt-4">
        <a href="#" className="text-sm text-slate-700 hover:underline">View more</a>
      </div>
    </div>
  )
}
