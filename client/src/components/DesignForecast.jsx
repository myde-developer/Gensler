import React, { useState, useEffect, useCallback } from 'react';

export default function DesignForecast() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  
  const slides = [
    {
      id: 0,
      title: "DESIGN FORECAST 2026",
      learnMoreText: "EXPLORE",
      projectTag: "Burlingame Point, Burlingame, California",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-modern-buildings-41579-large.mp4",
      trendingTopics: [
        "A New Vision for Co-Living Conversions",
        "Gensler Product Sustainability Standards™",
        "Conversions+™ by Gensler"
      ],
      backgroundColor: "from-slate-900/90 to-gray-800/80",
      textColor: "text-white"
    },
    {
      id: 1,
      title: "What Makes a City Magnetic?",
      description: "Explore Gensler's Newest Survey of Urbanites in 65 Cities Around the World",
      learnMoreText: "LEARN MORE",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-busy-city-street-at-night-41576-large.mp4",
      trendingTopics: [
        "A New Vision for Co-Living Conversions",
        "Gensler Product Sustainability Standards™",
        "Conversions+™ by Gensler"
      ],
      backgroundColor: "from-gray-900/90 to-black/80",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "The Future Takes Flight at Pittsburgh International Airport",
      description: "The State-of-the-Art Terminal Creates a Model of Innovation and Operational Resilience",
      learnMoreText: "LEARN MORE",
      projectTag: "Pittsburgh International Airport Terminal, Pittsburgh, Pennsylvania",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-airport-terminal-interior-41577-large.mp4",
      trendingTopics: [
        "A New Vision for Co-Living Conversions",
        "Gensler Product Sustainability Standards™",
        "Conversions+™ by Gensler"
      ],
      backgroundColor: "from-blue-900/90 to-gray-900/80",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "Prototyping the Hospital of the Future",
      description: "Explore a New Design Approach That Adapts to Its Community Over Time",
      learnMoreText: "LEARN MORE",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-hospital-corridor-41575-large.mp4",
      trendingTopics: [
        "A New Vision for Co-Living Conversions",
        "Gensler Product Sustainability Standards™",
        "Conversions+™ by Gensler"
      ],
      backgroundColor: "from-emerald-900/90 to-teal-900/80",
      textColor: "text-white"
    },
    {
      id: 4,
      title: "Navigating Change With Adaptable Workplace Design",
      description: "New Data Uncovers the Amenities and Agency People Are Looking For",
      learnMoreText: "LEARN MORE",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-office-design-41578-large.mp4",
      trendingTopics: [
        "A New Vision for Co-Living Conversions",
        "Gensler Product Sustainability Standards™",
        "Conversions+™ by Gensler"
      ],
      backgroundColor: "from-indigo-900/90 to-purple-900/80",
      textColor: "text-white"
    },
    {
      id: 5,
      title: "Fast Company Names Gensler a Most Innovative Company for the Second Year in a Row",
      description: "The Gensler Product Sustainability Standards™ is Recognized for Helping the Industry Adopt More Regenerative Materials",
      learnMoreText: "LEARN MORE",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-office-41574-large.mp4",
      trendingTopics: [
        "A New Vision for Co-Living Conversions",
        "Gensler Product Sustainability Standards™",
        "Conversions+™ by Gensler"
      ],
      backgroundColor: "from-amber-900/90 to-orange-900/80",
      textColor: "text-white"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const nextIndex = (prev + 1) % slides.length;
      setIsLoading(true);
      return nextIndex;
    });
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const prevIndex = (prev - 1 + slides.length) % slides.length;
      setIsLoading(true);
      return prevIndex;
    });
  }, [slides.length]);

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      setIsLoading(true);
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 7000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, nextSlide]);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        setIsAutoPlaying(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  const isDesignForecastSlide = currentSlide === 0;

  return (
    <div 
      className="relative w-full h-screen max-h-[900px] overflow-hidden group"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {isLoading && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/80">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin mb-4"></div>
            <p className="text-white text-sm font-medium">Loading...</p>
          </div>
        </div>
      )}

      <div className="absolute inset-0 z-0">
        <video
          key={slides[currentSlide].id}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
          onLoadedData={handleVideoLoad}
          onError={handleVideoLoad}
        >
          <source src={slides[currentSlide].videoUrl} type="video/mp4" />
        </video>
        
        <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].backgroundColor}`} />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 h-full flex items-center px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-2">
              {isDesignForecastSlide ? (
                <>
                  <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none text-white">
                    DESIGN<br />
                    <span className="block mt-2">FORECAST</span>
                    <span className="block mt-2 text-6xl md:text-7xl lg:text-8xl">2026</span>
                  </h2>
                  
                  <button className="px-8 py-4 bg-white text-black font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg tracking-wider mb-8">
                    EXPLORE
                  </button>
                  
                  {slides[currentSlide].projectTag && (
                    <div className="mb-8">
                      <p className="text-gray-300 text-lg font-medium">{slides[currentSlide].projectTag}</p>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight text-white">
                    {slides[currentSlide].title}
                  </h2>

                  <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
                    {slides[currentSlide].description}
                  </p>

                  {slides[currentSlide].projectTag && (
                    <div className="mb-8">
                      <p className="text-gray-300 text-lg font-medium">{slides[currentSlide].projectTag}</p>
                    </div>
                  )}

                  <button className="inline-flex items-center px-8 py-4 bg-white text-black font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg tracking-wider">
                    {slides[currentSlide].learnMoreText}
                    <svg 
                      className="w-6 h-6 ml-3" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-0.5 bg-white"></div>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-widest">
                      TRENDING
                    </h3>
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-2">TOPICS</h4>
                </div>

                <div className="space-y-6">
                  {slides[currentSlide].trendingTopics.map((topic, index) => (
                    <div 
                      key={index}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors mt-1 flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white text-lg font-medium group-hover:text-gray-200 transition-colors leading-tight">
                            {topic}
                          </p>
                        </div>
                      </div>
                      {index < slides[currentSlide].trendingTopics.length - 1 && (
                        <div className="mt-6 w-full h-px bg-white/10"></div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`transition-all duration-300 ${
                            index === currentSlide
                              ? 'w-8 h-2 bg-white rounded-full'
                              : 'w-2 h-2 bg-white/30 rounded-full hover:bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-white text-sm font-bold">
                      {currentSlide + 1} / {slides.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/70 hover:scale-110"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/70 hover:scale-110"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-48">
        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-1000 ease-linear"
            style={{ 
              width: isAutoPlaying ? `${((currentSlide + 1) / slides.length) * 100}%` : '0%'
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}