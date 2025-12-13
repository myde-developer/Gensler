import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import DesignForecast from '../components/DesignForecast'

export default function Home() {
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
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      .animate-slide-up {
        animation: slideUp 0.8s ease forwards;
      }
      
      .animate-slide-right {
        animation: slideInRight 0.6s ease forwards;
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])
  
  const trendingTopics = [
    "New Vision for Co-Living Conversions",
    "Gensler Product Sustainability Standards™",
    "Conversions™ by Gensler"
  ]
  
  const blogPosts = [
    {
      title: "6 Trends Shaping Designs in 2026",
      category: "DESIGN FORECAST 2026",
      description: "Discover the most important and actionable theme shaping designs in 2026, based on over 100 trends across 33 industries around the world",
      image: "https://i.ibb.co/twLfRWLL/baghdad-sustainable-x2000lo.png"
    },
    {
      title: "10 Workplace Trends for 2026: What's In and What's Out?",
      category: "BLOG",
      description: "This is the year of bold moves, human-first thinking, and AI that doesn't just answer questions but joins the team.",
      image: "https://i.ibb.co/5hPPG156/Bio-Med-Realty-2000x1125-1024x576.png"
    },
    {
      title: "Trends to Watch Shaping the Future of Sports",
      category: "BLOG",
      description: "Gensler's Sports leaders explore the design trends redefining the next era of sports design, from fan-first districts to athlete-driven spaces.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop"
    },
    {
      title: "Trends to Watch: What's Next for Airports and Aviation",
      category: "BLOG",
      description: "Gensler's Aviation leaders take a closer look at the trends shaping the future of travel, and what's next for the industry.",
      image: "https://images.unsplash.com/photo-1515861461225-1488dfdaf0a8?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Gensler's City Pulse 2025 Findings Reinforce Trend of Cities Adapting By Prioritizing Mixed-Use Vibrancy, Affordability, and Resilience",
      category: "IN THE MEDIA",
      description: "Americans are not abandoning cities. They're moving to cities that feel affordable, safe, and vibrant.",
      source: "FOX",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop"
    }
  ]
  
  const featuredProjects = [
    {
      title: "Capital One Arena",
      location: "Washington, D.C.",
      description: "Downtown Washington, D.C.'s premier sports and entertainment venue.",
      image: "https://i.ibb.co/5xnrPvsJ/project-capital-one-arena-2024-508x508-1734586678.png"
    },
    {
      title: "Chicago Fire FC Stadium",
      location: "Chicago, Illinois",
      description: "Amplifies the fan experience and serves as the cornerstone of the city's newest mixed-use district.",
      image: "https://i.ibb.co/ksLSQjBc/project-chicago-fire-fc-508x508-2.png"
    },
    {
      title: "Al-Ahly Stadium",
      location: "Cairo, Egypt",
      description: "World-class stadium design redefining the fan experience in North Africa.",
      image: "https://i.ibb.co/TzTHJX9/project-al-ahly-stadium-02-508x508-1739475365.png"
    }
  ]
  
  return (
    <>
      <Nav />
      
      <main className="pt-16">
        <DesignForecast />
        
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">6 Trends Shaping Design in 2026</h3>
              <p className="text-gray-600 text-xl max-w-3xl">
                Discover the most important and actionable themes shaping design in 2026, based on over 100 trends across 33 industries around the world.
              </p>
            </div>
            
            <div className="flex gap-6 mb-20">
              <Link 
                to="/research" 
                className="px-8 py-4 bg-black text-white font-semibold hover:bg-gray-800 transition-colors text-lg"
              >
                VIEW LATEST RESEARCH
              </Link>
              <Link 
                to="/blog" 
                className="px-8 py-4 border-2 border-black text-black font-semibold hover:bg-gray-50 transition-colors text-lg"
              >
                VIEW DIALOGUE BLOG
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Hero />
              </div>
              
              <div>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-0.5 bg-gray-900"></div>
                      <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-widest">
                        TRENDING
                      </h3>
                    </div>
                    <h4 className="text-3xl font-bold text-gray-900 mb-2">TOPICS</h4>
                  </div>

                  <div className="space-y-6">
                    {trendingTopics.map((topic, index) => (
                      <div 
                        key={index}
                        className="group cursor-pointer"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors mt-1 flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-900 text-lg font-medium group-hover:text-gray-700 transition-colors leading-tight">
                              {topic}
                            </p>
                          </div>
                        </div>
                        {index < trendingTopics.length - 1 && (
                          <div className="mt-6 w-full h-px bg-gray-200"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">BLOG</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-12">
                {blogPosts.map((post, index) => (
                  <div 
                    key={post.title}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-8">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                        {post.source && (
                          <span className="text-gray-400 text-sm">{post.source}</span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 cursor-pointer transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{post.description}</p>
                      <button className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 group/btn">
                        Read Article
                        <svg className="w-4 h-4 ml-2 transform group-hover/btn:translateX(2px) transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <div className="sticky top-24">
                  <div className="overflow-hidden rounded-2xl shadow-xl mb-12 relative h-[500px] group">
                    <div className="absolute inset-0 z-0">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute w-full h-full object-cover"
                      >
                        <source 
                          src="https://assets.mixkit.co/videos/preview/mixkit-modern-office-lobby-41580-large.mp4" 
                          type="video/mp4" 
                        />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-gray-900/80"></div>
                      <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                    
                    <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full border border-white/20">
                          <span className="text-white text-xs font-medium">SPOTLIGHT</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-1 h-6 bg-blue-400 rounded-full"></div>
                          <h2 className="text-2xl font-bold text-white">SPOTLIGHT</h2>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Real Estate Value Moves From Square Footage to Human Connection</h3>
                        <p className="text-gray-200 text-lg leading-relaxed max-w-2xl">
                          Traditional performance benchmarks are evolving to prioritize engagement and experience across all generations.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {[
                          {title: "Design's Expanding Role in Measuring Value"},
                          {title: "A Multigenerational Workforce Redefines Expectations"},
                          {title: "Inside Bangalore's Talent Race"},
                          {title: "Adaptive Workplace Design in the Parisian Urban Fabric"}
                        ].map((item, index) => (
                          <div 
                            key={index}
                            className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer group-hover/item:bg-white/15"
                          >
                            <div className="text-white font-medium text-lg group-hover/item:text-blue-200 transition-colors">
                              {item.title}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-white/20">
                        <div className="flex items-center gap-4">
                          <button className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors group/play">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            </svg>
                          </button>
                          <div className="text-white text-sm font-medium">Featured Analysis</div>
                        </div>
                        
                        <button className="text-white text-lg font-medium hover:text-blue-300 transition-colors flex items-center gap-2">
                          Explore Insights
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">FEATURED PROJECTS</h2>
                    <div className="space-y-8">
                      {featuredProjects.map((project, index) => (
                        <div 
                          key={project.title}
                          className="group cursor-pointer"
                        >
                          <div className="h-64 overflow-hidden rounded-lg mb-4">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 mb-2">{project.location}</p>
                          <p className="text-gray-500 text-sm">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <footer className="bg-black text-white pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-20 border-b border-gray-800 pb-20">
              <h3 className="text-2xl font-normal mb-8 max-w-3xl mx-auto leading-relaxed">
                Want more of Gensler's design insights? Sign up for our <span className="font-semibold text-white">dialogue</span> Now newsletters to get regular updates sent directly to your inbox.
              </h3>
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-6 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <button className="px-8 py-3 bg-red text-black font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mb-20">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden group">
                    <img 
                      src="https://static1.gensler.com/uploads/image/85346/gensler-la-1280x900_1686179621.jpg"
                      alt="Gensler Office"
                      className="w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h3 className="text-3xl font-normal mb-8 leading-tight">
                    Design Your Career With Us
                  </h3>
                  <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                    We grow our firm by growing our people — if you are a recent graduate or a seasoned designer who believes in the power of design, we invite you to search for opportunities and explore how you can reimagine the future with us.
                  </p>
                  <button className="px-10 py-4 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-300">
                    JOIN OUR TEAM
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div>
                <h4 className="font-bold text-gray-300 mb-6">CONTACTS</h4>
                <div className="text-gray-500 text-sm hover:text-white transition-colors cursor-pointer">GENSLEFACT SHEET</div>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-300 mb-6">INCLUSION</h4>
                <div className="text-gray-500 text-sm hover:text-white transition-colors cursor-pointer">ETHICS</div>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-300 mb-6">GUIDING PRINCIPLES</h4>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-300 mb-6">RESILENCE</h4>
                <div className="text-gray-500 text-sm hover:text-white transition-colors cursor-pointer">NEWSLETTER</div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-4 mb-6 md:mb-0">
                  <div className="text-2xl font-bold">Gensler</div>
                  <div className="text-gray-500 text-sm">
                    © 2025 Gensler, All Rights Reserved.
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-6 text-gray-500 text-sm">
                  <a href="#" className="hover:text-white transition-colors">Privacy Statement</a>
                  <a href="#" className="hover:text-white transition-colors">Cookie Preferences</a>
                  <a href="#" className="hover:text-white transition-colors">Transparency Statement</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}