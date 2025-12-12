import React from 'react'
import api from '../api'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'

export default function Home() {
  const [site, setSite] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const token = localStorage.getItem('token')

  React.useEffect(() => {
    async function load() {
      setLoading(true)
      try {
        const res = await api.get('/site', {
          headers: { Authorization: `Bearer ${token}` },
        })
        setSite(res.data)
      } catch (err) {
        // Fallback data if API fails
        setSite({
          hero: {
            title: 'Architectural Excellence',
            subtitle: 'Transforming visions into reality through innovative design and sustainable solutions that shape the future of our built environment.'
          },
          sections: [
            {
              title: 'Commercial Spaces',
              description: 'Innovative office designs that enhance productivity and collaboration while reflecting corporate identity.'
            },
            {
              title: 'Residential Luxury',
              description: 'Luxury living spaces that combine aesthetics, functionality, and sustainability for modern lifestyles.'
            },
            {
              title: 'Hospitality Design',
              description: 'Memorable hotel and resort experiences through thoughtful design that captures local culture.'
            },
            {
              title: 'Urban Planning',
              description: 'Sustainable city planning that creates livable, resilient, and connected communities for future generations.'
            },
            {
              title: 'Retail Innovation',
              description: 'Engaging retail environments that create memorable customer experiences and drive brand connection.'
            },
            {
              title: 'Healthcare Facilities',
              description: 'Healing environments that prioritize patient wellbeing through evidence-based design principles.'
            }
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
          <p className="text-gray-400">Loading beautiful content...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <Hero title={site.hero.title} subtitle={site.hero.subtitle} />

      {/* Feature / Work Section */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              <span className="gradient-text">Our Work</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transforming vision into architectural excellence across the globe
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

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-3xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '50+', label: 'Years Experience' },
                { number: '5000+', label: 'Projects Completed' },
                { number: '60+', label: 'Countries' },
                { number: '100+', label: 'Awards Won' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}