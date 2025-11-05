import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const DiplomaCourses = () => {
  const [filter, setFilter] = useState('all');

  const diplomaPrograms = [
    {
      id: 1,
      name: "Diploma in Engineering",
      slug: "diploma-engineering",
      category: "engineering",
      description: "Technical diploma programs in various engineering disciplines with practical training.",
      duration: "3 Years",
      eligibility: "10th pass with minimum 45% marks",
      avgSalary: "₹3-8 LPA",
      image: "/images/diploma-engineering.jpg",
      highlights: ["Practical Training", "Industry Ready", "Lateral Entry to B.Tech"]
    },
    {
      id: 2,
      name: "Diploma in Medical Laboratory Technology",
      slug: "dmlt",
      category: "medical",
      description: "Training in laboratory techniques, equipment handling, and diagnostic procedures.",
      duration: "2 Years",
      eligibility: "10+2 with Science stream",
      avgSalary: "₹2-6 LPA",
      image: "/images/dmlt-medical.jpg",
      highlights: ["Lab Techniques", "Diagnostic Skills", "Hospital Placement"]
    },
    {
      id: 3,
      name: "Diploma in Business Management",
      slug: "dbm",
      category: "management",
      description: "Foundation program in business principles and management practices.",
      duration: "1 Year",
      eligibility: "10+2 in any stream",
      avgSalary: "₹3-7 LPA",
      image: "/images/diploma-management.jpg",
      highlights: ["Business Fundamentals", "Management Skills", "Entrepreneurship"]
    },
    {
      id: 4,
      name: "Diploma in Computer Applications",
      slug: "dca",
      category: "computer",
      description: "Comprehensive program in computer applications and basic programming.",
      duration: "1 Year",
      eligibility: "10+2 in any stream",
      avgSalary: "₹3-6 LPA",
      image: "/images/dca-computer.jpg",
      highlights: ["Computer Basics", "Office Applications", "IT Skills"]
    },
    {
      id: 5,
      name: "Diploma in Hotel Management",
      slug: "dhm",
      category: "hospitality",
      description: "Professional training in hotel operations and hospitality services.",
      duration: "1.5 Years",
      eligibility: "10+2 in any stream",
      avgSalary: "₹2-5 LPA",
      image: "/images/diploma-hotel.jpg",
      highlights: ["Hotel Operations", "Customer Service", "Industry Training"]
    },
    {
      id: 6,
      name: "Diploma in Fashion Designing",
      slug: "fashion-designing",
      category: "design",
      description: "Creative program in fashion design, textile, and garment manufacturing.",
      duration: "1 Year",
      eligibility: "10+2 in any stream",
      avgSalary: "₹3-8 LPA",
      image: "/images/diploma-fashion.jpg",
      highlights: ["Design Skills", "Textile Knowledge", "Portfolio Development"]
    }
  ];

  const categories = [
    { value: 'all', label: 'All Diplomas' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'medical', label: 'Medical' },
    { value: 'management', label: 'Management' },
    { value: 'computer', label: 'Computer' },
    { value: 'hospitality', label: 'Hospitality' },
    { value: 'design', label: 'Design' }
  ];

  const filteredPrograms = filter === 'all' 
    ? diplomaPrograms 
    : diplomaPrograms.filter(program => program.category === filter);

  const benefits = [
    {
      icon: "⏱️",
      title: "Short Duration",
      description: "Complete programs in 1-3 years and start working early"
    },
    {
      icon: "💰",
      title: "Affordable Fees",
      description: "Cost-effective education compared to degree programs"
    },
    {
      icon: "🔧",
      title: "Practical Skills",
      description: "Focus on hands-on training and industry skills"
    },
    {
      icon: "🚀",
      title: "Quick Employment",
      description: "Fast entry into workforce with job-ready skills"
    },
    {
      icon: "🎓",
      title: "Further Studies",
      description: "Pathway to higher education and advanced degrees"
    },
    {
      icon: "🏭",
      title: "Industry Focus",
      description: "Curriculum designed as per industry requirements"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Diploma Courses | Engineering, Medical, Management, Computer Diplomas</title>
        <meta name="description" content="Explore diploma programs in Engineering, Medical Lab Technology, Business Management, Computer Applications, Hotel Management, Fashion Design. Get practical skills training." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Diploma Programs
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Gain practical skills and industry-ready expertise with our comprehensive diploma programs. 
                Fast-track your career with job-oriented training.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition duration-300"
                >
                  Get Course Guidance
                </Link>
                <button 
                  onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition duration-300"
                >
                  Explore Diplomas
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Choose Diploma Programs?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover the advantages of skill-based diploma education
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 hover:shadow-lg transition duration-300 rounded-lg">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Diploma Programs
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Choose from various diploma programs across different sectors
              </p>
              
              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map(category => (
                  <button
                    key={category.value}
                    onClick={() => setFilter(category.value)}
                    className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                      filter === category.value
                        ? 'bg-orange-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map(program => (
                <div key={program.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                  <div className="h-48 bg-gray-200 relative">
                    {program.image ? (
                      <img 
                        src={program.image} 
                        alt={program.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold text-center px-4">{program.name}</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {program.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {program.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {program.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Duration:</span>
                        <span className="font-semibold text-gray-800">{program.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Avg Salary:</span>
                        <span className="font-semibold text-gray-800">{program.avgSalary}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-orange-600 text-white text-center py-2 rounded-lg hover:bg-orange-700 transition duration-300 font-semibold">
                        View Details
                      </button>
                      <Link
                        to="/contact"
                        className="flex-1 border border-orange-600 text-orange-600 text-center py-2 rounded-lg hover:bg-orange-600 hover:text-white transition duration-300 font-semibold"
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPrograms.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                  No diploma programs found
                </h3>
                <p className="text-gray-500">
                  Try selecting a different filter or check back later for updates.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Skill Development?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get expert guidance for diploma program admissions. 
                Our counselors will help you choose the right skill-based course.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition duration-300 text-lg"
                >
                  Get Free Consultation
                </Link>
                <a 
                  href="tel:+919876543210"
                  className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition duration-300 text-lg"
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

export default DiplomaCourses;