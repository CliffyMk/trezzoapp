import React from 'react';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 z-[100] bg-dark-900 flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
    >
      <div className="relative">
        {/* Logo Text */}
        <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tighter text-white mb-2 animate-fade-in-up">
          TRE<span className="italic text-gold-500">ZZO</span>
        </h1>

        {/* Loading Progress Line */}
        <div className="w-full h-[2px] bg-white/[0.08] mt-4 rounded-full overflow-hidden">
          <div className="h-full bg-gold-500 animate-loader-width shadow-[0_0_15px_rgba(201,162,39,0.8)]"></div>
        </div>
      </div>

      {/* Tagline */}
      <div className="mt-8 flex items-center gap-3 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <span className="h-px w-8 bg-slate-700"></span>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 animate-pulse">
          Establishing Secure Connection
        </p>
        <span className="h-px w-8 bg-slate-700"></span>
      </div>
    </div>
  );
};

export default Loader;