import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
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
    {
      title: "New Vision for Co-Living Conversions",
      category: "TRENDING TOPICS",
      description: "Innovative approaches to residential conversions in urban centers.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Gensler Product Sustainability Standards™",
      category: "TRENDING TOPICS",
      description: "Our commitment to sustainable design practices and materials.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2074&auto=format&fit=crop"
    },
    {
      title: "Conversions™ by Gensler",
      category: "TRENDING TOPICS",
      description: "Transforming existing spaces for modern needs and sustainability.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop"
    }
  ]
  
  const blogPosts = [
    {
      title: "10 Workplace Trends for 2026: What's In and What's Out?",
      category: "BLOG",
      description: "This is the year of bold moves, human-first thinking, and AI that doesn't just answer questions but joins the team.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
      date: "March 2024"
    },
    {
      title: "The Future of the U.S. Healthcare Ecosystem",
      category: "RESEARCH",
      description: "The integrated healthcare ecosystem drives innovation and improves community outcomes.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
      date: "February 2024"
    },
    {
      title: "Test, Don't Guess: A New Approach for Healthcare Design",
      category: "BLOG",
      description: "Healthcare leaders are modeling multiple futures before breaking ground.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
      date: "January 2024"
    },
    {
      title: "Trends to Watch Shaping the Future of Sports",
      category: "BLOG",
      description: "Gensler's Sports leaders explore the design trends redefining the next era of sports design.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop",
      date: "December 2023"
    }
  ]
  
  const featuredProjects = [
    {
      title: "Capital One Arena",
      location: "Washington, D.C.",
      description: "Downtown Washington, D.C.'s premier sports and entertainment venue.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Chicago Fire FC Stadium",
      location: "Chicago, Illinois",
      description: "Amplifies the fan experience and serves as the cornerstone of the city's newest mixed-use district.",
      image: "https://images.unsplash.com/photo-1533460004989-cef01064af7e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Al-Ahly Stadium",
      location: "Cairo, Egypt",
      description: "World-class stadium design redefining the fan experience in North Africa.",
      image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2070&auto=format&fit=crop"
    }
  ]
  
  return (
    <>
      <Nav />
      <Hero />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-slide-up">TRENDING TOPICS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trendingTopics.map((topic, index) => (
                <div 
                  key={topic.title}
                  className="bg-white p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group cursor-pointer hover:shadow-lg animate-slide-up"
                  style={{
                    opacity: 0,
                    transform: 'translateY(20px)',
                    animation: `slideUp 0.6s ease forwards ${index * 0.2}s`
                  }}
                >
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {topic.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600">{topic.description}</p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <button className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">
                      Learn more →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-12">
            <DesignForecast />
          </div>
          
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-gray-100 animate-slide-up">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 md:mb-0">Also Trending</h3>
              <div className="flex gap-4">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">New</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full">Updated</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "A New Vision for Co-Living Conversions",
                "Gensler Product Sustainability Standards™",
                "Conversions™ by Gensler"
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-4 border border-gray-100 rounded-lg hover:border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 font-medium">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 animate-slide-up">BLOG</h2>
              <div className="space-y-12">
                {blogPosts.map((post, index) => (
                  <div 
                    key={post.title}
                    className="border-b border-gray-100 pb-12 last:border-0 group animate-slide-up"
                    style={{
                      opacity: 0,
                      transform: 'translateY(20px)',
                      animation: `slideUp 0.6s ease forwards ${index * 0.1}s`
                    }}
                  >
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.date}</span>
                      <span className="text-gray-400 text-sm">• 5 min read</span>
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
                ))}
              </div>
            </div>
            
            <div>
              <div 
                className="sticky top-24 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-xl animate-slide-right"
                style={{
                  animationDelay: '0.3s'
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="absolute w-full h-full object-cover opacity-60"
                  >
                    <source 
                      src="https://assets.mixkit.co/videos/preview/mixkit-modern-office-lobby-41580-large.mp4" 
                      type="video/mp4" 
                    />
                  </video>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full border border-white/20">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-white text-xs font-medium">TRENDING</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative p-8">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
                      <h2 className="text-2xl font-bold text-white">SPOTLIGHT</h2>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Real Estate Value Moves From Square Footage to Human Connection</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Traditional performance benchmarks are evolving to prioritize engagement and experience across all generations.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {[
                      {title: "Design's Expanding Role in Measuring Value", icon: "📊"},
                      {title: "A Multigenerational Workforce Redefines Expectations", icon: "👥"},
                      {title: "Inside Bangalore's Talent Race", icon: "🏙️"},
                      {title: "Adaptive Workplace Design in Paris", icon: "🏛️"}
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group hover:bg-white/10"
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-xl mt-1">{item.icon}</div>
                          <div>
                            <div className="text-white font-medium text-sm group-hover:text-blue-200 transition-colors">
                              {item.title}
                            </div>
                            <div className="mt-2 flex items-center gap-1">
                              <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-blue-300 text-xs">Watch analysis</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex items-center gap-4">
                      <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors group/play">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        </svg>
                      </button>
                      <div className="text-white text-sm font-medium">Featured Analysis</div>
                    </div>
                    
                    <button className="text-white text-sm font-medium hover:text-blue-300 transition-colors flex items-center gap-2">
                      Explore Insights
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">FEATURED PROJECTS</h2>
            <div className="flex gap-4">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium text-sm">
                View All
              </button>
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium text-sm">
                Filter
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.title}
                className="group relative h-96 rounded-2xl overflow-hidden bg-cover bg-center transition-all duration-500 hover:shadow-2xl"
                style={{ 
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(${project.image})`,
                  opacity: 0,
                  transform: 'translateY(30px)',
                  animation: `slideUp 0.6s ease forwards ${index * 0.2}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-300 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                      Featured Project
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </p>
                  <p className="text-gray-200 mb-6">{project.description}</p>
                  <button className="self-start px-6 py-2 bg-white text-black font-semibold hover:bg-gray-100 transition-colors transform group-hover:translateY(-2px)">
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-3 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95">
              Explore All Projects
            </button>
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
                <button className="px-8 py-3 bg-white text-black font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                  SUBSCRIBE
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-3">By subscribing, you agree to our Privacy Policy</p>
            </div>
          </div>
          
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2074&auto=format&fit=crop"
                    alt="Gensler Office"
                    className="w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="text-white/80 text-sm">Gensler Los Angeles Studio</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-3xl font-normal mb-8 leading-tight">
                  Design Your Career With Us
                </h3>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                  We grow our firm by growing our people — if you are a recent graduate or a seasoned designer who believes in the power of design, we invite you to search for opportunities and explore how you can reimagine the future with us.
                </p>
                <button className="px-10 py-4 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 active:scale-95">
                  JOIN OUR TEAM
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <h4 className="font-bold text-gray-300 mb-6">COURCES</h4>
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
              <div className="text-gray-500 text-sm hover:text-white transition-colors cursor-pointer">NOVSLETTER</div>
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
            
            <div className="text-center mt-8">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                TOP OF PAGE
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}