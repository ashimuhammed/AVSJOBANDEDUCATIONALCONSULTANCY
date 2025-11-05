import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AllCourses = () => {
  const [filter, setFilter] = useState('all');

  const allCourses = [
    // Engineering Courses
    {
      id: 1,
      name: "Computer Science Engineering",
      category: "engineering",
      path: "/engineering",
      description: "Software development, AI, Machine Learning, Data Science programs",
      icon: "💻",
      color: "blue"
    },
    {
      id: 2,
      name: "Mechanical Engineering",
      category: "engineering",
      path: "/engineering",
      description: "Design, manufacturing, and mechanical systems engineering",
      icon: "⚙️",
      color: "blue"
    },
    {
      id: 3,
      name: "Civil Engineering",
      category: "engineering",
      path: "/engineering",
      description: "Infrastructure development and construction technology",
      icon: "🏗️",
      color: "blue"
    },

    // Medical Courses
    {
      id: 4,
      name: "MBBS Abroad",
      category: "medical",
      path: "/mbbs-abroad",
      description: "Medical education in 21 countries with global recognition",
      icon: "🌍",
      color: "red"
    },
    {
      id: 5,
      name: "BDS (Dental Surgery)",
      category: "medical",
      path: "/medical-courses",
      description: "Bachelor of Dental Surgery programs",
      icon: "🦷",
      color: "red"
    },
    {
      id: 6,
      name: "BPT (Physiotherapy)",
      category: "medical",
      path: "/medical-courses",
      description: "Physiotherapy and rehabilitation programs",
      icon: "💪",
      color: "red"
    },

    // Management Courses
    {
      id: 7,
      name: "MBA Programs",
      category: "management",
      path: "/management",
      description: "Master of Business Administration with specializations",
      icon: "🎓",
      color: "green"
    },
    {
      id: 8,
      name: "BBA Programs",
      category: "management",
      path: "/management",
      description: "Bachelor of Business Administration",
      icon: "📊",
      color: "green"
    },

    // Arts & Science
    {
      id: 9,
      name: "Bachelor of Arts (BA)",
      category: "arts-science",
      path: "/arts-science",
      description: "Humanities, social sciences, and liberal arts",
      icon: "🎨",
      color: "purple"
    },
    {
      id: 10,
      name: "Bachelor of Science (B.Sc)",
      category: "arts-science",
      path: "/arts-science",
      description: "Pure and applied sciences programs",
      icon: "🔬",
      color: "purple"
    },
    {
      id: 11,
      name: "Bachelor of Commerce (B.Com)",
      category: "arts-science",
      path: "/arts-science",
      description: "Commerce, accounting, and finance programs",
      icon: "💰",
      color: "purple"
    },

    // Diploma Courses
    {
      id: 12,
      name: "Diploma in Engineering",
      category: "diploma",
      path: "/diploma-courses",
      description: "Technical diploma programs in engineering",
      icon: "🔧",
      color: "orange"
    },
    {
      id: 13,
      name: "Diploma in Management",
      category: "diploma",
      path: "/diploma-courses",
      description: "Business and management diploma programs",
      icon: "📈",
      color: "orange"
    },

    // Certification Courses
    {
      id: 14,
      name: "Digital Marketing Certification",
      category: "certification",
      path: "/certification",
      description: "Professional certification in digital marketing",
      icon: "📱",
      color: "teal"
    },
    {
      id: 15,
      name: "Data Science Certification",
      category: "certification",
      path: "/certification",
      description: "Certification in data science and analytics",
      icon: "📊",
      color: "teal"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Courses' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'medical', label: 'Medical' },
    { value: 'management', label: 'Management' },
    { value: 'arts-science', label: 'Arts & Science' },
    { value: 'diploma', label: 'Diploma' },
    { value: 'certification', label: 'Certification' }
  ];

  const filteredCourses = filter === 'all' 
    ? allCourses 
    : allCourses.filter(course => course.category === filter);

  const getCategoryColor = (color) => {
    const colors = {
      blue: 'from-blue-400 to-blue-600',
      red: 'from-red-400 to-red-600',
      green: 'from-green-400 to-green-600',
      purple: 'from-purple-400 to-purple-600',
      orange: 'from-orange-400 to-orange-600',
      teal: 'from-teal-400 to-teal-600'
    };
    return colors[color] || 'from-gray-400 to-gray-600';
  };

  return (
    <>
      <Helmet>
        <title>All Courses | Engineering, Medical, Management, Arts, Diploma, Certification</title>
        <meta name="description" content="Explore all educational programs including Engineering, Medical Courses, Management, Arts & Science, Diploma Courses, and Professional Certifications. Find the perfect course for your career." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                All Courses
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Explore our comprehensive collection of educational programs across all categories. 
                Find the perfect course to shape your career and achieve your dreams.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition duration-300"
                >
                  Get Career Guidance
                </Link>
                <button 
                  onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition duration-300"
                >
                  Browse Courses
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Course Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Browse courses by category to find your area of interest
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setFilter(category.value)}
                  className={`p-4 rounded-lg text-center transition duration-300 ${
                    filter === category.value
                      ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="font-semibold">{category.label}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {filter === 'all' ? 'All Courses' : `${categories.find(c => c.value === filter)?.label}`}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                <Link
                  key={course.id}
                  to={course.path}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group"
                >
                  <div className={`h-32 flex items-center justify-center text-6xl bg-gradient-to-r ${getCategoryColor(course.color)}`}>
                    {course.icon}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition duration-300">
                      {course.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {course.description}
                    </p>
                    <div className="flex items-center text-indigo-600 font-semibold">
                      Explore Course
                      <span className="ml-2 group-hover:ml-4 transition-all duration-300">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                  No courses found
                </h3>
                <p className="text-gray-500">
                  Try selecting a different category or check back later for new courses.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-indigo-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Help Choosing a Course?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Our education experts will help you choose the right course based on your interests, 
                career goals, and academic background. Get personalized guidance today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition duration-300 text-lg"
                >
                  Get Free Consultation
                </Link>
                <a 
                  href="tel:+919876543210"
                  className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition duration-300 text-lg"
                >
                  Call Now: +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AllCourses;