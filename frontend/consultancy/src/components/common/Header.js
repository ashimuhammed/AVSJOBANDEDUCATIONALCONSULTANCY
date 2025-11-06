import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/AuthContext';
import logo from '../../images/logo.png';

const Header = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAbroadDropdownOpen, setIsAbroadDropdownOpen] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAbroadOpen, setIsMobileAbroadOpen] = useState(false);
  const [isMobileCourseOpen, setIsMobileCourseOpen] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  
  const abroadDropdownRef = useRef(null);
  const courseDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Countries for Abroad MBBS
  const abroadCountries = [
    { name: "Russia", path: "/mbbs/russia" },
    { name: "Ukraine", path: "/mbbs/ukraine" },
    { name: "Georgia", path: "/mbbs/georgia" },
    { name: "Canada", path: "/mbbs/canada" },
    { name: "Italy", path: "/mbbs/italy" },
    { name: "Spain", path: "/mbbs/spain" },
    { name: "France", path: "/mbbs/france" },
    { name: "China", path: "/mbbs/china" }
  ];

  // Courses for Explore Course dropdown
  const courses = [
    { name: "Engineering", path: "/engineering" },
    { name: "Medical Courses", path: "/medical-courses" },
    { name: "Management", path: "/management" },
    { name: "Arts & Science", path: "/arts-science" },
    { name: "Diploma Courses", path: "/diploma-courses" },
    { name: "Certification", path: "/certification" }
  ];

  // Fetch user profile data
  useEffect(() => {
    if (currentUser) {
      fetchUserProfile();
    }
  }, [currentUser]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 10);
    };

    const handleClickOutside = (event) => {
      if (abroadDropdownRef.current && !abroadDropdownRef.current.contains(event.target)) {
        setIsAbroadDropdownOpen(false);
      }
      if (courseDropdownRef.current && !courseDropdownRef.current.contains(event.target)) {
        setIsCourseDropdownOpen(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsMobileAbroadOpen(false);
        setIsMobileCourseOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/users/profile/', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'X-CSRFToken': getCSRFToken(),
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setUserProfile(data);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const getCSRFToken = () => {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('csrftoken='))
      ?.split('=')[1];
    return cookieValue;
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const toggleAbroadDropdown = () => {
    setIsAbroadDropdownOpen(!isAbroadDropdownOpen);
    setIsCourseDropdownOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const toggleCourseDropdown = () => {
    setIsCourseDropdownOpen(!isCourseDropdownOpen);
    setIsAbroadDropdownOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsAbroadDropdownOpen(false);
    setIsCourseDropdownOpen(false);
  };

  // Fixed mobile dropdown handlers
  const toggleMobileAbroad = () => {
    setIsMobileAbroadOpen(prev => !prev);
    setIsMobileCourseOpen(false);
  };

  const toggleMobileCourse = () => {
    setIsMobileCourseOpen(prev => !prev);
    setIsMobileAbroadOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    // Reset dropdown states when closing mobile menu
    if (isMobileMenuOpen) {
      setIsMobileAbroadOpen(false);
      setIsMobileCourseOpen(false);
    }
  };

  const handleDropdownItemClick = () => {
    setIsAbroadDropdownOpen(false);
    setIsCourseDropdownOpen(false);
    setIsProfileDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileAbroadOpen(false);
    setIsMobileCourseOpen(false);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobileAbroadOpen(false);
    setIsMobileCourseOpen(false);
  };

  const getDisplayName = () => {
    if (!currentUser) return 'User';
    
    try {
      if (currentUser.username) {
        if (typeof currentUser.username === 'object' && currentUser.username.username) {
          return String(currentUser.username.username);
        }
        if (typeof currentUser.username === 'string') {
          return currentUser.username;
        }
      }
      
      if (currentUser.first_name || currentUser.last_name) {
        const name = `${currentUser.first_name || ''} ${currentUser.last_name || ''}`.trim();
        if (name) return name;
      }
      
      if (currentUser.email) {
        return String(currentUser.email);
      }
      
      return String(currentUser);
    } catch (error) {
      return 'User';
    }
  };

  const getInitials = () => {
    const name = getDisplayName();
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .join('')
      .slice(0, 2);
  };

  const getProfilePicture = () => {
    if (userProfile?.profile_picture) {
      return userProfile.profile_picture.startsWith('http') 
        ? userProfile.profile_picture 
        : `http://localhost:8000${userProfile.profile_picture}`;
    }
    return null;
  };

  const DropdownIcon = ({ isOpen }) => (
    <svg 
      className={`w-4 h-4 ml-1 transition-transform duration-200 ${
        isOpen ? 'rotate-180' : ''
      }`}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  // New Hamburger Icon Component with Animation
  const HamburgerIcon = ({ isOpen }) => (
    <div className="relative w-6 h-6 transform transition-all duration-300">
      <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ${
        isOpen ? 'rotate-45 translate-y-2' : ''
      }`}></span>
      <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${
        isOpen ? 'opacity-0' : 'opacity-100'
      }`}></span>
      <span className={`absolute left-0 top-5 w-6 h-0.5 bg-current transition-all duration-300 ${
        isOpen ? '-rotate-45 -translate-y-2' : ''
      }`}></span>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        
        /* Custom rounded header effect */
        .header-rounded {
          border-radius: 2rem;
          margin: 0.75rem 1rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        @media (min-width: 1024px) {
          .header-rounded {
            margin: 0.75rem 2rem;
          }
        }
        
        @media (min-width: 1280px) {
          .header-rounded {
            margin: 0.75rem 3rem;
          }
        }
      `}</style>

      {/* Main Header with More Rounded Effect */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 header-rounded bg-gradient-to-r from-blue-200 to-blue-600 backdrop-blur-lg bg-opacity-95' 
            : 'py-5 bg-gradient-to-r from-blue-200 to-blue-600'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 sm:space-x-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <img 
                src={logo} 
                alt="AVS Consultancy" 
                className="h-10 w-8 sm:h-10 sm:w-16 object-contain"
              />                              
              <span className="text-lg sm:text-xl md:text-2xl font-bold">AVS Jobs&EducationalConsultancy</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              
              <Link to="/about" className="hover:text-blue-200 transition duration-300 text-sm xl:text-base py-2">About Us</Link>
              <Link to="/jobs" className="hover:text-blue-200 transition duration-300 text-sm xl:text-base py-2">Jobs</Link>
              
              {/* Abroad MBBS Dropdown */}
              <div className="relative" ref={abroadDropdownRef}>
                <button
                  onClick={toggleAbroadDropdown}
                  className="hover:text-blue-200 transition duration-300 flex items-center focus:outline-none text-sm xl:text-base py-2"
                >
                  Abroad MBBS
                  <DropdownIcon isOpen={isAbroadDropdownOpen} />
                </button>
                
                {isAbroadDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 xl:w-56 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 z-50">
                    <div className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-100">
                      MBBS Destinations
                    </div>
                    {abroadCountries.map((country) => (
                      <Link
                        key={country.name}
                        to={country.path}
                        onClick={handleDropdownItemClick}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-150 rounded-lg mx-2"
                      >
                        {country.name}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 pt-2 mt-2">
                      <Link
                        to="/abroad-mbbs"
                        onClick={handleDropdownItemClick}
                        className="block px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 transition duration-150 rounded-lg mx-2"
                      >
                        View All Countries →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Explore Course Dropdown */}
              <div className="relative" ref={courseDropdownRef}>
                <button
                  onClick={toggleCourseDropdown}
                  className="hover:text-blue-200 transition duration-300 flex items-center focus:outline-none text-sm xl:text-base py-2"
                >
                  Explore Course
                  <DropdownIcon isOpen={isCourseDropdownOpen} />
                </button>
                
                {isCourseDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 xl:w-56 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 z-50">
                    <div className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-100">
                      Available Courses
                    </div>
                    {courses.map((course) => (
                      <Link
                        key={course.name}
                        to={course.path}
                        onClick={handleDropdownItemClick}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-150 rounded-lg mx-2"
                      >
                        {course.name}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 pt-2 mt-2">
                      <Link
                        to="/all-courses"
                        onClick={handleDropdownItemClick}
                        className="block px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 transition duration-150 rounded-lg mx-2"
                      >
                        All Courses →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/services" className="hover:text-blue-200 transition duration-300 text-sm xl:text-base py-2">Services</Link>
              <Link to="/contact" className="hover:text-blue-200 transition duration-300 text-sm xl:text-base py-2">Contact</Link>
            </nav>

            {/* User Actions - Desktop */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
              {currentUser ? (
                <div className="flex items-center space-x-3 xl:space-x-4">
                  {/* Profile Dropdown */}
                  <div className="relative" ref={profileDropdownRef}>
                    <button
                      onClick={toggleProfileDropdown}
                      className="flex items-center space-x-2 focus:outline-none hover:bg-blue-700 rounded-full p-1 transition duration-300"
                    >
                      <div className="flex items-center justify-center w-8 h-8 bg-blue-700 rounded-full border-2 border-white">
                        {getProfilePicture() ? (
                          <img 
                            src={getProfilePicture()} 
                            alt="Profile" 
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          <span className="text-white text-sm font-semibold">
                            {getInitials()}
                          </span>
                        )}
                      </div>
                      <span className="text-blue-200 text-sm xl:text-base max-w-32 truncate">
                        {getDisplayName()}
                      </span>
                      <DropdownIcon isOpen={isProfileDropdownOpen} />
                    </button>
                    
                    {isProfileDropdownOpen && (
                      <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 z-50 animate-slideDown">
                        {/* User Info Section */}
                        <div className="px-4 py-3 border-b border-gray-100">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full">
                              {getProfilePicture() ? (
                                <img 
                                  src={getProfilePicture()} 
                                  alt="Profile" 
                                  className="w-full h-full rounded-full object-cover"
                                />
                              ) : (
                                <span className="text-white text-sm font-semibold">
                                  {getInitials()}
                                </span>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {getDisplayName()}
                              </p>
                              <p className="text-xs text-gray-500 truncate">
                                {currentUser.email}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Profile Links */}
                        <div className="py-2">
                          <Link
                            to="/profile"
                            onClick={handleDropdownItemClick}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-150 rounded-lg mx-2"
                          >
                            <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            My Profile
                          </Link>
                          
                          <Link
                            to="/dashboard"
                            onClick={handleDropdownItemClick}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-150 rounded-lg mx-2"
                          >
                            <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Dashboard
                          </Link>

                          {userProfile?.user_type && (
                            <div className="px-4 py-2 text-xs text-gray-500 border-t border-gray-100 mt-2 pt-2 mx-2">
                              Account Type: <span className="font-medium capitalize">{userProfile.user_type.replace('_', ' ')}</span>
                            </div>
                          )}
                        </div>

                        {/* Logout Section */}
                        <div className="border-t border-gray-100 pt-2">
                          <button
                            onClick={handleLogout}
                            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition duration-150 rounded-lg mx-2"
                          >
                            <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-2 xl:space-x-3">
                  <Link 
                    to="/login" 
                    className="bg-white text-blue-600 px-4 xl:px-5 py-2 xl:py-2.5 rounded-full transition duration-300 text-sm xl:text-base font-medium  hover:shadow-lg"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button with Hamburger Icon */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-3 rounded-xl hover:bg-blue-500/10 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <HamburgerIcon isOpen={isMobileMenuOpen} />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div 
              ref={mobileMenuRef} 
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-2xl animate-slideDown rounded-b-3xl mx-4"
            >
              <div className="container mx-auto px-4 py-4">
                {/* Mobile Navigation Links */}
                <div className="space-y-2 mb-4">
                  <Link 
                    to="/" 
                    onClick={handleMobileLinkClick}
                    className="block py-3 px-4 hover:bg-gray-100 rounded-xl transition duration-300 text-base font-medium text-gray-800"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/about" 
                    onClick={handleMobileLinkClick}
                    className="block py-3 px-4 hover:bg-gray-100 rounded-xl transition duration-300 text-base font-medium text-gray-800"
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/jobs" 
                    onClick={handleMobileLinkClick}
                    className="block py-3 px-4 hover:bg-gray-100 rounded-xl transition duration-300 text-base font-medium text-gray-800"
                  >
                    Jobs
                  </Link>
                  
                  {/* Mobile Abroad MBBS Dropdown */}
                  <div className="border-b border-gray-100 pb-2">
                    <button
                      onClick={toggleMobileAbroad}
                      className="w-full text-left py-3 px-4 rounded-xl transition duration-300 flex items-center justify-between text-base font-medium text-gray-800 hover:bg-gray-100"
                    >
                      <span>Abroad MBBS</span>
                      <DropdownIcon isOpen={isMobileAbroadOpen} />
                    </button>
                    
                    {isMobileAbroadOpen && (
                      <div className="mt-2 ml-4 bg-gray-50 rounded-xl py-2 space-y-1">
                        {abroadCountries.map((country) => (
                          <Link
                            key={country.name}
                            to={country.path}
                            onClick={handleMobileLinkClick}
                            className="block py-2 px-4 hover:bg-gray-200 rounded-lg transition duration-300 text-sm text-gray-700"
                          >
                            {country.name}
                          </Link>
                        ))}
                        <div className="border-t border-gray-300 pt-2 mt-2">
                          <Link
                            to="/abroad-mbbs"
                            onClick={handleMobileLinkClick}
                            className="block py-2 px-4 font-medium hover:bg-gray-200 rounded-lg transition duration-300 text-sm text-blue-600"
                          >
                            View All Countries →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile Explore Course Dropdown */}
                  <div className="border-b border-gray-100 pb-2">
                    <button
                      onClick={toggleMobileCourse}
                      className="w-full text-left py-3 px-4 rounded-xl transition duration-300 flex items-center justify-between text-base font-medium text-gray-800 hover:bg-gray-100"
                    >
                      <span>Explore Course</span>
                      <DropdownIcon isOpen={isMobileCourseOpen} />
                    </button>
                    
                    {isMobileCourseOpen && (
                      <div className="mt-2 ml-4 bg-gray-50 rounded-xl py-2 space-y-1">
                        {courses.map((course) => (
                          <Link
                            key={course.name}
                            to={course.path}
                            onClick={handleMobileLinkClick}
                            className="block py-2 px-4 hover:bg-gray-200 rounded-lg transition duration-300 text-sm text-gray-700"
                          >
                            {course.name}
                          </Link>
                        ))}
                        <div className="border-t border-gray-300 pt-2 mt-2">
                          <Link
                            to="/all-courses"
                            onClick={handleMobileLinkClick}
                            className="block py-2 px-4 font-medium hover:bg-gray-200 rounded-lg transition duration-300 text-sm text-blue-600"
                          >
                            All Courses →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  <Link 
                    to="/services" 
                    onClick={handleMobileLinkClick}
                    className="block py-3 px-4 hover:bg-gray-100 rounded-xl transition duration-300 text-base font-medium text-gray-800"
                  >
                    Services
                  </Link>
                  <Link 
                    to="/contact" 
                    onClick={handleMobileLinkClick}
                    className="block py-3 px-4 hover:bg-gray-100 rounded-xl transition duration-300 text-base font-medium text-gray-800"
                  >
                    Contact
                  </Link>
                </div>

                {/* Mobile User Actions */}
                <div className="border-t border-gray-300 pt-4">
                  {currentUser ? (
                    <div className="space-y-2">
                      {/* Mobile Profile Info */}
                      <div className="flex items-center space-x-3 px-4 py-3 bg-gray-100 rounded-xl">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full border-2 border-blue-500">
                          {getProfilePicture() ? (
                            <img 
                              src={getProfilePicture()} 
                              alt="Profile" 
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            <span className="text-white text-sm font-semibold">
                              {getInitials()}
                            </span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-800 font-medium truncate">
                            {getDisplayName()}
                          </p>
                          <p className="text-gray-600 text-sm truncate">
                            {currentUser.email}
                          </p>
                        </div>
                      </div>

                      <Link 
                        to="/profile" 
                        onClick={handleMobileLinkClick}
                        className="flex items-center py-3 px-4 hover:bg-gray-100 rounded-xl transition duration-300 text-base font-medium text-gray-800"
                      >
                        <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        My Profile
                      </Link>

                      <Link 
                        to="/dashboard" 
                        onClick={handleMobileLinkClick}
                        className="flex items-center py-3 px-4 hover:bg-gray-100 rounded-xl transition duration-300 text-base font-medium text-gray-800"
                      >
                        <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Dashboard
                      </Link>

                      <button 
                        onClick={handleLogout}
                        className="flex items-center w-full text-left py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition duration-300 text-base font-medium text-red-600"
                      >
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="flex space-x-3">
                      <Link 
                        to="/login" 
                        onClick={handleMobileLinkClick}
                        className="bg-blue-600 text-white px-5 py-2.5 rounded-full transition duration-300 text-base font-medium hover:bg-blue-700 hover:shadow-lg w-full text-center"
                      >
                        Login
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;