interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative bg-gradient-main pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-charcoal tracking-tight leading-tight">
              Stop Guessing. Start Closing.
              <span className="block mt-2">AI Marketing for Top Agents.</span>
            </h1>
            <p className="mt-6 text-lg text-text-charcoal max-w-xl mx-auto lg:mx-0">
              Built by a real estate agent for real estate agents, Urban Nest is your all-in-one AI
              assistant to create stunning property listings, hyper-local blog posts, and
              market-ready images in minutes, not hours. Reclaim your time and dominate your market.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onGetStarted}
                className="w-full sm:w-auto bg-gradient-cta text-white font-bold px-8 py-4 rounded-2xl shadow-bold hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 text-lg"
              >
                Start Creating for Free
              </button>
            </div>
            <p className="mt-4 text-sm text-text-charcoal">
              No credit card required. Join 1,000+ agents growing their business.
            </p>
          </div>
          <div className="relative">
            <img
              src="/glimpse/step1-dashboard.png"
              alt="Urban Nest Dashboard"
              className="rounded-2xl shadow-bolder"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
