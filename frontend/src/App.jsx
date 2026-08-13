import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/pages/home';
import Certificate from './components/pages/certificates';
import Contact from './components/pages/contact';
import FAQ from './components/pages/faq';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

