import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Engineering = () => {
  const [filter, setFilter] = useState('all');

  const engineeringBranches = [
    {
      id: 1,
      name: "Computer Science & Engineering",
      slug: "computer-science",
      category: "popular",
      description: "Learn software development, AI, Machine Learning, Data Science with industry-oriented curriculum.",
      duration: "4 Years",
      eligibility: "10+2 with Physics, Chemistry, Mathematics, Minimum 50% marks",
      avgSalary: "₹6-20 LPA",
      image: "/images/cse-engineering.jpg",
      highlights: ["AI & ML Specialization", "100% Placement Assistance", "Industry Projects"]
    },
    {
      id: 2,
      name: "Mechanical Engineering",
      slug: "mechanical",
      category: "core",
      description: "Design, analysis, manufacturing of mechanical systems with modern engineering tools.",
      duration: "4 Years",
      eligibility: "10+2 with Physics, Chemistry, Mathematics, Minimum 50% marks",
      avgSalary: "₹4-12 LPA",
      image: "/images/mechanical-engineering.jpg",
      highlights: ["CAD/CAM Training", "Automotive Design", "Research Opportunities"]
    },
    {
      id: 3,
      name: "Civil Engineering",
      slug: "civil",
      category: "core",
      description: "Infrastructure development, construction technology, and urban planning expertise.",
      duration: "4 Years",
      eligibility: "10+2 with Physics, Chemistry, Mathematics, Minimum 50% marks",
      avgSalary: "₹4-15 LPA",
      image: "/images/civil-engineering.jpg",
      highlights: ["Structural Design", "Project Management", "Site Supervision"]
    },
    {
      id: 4,
      name: "Electrical Engineering",
      slug: "electrical",
      category: "core",
      description: "Power systems, electronics, electrical machines and renewable energy technologies.",
      duration: "4 Years",
      eligibility: "10+2 with Physics, Chemistry, Mathematics, Minimum 50% marks",
      avgSalary: "₹5-14 LPA",
      image: "/images/electrical-engineering.jpg",
      highlights: ["Power Systems", "Renewable Energy", "Smart Grid Technology"]
    },
    {
      id: 5,
      name: "Electronics & Communication",
      slug: "electronics",
      category: "popular",
      description: "Electronics, communication systems, VLSI design and embedded systems development.",
      duration: "4 Years",
      eligibility: "10+2 with Physics, Chemistry, Mathematics, Minimum 50% marks",
      avgSalary: "₹5-18 LPA",
      image: "/images/electronics-engineering.jpg",
      highlights: ["VLSI Design", "IoT Systems", "Communication Networks"]
    },
    {
      id: 6,
      name: "Information Technology",
      slug: "it",
      category: "popular",
      description: "Networking, cybersecurity, database management and software engineering.",
      duration: "4 Years",
      eligibility: "10+2 with Physics, Chemistry, Mathematics, Minimum 50% marks",
      avgSalary: "₹6-20 LPA",
      image: "/images/it-engineering.jpg",
      highlights: ["Cybersecurity", "Cloud Computing", "Full Stack Development"]
    },
    {
      id: 7,
      name: "Chemical Engineering",
      slug: "chemical",
      category: "specialized",
      description: "Process engineering, chemical plant design and production management.",
      duration: "4 Years",
      eligibility: "10+2 with Physics, Chemistry, Mathematics, Minimum 50% marks",
      avgSalary: "₹5-16 LPA",
      image: "/images/chemical-engineering.jpg",
      highlights: ["Process Design", "Plant Operations", "Quality Control"]
    },
    {
      id: 8,
      name: "Aerospace Engineering",
      slug: "aerospace",
      category: "specialized",
      description: "Aircraft and spacecraft design, aerodynamics and aviation technology.",
      duration: "4 Years",
      eligibility: "10+2 with Physics, Chemistry, Mathematics, Minimum 75% marks",
      avgSalary: "₹8-25 LPA",
      image: "/images/aerospace-engineering.jpg",
      highlights: ["Aircraft Design", "Avionics", "Space Technology"]
    }
  ];

  const categories = [
    { value: 'all', label: 'All Branches' },
    { value: 'popular', label: 'Popular Branches' },
    { value: 'core', label: 'Core Engineering' },
    { value: 'specialized', label: 'Specialized Fields' }
  ];

  const filteredBranches = filter === 'all' 
    ? engineeringBranches 
    : engineeringBranches.filter(branch => branch.category === filter);

  const benefits = [
    {
      icon: "💼",
      title: "High Placement",
      description: "Excellent campus placement opportunities with top companies"
    },
    {
      icon: "🌍",
      title: "Global Demand",
      description: "Engineering skills are in demand worldwide across industries"
    },
    {
      icon: "💡",
      title: "Innovation Focus",
      description: "Focus on innovation, research and development skills"
    },
    {
      icon: "🚀",
      title: "Career Growth",
      description: "Rapid career progression and leadership opportunities"
    },
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Attractive salary packages and benefits"
    },
    {
      icon: "🎯",
      title: "Multiple Specializations",
      description: "Wide range of specializations to choose from"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Engineering Courses | Computer Science, Mechanical, Civil, Electrical Engineering</title>
        <meta name="description" content="Explore engineering programs in Computer Science, Mechanical, Civil, Electrical, Electronics, IT, Chemical, Aerospace Engineering. Get admission guidance for top engineering colleges." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Engineering Programs
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Build your future with world-class engineering education. Choose from 8+ specializations 
                with excellent placement opportunities and global recognition.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
                >
                  Get Admission Guidance
                </Link>
                <button 
                  onClick={() => document.getElementById('branches').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
                >
                  Explore Branches
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
                Why Choose Engineering?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover the advantages of pursuing engineering education with global opportunities
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

        {/* Engineering Branches Section */}
        <section id="branches" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Engineering Branches
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Explore 8+ engineering specializations with detailed information about each branch
              </p>
              
              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map(category => (
                  <button
                    key={category.value}
                    onClick={() => setFilter(category.value)}
                    className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                      filter === category.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Branches Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBranches.map(branch => (
                <div key={branch.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                  <div className="h-48 bg-gray-200 relative">
                    {branch.image ? (
                      <img 
                        src={branch.image} 
                        alt={branch.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold text-center px-4">{branch.name}</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {branch.category === 'popular' && 'Popular'}
                      {branch.category === 'core' && 'Core'}
                      {branch.category === 'specialized' && 'Specialized'}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {branch.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {branch.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Duration:</span>
                        <span className="font-semibold text-gray-800">{branch.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Avg Salary:</span>
                        <span className="font-semibold text-gray-800">{branch.avgSalary}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {branch.highlights.map((highlight, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold">
                        View Details
                      </button>
                      <Link
                        to="/contact"
                        className="flex-1 border border-blue-600 text-blue-600 text-center py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 font-semibold"
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredBranches.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔧</div>
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                  No branches found
                </h3>
                <p className="text-gray-500">
                  Try selecting a different filter or check back later for updates.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Engineering Journey?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get free personalized guidance for engineering admissions in top colleges. 
                Our experts will help you choose the best branch and college.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 text-lg"
                >
                  Get Free Consultation
                </Link>
                <a 
                  href="tel:+919876543210"
                  className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 text-lg"
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

export default Engineering;