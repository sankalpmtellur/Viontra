import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Booking } from './sections/Booking';
import { Tracking } from './sections/Tracking';
import { Partners } from './sections/Partners';
import { Contact } from './sections/Contact';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [trackingNumber, setTrackingNumber] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
  };

  const handleTrack = (number: string) => {
    setTrackingNumber(number);
    setCurrentSection('tracking');
  };

  const handleBooking = () => {
    setCurrentSection('booking');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentSection={currentSection} onNavigate={handleNavigate} />

      <main className="pt-20">
        {currentSection === 'home' && (
          <Hero onBooking={handleBooking} onTrack={handleTrack} />
        )}
        {currentSection === 'about' && <About />}
        {currentSection === 'services' && <Services />}
        {currentSection === 'booking' && <Booking />}
        {currentSection === 'tracking' && <Tracking initialTrackingNumber={trackingNumber} />}
        {currentSection === 'partners' && <Partners />}
        {currentSection === 'contact' && <Contact />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
