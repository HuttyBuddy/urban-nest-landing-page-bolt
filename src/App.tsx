import { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import EarlyAccessForm from './components/EarlyAccessForm';
import Footer from './components/Footer';

function App() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-100 text-gray-800">
      <Header />
      <Hero onGetStarted={scrollToForm} />
      <Features />
      <SocialProof />
      <HowItWorks />
      <FAQ />
      <div ref={formRef}>
        <EarlyAccessForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
