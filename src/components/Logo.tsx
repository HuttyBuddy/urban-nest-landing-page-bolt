import { Home } from 'lucide-react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = '', showTagline = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-cta rounded-lg flex items-center justify-center shadow-md">
          <Home className="w-6 h-6 text-white" strokeWidth={2.5} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900 leading-tight tracking-tight">
          Urban Nest
        </span>
        {showTagline && (
          <span className="text-[8px] font-semibold text-gray-600 uppercase tracking-wider leading-tight">
            AI Marketing for Agents
          </span>
        )}
      </div>
    </div>
  );
}
