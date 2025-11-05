import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const MBBSCountry = () => {
  const { country } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/mbbs-countries/${country}/`);
        const data = await response.json();
        setCountryData(data);
        
        // Fetch universities for this country
        const uniResponse = await fetch(`/api/mbbs-countries/${country}/universities/`);
        const uniData = await uniResponse.json();
        setUniversities(uniData.results || uniData);
      } catch (error) {
        console.error('Error fetching country data:', error);
        // Fallback to static data
        setCountryData(staticCountryData[country]);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [country]);

  // Static data fallback for all 21 countries
  const staticCountryData = {
    russia: {
      name: "Russia",
      description: "Russia offers world-class medical education with affordable tuition fees and globally recognized degrees. Russian medical universities are known for their high standards and excellent infrastructure.",
      tuition_fee: "$3000 - $6000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "WHO & MCI/NMC approved, English medium, No donation, World-class infrastructure, European education standard",
      recognition: "Recognized by WHO, MCI/NMC, ECFMG, FAIMER, Ministry of Education Russia"
    },
    ukraine: {
      name: "Ukraine",
      description: "Ukrainian medical universities are known for their high-quality education and European standards. The country offers excellent medical programs with modern teaching methodologies.",
      tuition_fee: "$3500 - $5500 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "European education standard, Affordable cost, English medium, No donation, Modern facilities",
      recognition: "WHO, MCI/NMC, UNESCO, European Council"
    },
    philippines: {
      name: "Philippines",
      description: "Philippines offers US-based education pattern with English as medium of instruction. The medical curriculum is designed to prepare students for global medical practice.",
      tuition_fee: "$2000 - $4000 per year",
      duration: "5.5 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "US education pattern, High FMGE passing rate, English speaking country, No donation",
      recognition: "WHO, MCI/NMC, CHED, FAIMER"
    },
    georgia: {
      name: "Georgia",
      description: "Georgia provides quality medical education with modern infrastructure and affordable fees. The country is known for its safe environment and European education standards.",
      tuition_fee: "$4000 - $7000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "European degree, Safe environment, Modern facilities, No donation, Quality education",
      recognition: "WHO, MCI/NMC, ECFMG, WFME"
    },
    kazakhstan: {
      name: "Kazakhstan",
      description: "Kazakhstan offers MBBS at very affordable costs with good infrastructure. The medical universities provide quality education with English as medium of instruction.",
      tuition_fee: "$2500 - $4500 per year",
      duration: "5 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "Very affordable, Good infrastructure, English medium, No donation, Quality education",
      recognition: "WHO, MCI/NMC, ECFMG"
    },
    nepal: {
      name: "Nepal",
      description: "Nepal provides similar education pattern as India with proximity and cultural similarity. The medical curriculum is recognized by major medical councils worldwide.",
      tuition_fee: "$4000 - $6000 per year",
      duration: "5.5 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "Similar to Indian curriculum, No language barrier, Proximity to India, No donation",
      recognition: "WHO, MCI/NMC, NMC Nepal"
    },
    armenia: {
      name: "Armenia",
      description: "Armenia offers quality medical education with European standards and affordable tuition fees. The country has a rich history in medical education and research.",
      tuition_fee: "$3500 - $5000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "European standards, Affordable fees, English medium, No donation, Quality education",
      recognition: "WHO, MCI/NMC, ECFMG"
    },
    azerbaijan: {
      name: "Azerbaijan",
      description: "Azerbaijan provides modern medical education with international recognition. The universities are equipped with advanced medical facilities and experienced faculty.",
      tuition_fee: "$3000 - $4500 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "Modern facilities, International recognition, Affordable, No donation, Quality education",
      recognition: "WHO, MCI/NMC"
    },
    belarus: {
      name: "Belarus",
      description: "Belarusian medical universities offer high-quality education with European accreditation. The country has a strong emphasis on practical medical training.",
      tuition_fee: "$4000 - $6000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "European accreditation, Quality education, English medium, No donation, Practical training",
      recognition: "WHO, MCI/NMC, ECFMG"
    },
    bulgaria: {
      name: "Bulgaria",
      description: "Bulgaria offers EU-recognized medical degrees with modern teaching methods. The medical education follows European Union standards and guidelines.",
      tuition_fee: "$6000 - $8000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "EU recognized degree, Modern teaching, English medium, No donation, EU standards",
      recognition: "WHO, MCI/NMC, EU directives"
    },
    china: {
      name: "China",
      description: "China provides world-class medical education with advanced infrastructure and research opportunities. Chinese medical universities are globally recognized for their excellence.",
      tuition_fee: "$4000 - $7000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "Advanced infrastructure, Research opportunities, Global recognition, No donation, World-class education",
      recognition: "WHO, MCI/NMC, ECFMG"
    },
    romania: {
      name: "Romania",
      description: "Romania offers EU-standard medical education with clinical exposure in European hospitals. The medical curriculum is designed to meet international standards.",
      tuition_fee: "$5000 - $7000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "EU standard education, Clinical exposure, English medium, No donation, International standards",
      recognition: "WHO, MCI/NMC, EU directives"
    },
    turkey: {
      name: "Turkey",
      description: "Turkey bridges Europe and Asia with quality medical education and cultural diversity. The country offers modern medical facilities and experienced faculty.",
      tuition_fee: "$4000 - $6000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "Cultural diversity, Quality education, English medium, No donation, Modern facilities",
      recognition: "WHO, MCI/NMC, ECFMG"
    },
    uzbekistan: {
      name: "Uzbekistan",
      description: "Uzbekistan offers affordable medical education with good infrastructure. The medical universities provide quality education with focus on practical skills.",
      tuition_fee: "$2500 - $4000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "Very affordable, Good infrastructure, English medium, No donation, Practical skills",
      recognition: "WHO, MCI/NMC"
    },
    serbia: {
      name: "Serbia",
      description: "Serbia provides European medical education with rich clinical experience. The country has a strong medical tradition and modern healthcare facilities.",
      tuition_fee: "$4500 - $6500 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "European education, Clinical experience, Affordable, No donation, Modern healthcare",
      recognition: "WHO, MCI/NMC, ECFMG"
    },
    italy: {
      name: "Italy",
      description: "Italy offers EU-recognized medical degrees with rich medical heritage. The country is known for its advanced medical research and healthcare system.",
      tuition_fee: "$5000 - $8000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, IMAT for some universities, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "EU recognized, Rich heritage, English medium, No donation, Advanced research",
      recognition: "WHO, MCI/NMC, EU directives"
    },
    spain: {
      name: "Spain",
      description: "Spain provides quality medical education with European Union recognition. The medical universities offer excellent clinical training opportunities.",
      tuition_fee: "$6000 - $9000 per year",
      duration: "6 Years",
      eligibility: "Minimum 50% in PCB, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "EU recognition, Quality education, Cultural experience, No donation, Clinical training",
      recognition: "WHO, MCI/NMC, EU directives"
    },
    france: {
      name: "France",
      description: "France offers prestigious medical education with advanced research opportunities. The country is renowned for its medical innovations and healthcare system.",
      tuition_fee: "$7000 - $10,000 per year",
      duration: "6 Years",
      eligibility: "High academic scores, French language proficiency, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "Prestigious education, Research opportunities, EU recognition, No donation, Medical innovations",
      recognition: "WHO, MCI/NMC, EU directives"
    },
    germany: {
      name: "Germany",
      description: "Germany provides excellent medical education with no tuition fees in public universities. The country offers world-class medical training and research facilities.",
      tuition_fee: "No tuition fees (only semester contribution)",
      duration: "6 Years",
      eligibility: "Excellent academic scores, German language proficiency, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "No tuition fees, Excellent education, EU recognition, No donation, World-class facilities",
      recognition: "WHO, MCI/NMC, EU directives"
    },
    australia: {
      name: "Australia",
      description: "Australia offers world-class medical education with advanced research facilities. The medical programs are designed to meet international healthcare standards.",
      tuition_fee: "$25,000 - $40,000 per year",
      duration: "5-6 Years",
      eligibility: "High academic scores, IELTS/TOEFL, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "World-class education, Research facilities, Global opportunities, No donation, International standards",
      recognition: "WHO, MCI/NMC, AMC"
    },
    canada: {
      name: "Canada",
      description: "Canada provides excellent medical education with North American standards. The country offers advanced medical training and excellent career opportunities.",
      tuition_fee: "$20,000 - $35,000 per year",
      duration: "4 Years MD program",
      eligibility: "High academic scores, MCAT, IELTS/TOEFL, NEET qualification, Age 17-25 years",
      admission_process: "Application → Document verification → Admission letter → Visa processing → Travel",
      benefits: "North American standards, Excellent facilities, Global recognition, No donation, Career opportunities",
      recognition: "WHO, MCI/NMC, MCC"
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="h-64 bg-gray-300 rounded mb-6"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-48 bg-gray-300 rounded"></div>
                <div className="h-48 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!countryData) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Country Not Found</h1>
          <p className="text-gray-600 mb-6">The requested country information is not available.</p>
          <Link to="/abroad-mbbs" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Back to Countries
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>MBBS in {countryData.name} | AVS Consultancy</title>
        <meta name="description" content={`Study MBBS in ${countryData.name}. ${countryData.description}`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-blue-200 mb-4">
                <Link to="/" className="hover:text-white">Home</Link>
                <span>›</span>
                <Link to="/abroad-mbbs" className="hover:text-white">MBBS Abroad</Link>
                <span>›</span>
                <span>MBBS in {countryData.name}</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                MBBS in {countryData.name}
              </h1>
              <p className="text-xl opacity-90 max-w-2xl">
                {countryData.description}
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed">
                  {countryData.description}
                </p>
              </div>

              {/* Key Information */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-700">Tuition Fee:</span>
                      <p className="text-gray-600">{countryData.tuition_fee}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Duration:</span>
                      <p className="text-gray-600">{countryData.duration}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Eligibility:</span>
                      <p className="text-gray-600">{countryData.eligibility}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-700">Recognition:</span>
                      <p className="text-gray-600">{countryData.recognition}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Medium of Instruction:</span>
                      <p className="text-gray-600">English</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Intake:</span>
                      <p className="text-gray-600">September/October</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Benefits</h2>
                <div className="prose prose-blue max-w-none">
                  <p className="text-gray-700">{countryData.benefits}</p>
                </div>
              </div>

              {/* Admission Process */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Admission Process</h2>
                <div className="space-y-4">
                  {countryData.admission_process && countryData.admission_process.split('→').map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-gray-700">{step.trim()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Enquiry */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Enquiry</h3>
                <p className="text-gray-600 mb-4">Get detailed information about MBBS in {countryData.name}</p>
                <Link
                  to="/contact"
                  className="w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold block"
                >
                  Enquire Now
                </Link>
              </div>

              {/* Key Highlights */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Globally Recognized Degree</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">No Donation Fee</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">English Medium</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Affordable Fees</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Quality Education</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-blue-600 text-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Call Us:</p>
                    <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a>
                  </div>
                  <div>
                    <p className="font-semibold">Email:</p>
                    <a href="mailto:info@avsconsultancy.com" className="hover:underline">info@avsconsultancy.com</a>
                  </div>
                  <div>
                    <p className="font-semibold">Free Consultation:</p>
                    <p>Get expert guidance for admission</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MBBSCountry;