import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Certification = () => {
  const [filter, setFilter] = useState('all');

  const certificationPrograms = [
    {
      id: 1,
      name: "Digital Marketing Certification",
      slug: "digital-marketing",
      category: "marketing",
      description: "Comprehensive certification in digital marketing strategies, SEO, social media, and analytics.",
      duration: "3-6 Months",
      eligibility: "10+2 in any stream",
      avgSalary: "₹4-12 LPA",
      image: "/images/digital-marketing-cert.jpg",
      highlights: ["SEO/SEM", "Social Media Marketing", "Google Analytics"]
    },
    {
      id: 2,
      name: "Data Science Certification",
      slug: "data-science",
      category: "technology",
      description: "Professional certification in data analysis, machine learning, and statistical modeling.",
      duration: "6 Months",
      eligibility: "Graduation in any stream",
      avgSalary: "₹6-18 LPA",
      image: "/images/data-science-cert.jpg",
      highlights: ["Python/R Programming", "Machine Learning", "Data Visualization"]
    },
    {
      id: 3,
      name: "Project Management (PMP)",
      slug: "pmp",
      category: "management",
      description: "Globally recognized project management professional certification.",
      duration: "2-3 Months",
      eligibility: "Graduation + Project Experience",
      avgSalary: "₹8-20 LPA",
      image: "/images/pmp-cert.jpg",
      highlights: ["PMI Certified", "Global Recognition", "Leadership Skills"]
    },
    {
      id: 4,
      name: "Web Development Certification",
      slug: "web-development",
      category: "technology",
      description: "Full-stack web development certification covering frontend and backend technologies.",
      duration: "4-6 Months",
      eligibility: "10+2 with basic computer knowledge",
      avgSalary: "₹5-15 LPA",
      image: "/images/web-dev-cert.jpg",
      highlights: ["HTML/CSS/JavaScript", "React/Node.js", "Database Management"]
    },
    {
      id: 5,
      name: "Financial Planning Certification",
      slug: "financial-planning",
      category: "finance",
      description: "Certification in financial planning, investment strategies, and wealth management.",
      duration: "3-4 Months",
      eligibility: "Graduation in any stream",
      avgSalary: "₹5-16 LPA",
      image: "/images/finance-cert.jpg",
      highlights: ["Investment Planning", "Risk Management", "Financial Analysis"]
    },
    {
      id: 6,
      name: "Graphic Design Certification",
      slug: "graphic-design",
      category: "design",
      description: "Professional certification in graphic design, UI/UX, and visual communication.",
      duration: "3-5 Months",
      eligibility: "10+2 in any stream",
      avgSalary: "₹4-10 LPA",
      image: "/images/graphic-design-cert.jpg",
      highlights: ["Adobe Creative Suite", "UI/UX Design", "Portfolio Development"]
    }
  ];

  const categories = [
    { value: 'all', label: 'All Certifications' },
    { value: 'technology', label: 'Technology' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'management', label: 'Management' },
    { value: 'finance', label: 'Finance' },
    { value: 'design', label: 'Design' }
  ];

  const filteredPrograms = filter === 'all' 
    ? certificationPrograms 
    : certificationPrograms.filter(program => program.category === filter);

  const benefits = [
    {
      icon: "📜",
      title: "Industry Recognition",
      description: "Globally recognized certifications from reputed organizations"
    },
    {
      icon: "⏱️",
      title: "Short Duration",
      description: "Complete certifications in 3-6 months while working"
    },
    {
      icon: "💡",
      title: "Skill Enhancement",
      description: "Upgrade your skills and stay relevant in the job market"
    },
    {
      icon: "🚀",
      title: "Career Advancement",
      description: "Boost your career growth and salary potential"
    },
    {
      icon: "🌍",
      title: "Global Opportunities",
      description: "Access international job opportunities with global certifications"
    },
    {
      icon: "🔄",
      title: "Flexible Learning",
      description: "Online and part-time options for working professionals"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Certification Courses | Digital Marketing, Data Science, PMP, Web Development</title>
        <meta name="description" content="Explore professional certification programs in Digital Marketing, Data Science, Project Management, Web Development, Financial Planning, Graphic Design. Enhance your career with industry-recognized certifications." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Certifications
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Enhance your skills and boost your career with industry-recognized certification programs. 
                Stay competitive in the evolving job market.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition duration-300"
                >
                  Get Certification Guidance
                </Link>
                <button 
                  onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition duration-300"
                >
                  Explore Certifications
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
                Why Professional Certifications?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover the advantages of industry-recognized certifications
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
                Certification Programs
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Choose from various professional certification programs across different domains
              </p>
              
              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map(category => (
                  <button
                    key={category.value}
                    onClick={() => setFilter(category.value)}
                    className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                      filter === category.value
                        ? 'bg-teal-600 text-white'
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
                      <div className="w-full h-full bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold text-center px-4">{program.name}</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                      <button className="flex-1 bg-teal-600 text-white text-center py-2 rounded-lg hover:bg-teal-700 transition duration-300 font-semibold">
                        View Details
                      </button>
                      <Link
                        to="/contact"
                        className="flex-1 border border-teal-600 text-teal-600 text-center py-2 rounded-lg hover:bg-teal-600 hover:text-white transition duration-300 font-semibold"
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
                <div className="text-6xl mb-4">📜</div>
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                  No certification programs found
                </h3>
                <p className="text-gray-500">
                  Try selecting a different filter or check back later for updates.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-teal-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Enhance Your Professional Profile?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get expert guidance for professional certification programs. 
                Our counselors will help you choose the right certification for career growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition duration-300 text-lg"
                >
                  Get Free Consultation
                </Link>
                <a 
                  href="tel:+919876543210"
                  className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition duration-300 text-lg"
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

export default Certification;