import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';

const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-slate-100 font-sans selection:bg-gold-500/30 selection:text-gold-200 overflow-x-hidden">
      
      {/* Subtle Background Glow for Premium feel */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-900/5 dark:bg-gold-500/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-slate-200/20 dark:bg-blue-900/5 blur-[100px]"></div>
      </div>

      {/* Sidebar Navigation */}
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* Main Content Area */}
      <div className="relative z-10 md:pl-24 lg:pl-80 transition-all duration-500 min-h-screen flex flex-col">
        
        {/* Mobile Header */}
        <div className="md:hidden sticky top-0 z-30 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5 px-6 h-16 flex items-center justify-between">
           <div className="flex items-center gap-4">
             <button 
                onClick={() => setMobileOpen(true)}
                className="text-slate-600 dark:text-slate-400 hover:text-gold-500 transition-colors"
              >
                <Menu size={24} />
              </button>
              <span className="font-serif font-medium text-xl tracking-widest text-slate-900 dark:text-white">
                TRE<span className="text-gold-500 italic">ZZO</span>
              </span>
           </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-12 lg:p-16 max-w-screen-2xl mx-auto w-full">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="py-10 px-8 border-t border-slate-200 dark:border-white/5 text-center text-slate-400 dark:text-slate-600 text-xs tracking-widest font-medium uppercase">
          &copy; {new Date().getFullYear()} Trezzo Financial. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Layout;