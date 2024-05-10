import React from 'react';
import Hero from './components/Hero';
import Designs from './components/Designs';
import Cta from './components/Cta';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Questions from './components/Questions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const Homepage = () => {
  return (
    <main>
      <div id="home">
        <Hero />
      </div>
      <Designs />
      <Cta />
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <Testimonials />
      <div id="pricing">
        <Pricing />
      </div>
      <Questions />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default Homepage;
