
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutPage from './about';
import ServicePage from './service';

const Home = () => {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - 40;
    window.scrollTo({ top, behavior: 'smooth' });
    window.history.replaceState(null, '', `/#${sectionId}`);
  };

  useEffect(() => {
    const sectionToScroll = location.state?.scrollTo;
    if (sectionToScroll && ['about', 'services'].includes(sectionToScroll)) {
      const timer = window.setTimeout(() => scrollToSection(sectionToScroll), 150);
      return () => window.clearTimeout(timer);
    }

    const hash = window.location.hash.replace('#', '');
    if (hash && ['about', 'services'].includes(hash)) {
      const timer = window.setTimeout(() => scrollToSection(hash), 150);
      return () => window.clearTimeout(timer);
    }
  }, [location.pathname, location.state]);

  return (
    <div className="font-sans bg-gradient-to-r from-blue-500 to-blue-700 text-white min-h-screen">
      <section
        id="home"
        className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-cover bg-center bg-no-repeat px-6 py-16 sm:px-10 md:flex-row md:px-12 lg:px-16"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('/images/image1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="relative z-10 flex w-full items-center md:w-1/2">
          <div className="max-w-2xl animate-[fadeIn_1s_ease-out]">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-200">
              Trusted Engineering & Construction Partner
            </p>
            <h1 className="mb-5 text-4xl font-black leading-tight tracking-[0.02em] text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
              Building Reliable Solutions With Professional Excellence
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-100/95 sm:text-xl">
              NDINDABAHIZIEM Limited is a domestic private company providing maintenance and repairing of refrigerators, freezers, ACs, Cold Room, rehabilitation of buildings including painting and repainting, installation of CCTV cameras, electrical installation, plumbing, HVAC systems, construction works, machinery repair, medical equipment supply, and other specialized construction activities.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#about"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
              >
                Learn More
              </a>
              <a
                href="/contact"
                className="rounded-full border border-white/70 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="relative z-10 mt-8 md:mt-0 md:w-1/2" />
      </section>

      <div className="bg-white text-gray-800">
        <AboutPage />
      </div>

      <div className="bg-white text-gray-800">
        <ServicePage />
      </div>
    </div>
  );
};

export default Home;