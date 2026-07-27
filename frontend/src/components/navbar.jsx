import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isHomeScrolled, setIsHomeScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const pageLinkClass = ({ isActive }) =>
    isActive
      ? 'underline decoration-2 underline-offset-4'
      : 'hover:underline';

  const sectionLinkClass = (sectionId) =>
    location.pathname === '/' && activeSection === sectionId
      ? 'underline decoration-2 underline-offset-4'
      : 'hover:underline';

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 40;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.replaceState(null, '', `/#${sectionId}`);
    }
  };

  const handleSectionClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    scrollToSection(sectionId);
  };

  useEffect(() => {
    if (!isHomePage) {
      setIsHomeScrolled(false);
      return;
    }

    const handleScroll = () => {
      setIsHomeScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    if (typeof window.IntersectionObserver !== 'function') {
      return () => window.removeEventListener('scroll', handleScroll);
    }

    const sectionIds = ['home', 'about', 'services'];
    const sectionElements = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean);

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: 0.2 }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [isHomePage]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full rounded-b-[25px] border-b border-white/20 px-6 py-4 transition-all duration-300 ease-out md:px-8 ${
        isHomePage
          ? isHomeScrolled
            ? 'bg-white text-slate-800 shadow-lg'
            : 'bg-transparent text-white'
          : 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md'
      }`}
    >
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="mr-3 h-8 w-8 rounded" />
          <h1 className={`text-lg font-semibold tracking-wide sm:text-xl ${isHomePage && !isHomeScrolled ? 'text-white' : 'text-inherit'}`}>
            NDINDABAHIZIEM LTD
          </h1>
        </div>

        <nav className="hidden space-x-6 md:flex">
          <ul className="flex items-center space-x-6">
            <li><NavLink to="/" className={({ isActive }) => `${isHomePage && !isHomeScrolled ? 'text-white' : 'text-inherit'} transition-colors duration-300 ${isActive ? 'underline decoration-2 underline-offset-4' : 'hover:text-blue-600'}`} end>Home</NavLink></li>
            <li>
              <button
                type="button"
                className={`text-left transition-colors duration-300 ${isHomePage && !isHomeScrolled ? 'text-white hover:text-blue-200' : 'text-inherit hover:text-blue-600'} ${location.pathname === '/' && activeSection === 'about' ? 'underline decoration-2 underline-offset-4' : ''}`}
                onClick={() => handleSectionClick('about')}
              >
                About
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`text-left transition-colors duration-300 ${isHomePage && !isHomeScrolled ? 'text-white hover:text-blue-200' : 'text-inherit hover:text-blue-600'}`}
                onClick={() => handleSectionClick('services')}
              >
                Services
              </button>
            </li>
            <li><NavLink to="/certificates" className={({ isActive }) => `${isHomePage && !isHomeScrolled ? 'text-white' : 'text-inherit'} transition-colors duration-300 ${isActive ? 'underline decoration-2 underline-offset-4' : 'hover:text-blue-600'}`}>Certification</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => `${isHomePage && !isHomeScrolled ? 'text-white' : 'text-inherit'} transition-colors duration-300 ${isActive ? 'underline decoration-2 underline-offset-4' : 'hover:text-blue-600'}`}>Contact</NavLink></li>
            <li><NavLink to="/faq" className={({ isActive }) => `${isHomePage && !isHomeScrolled ? 'text-white' : 'text-inherit'} transition-colors duration-300 ${isActive ? 'underline decoration-2 underline-offset-4' : 'hover:text-blue-600'}`}>Faq</NavLink></li>
          </ul>
        </nav>

        <button
          className={`rounded p-2 text-2xl transition-colors duration-300 md:hidden ${isHomePage && !isHomeScrolled ? 'text-white' : 'text-inherit'}`}
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <nav className={`mt-4 rounded-xl p-4 shadow-lg md:hidden ${isHomePage && !isHomeScrolled ? 'bg-slate-900/90 text-white' : 'bg-white text-slate-800'}`}>
          <ul className="flex flex-col space-y-4">
            <li><NavLink to="/" className={({ isActive }) => `${isActive ? 'text-blue-600' : ''}`} end onClick={() => setIsOpen(false)}>Home</NavLink></li>
            <li>
              <button
                type="button"
                className="text-left"
                onClick={() => {
                  handleSectionClick('about');
                  setIsOpen(false);
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                type="button"
                className="text-left"
                onClick={() => {
                  handleSectionClick('services');
                  setIsOpen(false);
                }}
              >
                Services
              </button>
            </li>
            <li><NavLink to="/certificates" onClick={() => setIsOpen(false)}>Certification</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
            <li><NavLink to="/faq" onClick={() => setIsOpen(false)}>Faq</NavLink></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;