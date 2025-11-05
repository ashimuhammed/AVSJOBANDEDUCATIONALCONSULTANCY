import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AbroadMBBS = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [filter, setFilter] = useState('all');

  // Fetch countries from Django API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/mbbs-countries/');
        const data = await response.json();
        setCountries(data.results || data);
      } catch (error) {
        console.error('Error fetching countries:', error);
        // Fallback to static data
        setCountries(staticCountries);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // Static data fallback with corrected categories
  const staticCountries = [
    // Popular Destinations
    {
      id: 1,
      name: "Russia",
      slug: "russia",
      category: "popular",
      description: "Russia offers world-class medical education with affordable tuition fees and globally recognized degrees.",
      tuition_fee: "$3000 - $6000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "WHO & MCI/NMC approved, English medium, No donation, World-class infrastructure, European education standard",
      recognition: "Recognized by WHO, MCI/NMC, ECFMG, FAIMER, Ministry of Education Russia",
      image: "/images/russia.jpg"
    },
    {
      id: 2,
      name: "Ukraine",
      slug: "ukraine",
      category: "popular",
      description: "Ukrainian medical universities are known for their high-quality education and European standards.",
      tuition_fee: "$3500 - $5500 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "European education standard, Affordable cost, English medium, No donation",
      recognition: "WHO, MCI/NMC, UNESCO, European Council",
      image: "/images/ukraine.jpg"
    },
    {
      id: 3,
      name: "Philippines",
      slug: "philippines",
      category: "popular",
      description: "Philippines offers US-based education pattern with English as medium of instruction.",
      tuition_fee: "$2000 - $4000 per year",
      duration: "5.5 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "US education pattern, High FMGE passing rate, English speaking country, No donation",
      recognition: "WHO, MCI/NMC, CHED, FAIMER",
      image: "/images/philippines.jpg"
    },
    {
      id: 4,
      name: "Georgia",
      slug: "georgia",
      category: "popular",
      description: "Georgia provides quality medical education with modern infrastructure and affordable fees.",
      tuition_fee: "$4000 - $7000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "European degree, Safe environment, Modern facilities, No donation",
      recognition: "WHO, MCI/NMC, ECFMG, WFME",
      image: "/images/georgia.jpg"
    },
    {
      id: 5,
      name: "Kazakhstan",
      slug: "kazakhstan",
      category: "popular",
      description: "Kazakhstan offers MBBS at very affordable costs with good infrastructure.",
      tuition_fee: "$2500 - $4500 per year",
      duration: "5 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "Very affordable, Good infrastructure, English medium, No donation",
      recognition: "WHO, MCI/NMC, ECFMG",
      image: "/images/kazakhstan-mbbs.jpg"
    },
    

    // European Countries
    {
      id: 7,
      name: "Armenia",
      slug: "armenia",
      category: "europe",
      description: "Armenia offers quality medical education with European standards and affordable tuition fees.",
      tuition_fee: "$3500 - $5000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "European standards, Affordable fees, English medium, No donation",
      recognition: "WHO, MCI/NMC, ECFMG",
      image: "/images/armenia-mbbs.jpg"
    },
    {
      id: 8,
      name: "Azerbaijan",
      slug: "azerbaijan",
      category: "europe",
      description: "Azerbaijan provides modern medical education with international recognition.",
      tuition_fee: "$3000 - $4500 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "Modern facilities, International recognition, Affordable, No donation",
      recognition: "WHO, MCI/NMC",
      image: "/images/azerbaijan-mbbs.jpg"
    },
    {
      id: 9,
      name: "Belarus",
      slug: "belarus",
      category: "europe",
      description: "Belarusian medical universities offer high-quality education with European accreditation.",
      tuition_fee: "$4000 - $6000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "European accreditation, Quality education, English medium, No donation",
      recognition: "WHO, MCI/NMC, ECFMG",
      image: "/images/belarus-mbbs.jpg"
    },
    {
      id: 10,
      name: "Bulgaria",
      slug: "bulgaria",
      category: "europe",
      description: "Bulgaria offers EU-recognized medical degrees with modern teaching methods.",
      tuition_fee: "$6000 - $8000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "EU recognized degree, Modern teaching, English medium, No donation",
      recognition: "WHO, MCI/NMC, EU directives",
      image: "/images/bulgaria-mbbs.jpg"
    },
    {
      id: 11,
      name: "Romania",
      slug: "romania",
      category: "europe",
      description: "Romania offers EU-standard medical education with clinical exposure in European hospitals.",
      tuition_fee: "$5000 - $7000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "EU standard education, Clinical exposure, English medium, No donation",
      recognition: "WHO, MCI/NMC, EU directives",
      image: "/images/romania-mbbs.jpg"
    },
    {
      id: 12,
      name: "Turkey",
      slug: "turkey",
      category: "europe",
      description: "Turkey bridges Europe and Asia with quality medical education and cultural diversity.",
      tuition_fee: "$4000 - $6000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "Cultural diversity, Quality education, English medium, No donation",
      recognition: "WHO, MCI/NMC, ECFMG",
      image: "/images/turkey-mbbs.jpg"
    },
    {
      id: 13,
      name: "Serbia",
      slug: "serbia",
      category: "europe",
      description: "Serbia provides European medical education with rich clinical experience.",
      tuition_fee: "$4500 - $6500 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "European education, Clinical experience, Affordable, No donation",
      recognition: "WHO, MCI/NMC, ECFMG",
      image: "/images/serbia-mbbs.jpg"
    },
    {
      id: 14,
      name: "Italy",
      slug: "italy",
      category: "europe",
      description: "Italy offers EU-recognized medical degrees with rich medical heritage.",
      tuition_fee: "$5000 - $8000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, IMAT for some universities, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "EU recognized, Rich heritage, English medium, No donation",
      recognition: "WHO, MCI/NMC, EU directives",
      image: "/images/italy-mbbs.jpg"
    },
    {
      id: 15,
      name: "Spain",
      slug: "spain",
      category: "europe",
      description: "Spain provides quality medical education with European Union recognition.",
      tuition_fee: "$6000 - $9000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "EU recognition, Quality education, Cultural experience, No donation",
      recognition: "WHO, MCI/NMC, EU directives",
      image: "/images/spain-mbbs.jpg"
    },
    {
      id: 16,
      name: "France",
      slug: "france",
      category: "europe",
      description: "France offers prestigious medical education with advanced research opportunities.",
      tuition_fee: "$7000 - $10,000 per year",
      duration: "6 Years",
      eligibility: "High academic scores, French language proficiency, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "Prestigious education, Research opportunities, EU recognition, No donation",
      recognition: "WHO, MCI/NMC, EU directives",
      image: "/images/france-mbbs.jpg"
    },
    {
      id: 17,
      name: "Germany",
      slug: "germany",
      category: "europe",
      description: "Germany provides excellent medical education with no tuition fees in public universities.",
      tuition_fee: "	Low to free (public universities charge only semester fees)",
      duration: "6 Years",
      eligibility: "Excellent academic scores, German language proficiency, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "No tuition fees, Excellent education, EU recognition, No donation",
      recognition: "WHO, MCI/NMC, EU directives",
      image: "/images/germany-mbbs.jpg"
    },

    // Asian Countries
    {
      id: 18,
      name: "China",
      slug: "china",
      category: "asia",
      description: "China provides world-class medical education with advanced infrastructure and research opportunities.",
      tuition_fee: "$4000 - $7000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "Advanced infrastructure, Research opportunities, Global recognition, No donation",
      recognition: "WHO, MCI/NMC, ECFMG",
      image: "/images/china-mbbs.jpg"
    },
    {
      id: 19,
      name: "Uzbekistan",
      slug: "uzbekistan",
      category: "asia",
      description: "Uzbekistan offers affordable medical education with good infrastructure.",
      tuition_fee: "$2500 - $4000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "Very affordable, Good infrastructure, English medium, No donation",
      recognition: "WHO, MCI/NMC",
      image: "/images/uzbekistan-mbbs.jpg"
    },

    // Other Countries
    {
      id: 20,
      name: "Australia",
      slug: "australia",
      category: "other",
      description: "Australia offers world-class medical education with advanced research facilities.",
      tuition_fee: "$25,000 - $40,000 per year",
      duration: "5-6 Years",
      eligibility: "High academic scores, IELTS/TOEFL, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "World-class education, Research facilities, Global opportunities, No donation",
      recognition: "WHO, MCI/NMC, AMC",
      image: "/images/australia-mbbs.jpg"
    },
    {
      id: 21,
      name: "Canada",
      slug: "canada",
      category: "other",
      description: "Canada provides excellent medical education with North American standards.",
      tuition_fee: "$20,000 - $35,000 per year",
      duration: "4 Years MD program",
      eligibility: "High academic scores, MCAT, IELTS/TOEFL, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "North American standards, Excellent facilities, Global recognition, No donation",
      recognition: "WHO, MCI/NMC, MCC",
      image: "/images/canada-mbbs.jpg"
    }
  ];

  const filteredCountries = filter === 'all' 
    ? countries 
    : countries.filter(country => country.category === filter);

  const countryCategories = [
    { value: 'all', label: 'All Countries' },
    { value: 'popular', label: 'Popular Destinations' },
    { value: 'europe', label: 'European Countries' },
    { value: 'asia', label: 'Asian Countries' },
    { value: 'other', label: 'Other Countries' }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Affordable Fees",
      description: "Cost-effective education compared to private Indian colleges"
    },
    {
      icon: "🌍",
      title: "Global Recognition",
      description: "Degrees recognized by WHO, MCI/NMC, ECFMG, and other international bodies"
    },
    {
      icon: "🏫",
      title: "No Donation",
      description: "Transparent admission process without any capitation fees"
    },
    {
      icon: "📚",
      title: "Quality Education",
      description: "World-class infrastructure and experienced faculty"
    },
    {
      icon: "🗣️",
      title: "English Medium",
      description: "English as medium of instruction for easy learning"
    },
    {
      icon: "🎯",
      title: "Direct Admission",
      description: "Straightforward admission process without entrance exams"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="bg-white rounded-lg shadow p-6">
                  <div className="h-48 bg-gray-300 rounded mb-4"></div>
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Study MBBS Abroad | AVS Consultancy</title>
        <meta name="description" content="Study MBBS abroad in Russia, Ukraine, Philippines, Georgia, Kazakhstan, Nepal, Armenia, Azerbaijan, Belarus, Bulgaria, China, Romania, Turkey, Uzbekistan, Serbia, Australia, Canada, Italy, Spain, France, Germany and other countries. Affordable fees, global recognition, no donation." />
        <meta name="keywords" content="MBBS abroad, study MBBS overseas, medical education abroad, MBBS in Russia, MBBS in Ukraine, MBBS in Georgia, MBBS in Kazakhstan, MBBS in China, MBBS in Europe" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-200 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Study MBBS Abroad
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Pursue your dream of becoming a doctor with world-class medical education at affordable costs. 
                Global recognition, no donation, and direct admission in 21 countries.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
                >
                  Free Consultation
                </Link>
                <button 
                  onClick={() => document.getElementById('countries').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
                >
                  Explore Countries
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="countries" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Choose Your Destination
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Explore 21 countries for MBBS education with detailed information about each destination
              </p>
              
              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {countryCategories.map(category => (
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

            {/* Countries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCountries.map(country => (
                <div key={country.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                  <div className="h-48 bg-gray-200 relative">
                    {country.image ? (
                      <img 
                        src={country.image} 
                        alt={`MBBS in ${country.name}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">{country.name}</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {country.category === 'popular' && 'Popular'}
                      {country.category === 'europe' && 'Europe'}
                      {country.category === 'asia' && 'Asia'}
                      {country.category === 'other' && 'Other'}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      MBBS in {country.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {country.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Tuition Fee:</span>
                        <span className="font-semibold text-gray-800">{country.tuition_fee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Duration:</span>
                        <span className="font-semibold text-gray-800">{country.duration}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link
                        to={`/mbbs/${country.slug}`}
                        className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
                      >
                        View Details
                      </Link>
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

            {filteredCountries.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🌍</div>
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                  No countries found
                </h3>
                <p className="text-gray-500">
                  Try selecting a different filter or check back later for updates.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Choose MBBS Abroad?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover the advantages of pursuing medical education in internationally recognized universities across 21 countries
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

        {/* Countries Section */}
        

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Medical Journey?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get free personalized guidance for MBBS admission in 21 countries. Our experts will help you choose the best country and university.
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

export default AbroadMBBS;