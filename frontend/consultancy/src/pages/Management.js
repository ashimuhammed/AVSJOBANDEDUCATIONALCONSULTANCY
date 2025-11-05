import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Management = () => {
  const [filter, setFilter] = useState('all');

  const managementPrograms = [
    {
      id: 1,
      name: "MBA (Master of Business Administration)",
      slug: "mba",
      category: "postgraduate",
      description: "Postgraduate program in business management, leadership, and strategic thinking.",
      duration: "2 Years",
      eligibility: "Bachelor's degree in any discipline, CAT/MAT/XAT scores",
      avgSalary: "₹8-25 LPA",
      image: "/images/mba-management.jpg",
      highlights: ["Leadership Training", "Summer Internships", "Global Exposure"]
    },
    {
      id: 2,
      name: "BBA (Bachelor of Business Administration)",
      slug: "bba",
      category: "undergraduate",
      description: "Undergraduate program in business fundamentals and management principles.",
      duration: "3 Years",
      eligibility: "10+2 in any stream with minimum 50% marks",
      avgSalary: "₹3-8 LPA",
      image: "/images/bba-management.jpg",
      highlights: ["Industry Visits", "Case Studies", "Soft Skills Training"]
    },
    {
      id: 3,
      name: "PGDM (Post Graduate Diploma in Management)",
      slug: "pgdm",
      category: "postgraduate",
      description: "Industry-focused management program with practical business training.",
      duration: "2 Years",
      eligibility: "Bachelor's degree in any discipline, Entrance exam scores",
      avgSalary: "₹7-20 LPA",
      image: "/images/pgdm-management.jpg",
      highlights: ["Industry Curriculum", "Live Projects", "Specializations"]
    },
    {
      id: 4,
      name: "Executive MBA",
      slug: "executive-mba",
      category: "executive",
      description: "Part-time MBA for working professionals with industry experience.",
      duration: "1-2 Years",
      eligibility: "Bachelor's degree + 2-5 years work experience",
      avgSalary: "₹12-30 LPA",
      image: "/images/executive-mba.jpg",
      highlights: ["Weekend Classes", "Networking", "Career Advancement"]
    },
    {
      id: 5,
      name: "Hotel Management",
      slug: "hotel-management",
      category: "specialized",
      description: "Specialized program in hospitality and hotel operations management.",
      duration: "3-4 Years",
      eligibility: "10+2 in any stream",
      avgSalary: "₹4-12 LPA",
      image: "/images/hotel-management.jpg",
      highlights: ["Industry Training", "International Placement", "Customer Service"]
    },
    {
      id: 6,
      name: "Retail Management",
      slug: "retail-management",
      category: "specialized",
      description: "Focus on retail operations, merchandising and store management.",
      duration: "2 Years",
      eligibility: "Bachelor's degree in any discipline",
      avgSalary: "₹5-15 LPA",
      image: "/images/retail-management.jpg",
      highlights: ["Store Operations", "Visual Merchandising", "Supply Chain"]
    }
  ];

  const categories = [
    { value: 'all', label: 'All Programs' },
    { value: 'postgraduate', label: 'Postgraduate' },
    { value: 'undergraduate', label: 'Undergraduate' },
    { value: 'executive', label: 'Executive' },
    { value: 'specialized', label: 'Specialized' }
  ];

  const filteredPrograms = filter === 'all' 
    ? managementPrograms 
    : managementPrograms.filter(program => program.category === filter);

  return (
    <>
      <Helmet>
        <title>Management Courses | MBA, BBA, PGDM, Executive MBA Programs</title>
        <meta name="description" content="Explore management programs including MBA, BBA, PGDM, Executive MBA, Hotel Management, Retail Management. Get admission guidance for top business schools." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Management Programs
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Develop leadership skills and business acumen with our management programs. 
                Prepare for successful careers in corporate world across various industries.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition duration-300"
                >
                  Get Career Guidance
                </Link>
                <button 
                  onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition duration-300"
                >
                  Explore Programs
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Management Programs
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Choose from various management programs to build your corporate career
              </p>
              
              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map(category => (
                  <button
                    key={category.value}
                    onClick={() => setFilter(category.value)}
                    className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                      filter === category.value
                        ? 'bg-green-600 text-white'
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
                      <div className="w-full h-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold text-center px-4">{program.name}</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {program.category === 'postgraduate' && 'PG'}
                      {program.category === 'undergraduate' && 'UG'}
                      {program.category === 'executive' && 'Executive'}
                      {program.category === 'specialized' && 'Specialized'}
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
                      <button className="flex-1 bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition duration-300 font-semibold">
                        View Details
                      </button>
                      <Link
                        to="/contact"
                        className="flex-1 border border-green-600 text-green-600 text-center py-2 rounded-lg hover:bg-green-600 hover:text-white transition duration-300 font-semibold"
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Lead in Business World?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get expert guidance for management program admissions in top B-schools. 
                Our counselors will help you choose the right program and college.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition duration-300 text-lg"
                >
                  Get Free Consultation
                </Link>
                <a 
                  href="tel:+919876543210"
                  className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition duration-300 text-lg"
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

export default Management;