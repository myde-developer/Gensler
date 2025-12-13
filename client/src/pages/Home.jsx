import React, { useEffect } from 'react'
import api from '../api'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'

export default function Home() {
  const [site, setSite] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [featuredProjects, setFeaturedProjects] = React.useState([])
  const token = sessionStorage.getItem('token')
  
  React.useEffect(() => {
    async function load() {
      setLoading(true)
      try {
        const [siteRes, projectsRes] = await Promise.all([
          api.get('/site'),
          api.get('/featured-projects')
        ])
        
        setSite(siteRes.data)
        setFeaturedProjects(projectsRes.data || [])
      } catch (err) {
        setSite({
          hero: {
            title: 'Creating a Better World',
            subtitle: 'Through the Power of Design',
            description: 'Gensler is a global architecture, design, and planning firm with 56 locations worldwide. Every day we impact millions of lives with the spaces we create.'
          },
          insights: [
            { 
              title: '10 Workplace Trends for 2026: What\'s In and What\'s Out?',
              category: 'Blog',
              description: 'This is the year of bold moves, human-first thinking, and AI that doesn\'t just answer questions but joins the team.',
              image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop',
              author: 'Workplace Research Team',
              date: 'March 15, 2024'
            },
            { 
              title: 'Trends to Watch Shaping the Future of Sports',
              category: 'Blog',
              description: 'Gensler\'s Sports leaders explore the design trends redefining the next era of sports design.',
              image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop',
              author: 'Sports Practice',
              date: 'March 10, 2024'
            },
            { 
              title: 'Trends to Watch: What\'s Next for Airports and Aviation',
              category: 'Blog',
              description: 'Gensler\'s Aviation leaders take a closer look at the trends shaping the future of travel.',
              image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop',
              author: 'Aviation Team',
              date: 'March 5, 2024'
            },
            { 
              title: 'Real Estate Value Moves From Square Footage to Human Connection',
              category: 'Blog',
              description: 'How human-centered design is transforming real estate valuation and workplace strategy globally.',
              image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop',
              author: 'Mixed-Use Development',
              date: 'February 28, 2024'
            }
          ]
        })
        
        setFeaturedProjects([
          { 
            title: 'Capital One Arena', 
            location: 'Washington, D.C.', 
            category: 'Sports & Entertainment',
            image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
            description: 'Transforming D.C.\'s premier sports venue into a civic landmark for the next generation.'
          },
          { 
            title: 'Chicago Fire FC Stadium', 
            location: 'Chicago, Illinois', 
            category: 'Sports',
            image: 'https://images.unsplash.com/photo-1533460004989-cef01064af7e?q=80&w=2070&auto=format&fit=crop',
            description: 'A new soccer-specific stadium serving as the anchor for Chicago\'s mixed-use district.'
          },
          { 
            title: 'Al-Ahly Stadium', 
            location: 'Cairo, Egypt', 
            category: 'Sports Architecture',
            image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2070&auto=format&fit=crop',
            description: 'World-class stadium design redefining the fan experience in North Africa.'
          }
        ])
      } finally {
        setLoading(false)
      }
    }
    if (token) load()
  }, [token])
  
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes scrollIndicator {
        0% { transform: translateY(0); opacity: 0.6; }
        100% { transform: translateY(10px); opacity: 1; }
      }
      
      .animate-slide-up {
        animation: slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }
      
      .animate-fade-in {
        animation: fadeIn 1s ease-out forwards;
      }
      
      .animate-scroll-indicator {
        animation: scrollIndicator 1.5s ease-in-out infinite;
      }
      
      .line-clamp-2 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])
  
  if (loading) {
    return (
      <>
        <Nav />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="relative inline-block">
              <div className="w-20 h-20 border-4 border-gray-200 rounded-full"></div>
              <div className="absolute top-0 left-0 w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="mt-6 text-gray-600 font-medium">Loading Gensler Insights</p>
          </div>
        </div>
      </>
    )
  }
  
  return (
    <>
      <Nav />
      
      <Hero 
        title={site.hero.title} 
        subtitle={site.hero.subtitle}
        description={site.hero.description}
      />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '56', label: 'Offices Worldwide', color: 'text-blue-600' },
              { number: '6,000+', label: 'Professionals', color: 'text-green-600' },
              { number: '18', label: 'Countries', color: 'text-purple-600' },
              { number: '15,000+', label: 'Active Projects', color: 'text-orange-600' }
            ].map((stat, idx) => (
              <div key={idx} className="opacity-0 animate-slide-up" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className={`text-5xl font-bold ${stat.color} mb-3`}>{stat.number}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-blue-500"></div>
              <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Latest Research</span>
              <div className="w-12 h-0.5 bg-blue-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Design <span className="text-blue-600">Insights</span> & Trends
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover research, trends, and ideas shaping the future of design across all sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {site.insights.map((insight, index) => (
              <FeatureCard
                key={insight.title}
                title={insight.title}
                description={insight.description}
                category={insight.category}
                image={insight.image}
                index={index}
                metadata={{
                  author: insight.author,
                  date: insight.date
                }}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="group px-8 py-3.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                View All Insights
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-green-500"></div>
                <span className="text-green-600 font-semibold tracking-wider text-sm uppercase">Featured Work</span>
                <div className="w-12 h-0.5 bg-green-500"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Global <span className="text-green-600">Projects</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Iconic spaces and places shaping cities and communities worldwide
              </p>
            </div>
            <button className="px-8 py-3.5 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors transform hover:scale-105">
              View All Projects
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.title}
                className="group relative h-[500px] rounded-2xl overflow-hidden bg-cover bg-center transform transition-all duration-500 hover:scale-[1.02]"
                style={{ 
                  backgroundImage: `url(${project.image})`,
                  opacity: 0,
                  transform: 'translateY(30px)',
                  animation: `slideUp 0.6s ease forwards ${index * 0.2}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  <span className="text-sm font-medium text-green-400 mb-3">{project.category}</span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.location}</p>
                  <p className="text-gray-200 mb-6 line-clamp-2">{project.description}</p>
                  <button className="self-start w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform group-hover:translate-x-2 transition-transform hover:bg-white/30">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-8">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Stay Informed
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest design insights and project features
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your professional email"
              className="flex-1 px-6 py-4 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
          
          <p className="mt-6 text-sm text-gray-500">
            Join 50,000+ design professionals. No spam, unsubscribe anytime.
          </p>
        </div>
      </section>
      
<footer className="bg-black text-white pt-16 pb-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="mb-20 text-center border-b border-gray-800 pb-20">
      <h3 className="text-2xl font-normal mb-8 max-w-3xl mx-auto">
        Want more of Gensler's design insights? Sign up for our <span className="font-semibold">dialogue</span> Now newsletters to get regular updates sent directly to your inbox.
      </h3>
      <div className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-6 py-4 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-white text-lg"
          />
          <button className="px-10 py-4 bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>

    <div className="mb-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <img 
            src="https://static1.gensler.com/uploads/image/85346/gensler-la-1280x900_1686179621.jpg" 
            alt="Gensler Los Angeles office interior"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
        
        <div className="lg:w-1/2 text-center lg:text-left">
          <h3 className="text-3xl font-normal mb-8">
            Design Your Career With Us
          </h3>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            We grow our firm by growing our people — if you are a recent graduate or a seasoned designer who believes in the power of design, we invite you to search for opportunities and explore how you can reimagine the future with us.
          </p>
          <button className="px-10 py-4 border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-black transition-colors">
            JOIN OUR TEAM
          </button>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div>
        <h4 className="font-bold text-gray-300 mb-6 text-lg">COURCES</h4>
        <ul className="space-y-4 text-gray-400">
          <li className="hover:text-white transition-colors cursor-pointer">Design Leadership</li>
          <li className="hover:text-white transition-colors cursor-pointer">Sustainability</li>
          <li className="hover:text-white transition-colors cursor-pointer">Workplace Strategy</li>
          <li className="hover:text-white transition-colors cursor-pointer">Urban Planning</li>
          <li className="hover:text-white transition-colors cursor-pointer">Digital Innovation</li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-bold text-gray-300 mb-6 text-lg">INCLUSION</h4>
        <ul className="space-y-4 text-gray-400">
          <li className="hover:text-white transition-colors cursor-pointer">Diversity & Equity</li>
          <li className="hover:text-white transition-colors cursor-pointer">Community Impact</li>
          <li className="hover:text-white transition-colors cursor-pointer">Accessible Design</li>
          <li className="hover:text-white transition-colors cursor-pointer">Global Perspectives</li>
          <li className="hover:text-white transition-colors cursor-pointer">Inclusive Practices</li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-bold text-gray-300 mb-6 text-lg">GUIDING PRINCIPLES</h4>
        <ul className="space-y-4 text-gray-400">
          <li className="hover:text-white transition-colors cursor-pointer">Client Success</li>
          <li className="hover:text-white transition-colors cursor-pointer">Innovation</li>
          <li className="hover:text-white transition-colors cursor-pointer">Collaboration</li>
          <li className="hover:text-white transition-colors cursor-pointer">Excellence</li>
          <li className="hover:text-white transition-colors cursor-pointer">Integrity</li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-bold text-gray-300 mb-6 text-lg">RESILIENCE</h4>
        <ul className="space-y-4 text-gray-400">
          <li className="hover:text-white transition-colors cursor-pointer">Climate Action</li>
          <li className="hover:text-white transition-colors cursor-pointer">Sustainable Materials</li>
          <li className="hover:text-white transition-colors cursor-pointer">Adaptive Reuse</li>
          <li className="hover:text-white transition-colors cursor-pointer">Future-Proofing</li>
          <li className="hover:text-white transition-colors cursor-pointer">Resilient Design</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-800 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="flex items-center gap-4 mb-6 md:mb-0">
          <div className="text-3xl font-bold tracking-tight">Gensler</div>
          <div className="text-gray-600 hidden md:block">|</div>
          <div className="text-gray-500 text-sm">
            © 2025 Gensler, All Rights Reserved.
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Statement</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Preferences</a>
          <a href="#" className="hover:text-white transition-colors">Transparency Statement</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-white transition-colors">Accessibility</a>
        </div>
      </div>
      
      <div className="text-center pt-8 border-t border-gray-800">
        <a 
          href="#top" 
          className="inline-flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-lg font-medium group"
        >
          <span>TOP OF PAGE</span>
          <span className="transform group-hover:-translate-y-1 transition-transform">↑</span>
        </a>
        <div className="text-gray-600 text-sm mt-4 tracking-wider">NEWSLETTER</div>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}