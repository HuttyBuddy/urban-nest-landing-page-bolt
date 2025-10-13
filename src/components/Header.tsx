import { Menu, X } from 'lucide-react';
import { useState } from 'react';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Early Access', href: '#early-access' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-amber-100/70 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <img src="/Urban Nest Logo Large.png" alt="Urban Nest" className="h-10 w-auto" />
          <span className="text-lg font-extrabold text-gray-900">Urban Nest</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-gray-700 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors duration-200 hover:text-amber-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#early-access"
            className="rounded-lg border-2 border-amber-500 px-5 py-2 text-sm font-bold text-amber-600 transition-all duration-200 hover:bg-amber-500 hover:text-white"
          >
            Claim Early Access
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-gray-200 p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-amber-100/70 bg-white px-4 py-4 sm:px-6 lg:hidden">
          <div className="flex flex-col gap-4 text-sm font-semibold text-gray-700">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-amber-50 hover:text-amber-600"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#early-access"
              className="rounded-lg bg-gradient-cta px-3 py-2 text-center text-sm font-bold text-white shadow-md transition-opacity duration-200 hover:opacity-90"
              onClick={() => setOpen(false)}
            >
              Claim Early Access
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
