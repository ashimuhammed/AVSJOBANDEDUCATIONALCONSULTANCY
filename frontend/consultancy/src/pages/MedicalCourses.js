import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const MedicalCourses = () => {
  const medicalPrograms = [
    {
      title: "MBBS Abroad",
      description: "Study MBBS in 21 countries with global recognition and affordable fees",
      path: "/mbbs-abroad",
      icon: "🌍",
      color: "#e74c3c",
      duration: "5-6 Years",
      eligibility: "10+2 with PCB, NEET Qualified"
    },
    {
      title: "MBBS in India",
      description: "Complete guide for MBBS admissions in Indian medical colleges",
      path: "/mbbs-india",
      icon: "🇮🇳",
      color: "#3498db",
      duration: "5.5 Years",
      eligibility: "10+2 with PCB, NEET Qualified"
    },
    {
      title: "BDS (Dental Surgery)",
      description: "Bachelor of Dental Surgery programs in India and abroad",
      path: "/bds",
      icon: "🦷",
      color: "#9b59b6",
      duration: "5 Years",
      eligibility: "10+2 with PCB, NEET Qualified"
    },
    {
      title: "BPT (Physiotherapy)",
      description: "Physiotherapy degree programs and career opportunities",
      path: "/bpt",
      icon: "💪",
      color: "#2ecc71",
      duration: "4.5 Years",
      eligibility: "10+2 with PCB"
    },
    {
      title: "B.Pharm (Pharmacy)",
      description: "Pharmacy programs and pharmaceutical sciences",
      path: "/bpharm",
      icon: "💊",
      color: "#f39c12",
      duration: "4 Years",
      eligibility: "10+2 with PCB/PCM"
    },
    {
      title: "B.Sc Nursing",
      description: "Nursing programs with clinical training",
      path: "/nursing",
      icon: "👩‍⚕️",
      color: "#e67e22",
      duration: "4 Years",
      eligibility: "10+2 with PCB"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Medical Courses | MBBS, BDS, BPT, Pharmacy, Nursing Programs</title>
        <meta name="description" content="Explore medical courses including MBBS abroad, BDS, BPT, Pharmacy, Nursing programs. Get complete guidance for medical admissions." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Medical Courses
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Build your career in healthcare with our comprehensive medical programs. 
                From MBBS to paramedical courses, we guide you to the right path.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/abroad-mbbs" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition duration-300"
                >
                  Explore MBBS Abroad
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
                >
                  Free Counseling
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Choose Medical Field?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover the advantages of pursuing a career in healthcare
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "👨‍⚕️",
                  title: "High Demand",
                  description: "Continuous demand for healthcare professionals worldwide"
                },
                {
                  icon: "💰",
                  title: "Excellent Pay",
                  description: "Competitive salaries and financial stability"
                },
                {
                  icon: "🌍",
                  title: "Global Opportunities",
                  description: "Work anywhere in the world with medical degrees"
                },
                {
                  icon: "❤️",
                  title: "Job Satisfaction",
                  description: "Make a difference in people's lives every day"
                },
                {
                  icon: "📚",
                  title: "Lifelong Learning",
                  description: "Continuous learning and professional development"
                },
                {
                  icon: "🏥",
                  title: "Job Security",
                  description: "High job security in healthcare sector"
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6 hover:shadow-lg transition duration-300 rounded-lg">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Programs Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Medical Programs
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose from various medical and paramedical courses to start your healthcare career
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {medicalPrograms.map((program, index) => (
                <Link
                  key={index}
                  to={program.path}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group"
                >
                  <div 
                    className="h-32 flex items-center justify-center text-6xl"
                    style={{ backgroundColor: program.color }}
                  >
                    {program.icon}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition duration-300">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {program.description}
                    </p>
                    
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Duration:</span>
                        <span className="font-semibold">{program.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Eligibility:</span>
                        <span className="font-semibold text-right">{program.eligibility}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-red-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold">
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
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Medical Career?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get expert guidance for medical admissions in India and abroad. 
                We help you choose the right course and university.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition duration-300 text-lg"
                >
                  Free Consultation
                </Link>
                <a 
                  href="tel:+919876543210"
                  className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition duration-300 text-lg"
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

export default MedicalCourses;