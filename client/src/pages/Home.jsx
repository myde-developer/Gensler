import React from 'react'
import api from '../api'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'

export default function Home() {
  const [site, setSite] = React.useState(null)
  const token = localStorage.getItem('token')

  React.useEffect(() => {
    async function load() {
      try {
        const res = await api.get('/site', {
          headers: { Authorization: `Bearer ${token}` },
        })
        setSite(res.data)
      } catch (err) {
        setSite({ error: 'Failed to load site content' })
      }
    }
    if (token) load()
  }, [token])

  if (!site)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="text-white text-2xl font-light animate-pulse">Loading...</div>
      </div>
    )

  if (site.error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="text-red-400 text-xl font-medium">{site.error}</div>
      </div>
    )

  return (
    <>
      {/* Hero Section */}
      <Hero title={site.hero.title} subtitle={site.hero.subtitle} />

      {/* Feature / Work Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-brand to-brand-slate bg-clip-text text-transparent mb-6">
              Our Work
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Transforming vision into architectural excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {site.sections.map((section, index) => (
              <div
                key={section.title}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-brand/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <FeatureCard
                  title={section.title}
                  description={section.description}
                  className="relative z-10 p-10 text-center"
                />
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-brand-slate transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}