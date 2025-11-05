import { Link } from 'react-router-dom';

const Services = () => {
  const services = {
    'Job Placement': {
      emoji: '💼',
      desc: 'Connect with top employers worldwide',
      features: [
        'Personalized job matching',
        'Resume building & optimization',
        'Interview preparation',
        'Career counseling sessions',
        'Industry-specific placements',
        'Follow-up support until placement'
      ],
      countries: ['India', 'UAE', 'Singapore', 'USA', 'Canada', 'Australia'],
      process: ['Profile Assessment', 'Skill Matching', 'Interview Prep', 'Job Placement']
    },
    'Abroad Studies': {
      emoji: '🌍',
      desc: 'Study in 21+ countries globally',
      features: [
        'University selection & application',
        'Scholarship guidance',
        'Admission processing',
        'Pre-departure orientation',
        'Accommodation assistance',
        'Post-arrival support'
      ],
      countries: ['USA', 'UK', 'Canada', 'Australia', 'Germany', 'New Zealand'],
      process: ['Counseling', 'University Selection', 'Application', 'Visa Processing']
    },
    'MBBS Abroad': {
      emoji: '🩺',
      desc: 'Medical programs in top universities',
      features: [
        'MBBS in recognized universities',
        'MCI/WHO approved colleges',
        'Low cost medical education',
        'English medium instruction',
        'Hostel & food facilities',
        'Internship opportunities'
      ],
      countries: ['Russia', 'Ukraine', 'Philippines', 'China', 'Georgia', 'Kyrgyzstan'],
      process: ['Eligibility Check', 'University Selection', 'Admission', 'Visa & Travel']
    },
    'Domestic Career Courses': {
      emoji: '🎓',
      desc: 'Skill-building courses in India',
      features: [
        'Professional certification courses',
        'Skill development programs',
        'Placement assistance',
        'Industry-relevant curriculum',
        'Flexible learning options',
        'Affordable fee structure'
      ],
      categories: ['IT & Software', 'Healthcare', 'Management', 'Aviation', 'Hospitality', 'Banking'],
      process: ['Course Selection', 'Registration', 'Training', 'Certification']
    },
    'Career Counseling': {
      emoji: '📊',
      desc: 'Personalized career guidance',
      features: [
        'Career aptitude tests',
        'Skill assessment',
        'Industry trend analysis',
        'Career path planning',
        'Goal setting sessions',
        'Progress tracking'
      ],
      tests: ['Aptitude Test', 'Personality Assessment', 'Skill Evaluation', 'Career Fit Analysis'],
      process: ['Assessment', 'Analysis', 'Planning', 'Implementation']
    },
    'Visa Assistance': {
      emoji: '✈️',
      desc: 'Complete visa support',
      features: [
        'Document preparation',
        'Application filing',
        'Interview preparation',
        'Financial documentation',
        'Follow-up with embassies',
        'Pre-departure briefing'
      ],
      types: ['Student Visa', 'Work Visa', 'Tourist Visa', 'Business Visa', 'PR Visa'],
      process: ['Documentation', 'Application', 'Interview', 'Visa Grant']
    }
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-200 to-blue-600 text-white py-20 pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Comprehensive solutions for your career growth and educational aspirations. 
            We provide end-to-end support for your professional and academic journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold  transition duration-300"
            >
              Get Free Consultation
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From career guidance to international education, we provide comprehensive services 
              to help you achieve your professional and academic goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(services).map(([service, data]) => (
              <div 
                key={service}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {data.emoji}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {service}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-lg">{data.desc}</p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-800">Key Features:</h4>
                    <ul className="text-gray-600 space-y-1">
                      {data.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                      {data.features.length > 3 && (
                        <li className="text-blue-600 font-semibold">
                          +{data.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-blue-600 font-semibold">Learn More →</span>
                    <div className="text-sm text-gray-500">
                      {service === 'Job Placement' && '1000+ Placements'}
                      {service === 'Abroad Studies' && '21+ Countries'}
                      {service === 'MBBS Abroad' && '50+ Universities'}
                      {service === 'Domestic Career Courses' && '50+ Courses'}
                      {service === 'Career Counseling' && '5000+ Students'}
                      {service === 'Visa Assistance' && '98% Success Rate'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose AVS?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand out from the competition with our commitment to excellence and 
              personalized approach to every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏆', title: '2+ Years Experience', desc: 'Over a of trusted service' },
              { icon: '👥', title: '1000+ Students', desc: 'Successfully guided students' },
              { icon: '🌐', title: '21+ Countries', desc: 'Global network and partnerships' },
              { icon: '💯', title: '98% Success Rate', desc: 'High visa and placement success' },
              { icon: '💰', title: 'Affordable Services', desc: 'Quality service at best prices' },
              { icon: '🛡️', title: 'Trusted & Transparent', desc: 'No hidden charges or false promises' },
              { icon: '⏱️', title: 'Quick Processing', desc: 'Fast and efficient service delivery' },
              { icon: '📞', title: '24/7 Support', desc: 'Round the clock customer support' }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with our experts today and take the first step towards your dream career or education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold transition duration-300 text-lg"
            >
              Book Free Consultation
            </Link>
            <a 
              href="tel:+91 81398 90233" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 text-lg"
            >
              Call Us Now
            </a>
          </div>
          <p className="mt-6 text-blue-100">
            📞 +91 81398 90233 • 📧 avsjobeducation@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;