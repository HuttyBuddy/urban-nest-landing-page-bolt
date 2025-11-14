export default function FinalCTA() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="final-cta" className="py-20 sm:py-28 lg:py-32 bg-charcoal text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Elevate Your Marketing?
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          Spend less time marketing and more time closing deals. Get started with Urban Nest today
          and see the difference AI can make.
        </p>
        <button
          onClick={scrollToTop}
          className="w-full sm:w-auto bg-gradient-cta text-white font-bold px-8 py-4 rounded-2xl shadow-bolder hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 text-lg"
        >
          Sign Up Free and Start Now
        </button>
      </div>
    </section>
  );
}
