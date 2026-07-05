import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/pages/home';
import Service from './components/pages/service';
import About from './components/pages/about';
import Certificate from './components/pages/certificates';
import Contact from './components/pages/contact';
import FAQ from './components/pages/faq';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About/>} />
        <Route path="/certificates" element={<Certificate/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faq" element={<FAQ/>} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

