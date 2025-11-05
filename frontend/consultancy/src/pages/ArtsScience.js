import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ArtsScience = () => {
  const [filter, setFilter] = useState('all');

  const artsSciencePrograms = [
    {
      id: 1,
      name: "Bachelor of Arts (BA)",
      slug: "ba",
      category: "arts",
      description: "Comprehensive program in humanities, social sciences, and liberal arts with diverse specializations.",
      duration: "3 Years",
      eligibility: "10+2 in any stream with minimum 45% marks",
      avgSalary: "₹3-8 LPA",
      image: "/images/ba-arts.jpg",
      highlights: ["Multiple Specializations", "Research Opportunities", "Soft Skills Development"]
    },
    {
      id: 2,
      name: "Bachelor of Science (B.Sc)",
      slug: "bsc",
      category: "science",
      description: "Foundation program in pure and applied sciences with practical laboratory training.",
      duration: "3 Years",
      eligibility: "10+2 with Science stream (PCM/PCB)",
      avgSalary: "₹4-12 LPA",
      image: "/images/bsc-science.jpg",
      highlights: ["Lab Training", "Research Projects", "Industry Applications"]
    },
    {
      id: 3,
      name: "Bachelor of Commerce (B.Com)",
      slug: "bcom",
      category: "commerce",
      description: "Comprehensive commerce education covering accounting, finance, and business management.",
      duration: "3 Years",
      eligibility: "10+2 in Commerce/Science/Arts stream",
      avgSalary: "₹4-10 LPA",
      image: "/images/bcom-commerce.jpg",
      highlights: ["CA Foundation", "Financial Accounting", "Business Studies"]
    },
    {
      id: 4,
      name: "Bachelor of Computer Applications (BCA)",
      slug: "bca",
      category: "professional",
      description: "Professional program in computer applications and software development.",
      duration: "3 Years",
      eligibility: "10+2 in any stream with Mathematics",
      avgSalary: "₹5-15 LPA",
      image: "/images/bca-computer.jpg",
      highlights: ["Programming Skills", "Software Development", "IT Industry Ready"]
    },
    {
      id: 5,
      name: "Bachelor of Business Administration (BBA)",
      slug: "bba",
      category: "professional",
      description: "Undergraduate business management program with industry exposure.",
      duration: "3 Years",
      eligibility: "10+2 in any stream with minimum 50% marks",
      avgSalary: "₹4-12 LPA",
      image: "/images/bba-business.jpg",
      highlights: ["Management Principles", "Industry Visits", "Leadership Training"]
    },
    {
      id: 6,
      name: "Bachelor of Social Work (BSW)",
      slug: "bsw",
      category: "professional",
      description: "Program focused on social service, community development, and welfare activities.",
      duration: "3 Years",
      eligibility: "10+2 in any stream",
      avgSalary: "₹3-8 LPA",
      image: "/images/bsw-social.jpg",
      highlights: ["Community Service", "NGO Opportunities", "Social Development"]
    }
  ];

  const categories = [
    { value: 'all', label: 'All Programs' },
    { value: 'arts', label: 'Arts' },
    { value: 'science', label: 'Science' },
    { value: 'commerce', label: 'Commerce' },
    { value: 'professional', label: 'Professional' }
  ];

  const filteredPrograms = filter === 'all' 
    ? artsSciencePrograms 
    : artsSciencePrograms.filter(program => program.category === filter);

  const benefits = [
    {
      icon: "🎓",
      title: "Diverse Career Options",
      description: "Wide range of career paths in multiple industries"
    },
    {
      icon: "💡",
      title: "Critical Thinking",
      description: "Develop analytical and problem-solving skills"
    },
    {
      icon: "🌍",
      title: "Global Perspective",
      description: "Understand global issues and cultural diversity"
    },
    {
      icon: "📚",
      title: "Research Opportunities",
      description: "Engage in research and academic projects"
    },
    {
      icon: "💼",
      title: "Professional Skills",
      description: "Develop communication and professional abilities"
    },
    {
      icon: "🚀",
      title: "Higher Education",
      description: "Strong foundation for postgraduate studies"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Arts & Science Courses | BA, B.Sc, B.Com, BCA, BBA Programs</title>
        <meta name="description" content="Explore Arts & Science programs including BA, B.Sc, B.Com, BCA, BBA, BSW. Get admission guidance for undergraduate courses in arts, science, and commerce." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Arts & Science Programs
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Build a strong foundation with our diverse arts, science, and commerce programs. 
                Develop critical thinking and professional skills for various career paths.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition duration-300"
                >
                  Get Admission Guidance
                </Link>
                <button 
                  onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition duration-300"
                >
                  Explore Programs
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
                Why Choose Arts & Science?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover the advantages of pursuing undergraduate education in arts, science, and commerce
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
                Undergraduate Programs
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Choose from various arts, science, commerce, and professional programs
              </p>
              
              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map(category => (
                  <button
                    key={category.value}
                    onClick={() => setFilter(category.value)}
                    className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                      filter === category.value
                        ? 'bg-purple-600 text-white'
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
                      <div className="w-full h-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold text-center px-4">{program.name}</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {program.category === 'arts' && 'Arts'}
                      {program.category === 'science' && 'Science'}
                      {program.category === 'commerce' && 'Commerce'}
                      {program.category === 'professional' && 'Professional'}
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

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.highlights.map((highlight, index) => (
                          <span key={index} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-purple-600 text-white text-center py-2 rounded-lg hover:bg-purple-700 transition duration-300 font-semibold">
                        View Details
                      </button>
                      <Link
                        to="/contact"
                        className="flex-1 border border-purple-600 text-purple-600 text-center py-2 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 font-semibold"
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
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                  No programs found
                </h3>
                <p className="text-gray-500">
                  Try selecting a different filter or check back later for updates.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Undergraduate Journey?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get expert guidance for arts, science, and commerce admissions in top colleges. 
                Our counselors will help you choose the right program.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition duration-300 text-lg"
                >
                  Get Free Consultation
                </Link>
                <a 
                  href="tel:+919876543210"
                  className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition duration-300 text-lg"
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

export default ArtsScience;