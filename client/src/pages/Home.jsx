import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import DesignForecast from '../components/DesignForecast'
import spotlightVideo from '../assets/spotlight.mp4';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [postsPerSlide, setPostsPerSlide] = useState(3);
  const [activeProject, setActiveProject] = useState(null);

  const smallBlogPosts = [
    {
      title: "Trends to Watch Shaping the Future of Sports",
      category: "BLOG",
      description: "Gensler's Sports leaders explore the design trends redefining the next era of sports design, from fan-first districts to athlete-driven spaces.",
      image: "https://i.ibb.co/JwmT2TD8/Al-Ahly-Stadium-aerial-1750443558.png"
    },
    {
      title: "Trends to Watch: What's Next for Airports and Aviation",
      category: "BLOG",
      description: "Gensler's Aviation leaders take a closer look at the trends shaping the future of travel, and what's next for the industry.",
      image: "https://i.ibb.co/6R3PHxm1/PIT-N19.png"
    },
    {
      title: "Gensler's City Pulse 2025 Findings Reinforce Trend of Cities Adapting By Prioritizing Mixed-Use Vibrancy, Affordability, and Resilience",
      category: "IN THE MEDIA",
      description: '"Americans are not abandoning cities. They\'re moving to cities that feel affordable, safe, and vibrant."',
      source: "FOX",
      sourceIcon: "©",
      image: "https://i.ibb.co/qY6vq7pL/Canopy-San-Antonio-N10-1750108600.png"
    },
    {
      title: "Forbes Spotlights Gensler's Nature-Led Design at Nekajui, a Ritz Carlton Reserve",
      category: "IN THE MEDIA",
      description: "Gensler's Rashana Zaklit highlights how the luxury hospitality experience followed a nature-led, site-responsive design approach.",
      source: "Forbes",
      sourceIcon: "■",
      image: "https://i.ibb.co/s9xfQsWC/New-Economicsof-Sports-Venues-BMO-VIP-2000px.png"
    },
    {
      title: "Gensler-Designed SFO Harvey Milk Terminal 1 Honored With the Prix Versailles 2025 Best of Show Prize in Aviation",
      category: "IN THE MEDIA",
      description: "The prestigious Prix Versailles Awards celebrate projects that go beyond functionality to embody beauty, cultural significance, and sustainability.",
      source: "The Prix Versailles",
      sourceIcon: "✔",
      image: "https://i.ibb.co/Pz5Z2Kxd/Gensler-NYX-3.png"
    },
    {
      title: "The Future of the U.S. Healthcare Ecosystem",
      category: "RESEARCH",
      description: "The integrated healthcare ecosystem drives innovation and improves community outcomes, positively impacting cost, health, and climate.",
      image: "https://i.ibb.co/PsPpKNTR/2000x1125-1024x576.png"
    },
    {
      title: "Gensler's Ray Yuen Led a Discussion on the Future of Workplace Design at the Fortune Brainstorm Design Forum in Macau",
      category: "IN THE MEDIA",
      description: "Gensler Hong Kong Managing Director Ray Yuen led a discussion at Fortune's Brainstorm Design Forum on the future of workplace design.",
      source: "Fortune",
      sourceIcon: "#",
      image: "https://i.ibb.co/YFkV5cwk/54959069843-2f1765e810-o.png"
    },
    {
      title: "Gensler Honors Students as Recipients of the 2025 Gensler Brinkmann Scholarship & Opportunity Scholarship",
      category: "PRESS RELEASE",
      description: "Gensler is proud to announce two emerging designers have been selected as recipients of the 2025 Gensler Brinkmann Scholarship.",
      image: "https://i.ibb.co/KpFGqg2F/2025-Brinkmann-Opportunity-Web-Header-V2-1024x576.png"
    },
    {
      title: "San Francisco's AI Boom Is Our Chance to Build a People-First City",
      category: "BLOG",
      description: "The AI gold rush presents a rare opportunity to reinvest in our urban core, reconnect our neighborhoods, and rebuild our streets.",
      image: "https://i.ibb.co/v6r9JJZz/shen-pan-unsplash.png"
    },
    {
      title: "The New Job for the Airport CEO: It's More Challenging — and More Uplifting — Than Ever",
      category: "BLOG",
      description: "In this pivotal moment, we have an opportunity to design airports and terminals that feel less like infrastructure and more like inspirational destinations.",
      image: "https://i.ibb.co/PvmZMNMn/blog-delta-sky-club-fortune-andy-2000x1125.png"
    },
    {
      title: "More Than Just a Seat: The Lounge as the New Travel Destination",
      category: "BLOG",
      description: "The new airport lounge is less about claiming a seat and more about creating a collection of experiences.",
      image: "https://i.ibb.co/KpP035qd/Star-Alliance-CDG-4.png"
    },
    {
      title: "The Wall Street Journal Featured Insights From Gensler Principal Todd Heiser on How AI-Powered Sensors Can Fine-Tune the Workplace in Real-Time",
      category: "IN THE MEDIA",
      description: "Gensler's Todd Heiser breaks down how major tech and consulting firms are utilizing AI-powered sensors that learn...",
      source: "The Wall Street Journal",
      sourceIcon: "we",
      image: "https://i.ibb.co/RTsX2WSK/e767584cfb2a9fd84db7241e0985768c.png"
    },
    {
      title: "NEXT NEXT: Redefining Science Work for the AI and Machine Era",
      category: "BLOG",
      description: "Our new concept looks at how AI and automation are redefining the science workplace and reshaping the future of labs.",
      image: "https://i.ibb.co/4ZsW69VP/next-next-hero-2025-2000x1125.png"
    },
    {
      title: "Designing the Future of Travel at Pittsburgh International Airport",
      category: "BLOG",
      description: "Building a terminal rooted in flexibility, passenger experience, and the spirit of a city that's reinventing itself.",
      image: "https://i.ibb.co/xt3ShWrD/PIT-New-Terminal-Exterior-1-Design-Credit-Gensler-HDR-in-association-with-luis-vidal-archi.png"
    },
    {
      title: "Designing Tomorrow's Shopping Centers: Global Ideas From Kuwait, Costa Rica, and Beyond",
      category: "BLOG",
      description: "Around the world, developers are experimenting with new models that expand the meaning of 'retail.' For US retail designers, these examples offer valuable lessons.",
      image: "https://i.ibb.co/GQKNv8Sg/Global-Retail-01-Avenues-Kuwait-2000px.png"
    },
    {
      title: "The Top 10 Cities People Don't Want to Leave",
      category: "BLOG",
      description: "Gensler's 2025 City Pulse survey reveals the top cities where people not only move to, but also stay long-term.",
      image: "https://i.ibb.co/qY6vq7pL/Canopy-San-Antonio-N10-1750108600.png"
    },
    {
      title: "Test, Don't Guess: A New Approach for Healthcare Design",
      category: "BLOG",
      description: "Healthcare leaders are modeling multiple futures before breaking ground — shifting from fixed bets to flexible strategies.",
      image: "https://i.ibb.co/xSzGVd4V/MGBi-Care-Salem-014.png"
    },
    {
      title: "Mixed-Use Developments: A Sustainable Blueprint for Urban Growth",
      category: "BLOG",
      description: "High-density mixed-use developments can be a powerful engine for economic growth, resilience, and cultural and socioeconomic cohesion.",
      image: "https://i.ibb.co/2Y5Md0mP/Fields-West-002.png"
    },
    {
      title: "Trends to Watch: How Global Events Build Magnetic Place Brands",
      category: "BLOG",
      description: "From the Super Bowl to the FIFA World Cup, marquee events transform urban environments into platforms that amplify civic pride and create lasting impact.",
      image: "https://i.ibb.co/qFn62BGc/Seattle-Mariners-N6.png"
    },
    {
      title: "The Masters of Scale Podcast Featured a Conversation With Co-CEO Elizabeth Brink and Co-Chair Andy Cohen on Designing the Office as a Destination",
      category: "IN THE MEDIA",
      description: "Gensler Co-CEO Elizabeth Brink and Co-Chair Andy Cohen reflected on the firm's collaborative leadership model.",
      source: "The Masters of Scale",
      sourceIcon: "●",
      image: "https://i.ibb.co/2Y5Md0mP/Fields-West-002.png"
    },
    {
      title: "Beyond the Screen: Making Digital Beauty Brands Shine in Real Life",
      category: "BLOG",
      description: "How digital-first retailers can navigate the crucial transition of a brand into physical space.",
      image: "https://i.ibb.co/Pz5Z2Kxd/Gensler-NYX-3.png"
    },
    {
      title: "The New Economics of Sports Venue Design",
      category: "BLOG",
      description: "From NIL-driven college athletics to multi-tiered VIP lounges and mixed-use districts, sports venues are evolving into dynamic business ecosystems.",
      image: "https://i.ibb.co/s9xfQsWC/New-Economicsof-Sports-Venues-BMO-VIP-2000px.png"
    },
    {
      title: "Design Forecast 2026: The Future of Design",
      category: "DESIGN FORECAST 2026",
      description: "Explore the key trends that will shape the design industry in 2026 and beyond.",
      image: "https://i.ibb.co/PGdqZfW1/e9a25def7665c6f1701cca9e582be529.png"
    }
  ];

  const totalSlides = Math.ceil(smallBlogPosts.length / postsPerSlide);
  const startIndex = currentSlide * postsPerSlide;
  const endIndex = startIndex + postsPerSlide;
  const currentPosts = smallBlogPosts.slice(startIndex, endIndex);

  const featuredProjects = [
    {
      id: 1,
      title: "Capital One Arena",
      location: "Washington, D.C.",
      description: "Downtown Washington, D.C.'s premier sports and entertainment venue has entered a new chapter that solidifies the structure's enduring legacy as the central hub of the city's vibrant urban core.",
      image: "https://i.ibb.co/5xnrPvsJ/project-capital-one-arena-2024-508x508-1734586678.png"
    },
    {
      id: 2,
      title: "Al-Ahly Stadium",
      location: "Cairo, Egypt",
      description: "World-class stadium design redefining the fan experience in North Africa.",
      image: "https://i.ibb.co/TzTHJX9/project-al-ahly-stadium-02-508x508-1739475365.png"
    },
    {
      id: 3,
      title: "Chicago Fire FC Stadium",
      location: "Chicago, Illinois",
      description: "Amplifies the fan experience and serves as the cornerstone of the city's newest mixed-use district.",
      image: "https://i.ibb.co/ksLSQjBc/project-chicago-fire-fc-508x508-2.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleProjectClick = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };
useEffect(() => {
  const video = document.getElementById('spotlight-video');
  const playBtn = document.getElementById('spotlight-play-pause');
  
  if (video && playBtn) {
    const updatePlayIcon = () => {
      const playIcon = playBtn.querySelector('#play-icon');
      if (playIcon) {
        if (video.paused) {
          playIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />`;
        } else {
          playIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />`;
        }
      }
    };
    
    video.addEventListener('play', updatePlayIcon);
    video.addEventListener('pause', updatePlayIcon);
    
    return () => {
      video.removeEventListener('play', updatePlayIcon);
      video.removeEventListener('pause', updatePlayIcon);
    };
  }
}, []);

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
      
      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      
      .carousel-slide {
        transition: transform 0.5s ease;
      }
    `
    document.head.appendChild(style)
    
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPostsPerSlide(1);
      } else {
        setPostsPerSlide(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      document.head.removeChild(style);
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <>
      <Nav />
      
      <main className="pt-16">
        <DesignForecast />
        
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">BLOG</h2>
            
            <div className="space-y-20 mb-20">
              <div className="group bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <img 
                        src="https://i.ibb.co/twLfRWLL/baghdad-sustainable-x2000lo.png"
                        alt="6 Trends Shaping Design"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 text-sm font-semibold tracking-wider">
                        DESIGN FORECAST 2026
                      </span>
                    </div>
                    
                    <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-blue-600 cursor-pointer transition-colors duration-300">
                      6 Trends Shaping Design in 2026
                    </h3>
                    
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      Discover the most important and actionable themes shaping design in 2026, based on over 100 trends across 33 industries around the world.
                    </p>
                    
                    <button className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 group/btn self-start">
                      Read Article
                      <svg className="w-4 h-4 ml-2 transform group-hover/btn:translateX(2px) transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="group bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <img 
                        src="https://i.ibb.co/5hPPG156/Bio-Med-Realty-2000x1125-1024x576.png"
                        alt="Workplace Trends"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 text-sm font-semibold tracking-wider">
                        BLOG
                      </span>
                    </div>
                    
                    <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-blue-600 cursor-pointer transition-colors duration-300">
                      10 Workplace Trends for 2026: What's In and What's Out?
                    </h3>
                    
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      This is the year of bold moves, human-first thinking, and AI that doesn't just answer questions but joins the team.
                    </p>
                    
                    <button className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 group/btn self-start">
                      Read Article
                      <svg className="w-4 h-4 ml-2 transform group-hover/btn:translateX(2px) transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">More Articles</h3>
                
                <div className="flex items-center gap-4">
                  <div className="text-gray-500 text-sm">
                    <span className="font-bold">{currentSlide + 1}</span> / {totalSlides}
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden">
                <div className="flex gap-8 transition-transform duration-500 carousel-slide">
                  {currentPosts.map((post, index) => (
                    <div key={startIndex + index} className={`${postsPerSlide === 3 ? 'w-1/3' : 'w-full'} group cursor-pointer`}>
                      <div className="h-48 overflow-hidden rounded-lg mb-4">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                          post.category === 'BLOG' 
                            ? 'bg-gray-100 text-gray-700'
                            : post.category === 'IN THE MEDIA'
                            ? 'bg-purple-100 text-purple-700'
                            : post.category === 'RESEARCH'
                            ? 'bg-blue-100 text-blue-700'
                            : post.category === 'DESIGN FORECAST 2026'
                            ? 'bg-indigo-100 text-indigo-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {post.category}
                        </span>
                        {post.source && post.sourceIcon && (
                          <>
                            <span className="text-gray-800 font-bold text-lg">{post.sourceIcon}</span>
                            <span className="text-gray-400 text-xs">{post.source}</span>
                          </>
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {post.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

           <div className="flex flex-col sm:flex-row gap-4 mt-20 pt-12 border-t border-gray-200">
  <Link 
    to="/research" 
    className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-black text-white font-semibold hover:bg-gray-800 transition-colors text-sm sm:text-base md:text-lg w-full sm:w-auto text-center"
  >
    VIEW LATEST RESEARCH
  </Link>
  <Link 
    to="/blog" 
    className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 border-2 border-black text-black font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base md:text-lg w-full sm:w-auto text-center"
  >
    VIEW DIALOGUE BLOG
  </Link>
</div>
          </div>
        </section>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <Hero />
              </div>
            </div>
          </div>
        </section>
        
       <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      <div className="lg:col-span-1"></div>
      
      <div>
        <div className="sticky top-24">
          <div className="overflow-hidden rounded-2xl shadow-xl mb-8 lg:mb-12 relative h-[500px] lg:h-[600px] group">
            <div className="absolute inset-0 z-0">
              <video
                id="spotlight-video"
                autoPlay
                muted
                loop
                playsInline
                className="absolute w-full h-full object-cover"
              >
                <source 
                  src={spotlightVideo} 
                  type="video/mp4" 
                />
              </video>
              
              <button 
                id="spotlight-play-pause"
                className="absolute top-4 left-4 z-20 w-12 h-12 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center hover:bg-black/90 transition-all duration-300"
                onClick={() => {
                  const video = document.getElementById('spotlight-video');
                  if (video.paused) {
                    video.play();
                  } else {
                    video.pause();
                  }
                }}
              >
                <svg id="play-icon" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
              </button>
              
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <div className="absolute top-4 right-4">
                <div className="px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full">
                  <span className="text-white text-xs font-medium">SPOTLIGHT</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                  Real Estate Value Moves From Square Footage to Human Connection
                </h3>
                <p className="text-gray-200 text-lg max-w-2xl">
                  Traditional performance benchmarks are evolving to prioritize engagement and experience.
                </p>
              </div>
              
              <button className="self-start px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-colors rounded-lg border border-white/20">
                Explore Insights →
              </button>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">FEATURED PROJECTS</h2>
            <div className="space-y-6 md:space-y-8">
              {featuredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="relative cursor-pointer group"
                  onClick={() => handleProjectClick(project.id)}
                >
                  <div className="relative overflow-hidden rounded-lg h-56 md:h-64">
                    <div className={`absolute inset-0 transition-opacity duration-300 ${
                      activeProject === project.id ? 'opacity-0' : 'opacity-100'
                    }`}>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end transition-opacity duration-300 ${
                      activeProject === project.id ? 'opacity-0' : 'opacity-100'
                    }`}>
                      <div className="p-4 md:p-6">
                        <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
                      </div>
                    </div>
                    
                    <div className={`absolute inset-0 bg-white p-4 md:p-6 flex flex-col justify-center transition-all duration-300 transform ${
                      activeProject === project.id 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{project.title}</h3>
                      <p className="text-gray-600 font-medium mb-2 md:mb-3">{project.location}</p>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{project.description}</p>
                      
                      <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-200">
                        <p className="text-gray-400 text-xs">Click to view image</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`mt-3 md:mt-4 transition-opacity duration-300 ${
                    activeProject === project.id ? 'opacity-0' : 'opacity-100'
                  }`}>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
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
                  <button className="px-8 py-3 bg-white text-black font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
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