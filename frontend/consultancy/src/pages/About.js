// frontend/src/pages/About.js
import React, { useState } from 'react';
import { 
  Users, 
  Target, 
  Award, 
  Heart, 
  Globe, 
  TrendingUp,
  Clock,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { number: '500+', label: 'Successful Placements', icon: Users },
    { number: '50+', label: 'Partner Companies', icon: Target },
    { number: '98%', label: 'Client Satisfaction', icon: Award },
    { number: '2+', label: 'Years Experience', icon: Clock }
  ];

  const team = [
    {
      name: 'Sajay Krishnan',
      role: 'Founder & CEO',
      bio: '',
      image: '/team/alice.jpg'
    },
    {
      name: 'vijay Krishnan',
      role: 'Founder & CTO',
      bio: '',
      image: '/team/david.jpg'
    },
    {
      name: 'Ajay Krishnan',
      role: 'Founder & CFO',
      bio: '',
      image: '/team/maria.jpg'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Client First',
      description: 'Your success is our success. We prioritize your goals above all else.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest standards in every service we provide.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting talent and opportunities across borders and cultures.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Mindset',
      description: 'We believe in continuous improvement and innovation.'
    }
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-200 to-blue-600 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About AVS Jobs&EducationalConsultancy</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Transforming careers and education through personalized guidance and 
            strategic partnerships since 2023.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Tabbed Navigation */}
          <div className="flex flex-wrap justify-center mb-12 border-b">
            {['mission', 'story', 'values', 'team'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`mx-4 py-3 px-6 font-semibold capitalize border-b-2 transition-colors ${
                  activeTab === tab 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab === 'story' ? 'Our Story' : 
                 tab === 'mission' ? 'Our Mission' :
                 tab === 'values' ? 'Our Values' : 'Our Team'}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            {/* Mission Tab */}
            {activeTab === 'mission' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <Target className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-800">Our Mission</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      At AVS Consultancy, we bridge the gap between talent and opportunity. 
                      Our mission is to empower individuals by connecting them with meaningful 
                      career opportunities and quality educational programs that transform lives.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      We believe everyone deserves access to opportunities that help them 
                      achieve their full potential, regardless of their background or starting point.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-200 to-blue-600 rounded-xl p-6">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-800">Our Vision</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      To become the most trusted partner in career development and educational 
                      consulting, recognized for our integrity, innovation, and life-changing results.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      We envision a world where talent meets opportunity seamlessly, creating 
                      thriving careers and empowered communities.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Story Tab */}
            {activeTab === 'story' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Journey</h2>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">From Humble Beginnings</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Founded in 2013 by Alice Johnson, AVS Consultancy started as a small 
                      career counseling service operating from a home office. Alice's vision 
                      was simple yet powerful: to provide personalized guidance that corporate 
                      recruiters often overlooked.
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      What began with helping local graduates find their first jobs has 
                      evolved into a comprehensive consultancy serving clients across 
                      multiple countries and industries.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Today, we're proud to have helped thousands of individuals achieve 
                      their career and educational dreams while maintaining the personal 
                      touch that defined our beginnings.
                    </p>
                  </div>
                  <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
                    <span className="text-gray-500">Company Timeline Image</span>
                  </div>
                </div>
              </div>
            )}

            {/* Values Tab */}
            {activeTab === 'values' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Core Values</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <value.icon className="w-12 h-12 text-blue-600 mb-4" />
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-200 to-blue-600 rounded-xl p-8 mt-8">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Our Commitment</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Personalized approach for every client',
                      'Transparent pricing and processes',
                      'Continuous support until success',
                      'Regular progress updates',
                      'Confidentiality guaranteed',
                      'Ethical practices always'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-700 mr-3" />
                        <span className="text-gray-900">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Team Tab */}
            {activeTab === 'team' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet Our Team</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {team.map((member, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-gray-200 rounded-full w-48 h-48 mx-auto mb-6 flex items-center justify-center overflow-hidden">
                        {member.image ? (
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        ) : (
                          <Users className="w-20 h-20 text-gray-400" />
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{member.name}</h3>
                      <div className="text-blue-600 font-medium mb-2">{member.role}</div>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 rounded-xl p-8 text-center mt-8">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-800">Join Our Success Story</h3>
                  <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                    Our team of dedicated professionals is here to guide you every step of the way. 
                    Whether you're seeking career advancement or educational opportunities, 
                    we have the expertise to help you succeed.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Start Your Journey
                    </button>
                    <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                      Contact Our Team
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Services Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What We Do</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-blue-200 to-blue-600 text-black rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Career Services</h3>
                <ul className="space-y-3">
                  {[
                    'Professional resume optimization',
                    'Interview preparation & coaching',
                    'Job search strategy development',
                    'Career transition guidance',
                    'Salary negotiation support',
                    'LinkedIn profile enhancement'
                  ].map((service, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-blue-200 to-blue-600 text-black rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Education Consulting</h3>
                <ul className="space-y-3">
                  {[
                    'University admissions guidance',
                    'Course and program selection',
                    'Scholarship application support',
                    'Visa process assistance',
                    'Test preparation strategies',
                    'Education pathway planning'
                  ].map((service, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;