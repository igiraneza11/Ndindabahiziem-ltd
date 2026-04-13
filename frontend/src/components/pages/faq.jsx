import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaTools, FaBolt, FaBuilding, FaSnowflake, FaVideo, FaWrench } from 'react-icons/fa';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';


function FAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      icon: FaQuestionCircle,
      questions: [
        {
          id: 'general-1',
          question: "What services does NDINDABAHIZIEM LTD offer?",
          answer: "We offer comprehensive maintenance and construction services including electrical installations, refrigeration and AC systems, construction projects, CCTV installation, plumbing services, and machinery repair. We serve both residential and commercial clients across Rwanda."
        },
        {
          id: 'general-2',
          question: "What areas do you serve?",
          answer: "We primarily serve Kigali and surrounding areas in Rwanda. For large projects, we can extend our services to other major cities in Rwanda. Contact us to discuss your specific location requirements."
        },
        {
          id: 'general-3',
          question: "How long have you been in business?",
          answer: "NDINDABAHIZIEM LTD has been providing professional services for over 5 years. We have built a strong reputation for quality workmanship and reliable service delivery."
        },
        {
          id: 'general-4',
          question: "Are you licensed and insured?",
          answer: "Yes, we are fully licensed and certified to provide all our services. We carry comprehensive insurance coverage to protect our clients and our team members during all projects."
        }
      ]
    },
    {
      id: 'electrical',
      title: 'Electrical Services',
      icon: FaBolt,
      questions: [
        {
          id: 'electrical-1',
          question: "What electrical services do you provide?",
          answer: "We provide complete electrical installation and maintenance services including wiring, lighting systems, power distribution, electrical panels, emergency backup systems, and electrical troubleshooting and repairs."
        },
        {
          id: 'electrical-2',
          question: "Do you handle both residential and commercial electrical work?",
          answer: "Yes, we handle electrical projects of all sizes from residential homes to large commercial buildings, industrial facilities, and institutional projects."
        },
        {
          id: 'electrical-3',
          question: "How quickly can you respond to electrical emergencies?",
          answer: "We provide 24/7 emergency electrical services. Our team can typically respond within 2-4 hours for urgent electrical issues."
        }
      ]
    },
    {
      id: 'construction',
      title: 'Construction Services',
      icon: FaBuilding,
      questions: [
        {
          id: 'construction-1',
          question: "What types of construction projects do you handle?",
          answer: "We handle various construction projects including office buildings, residential complexes, commercial spaces, renovations, and specialized construction projects. We work with both new construction and renovation projects."
        },
        {
          id: 'construction-2',
          question: "How long does a typical construction project take?",
          answer: "Project timelines vary depending on scope and complexity. Small renovations might take 2-4 weeks, while larger projects can take 3-12 months. We provide detailed timelines during the planning phase."
        },
        {
          id: 'construction-3',
          question: "Do you provide project management services?",
          answer: "Yes, we provide comprehensive project management including planning, coordination, quality control, and regular client updates throughout the construction process."
        }
      ]
    },
    {
      id: 'refrigeration',
      title: 'Refrigeration & AC',
      icon: FaSnowflake,
      questions: [
        {
          id: 'refrigeration-1',
          question: "What refrigeration and AC services do you offer?",
          answer: "We provide installation, maintenance, and repair of commercial refrigeration systems, HVAC systems, air conditioning units, cold rooms, and climate control systems for various applications."
        },
        {
          id: 'refrigeration-2',
          question: "Do you provide maintenance contracts for refrigeration systems?",
          answer: "Yes, we offer comprehensive maintenance contracts that include regular inspections, preventive maintenance, and priority service for refrigeration and AC systems."
        },
        {
          id: 'refrigeration-3',
          question: "Can you handle large commercial refrigeration systems?",
          answer: "Absolutely. We specialize in commercial and industrial refrigeration systems including supermarkets, restaurants, warehouses, and manufacturing facilities."
        }
      ]
    },
    {
      id: 'cctv',
      title: 'CCTV & Security',
      icon: FaVideo,
      questions: [
        {
          id: 'cctv-1',
          question: "What CCTV systems do you install?",
          answer: "We install various CCTV systems including analog, IP cameras, wireless systems, and advanced security systems with remote monitoring capabilities for homes and businesses."
        },
        {
          id: 'cctv-2',
          question: "Do you provide monitoring services?",
          answer: "Yes, we offer 24/7 monitoring services and can integrate CCTV systems with mobile apps for remote viewing and alerts."
        },
        {
          id: 'cctv-3',
          question: "Can you upgrade existing security systems?",
          answer: "Yes, we can upgrade existing security systems and integrate new technology with current infrastructure to enhance security coverage."
        }
      ]
    },
    {
      id: 'pricing',
      title: 'Pricing & Quotes',
      icon: FaTools,
      questions: [
        {
          id: 'pricing-1',
          question: "How do you determine project pricing?",
          answer: "Pricing is based on project scope, materials required, labor costs, and timeline. We provide detailed quotes after assessing your specific requirements and site conditions."
        },
        {
          id: 'pricing-2',
          question: "Do you provide free estimates?",
          answer: "Yes, we provide free initial consultations and estimates for all our services. Contact us to schedule a site visit and detailed quote."
        },
        {
          id: 'pricing-3',
          question: "What payment terms do you offer?",
          answer: "We offer flexible payment terms including upfront payments, milestone payments, and payment plans for larger projects. We accept various payment methods including bank transfers and mobile money."
        }
      ]
    }
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Find answers to common questions about our services, processes, and policies. 
              If you don't find what you're looking for, feel free to contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {faqCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.id} className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <IconComponent className="text-blue-600 text-2xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.questions.map((item) => (
                    <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-800">{item.question}</span>
                        {openItems[item.id] ? (
                          <FaChevronUp className="text-blue-600" />
                        ) : (
                          <FaChevronDown className="text-blue-600" />
                        )}
                      </button>
                      {openItems[item.id] && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            If you couldn't find the answer you're looking for, our team is here to help. 
            Contact us for personalized assistance with your specific needs.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
             <a href="contact">Contact Us</a> 
            </button>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Quick Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBolt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone Support</h3>
              <p className="text-gray-600">+250 782 177 952</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTools className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Support</h3>
              <p className="text-gray-600">bahizem@gmail.com</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBuilding className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Social Media</h3>
              <div className="flex space-x-2 justify-center">
                            <a href="https://x.com/home?lang=en" className="text-blue-500 hover:text-gray transition-colors">
                              <FaTwitter size={20} />
                            </a>
                            <a href="https://www.facebook.com/bahizi11" className="text-blue-500 hover:text-gray transition-colors">
                              <FaFacebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/bahizi_11/?next=%2F" className="text-blue-500 hover:text-gray transition-colors">
                              <FaInstagram size={20} />
                            </a>
                          </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ; 