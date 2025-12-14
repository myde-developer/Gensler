import React, { useState, useEffect, useCallback } from 'react';

import designForecastVideo from '../assets/design-forecast-2026.mp4';
import cityMagneticVideo from '../assets/city-magnetic.mp4';
import airportTerminalVideo from '../assets/airport-terminal.mp4';
import workplaceDesignVideo from '../assets/workplace-design.mp4';
import innovativeCompanyVideo from '../assets/innovative-company.mp4';
import hospitalFutureImage from '../assets/hospital-future.jpg';

export default function DesignForecast() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  
  const slides = [
    {
      id: 0,
      title: "DESIGN FORECAST 2026",
      learnMoreText: "EXPLORE",
      projectTag: "Burlingame Point, Burlingame, California",
      videoUrl: designForecastVideo, // Use imported video
      trendingTopics: [
        "A New Vision for Co-Living Conversions",
        "Gensler Product Sustainability Standards™",
        "Conversions+™ by Gensler"
      ],
      backgroundColor: "from-slate-900/90 to-gray-800/80",
      textColor: "text-white",
      mediaType: "video"
    },
    {
      id: 1,
      title: "What Makes a City Magnetic?",
      description: "Explore Gensler's Newest Survey of Urbanites in 65 Cities Around the World",
      learnMoreText: "LEARN MORE",
      videoUrl: cityMagneticVideo, // Use imported video
      trendingTopics: [
        "A New Vision for Co-Living Conversions",
        "Gensler Product Sustainability Standards™",
        "Conversions+™ by Gensler"
      ],
      backgroundColor: "from-gray-900/90 to-black/80",
      textColor: "text-white",
      mediaType: "video"
    },
    {
      id: 2,
      title: "The Future Takes Flight at Pittsburgh International Airport",
      description: "The State-of-the-Art Terminal Creates a Model of Innovation and Operational Resilience",
      learnMoreText: "LEARN MORE",
      projectTag: "Pittsburgh International Airport Terminal, Pittsburgh, Pennsylvania",
      videoUrl: airportTerminalVideo, // Use imported video
      trendingTopics: [
        "A New Vision for Co-Living Conversions",
        "Gensler Product Sustainability Standards™",
        "Conversions+™ by Gensler"
      ],
      backgroundColor: "from-blue-900/90 to-gray-900/80",
      textColor: "text-white",
      mediaType: "video"
    },
    {
      id: 3,
      title: "Prototyping the Hospital of the Future",
      description: "Explore a New Design Approach That Adapts to Its Community Over Time",
      learnMoreText: "LEARN MORE",
      imageUrl: hospitalFutureImage, // Use imported image
      trendingTopics: [
        "A New Vision for Co-Living Conversions",
        "Gensler Product Sustainability Standards™",
        "Conversions+™ by Gensler"
      ],
      backgroundColor: "from-emerald-900/90 to-teal-900/80",
      textColor: "text-white",
      mediaType: "image" 
    },
    {
      id: 4,
      title: "Navigating Change With Adaptable Workplace Design",
      description: "New Data Uncovers the Amenities and Agency People Are Looking For",
      learnMoreText: "LEARN MORE",
      videoUrl: workplaceDesignVideo, // Use imported video
      trendingTopics: [
        "A New Vision for Co-Living Conversions",
        "Gensler Product Sustainability Standards™",
        "Conversions+™ by Gensler"
      ],
      backgroundColor: "from-indigo-900/90 to-purple-900/80",
      textColor: "text-white",
      mediaType: "video"
    },
    {
      id: 5,
      title: "Fast Company Names Gensler a Most Innovative Company for the Second Year in a Row",
      description: "The Gensler Product Sustainability Standards™ is Recognized for Helping the Industry Adopt More Regenerative Materials",
      learnMoreText: "LEARN MORE",
      videoUrl: innovativeCompanyVideo, // Use imported video
      trendingTopics: [
        "A New Vision for Co-Living Conversions",
        "Gensler Product Sustainability Standards™",
        "Conversions+™ by Gensler"
      ],
      backgroundColor: "from-amber-900/90 to-orange-900/80",
      textColor: "text-white",
      mediaType: "video"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const nextIndex = (prev + 1) % slides.length;
      setIsLoading(true);
      setProgress(0);
      return nextIndex;
    });
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const prevIndex = (prev - 1 + slides.length) % slides.length;
      setIsLoading(true);
      setProgress(0);
      return prevIndex;
    });
  }, [slides.length]);

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      setIsLoading(true);
      setProgress(0);
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    let interval;
    let progressInterval;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 7000);
      
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            return 0;
          }
          return prev + (100 / 70);
        });
      }, 100);
    }
    
    return () => {
      if (interval) clearInterval(interval);
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [isAutoPlaying, nextSlide]);

  const handleMediaLoad = () => {
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
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  const isDesignForecastSlide = currentSlide === 0;
  const currentMedia = slides[currentSlide];

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
        {currentMedia.mediaType === 'video' ? (
          <video
            key={currentMedia.id}
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover scale-110"
            onLoadedData={handleMediaLoad}
            onError={() => {
              console.error(`Video failed to load: ${currentMedia.videoUrl}`);
              handleMediaLoad();
            }}
          >
            <source src={currentMedia.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            key={currentMedia.id}
            src={currentMedia.imageUrl}
            alt={currentMedia.title}
            className="absolute w-full h-full object-cover scale-110"
            onLoad={handleMediaLoad}
            onError={handleMediaLoad}
          />
        )}
        
        <div className={`absolute inset-0 bg-gradient-to-r ${currentMedia.backgroundColor} opacity-60`} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 h-full flex items-center px-6 sm:px-12 md:px-20 lg:px-32">
        <div className="max-w-[1800px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-2">
              {isDesignForecastSlide ? (
                <div className="space-y-8">
                  <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none text-white tracking-tight">
                    DESIGN<br />
                    <span className="block mt-2">FORECAST</span>
                    <span className="block mt-2 text-6xl md:text-7xl lg:text-8xl">2026</span>
                  </h1>
                  
                  <div className="space-y-6">
                    <button className="inline-flex items-center px-10 py-5 bg-white text-black font-bold hover:bg-gray-100 transition-all duration-300 text-lg tracking-wider group/btn">
                      EXPLORE
                      <svg 
                        className="w-6 h-6 ml-4 transition-transform group-hover/btn:translate-x-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                    
                    {currentMedia.projectTag && (
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-px bg-white/60"></div>
                        <p className="text-gray-300 text-base font-light tracking-wider">{currentMedia.projectTag}</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white tracking-tight">
                    {currentMedia.title}
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed font-light">
                    {currentMedia.description}
                  </p>

                  {currentMedia.projectTag && (
                    <div className="flex items-center gap-3 pt-4">
                      <div className="w-6 h-px bg-white/60"></div>
                      <p className="text-gray-300 text-base font-light tracking-wider">{currentMedia.projectTag}</p>
                    </div>
                  )}

                  <button className="inline-flex items-center px-10 py-5 bg-white text-black font-bold hover:bg-gray-100 transition-all duration-300 text-lg tracking-wider group/btn mt-8">
                    {currentMedia.learnMoreText}
                    <svg 
                      className="w-6 h-6 ml-4 transition-transform group-hover/btn:translate-x-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

<div className="lg:col-span-1">
  <div className="bg-white rounded-2xl p-8 shadow-2xl">
    <div className="mb-10">
      <div className="flex items-start gap-4">
        <div className="w-1 h-12 bg-black mt-1 flex-shrink-0"></div>
        <div>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
            Trending
          </h3>
          <h4 className="text-3xl font-bold text-black tracking-tight">
            Topics
          </h4>
        </div>
      </div>
    </div>

    <div className="space-y-8">
      {currentMedia.trendingTopics.map((topic, index) => (
        <div 
          key={index}
          className="group"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-black transition-colors duration-300">
              <span className="text-black group-hover:text-white text-sm font-bold transition-colors duration-300">
                {index + 1}
              </span>
            </div>
            
            <div className="flex-1">
              <p className="text-lg text-black font-medium leading-tight group-hover:text-gray-700 transition-colors duration-300 tracking-wide">
                {topic}
              </p>
            </div>
          </div>
          
          {index < currentMedia.trendingTopics.length - 1 && (
            <div className="mt-8 ml-14 w-[calc(100%-3.5rem)] h-px bg-gray-200"></div>
          )}
        </div>
      ))}
    </div>

    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-12 h-2 bg-black'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="text-black text-sm font-medium tracking-wide">
          <span className="text-2xl font-bold">{currentSlide + 1}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-500">{slides.length}</span>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-black transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
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
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 hover:bg-black/70"
        aria-label="Previous slide"
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 hover:bg-black/70"
        aria-label="Next slide"
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}