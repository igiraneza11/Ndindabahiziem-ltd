// import React from 'react';
// import { FaUsers, FaAward, FaHandshake, FaTools, FaBuffer } from 'react-icons/fa';
// import { FaBusinessTime } from "react-icons/fa6";
// import { MdVerifiedUser } from "react-icons/md";


// export default function About() {
//   return (
//     <div className="font-sans">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16">
//         <div className="container mx-auto px-6">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold mb-4">About NDINDABAHIZIEM LTD</h1>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//               Your trusted partner in comprehensive maintenance and construction services since our establishment.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Company Story */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="grid gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-6">PURPOSE, OBJECTIVES AND SCOPE OF THE COMPANY</h2>
//               <p className="text-gray-600 leading-relaxed mb-4">
//                 This NDINDABAHIZIEM Limited founded by the ownership professional in engineering 
// works to meet with clients’ needs and better maintenance and Repair of different 
// equipment and machinery; modern construction as Rwanda masterplan purpose. 
// The NDINDABAHIZIEM Limited has location in Gasabo district, Ndera sector, KigaliRwanda. it runs from the baseline year of 2016 and proposes enhancing a very reliable 
// maintenance and repair work; housing typology with respective electricity installation and 
// housing finance mechanisms to meet demand.
// The company seeks to improve Partnership with other maintaining, repairing and 
// construction companies for better access to delivered services for all segments of the 
// population and to provide investors and stakeholders with a clear understanding of the 
// market by promoting our activities through the services provided. 
// Our cooperate mission is to meet the needs of clients through technical excellence and innovative 
// solutions
//               </p>
//               <p className="text-gray-600 leading-relaxed">
//                 NDINDABAHIZIEM Limited also focuses about MECHANICAL, ELECTRICAL, PLUMBING as 
// the one of the leading engineering solution providers and project specialists. MEP provides 
// engineering solutions primarily for electrical and electromechanical activities. MEP holds all 
// abilities enabling them to perform a given task regarding to the provided services.
// It is building up a substantial reputation and is actively engaged in end-to-end or Turnkey 
// projects (installed complete projects and ready to operate) in the areas such as ElectroMechanical works comprising HVAC, Plumbing & Drainage, Fire Fighting and Electrical 
// including Low Voltage systems and medium voltage systems.
//               </p>
//             </div>
//             {/* <div>
//               <img src="https://i.imgur.com/UVpKfll.jpg" alt="Our Team" className="rounded-lg shadow-lg" />
//             </div> */}
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="bg-white p-8 rounded-lg shadow-lg">
//               <div className="flex items-center mb-4">
//                 <FaHandshake className="text-blue-600 text-2xl mr-3" />
//                 <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
//               </div>
//               <p className="text-gray-600 leading-relaxed">
// ✓ Our goal is to obey rules and regulation guiding all professionals to build and <br />
//     consult engineering works, which is safe to community and environment. <br /> 
// ✓To be a leader in Electro-Mechanical works in the global market. <br />
//  and To provide our clients with the highest quality of service and workmanship,<br />
// ✓To become the customers’ most preferred choice by attaining excellence in <br />
// quality and timely completed value-added projects. <br />
// ✓To build long-term relationships with our clients by providing exceptional service <br />
// ✓To continually innovate, develop and adopt state-of-the-art technology in methods <br />
// and materials to enhance productivity and cost effectiveness.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg">
//               <div className="flex items-center mb-4">
//                 <FaAward className="text-blue-600 text-2xl mr-3" />
//                 <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
//               </div>
//               <p className="text-gray-600 leading-relaxed">
// To be the top-most leading Company renowned for Excellence, Quality, 
// Performance and Reliability in Electro Mechanical works in the global market.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Core Values</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FaBusinessTime className="text-blue-600 text-2xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">Displine</h3>
//               <p className="text-gray-600">
//                 We follow proven processes and timelines on every job, showing up on time and finishing what we start.
//               </p>
//             </div>
//                         <div className="text-center">
//               <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FaTools className="text-blue-600 text-2xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">Hard working</h3>
//               <p className="text-gray-600">
//                 We maintain the highest standards in all our services, ensuring quality workmanship 
//                 and reliable results.
//               </p>
//             </div>
//                         <div className="text-center">
//               <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FaBuffer className="text-blue-600 text-2xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">Patriotism</h3>
//               <p className="text-gray-600">
//                 We take pride in serving our community and supporting local growth in everything we build and repair.
//               </p>
//             </div>
//                         <div className="text-center">
//               <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <MdVerifiedUser className="text-blue-600 text-2xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality</h3>
//               <p className="text-gray-600">
//                 Every detail is checked and double-checked, so the work we hand back holds up long after we leave.
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FaHandshake className="text-blue-600 text-2xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">Integrity</h3>
//               <p className="text-gray-600">
//                 We conduct our business with honesty, transparency, and ethical practices in all 
//                 our dealings.
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FaUsers className="text-blue-600 text-2xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">Customer Focus</h3>
//               <p className="text-gray-600">
//                 Our clients are at the heart of everything we do. We prioritize their needs and 
//                 satisfaction above all.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Others</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               {/* <img src="https://i.imgur.com/GtEjCUg.jpg" alt="Team Member" className="w-full h-48 object-cover" /> */}
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Strength</h3>
//                 <p className="text-gray-600">
//                   - Management Experience, <br />
//                   - Owner has several years’ experience in Engineering Field, He is a 
//                        Professional Engineer and fluent in Project Management in Rwanda. <br />
//                   - Quality and niche services provided to our customers is our strength <br />
//                   - Interior Teamwork
//                 </p>
//               </div>
//             </div>
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               {/* <img src="https://i.imgur.com/kLbReMG.jpg" alt="Team Member" className="w-full h-48 object-cover" /> */}
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Opportunity</h3>
//                 <p className="text-gray-600">
//                   ✓
// Technology is rising <br />
// ✓ High speed of Rwanda Economy, Africa in general. <br />
// ✓ Technical Problems still in society is our opportunity <br />
// ✓ Our Subsidiaries and Associates companies <br />
//                 </p>
//               </div>
//             </div>
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               {/* <img src="https://i.imgur.com/5DOdvKr.jpg" alt="Team Member" className="w-full h-48 object-cover" /> */}
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Threats</h3>
//                 <p className="text-gray-600">
//                   ❖ Local competitors <br />
// ❖ Susceptible to economic downturn
//                 </p>
//               </div>
//             </div>
//                         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               {/* <img src="https://i.imgur.com/5DOdvKr.jpg" alt="Team Member" className="w-full h-48 object-cover" /> */}
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Commitment To Quality policy</h3>
//                 <p className="text-gray-600">
//                   • NDINDABAHIZIEM Limited is committed to meeting Customer Requirements through 
// continual improvement of its Quality Management System. <br />
// • NDINDABAHIZIEM Limited shall sustain Organizational Excellence through visionary 
// leadership and innovative efforts
//                 </p>
//               </div>
//             </div>
//                         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               {/* <img src="https://i.imgur.com/5DOdvKr.jpg" alt="Team Member" className="w-full h-48 object-cover" /> */}
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Assurance</h3>
//                 <p className="text-gray-600">
//                   ▪ The Company has a Quality Management System which complies with: <br />
// ▪ All contractual obligations, Client's Specifications and Industry standards. <br />
// ▪ All Statutory Regulations and Codes of Practice. <br />
// ▪ Providing and maintaining good & Clean environment and safe Workplace. <br />
// ▪ Maintaining high level of performance and professionalism by imparting <br />
// training as well as providing adequate resources. <br />
// ▪ Continual improvement in the methods of working. <br />
// ▪ All contractual obligations, Client's Specifications and Industry standards. <br />
//                 </p>
//               </div>
//             </div>
//                         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               {/* <img src="https://i.imgur.com/5DOdvKr.jpg" alt="Team Member" className="w-full h-48 object-cover" /> */}
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Knowledge</h3>
//                 <p className="text-gray-600">
//                   Our continuous learning and adaptation to technology empowers us to be competitive in the 
// market. The knowledge we have from our qualified team enables us to complete the project 
// successfully and on time.
//                 </p>
//               </div>
//             </div>
//                         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               {/* <img src="https://i.imgur.com/5DOdvKr.jpg" alt="Team Member" className="w-full h-48 object-cover" /> */}
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Teamwork</h3>
//                 <p className="text-gray-600">
//                   Our people thrive on the challenge to succeeding in any environment, work on their special 
// skills, are committed to common goals and good team players. We recruit experienced 
// professionals and our aim is to constantly develop and empower our employees and create an 
// environment where achievement is recognized and success is rewarded.
//                 </p>
//               </div>
//             </div>
//                         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               {/* <img src="https://i.imgur.com/5DOdvKr.jpg" alt="Team Member" className="w-full h-48 object-cover" /> */}
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality</h3>
//                 <p className="text-gray-600">
//                   Our commitment to quality is one of the bases for our competitive advantage and customers 
// build their trust on us. Our customers’ satisfaction is one of our prime importance.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }






import React from "react";
import { FaUsers, FaAward, FaHandshake, FaTools, FaShieldAlt } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import {
  GiMuscleUp,
  GiRocket,
  GiCrossedSwords,
} from "react-icons/gi";

const coreValues = [
  {
    icon: FaBusinessTime,
    title: "Discipline",
    desc: "We follow proven processes and timelines on every job, showing up on time and finishing what we start.",
  },
  {
    icon: FaTools,
    title: "Hard Working",
    desc: "We maintain the highest standards in all our services, ensuring quality workmanship and reliable results.",
  },
  {
    icon: FaShieldAlt,
    title: "Patriotism",
    desc: "We take pride in serving our community and supporting local growth in everything we build and repair.",
  },
  {
    icon: MdVerifiedUser,
    title: "Quality",
    desc: "Every detail is checked and double-checked, so the work we hand back holds up long after we leave.",
  },
  {
    icon: FaHandshake,
    title: "Integrity",
    desc: "We conduct our business with honesty, transparency, and ethical practices in all our dealings.",
  },
  {
    icon: FaUsers,
    title: "Customer Focus",
    desc: "Our clients are at the heart of everything we do. We prioritize their needs and satisfaction above all.",
  },
];

const missionPoints = [
  "Obey the rules and regulations guiding all professionals in engineering works, keeping every project safe for the community and environment.",
  "Be a leader in Electro-Mechanical works in the global market.",
  "Provide our clients with the highest quality of service and workmanship.",
  "Become the customers' preferred choice by attaining excellence in quality and timely, value-added projects.",
  "Build long-term relationships with our clients through exceptional service.",
  "Continually innovate, develop and adopt state-of-the-art technology in methods and materials to enhance productivity and cost effectiveness.",
];

const swot = [
  {
    icon: GiMuscleUp,
    title: "Strength",
    items: [
      "Strong management experience.",
      "Owner brings several years of engineering experience as a professional engineer, fluent in project management in Rwanda.",
      "Quality and niche services provided to our customers.",
      "Cohesive internal teamwork.",
    ],
  },
  {
    icon: GiRocket,
    title: "Opportunity",
    items: [
      "Rising technology adoption across the sector.",
      "High speed of economic growth in Rwanda and Africa generally.",
      "Persistent technical problems in society represent opportunity.",
      "Our subsidiaries and associate companies.",
    ],
  },
  {
    icon: GiCrossedSwords,
    title: "Threats",
    items: [
      "Local competitors.",
      "Susceptibility to economic downturn.",
    ],
  },
];

const qualityCommitments = [
  {
    title: "Commitment to Quality Policy",
    items: [
      "NDINDABAHIZIEM Limited is committed to meeting customer requirements through continual improvement of its Quality Management System.",
      "NDINDABAHIZIEM Limited sustains organizational excellence through visionary leadership and innovative effort.",
    ],
  },
  {
    title: "Quality Assurance",
    items: [
      "Our Quality Management System complies with all contractual obligations, client specifications and industry standards.",
      "We comply with all statutory regulations and codes of practice.",
      "We provide and maintain a clean, safe working environment.",
      "We maintain a high level of performance and professionalism through ongoing training and adequate resourcing.",
      "We pursue continual improvement in our methods of working.",
    ],
  },
];

const strengths = [
  {
    title: "Knowledge",
    desc: "Our continuous learning and adaptation to technology keeps us competitive in the market. The knowledge of our qualified team enables us to complete projects successfully and on time.",
  },
  {
    title: "Teamwork",
    desc: "Our people thrive on the challenge of succeeding in any environment. We recruit experienced professionals and constantly develop and empower our employees, creating an environment where achievement is recognized and success is rewarded.",
  },
  {
    title: "Quality",
    desc: "Our commitment to quality is one of the bases for our competitive advantage, and our customers build their trust on us. Customer satisfaction is one of our prime priorities.",
  },
];

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mb-12">
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

export default function About() {
  return (
    <div id="about" className="font-sans">
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
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Purpose, Objectives &amp; Scope
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            NDINDABAHIZIEM Limited was founded by an ownership professional in engineering to
            meet clients' needs through better maintenance and repair of equipment and
            machinery, and through modern construction aligned with Rwanda's masterplan
            purpose. Based in Ndera Sector, Gasabo District, Kigali, the company has operated
            since 2016, delivering reliable maintenance and repair work alongside housing
            typology, electrical installation and housing finance mechanisms to meet demand.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            We seek to improve partnership with other maintenance, repair and construction
            companies to widen access to our services across all segments of the population,
            and to give investors and stakeholders a clear understanding of the market through
            the activities we promote. Our corporate mission is to meet the needs of clients
            through technical excellence and innovative solutions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            NDINDABAHIZIEM Limited also specializes in Mechanical, Electrical and Plumbing
            (MEP) work as one of the leading engineering solution providers and project
            specialists, delivering engineering solutions primarily for electrical and
            electromechanical activities. We are building a substantial reputation through
            end-to-end, turnkey projects — installed complete and ready to operate — across
            Electro-Mechanical works including HVAC, Plumbing &amp; Drainage, Firefighting, and
            Electrical work spanning low- and medium-voltage systems.
          </p>
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
              <ul className="space-y-2">
                {missionPoints.map((point, i) => (
                  <li key={i} className="flex gap-2 text-gray-600 leading-relaxed">
                    <span className="text-blue-600 font-bold shrink-0">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaAward className="text-blue-600 text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the top-most leading company renowned for excellence, quality,
                performance and reliability in Electro-Mechanical works in the global market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading title="Our Core Values" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {coreValues.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SWOT */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Where We Stand"
            title="Strengths, Opportunities & Threats"
            subtitle="An honest look at our position in the market."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {swot.map(({ icon: Icon, title, items }, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 w-11 h-11 rounded-full flex items-center justify-center shrink-0">
                    <Icon className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-gray-600 text-sm leading-relaxed">
                      <span className="text-blue-600 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="How We Work"
            title="Our Quality Commitments"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {qualityCommitments.map(({ title, items }, i) => (
              <div key={i} className="bg-gray-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
                <ul className="space-y-2">
                  {items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-gray-600 text-sm leading-relaxed">
                      <span className="text-blue-600 shrink-0">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Why Clients Choose Us"
            title="What Sets Us Apart"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map(({ title, desc }, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}