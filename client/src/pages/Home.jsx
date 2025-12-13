import React from 'react'
import api from '../api'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'

export default function Home() {
  const [site, setSite] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const token = sessionStorage.getItem('token')

  React.useEffect(() => {
    async function load() {
      setLoading(true)
      try {
        const res = await api.get('/site')
        setSite(res.data)
      } catch (err) {
        // Fallback data if API fails
        setSite({
          hero: {
            title: 'Architectural Excellence',
            subtitle: 'Transforming visions into reality through innovative design and sustainable solutions.'
          },
          sections: [
            { title: 'Commercial Spaces', description: 'Innovative office designs' },
            { title: 'Residential Luxury', description: 'Luxury living spaces' },
            { title: 'Hospitality Design', description: 'Memorable hotel experiences' }
          ]
        })
      } finally {
        setLoading(false)
      }
    }
    if (token) load()
  }, [token])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Hero title={site.hero.title} subtitle={site.hero.subtitle} />
      
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              <span className="gradient-text">Our Work</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transforming vision into architectural excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {site.sections.map((section, index) => (
              <FeatureCard
                key={section.title}
                title={section.title}
                description={section.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}