import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  const scrollToForm = () => {
    if (typeof window === 'undefined') return;

    const element = document.getElementById('final-cta');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const newUrl = `${window.location.pathname}${window.location.search}#final-cta`;
    window.history.pushState(null, '', newUrl);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    const element = document.getElementById(hash);
    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <Hero onGetStarted={scrollToForm} />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;


