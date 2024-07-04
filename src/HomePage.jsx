import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="hero">
        <div className="hero-text">
          <h1>Welcome to Muay Turkish Aviation</h1>
          <p>Experience the future of air travel</p>
          <div className="hero-buttons">
            <a href="booking" className="btn primary-btn">Book a Flight</a>
            <button className="btn secondary-btn">Learn More</button>
          </div>
        </div>
        <div className="scroll-indicator">
          <span></span>
        </div>
      </div>
      <section id="features" className="features">
        <h2>Our Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <i className="feature-icon fas fa-plane"></i>
            <h3>Modern Fleet</h3>
            <p>Experience state-of-the-art aircraft with unparalleled comfort and safety.</p>
          </div>
          <div className="feature-card">
            <i className="feature-icon fas fa-concierge-bell"></i>
            <h3>Premium Service</h3>
            <p>Enjoy top-notch service from check-in to landing.</p>
          </div>
          <div className="feature-card">
            <i className="feature-icon fas fa-globe"></i>
            <h3>Global Destinations</h3>
            <p>Fly to over 100 destinations worldwide with ease.</p>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>Muay Turkish Aviation is committed to providing the best air travel experience with a focus on innovation, safety, and customer satisfaction.</p>
      </section>
      <section id="contact" className="contact">
        <h2>Price</h2>
        <ul>
            <li><p>Adults 150.-</p></li>
            <li><p>Children 120.-</p></li>
        </ul>
        
        
      </section>
      
    </div>
  );
};

export default HomePage;
