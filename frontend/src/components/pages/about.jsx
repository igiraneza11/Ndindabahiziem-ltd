import React from 'react';
import { FaUsers, FaAward, FaHandshake, FaTools, FaBuffer } from 'react-icons/fa';
import { FaBusinessTime } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";


export default function About() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About NDINDABAHIZIEM LTD</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted partner in comprehensive maintenance and construction services since our establishment.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">PURPOSE, OBJECTIVES AND SCOPE OF THE COMPANY</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This NDINDABAHIZIEM Limited founded by the ownership professional in engineering 
works to meet with clients’ needs and better maintenance and Repair of different 
equipment and machinery; modern construction as Rwanda masterplan purpose. 
The NDINDABAHIZIEM Limited has location in Gasabo district, Ndera sector, KigaliRwanda. it runs from the baseline year of 2016 and proposes enhancing a very reliable 
maintenance and repair work; housing typology with respective electricity installation and 
housing finance mechanisms to meet demand.
The company seeks to improve Partnership with other maintaining, repairing and 
construction companies for better access to delivered services for all segments of the 
population and to provide investors and stakeholders with a clear understanding of the 
market by promoting our activities through the services provided. 
Our cooperate mission is to meet the needs of clients through technical excellence and innovative 
solutions
              </p>
              <p className="text-gray-600 leading-relaxed">
                NDINDABAHIZIEM Limited also focuses about MECHANICAL, ELECTRICAL, PLUMBING as 
the one of the leading engineering solution providers and project specialists. MEP provides 
engineering solutions primarily for electrical and electromechanical activities. MEP holds all 
abilities enabling them to perform a given task regarding to the provided services.
It is building up a substantial reputation and is actively engaged in end-to-end or Turnkey 
projects (installed complete projects and ready to operate) in the areas such as ElectroMechanical works comprising HVAC, Plumbing & Drainage, Fire Fighting and Electrical 
including Low Voltage systems and medium voltage systems.
              </p>
            </div>
            {/* <div>
              <img src="https://i.imgur.com/UVpKfll.jpg" alt="Our Team" className="rounded-lg shadow-lg" />
            </div> */}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaHandshake className="text-blue-600 text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
✓ Our goal is to obey rules and regulation guiding all professionals to build and <br />
    consult engineering works, which is safe to community and environment. <br /> 
✓To be a leader in Electro-Mechanical works in the global market. <br />
 and To provide our clients with the highest quality of service and workmanship,<br />
✓To become the customers’ most preferred choice by attaining excellence in <br />
quality and timely completed value-added projects. <br />
✓To build long-term relationships with our clients by providing exceptional service <br />
✓To continually innovate, develop and adopt state-of-the-art technology in methods <br />
and materials to enhance productivity and cost effectiveness.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaAward className="text-blue-600 text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
To be the top-most leading Company renowned for Excellence, Quality, 
Performance and Reliability in Electro Mechanical works in the global market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBusinessTime className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Displine</h3>
              <p className="text-gray-600">
                We follow proven processes and timelines on every job, showing up on time and finishing what we start.
              </p>
            </div>
                        <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTools className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Hard working</h3>
              <p className="text-gray-600">
                We maintain the highest standards in all our services, ensuring quality workmanship 
                and reliable results.
              </p>
            </div>
                        <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBuffer className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Patriotism</h3>
              <p className="text-gray-600">
                We take pride in serving our community and supporting local growth in everything we build and repair.
              </p>
            </div>
                        <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MdVerifiedUser className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality</h3>
              <p className="text-gray-600">
                Every detail is checked and double-checked, so the work we hand back holds up long after we leave.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and ethical practices in all 
                our dealings.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Our clients are at the heart of everything we do. We prioritize their needs and 
                satisfaction above all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Others</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* <img src="https://i.imgur.com/GtEjCUg.jpg" alt="Team Member" className="w-full h-48 object-cover" /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Strength</h3>
                <p className="text-gray-600">
                  - Management Experience, <br />
                  - Owner has several years’ experience in Engineering Field, He is a 
                       Professional Engineer and fluent in Project Management in Rwanda. <br />
                  - Quality and niche services provided to our customers is our strength <br />
                  - Interior Teamwork
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* <img src="https://i.imgur.com/kLbReMG.jpg" alt="Team Member" className="w-full h-48 object-cover" /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Opportunity</h3>
                <p className="text-gray-600">
                  ✓
Technology is rising <br />
✓ High speed of Rwanda Economy, Africa in general. <br />
✓ Technical Problems still in society is our opportunity <br />
✓ Our Subsidiaries and Associates companies <br />
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* <img src="https://i.imgur.com/5DOdvKr.jpg" alt="Team Member" className="w-full h-48 object-cover" /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Threats</h3>
                <p className="text-gray-600">
                  ❖ Local competitors <br />
❖ Susceptible to economic downturn
                </p>
              </div>
            </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* <img src="https://i.imgur.com/5DOdvKr.jpg" alt="Team Member" className="w-full h-48 object-cover" /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Commitment To Quality policy</h3>
                <p className="text-gray-600">
                  • NDINDABAHIZIEM Limited is committed to meeting Customer Requirements through 
continual improvement of its Quality Management System. <br />
• NDINDABAHIZIEM Limited shall sustain Organizational Excellence through visionary 
leadership and innovative efforts
                </p>
              </div>
            </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* <img src="https://i.imgur.com/5DOdvKr.jpg" alt="Team Member" className="w-full h-48 object-cover" /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Assurance</h3>
                <p className="text-gray-600">
                  ▪ The Company has a Quality Management System which complies with: <br />
▪ All contractual obligations, Client's Specifications and Industry standards. <br />
▪ All Statutory Regulations and Codes of Practice. <br />
▪ Providing and maintaining good & Clean environment and safe Workplace. <br />
▪ Maintaining high level of performance and professionalism by imparting <br />
training as well as providing adequate resources. <br />
▪ Continual improvement in the methods of working. <br />
▪ All contractual obligations, Client's Specifications and Industry standards. <br />
                </p>
              </div>
            </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* <img src="https://i.imgur.com/5DOdvKr.jpg" alt="Team Member" className="w-full h-48 object-cover" /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Knowledge</h3>
                <p className="text-gray-600">
                  Our continuous learning and adaptation to technology empowers us to be competitive in the 
market. The knowledge we have from our qualified team enables us to complete the project 
successfully and on time.
                </p>
              </div>
            </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* <img src="https://i.imgur.com/5DOdvKr.jpg" alt="Team Member" className="w-full h-48 object-cover" /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Teamwork</h3>
                <p className="text-gray-600">
                  Our people thrive on the challenge to succeeding in any environment, work on their special 
skills, are committed to common goals and good team players. We recruit experienced 
professionals and our aim is to constantly develop and empower our employees and create an 
environment where achievement is recognized and success is rewarded.
                </p>
              </div>
            </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* <img src="https://i.imgur.com/5DOdvKr.jpg" alt="Team Member" className="w-full h-48 object-cover" /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality</h3>
                <p className="text-gray-600">
                  Our commitment to quality is one of the bases for our competitive advantage and customers 
build their trust on us. Our customers’ satisfaction is one of our prime importance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}