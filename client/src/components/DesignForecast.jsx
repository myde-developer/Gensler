import React, { useState, useEffect, useCallback } from 'react';

export default function DesignForecast() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  
  const slides = [
    {
      id: 1,
      mainTitle: "DESIGN FORECAST 2026",
      title: "Navigating Change With Adaptable Workplace Design",
      description: "New Data Uncovers the Amenities and Agencies people are looking for:",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-office-design-41578-large.mp4",
      learnMoreText: "LEARN MORE",
      backgroundColor: "from-blue-900/80 to-indigo-900/80",
      textColor: "text-white"
    },
    {
      id: 2,
      mainTitle: "DESIGN FORECAST 2026",
      title: "The Future Takes Flight at Pittsburgh International Airport",
      description: "The State-of-the-Art Terminal creates a Model of Innovation and Operational Excellence",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-airport-terminal-interior-41577-large.mp4",
      learnMoreText: "LEARN MORE",
      projectTag: "Pittsburgh International Airport Terminal, Pittsburgh, Pennsylvania",
      backgroundColor: "from-gray-800/80 to-blue-900/80",
      textColor: "text-white"
    },
    {
      id: 3,
      mainTitle: "DESIGN FORECAST 2026",
      title: "What Makes a City Magnetic?",
      description: "Explore Gensler's Newest Survey of Urbanites from 30 Cities around the World",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-busy-city-street-at-night-41576-large.mp4",
      learnMoreText: "LEARN MORE",
      backgroundColor: "from-amber-800/80 to-orange-900/80",
      textColor: "text-white"
    },
    {
      id: 4,
      mainTitle: "DESIGN FORECAST 2026",
      title: "Prototyping the Hospital of the Future",
      description: "Explore a New Design For Hospital That adapts to its community over time",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-hospital-corridor-41575-large.mp4",
      learnMoreText: "LEARN MORE",
      backgroundColor: "from-emerald-800/80 to-teal-900/80",
      textColor: "text-white"
    },
    {
      id: 5,
      mainTitle: "DESIGN FORECAST 2026",
      title: "Fast Company Names Gensler a Most Innovative Company For The Second Year in A Row",
      description: "The Gensler Product Sustainability (GPS) Standards™ is Recognized for helping the Industry Adopt More Regenerative Materials.",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-office-41574-large.mp4",
      learnMoreText: "LEARN MORE",
      backgroundColor: "from-purple-800/80 to-pink-900/80",
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
      }, 6000);
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

  return (
    <div 
      className="relative w-full h-[550px] rounded-2xl overflow-hidden group shadow-2xl"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {isLoading && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/70">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin mb-4"></div>
            <p className="text-white text-sm">Loading design forecast...</p>
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
          <img 
            src={`https://images.unsplash.com/photo-${slides[currentSlide].id === 1 ? '1497366754035' : slides[currentSlide].id === 2 ? '1545324418' : slides[currentSlide].id === 3 ? '1542601906990' : slides[currentSlide].id === 4 ? '1487958449943' : '1519494026892'}-f200968a6e72?q=80&w=2069&auto=format&fit=crop`}
            alt={slides[currentSlide].title}
            className="absolute w-full h-full object-cover"
          />
        </video>
        
        <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].backgroundColor}`} />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl">
          <div className="mb-6 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-sm font-semibold text-white tracking-wider">
                {slides[currentSlide].mainTitle}
              </span>
            </div>
          </div>

          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight animate-slide-up ${slides[currentSlide].textColor}`}>
            {slides[currentSlide].title}
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mb-4 max-w-3xl animate-slide-up">
            {slides[currentSlide].description}
          </p>

          {slides[currentSlide].bulletPoints && (
            <div className="mb-6 space-y-1 animate-slide-up">
              {slides[currentSlide].bulletPoints.map((point, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <span className="mr-2">•</span>
                  <span>{point.replace('•', '')}</span>
                </div>
              ))}
            </div>
          )}

          {slides[currentSlide].projectTag && (
            <div className="mb-6 animate-slide-up">
              <p className="text-gray-300 text-sm italic">{slides[currentSlide].projectTag}</p>
            </div>
          )}

          <button className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 animate-slide-up">
            {slides[currentSlide].learnMoreText}
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <div className="mt-6 flex items-center space-x-4 animate-slide-up">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
              <span className="text-xs text-gray-300">
                {isAutoPlaying ? 'Auto-playing' : 'Paused'}
              </span>
            </div>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-gray-300 hover:text-white transition-colors"
            >
              {isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 hover:scale-110 active:scale-95"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 hover:scale-110 active:scale-95"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-6 h-2 bg-white rounded-full'
                : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/80 hover:scale-125'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-6 right-6 z-20">
        <div className="flex items-center space-x-1 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-bold text-white">{currentSlide + 1}</span>
          <span className="text-xs text-gray-300">/</span>
          <span className="text-xs text-gray-300">{slides.length}</span>
        </div>
      </div>
    </div>
  );
}