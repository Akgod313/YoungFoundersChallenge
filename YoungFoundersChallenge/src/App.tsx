import React, { useState } from 'react';
import './App.css';
// Import your new logo here!
import logoImg from './assets/solaris-logo.png'; 

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="site-container">
      {/* Header & Navigation */}
      <header className="navbar">
        <div className="logo">
          <img src={logoImg} alt="Solaris Logo" className="logo-img" />
        </div>
        
        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? '✖' : '☰'}
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
          <a href="#solutions" onClick={() => setIsMenuOpen(false)}>Solutions</a>
          <a href="#impact" onClick={() => setIsMenuOpen(false)}>Impact</a>
          <a href="#contact" className="btn-primary" onClick={() => setIsMenuOpen(false)}>Get Started</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Powering Tomorrow with Clean Energy</h1>
          <p>
            Solaris delivers reliable, sustainable, and scalable renewable energy solutions 
            designed to transition homes and businesses toward a zero-carbon future.
          </p>
          <div className="hero-buttons">
            <a href="#solutions" className="btn-primary">Explore Solutions</a>
            <a href="#contact" className="btn-secondary">Request a Quote</a>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="section solutions">
        <div className="section-header">
          <h2>Our Green Energy Solutions</h2>
          <p className="subtitle">Cutting-edge technology for a sustainable tomorrow.</p>
        </div>
        
        <div className="card-grid">
          <div className="card">
            <div className="card-icon">⚡</div>
            <h3>Solar Power Systems</h3>
            <p>High-efficiency photovoltaic installations tailored for residential and commercial spaces.</p>
          </div>
          <div className="card">
            <div className="card-icon">🔋</div>
            <h3>Battery Storage</h3>
            <p>Advanced energy storage systems ensuring 24/7 power availability and grid independence.</p>
          </div>
          <div className="card">
            <div className="card-icon">🌱</div>
            <h3>Clean Tech Consulting</h3>
            <p>Tailored sustainability strategies and in-depth energy audits to maximize your efficiency.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="about-content">
          <h2>Why Choose Solaris?</h2>
          <p>
            At Solaris, we believe sustainable energy should be accessible, seamless, and efficient. 
            Our team works directly with communities and commercial leaders to replace traditional grid reliance 
            with modern, renewable power infrastructure. We handle everything from permits to installation, ensuring a smooth transition to green energy.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logoImg} alt="Solaris Logo" className="footer-logo" />
            <p>Accelerating the global transition to renewable energy.</p>
          </div>
          <div className="footer-links">
            <h4>Contact Us</h4>
            <p>Email: info@solarisgreen.com</p>
            <p>Phone: +1 (800) 555-SOLAR</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Solaris Energy Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}