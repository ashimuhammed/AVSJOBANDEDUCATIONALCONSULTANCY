// frontend/src/pages/Home.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { serviceService, jobService, programService, applicationService } from '../services/api';
import CourseFinder from '../components/common/CourseFinder';
import { useNavigate } from 'react-router-dom';

const AutoSlidingImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);

  const allCountries = [
    { name: 'Russia', code: 'ru', slug: 'russia' },
    { name: 'Ukraine', code: 'ua', slug: 'ukraine' },
    { name: 'Georgia', code: 'ge', slug: 'georgia' },
    { name: 'Philippines', code: 'ph', slug: 'philippines' },
    { name: 'Kyrgyzstan', code: 'kg', slug: 'kyrgyzstan' },
    { name: 'Bangladesh', code: 'bd', slug: 'bangladesh' },
    { name: 'Egypt', code: 'eg', slug: 'egypt' },
    { name: 'Poland', code: 'pl', slug: 'poland' },
    { name: 'Hungary', code: 'hu', slug: 'hungary' },
    { name: 'Belarus', code: 'by', slug: 'belarus' },
    { name: 'Bulgaria', code: 'bg', slug: 'bulgaria' },
    { name: 'China', code: 'cn', slug: 'china' },
    { name: 'Romania', code: 'ro', slug: 'romania' },
    { name: 'Turkey', code: 'tr', slug: 'turkey' },
    { name: 'Uzbekistan', code: 'uz', slug: 'uzbekistan' },
    { name: 'Serbia', code: 'rs', slug: 'serbia' },
    { name: 'Italy', code: 'it', slug: 'italy' },
    { name: 'Spain', code: 'es', slug: 'spain' },
    { name: 'France', code: 'fr', slug: 'france' },
    { name: 'Germany', code: 'de', slug: 'germany' },
    { name: 'Australia', code: 'au', slug: 'australia' }
  ];

  const navigate = useNavigate();
  const visibleCount = 9;

  // Auto-advance carousel with proper cleanup
  useEffect(() => {
    if (isTransitioning) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  const handleCountryClick = (country) => {
    navigate(`/mbbs/${country.slug}`);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % allCountries.length);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? allCountries.length - 1 : prev - 1));
  };

  // Reset transitioning state after animation
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Get visible countries with position-based styling
  const getVisibleCountries = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % allCountries.length;
      visible.push({
        ...allCountries[index],
        position: i, // 0-8 for styling
        uniqueKey: `${allCountries[index].code}-${currentIndex}-${i}`
      });
    }
    return visible;
  };

  const visibleCountries = getVisibleCountries();

  return (
    <div className="relative space-y-8 py-12 rounded-2xl ">
      {/* Navigation Arrows */}
      {/* <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl disabled:opacity-30"
        disabled={isTransitioning}
      >
        <span className="text-2xl font-bold text-gray-700">‹</span>
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl disabled:opacity-30"
        disabled={isTransitioning}
      >
        <span className="text-2xl font-bold text-gray-700">›</span>
      </button> */}

      {/* Carousel Container */}
      <div className="relative mx-auto max-w-6xl px-12">
        {/* Carousel Track */}
        <div 
          ref={carouselRef}
          className={`flex justify-center items-center space-x-6 transition-all duration-500 ease-out ${
            isTransitioning ? 'opacity-90' : 'opacity-100'
          }`}
        >
          {visibleCountries.map((country, index) => {
            // Calculate scale and z-index based on position
            const position = country.position;
            const isCenter = position === 4; // Middle position (0-8, so 4 is center)
            const distanceFromCenter = Math.abs(position - 4);
            const scale = 1 - (distanceFromCenter * 0.08); // Scale down items further from center
            const zIndex = 10 - distanceFromCenter; // Center items have higher z-index
            const opacity = 1 - (distanceFromCenter * 0.1); // Fade items further from center

            return (
              <div
                key={country.uniqueKey}
                className="flex-shrink-0 transform transition-all duration-500 ease-out"
                style={{
                  transform: `scale(${scale})`,
                  zIndex: zIndex,
                  opacity: opacity,
                  transitionDelay: isTransitioning ? `${index * 20}ms` : '0ms'
                }}
              >
                <div 
                  className="relative group cursor-pointer"
                  onClick={() => handleCountryClick(country)}
                >
                  <div className={`
                    w-28 h-28 rounded-full overflow-hidden shadow-2xl border-4 bg-white transform transition-all duration-500
                    ${isCenter 
                      ? 'border-blue-500 shadow-2xl ring-4 ring-blue-200' 
                      : 'border-white hover:border-blue-300 group-hover:shadow-xl'
                    }
                  `}>
                    <img 
                      src={`https://flagcdn.com/w320/${country.code}.png`}
                      alt={`Study MBBS in ${country.name}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className={`
                    absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-white px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-lg transition-all duration-300 min-w-max
                    ${isCenter
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-105'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-105'
                    }
                  `}>
                    {country.name}
                  </div>  
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center space-x-3 mt-8">
        {Array.from({ length: Math.min(8, Math.ceil(allCountries.length / 3)) }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(index * 3);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex / 3) === index
                ? 'bg-blue-600 w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [services, setServices] = useState([]);
  const [stats, setStats] = useState({
    total_jobs: 0,
    total_programs: 0,
    total_applications: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHomeData();
  }, []);

  const loadHomeData = async () => {
    try {
      console.log('Starting to load home data...');
      
      const [servicesResponse, jobsCountResponse, programsCountResponse, applicationsCountResponse] = await Promise.all([
        serviceService.getServices(),
        jobService.getJobsCount(),
        programService.getProgramsCount(),
        applicationService.getApplicationsCount()
      ]);

      console.log('API Responses:', {
        services: servicesResponse.data,
        jobsCount: jobsCountResponse.data,
        programsCount: programsCountResponse.data,
        applicationsCount: applicationsCountResponse.data
      });
      
      setServices(servicesResponse.data);
      setStats({
        total_jobs: jobsCountResponse.data.count || 0,
        total_programs: programsCountResponse.data.count || 0,
        total_applications: applicationsCountResponse.data.count || 0
      });
    } catch (error) {
      console.error('Error loading home data:', error);
      console.error('Error details:', error.response?.data || error.message);
      
      // Fallback to mock data if API fails
      setStats({
        total_jobs: 547,
        total_programs: 63,
        total_applications: 594
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-200 to-blue-600 text-white py-16 pt-40">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to AVS Consultancy</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Your trusted partner for career growth and educational opportunities. 
            We connect talent with opportunities and guide students to their dream institutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
            <Link 
              to="/jobs" 
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 w-full sm:w-auto text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Find Jobs
            </Link>
            <Link 
              to="/education" 
              className="bg-blue-300 text-blue-900 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition duration-300 w-full sm:w-auto text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/images/about1.jpg"
                alt="AVS Consultancy Team"
                className="rounded-lg shadow-2xl w-full h-auto transform hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg"></div>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Who We Are</h2>
                <h3 className="text-xl md:text-2xl text-blue-600 font-semibold">
                  Study Abroad Consultants and Global Career Specialists
                </h3>
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition duration-300 group"
                >
                  Know More 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Welcome to <span className="font-semibold text-blue-600">AVS Job and Educational Consultancy</span>, 
                  your trusted partner in career advancement, job placement, and global education.
                </p>
                <p className="text-base">
                  Our job placement division connects talented individuals with reputed employers across industries — 
                  both in India and overseas.
                </p>
                <p className="font-semibold text-gray-800 text-lg">
                  Let us be the bridge between your potential and endless opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Finder Section */}
      <div className="container mx-auto px-4 py-16">
        <CourseFinder />
      </div>

      {/* Study Abroad Section with Auto-Slide */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          {/* Centered Title and Subtitle */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Study Abroad</h2>
            <p className="text-xl md:text-2xl font-semibold text-blue-600 mt-2">
              Connecting beyond 21+ countries
            </p>
            <p className="text-gray-600 text-base md:text-lg mt-4 max-w-2xl mx-auto">
              With relationships in more than 21+ nations, Campus Abroad offers educational options 
              that are truly global in scope.
            </p>
          </div>

          {/* Auto-Sliding Images */}
          <div className="mb-8">
            <AutoSlidingImages />
          </div>
          
          <div className="text-center">
            <Link 
              to="/abroad-mbbs"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-white transition duration-300 group text-lg border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:border-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Destinations
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for your career and educational journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries({
              'Job Placement': { emoji: '💼', desc: `A comprehensive service that bridges the gap between talented job seekers and leading international companies. We don't just find you a job; we strategize your global career path.`},
              'Abroad Studies': { emoji: '🌍', desc: `An end-to-end service for students aiming to pursue undergraduate, postgraduate, or doctoral degrees in a global educational hub. We simplify the complex journey of studying internationally` },
              'MBBS Abroad': { emoji: '🩺', desc: 'A specialized service for aspiring doctors to secure seats in accredited medical universities abroad, offering a high-quality, affordable alternative to highly competitive domestic programs.' },
              'Domestic Career Courses': { emoji: '🎓', desc: 'Focused on enhancing employability and skills within the Indian job market through certified courses and training programs in high-growth sectors.' },
              'Career Counseling': { emoji: '📊', desc: ' A personalized, one-on-one guidance service to help individuals make informed decisions about their education and career path, reducing confusion and aligning choices with innate potential.' },
              'Visa Assistance': { emoji: '✈️', desc: 'A dedicated support system to navigate the complex and critical visa application process, maximizing the chances of approval for study & work.' }
            }).map(([service, { emoji, desc }]) => (
              <div 
                key={service}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-500 hover:transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-2xl"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{emoji}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service}
                </h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition duration-300">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stats.total_jobs}+</div>
              <div className="text-gray-600 font-medium">Total Jobs Posted</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition duration-300">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stats.total_programs}+</div>
              <div className="text-gray-600 font-medium">Educational Programs</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition duration-300">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">{stats.total_applications}+</div>
              <div className="text-gray-600 font-medium">Successful Applications</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition duration-300">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Partner Institutions</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;