import React from 'react';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from '../../components/HomePage/Hero';
import About from '../../components/HomePage/About';
import Features from '../../components/HomePage/Features';
import Testimonials from '../../components/HomePage/Testimonials';
import CtaSection from '../../components/HomePage/CtaSection';
import Footer from '../../components/HomePage/Footer';
const Home = () => {
    // animate on scroll initialization
    Aos.init({
      duration: 400,
      offset: 0,
    });
    return (
      <div className='overflow-hidden'>
        <Hero />
        <About />
        <Features />
        
        
        <Footer />
      </div>
    );
  };
  
  export default Home;
  