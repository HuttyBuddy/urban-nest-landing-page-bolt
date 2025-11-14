import { useEffect } from 'react';
import FounderSection from './components/lovable/FounderSection';
import RoadmapSection from './components/lovable/RoadmapSection';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import EarlyAccessForm from './components/EarlyAccessForm';
import Footer from './components/Footer';

function App() {
  const scrollToForm = () => {
    if (typeof window === 'undefined') return;

    const element = document.getElementById('early-access');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const newUrl = `${window.location.pathname}${window.location.search}#early-access`;
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
      <SocialProof />
      <FounderSection />
      <RoadmapSection />
      <FAQ />
      <EarlyAccessForm />
      <Footer />
    </div>
  );
}

export default App;


