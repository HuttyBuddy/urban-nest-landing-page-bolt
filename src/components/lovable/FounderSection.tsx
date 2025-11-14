const HEADSHOT_SRC = "/assets/Lovable/KevinHuttyHeadshot.png";

export default function FounderSection() {
  return (
    <section id="founder" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <span className="inline-block bg-amber-500 border-2 border-amber-600 rounded-full px-4 py-1 text-sm font-bold text-white shadow-lg mb-4">
            The Mind Behind The Mission
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Meet the Founder
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 font-medium leading-relaxed">
            Urban Nest is guided by a founder who understands both the human side of real estate and the power of scalable technology.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center">
            <img
              className="rounded-full border-8 border-amber-500 shadow-2xl w-64 h-64 sm:w-80 sm:h-80 object-cover"
              src={HEADSHOT_SRC}
              alt="Kevin Hutty - Founder"
              loading="lazy"
            />
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Kevin Hutty</h3>
            <p className="mt-2 text-lg font-semibold text-amber-600">
              Founder, Urban Nest | Realtor® & Team Lead
            </p>
            <div className="mt-4 space-y-4 text-gray-700 font-medium leading-relaxed">
              <p>
                Kevin brings 15 years of public-sector leadership experience together with a proven real estate track record to help agents create authentic, hyper-local marketing.
              </p>
              <p>
                His product vision is rooted in the belief that agents should spend their time serving clients—not fighting content calendars or learning complex tools. Urban Nest was built to make that possible.
              </p>
            </div>

            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/hutty-buddy/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1.5 transition-all duration-300"
              >
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
