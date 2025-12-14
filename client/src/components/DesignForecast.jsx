import React, { useState, useEffect, useCallback, useRef } from 'react';

import designForecastVideo from '../assets/design-forecast-2026.mp4';
import cityMagneticVideo from '../assets/city-magnetic.mp4';
import airportTerminalVideo from '../assets/airport-terminal.mp4';
import workplaceDesignVideo from '../assets/workplace-design.mp4';
import innovativeCompanyVideo from '../assets/innovative-company.mp4';
import hospitalFutureImage from '../assets/hospital-future.jpg';

export default function DesignForecast() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  
  const slides = [
    {
      id: 0,
      title: "DESIGN FORECAST 2026",
      learnMoreText: "EXPLORE",
      projectTag: "Burlingame Point, Burlingame, California",
      videoUrl: designForecastVideo,
      backgroundColor: "from-slate-900/90 to-gray-800/80",
      textColor: "text-white",
      mediaType: "video"
    },
    {
      id: 1,
      title: "What Makes a City Magnetic?",
      description: "Explore Gensler's Newest Survey of Urbanites in 65 Cities Around the World",
      learnMoreText: "LEARN MORE",
      videoUrl: cityMagneticVideo,
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
      videoUrl: airportTerminalVideo,
      backgroundColor: "from-blue-900/90 to-gray-900/80",
      textColor: "text-white",
      mediaType: "video"
    },
    {
      id: 3,
      title: "Prototyping the Hospital of the Future",
      description: "Explore a New Design Approach That Adapts to Its Community Over Time",
      learnMoreText: "LEARN MORE",
      imageUrl: hospitalFutureImage,
      backgroundColor: "from-emerald-900/90 to-teal-900/80",
      textColor: "text-white",
      mediaType: "image" 
    },
    {
      id: 4,
      title: "Navigating Change With Adaptable Workplace Design",
      description: "New Data Uncovers the Amenities and Agency People Are Looking For",
      learnMoreText: "LEARN MORE",
      videoUrl: workplaceDesignVideo,
      backgroundColor: "from-indigo-900/90 to-purple-900/80",
      textColor: "text-white",
      mediaType: "video"
    },
    {
      id: 5,
      title: "Fast Company Names Gensler a Most Innovative Company for the Second Year in a Row",
      description: "The Gensler Product Sustainability Standards™ is Recognized for Helping the Industry Adopt More Regenerative Materials",
      learnMoreText: "LEARN MORE",
      videoUrl: innovativeCompanyVideo,
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
    let progressInterval;
    
    if (isAutoPlaying) {
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setProgress(0);
            return 0;
          }
          return prev + (100 / 70);
        });
      }, 100);
    }
    
    return () => {
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [isAutoPlaying]);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log("Autoplay prevented");
        }
      }
    };

    if (slides[currentSlide].mediaType === 'video') {
      playVideo();
    }
  }, [currentSlide]);

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
      if (e.key === ' ' && videoRef.current) {
        e.preventDefault();
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(e => {
          console.log("Video play failed:", e);
        });
      }
    };

    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

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
            ref={videoRef}
            key={currentMedia.id}
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
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
            className="absolute w-full h-full object-cover"
            onLoad={handleMediaLoad}
            onError={handleMediaLoad}
          />
        )}
        
        <div className={`absolute inset-0 bg-gradient-to-r ${currentMedia.backgroundColor} opacity-40`} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto w-full text-center">
          {isDesignForecastSlide ? (
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-none text-white tracking-tight">
                DESIGN<br />
                <span className="block mt-1 sm:mt-2">FORECAST</span>
                <span className="block mt-1 sm:mt-2 text-4xl sm:text-5xl md:text-7xl lg:text-8xl">2026</span>
              </h1>
              
              <div className="space-y-4 md:space-y-6">
                <button className="inline-flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-black font-bold hover:bg-gray-100 transition-all duration-300 text-base sm:text-lg md:text-xl tracking-wider group/btn mx-auto">
                  EXPLORE
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6 ml-3 sm:ml-4 transition-transform group-hover/btn:translate-x-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                
                {currentMedia.projectTag && (
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <div className="w-4 sm:w-6 h-px bg-white/60"></div>
                    <p className="text-gray-300 text-sm sm:text-base font-light tracking-wider">{currentMedia.projectTag}</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-6 md:space-y-8 px-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white tracking-tight">
                {currentMedia.title}
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-light">
                {currentMedia.description}
              </p>

              {currentMedia.projectTag && (
                <div className="flex items-center justify-center gap-2 sm:gap-3 pt-2 sm:pt-4">
                  <div className="w-4 sm:w-6 h-px bg-white/60"></div>
                  <p className="text-gray-300 text-sm sm:text-base font-light tracking-wider">{currentMedia.projectTag}</p>
                </div>
              )}

              <button className="inline-flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-black font-bold hover:bg-gray-100 transition-all duration-300 text-base sm:text-lg md:text-xl tracking-wider group/btn mt-4 sm:mt-6 md:mt-8 mx-auto">
                {currentMedia.learnMoreText}
                <svg 
                  className="w-5 h-5 sm:w-6 sm:h-6 ml-3 sm:ml-4 transition-transform group-hover/btn:translate-x-2" 
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

        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-xs sm:max-w-sm md:max-w-md px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
            <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? 'w-8 sm:w-10 md:w-12 h-1.5 sm:h-2 bg-white'
                        : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="text-white text-xs sm:text-sm font-medium tracking-wide">
                <span className="text-lg sm:text-xl md:text-2xl font-bold">{currentSlide + 1}</span>
                <span className="mx-1 sm:mx-2">/</span>
                <span className="text-white/70">{slides.length}</span>
              </div>
            </div>
            
            <div className="mt-1 sm:mt-2">
              <div className="w-full h-0.5 sm:h-1 bg-white/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 hover:bg-black/60"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 hover:bg-black/60"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}