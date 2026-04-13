import React from "react";
import { FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <div className="font-sans bg-gradient-to-r from-blue-500 to-blue-700 text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16">
        <div className="md:w-1/2">
          {/* <h2 className="text-5xl font-bold leading-tight mb-4">Fremove <br /> Sonadbye Wief</h2> */}
          <p className="text-lg mb-6">NDINDABAHIZIEM Limited: is a domestic private company providing maintenance and 
                                    repairing of refrigerators, freezers, ACs, Cold Room, Rehabilitation of buildings including painting, 
                                    repainting and designing, Installation of CCTV Cameras, 
                                     Monitoring system such as fridge and freezers, Electric power generation, transmission and distribution, Electrical Installation,
                                      Plumbing, Heat and Air-conditioning installation, Advertising Board, Construction of buildings, Repair of machinery, supply and maintain medical equipment and
                                      Other specialized construction activities,</p>
          {/* <button className="bg-white text-blue-700 px-6 py-2 font-semibold rounded shadow hover:bg-gray-100">Clean More</button> */ }
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="/images/image1.jpg" alt="Construction Site" className="w-full rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Services */}
      
    </div>
  );
};

export default Home;