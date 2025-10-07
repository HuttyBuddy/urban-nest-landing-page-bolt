export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-charcoal via-charcoal to-gray-800 border-b border-gold/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src="/image.png"
              alt="Urban Nest Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold text-white">
              Urban Nest
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
