
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
        const res = await api.get('/site', { headers: { Authorization: `Bearer ${token}` } })
        setSite(res.data)
      } catch (err) {
        setSite({ error: 'Failed to fetch' })
      }
    }
    load()
  }, [token])

  if (!site) return <div>Loading...</div>
  if (site.error) return <div className="text-red-600">{site.error}</div>

  return (
    <div className="space-y-10">
      <Hero title={site.hero.title} subtitle={site.hero.subtitle} />
      <section id="work">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {site.sections.map((s) => (
            <FeatureCard key={s.title} title={s.title} description={s.description} />
          ))}
        </div>
      </section>
    </div>
  )
}
