import React from 'react';
import { FaCertificate, FaAward, FaShieldAlt, FaCheckCircle, FaStar } from 'react-icons/fa';

function Team() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our dedicated team of professionals brings together years of experience and expertise 
              to deliver exceptional services across all our specialties.
            </p>
          </div>
        </div>
      </section>

      {/* Main Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <FaCertificate className="text-blue-600 text-3xl mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Business Registration</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Fully registered business entity with the Rwanda Development Board (RDB) 
                and compliant with all local business regulations.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <FaCheckCircle className="text-green-500 mr-2" />
                <span>Valid until: 2025</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <FaShieldAlt className="text-blue-600 text-3xl mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Safety Certification</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Certified by Rwanda Standards Board (RSB) for workplace safety standards 
                and occupational health compliance.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <FaCheckCircle className="text-green-500 mr-2" />
                <span>Valid until: 2024</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <FaAward className="text-blue-600 text-3xl mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Electrical License</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Licensed electrical contractor with certification from Rwanda Energy Group (REG) 
                for electrical installations and maintenance.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <FaCheckCircle className="text-green-500 mr-2" />
                <span>Valid until: 2025</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <FaCertificate className="text-blue-600 text-3xl mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Construction License</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Licensed construction contractor with certification from Rwanda Housing Authority 
                for building construction and renovation projects.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <FaCheckCircle className="text-green-500 mr-2" />
                <span>Valid until: 2024</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <FaShieldAlt className="text-blue-600 text-3xl mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Environmental Compliance</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Certified by Rwanda Environment Management Authority (REMA) for environmental 
                compliance in all construction and maintenance activities.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <FaCheckCircle className="text-green-500 mr-2" />
                <span>Valid until: 2025</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <FaAward className="text-blue-600 text-3xl mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Quality Management</h3>
              </div>
              <p className="text-gray-600 mb-4">
                ISO 9001:2015 certified for quality management systems, ensuring consistent 
                high-quality service delivery across all projects.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <FaCheckCircle className="text-green-500 mr-2" />
                <span>Valid until: 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Professional Memberships</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Rwanda Chamber of Commerce</h3>
              <p className="text-gray-600 mb-4">
                Active member of the Rwanda Chamber of Commerce, contributing to the growth 
                and development of the business community in Rwanda.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <FaStar className="text-yellow-500 mr-2" />
                <span>Member since: 2020</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Rwanda Construction Association</h3>
              <p className="text-gray-600 mb-4">
                Member of the Rwanda Construction Association, upholding industry standards 
                and best practices in construction and maintenance services.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <FaStar className="text-yellow-500 mr-2" />
                <span>Member since: 2021</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Awards & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Excellence in Service</h3>
              <p className="text-gray-600">
                Recognized for outstanding service quality and customer satisfaction in 2023.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Safety Excellence</h3>
              <p className="text-gray-600">
                Awarded for maintaining the highest safety standards in all operations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCertificate className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Certified for consistent delivery of high-quality maintenance and construction services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Compliance & Standards</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-4xl mx-auto">
            NDINDABAHIZIEM LTD maintains full compliance with all Rwandan regulations and 
            international standards. Our certifications ensure that we meet the highest 
            professional standards in all our services.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Rwanda Standards</h3>
              <p className="text-blue-200">Fully compliant with all local regulations</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Safety Standards</h3>
              <p className="text-blue-200">OSHA and local safety compliance</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Quality Standards</h3>
              <p className="text-blue-200">ISO 9001:2015 certified</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Environmental</h3>
              <p className="text-blue-200">REMA certified operations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;