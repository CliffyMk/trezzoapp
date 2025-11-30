import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  CreditCard, Plane, Hotel, TrendingUp, Umbrella, Laptop,
  PieChart, ShieldCheck, Gem, Globe, ChevronLeft, ChevronRight,
  X, Search, Briefcase, Compass
} from 'lucide-react';
import { CATEGORIES } from '../constants';
import ThemeToggle from './ThemeToggle';
import { Category } from '../types';

const iconMap: { [key: string]: React.ElementType } = {
  CreditCard, Plane, Hotel, TrendingUp, Umbrella, Laptop,
  PieChart, ShieldCheck, Gem, Globe
};

interface NavItemProps {
  category: Category;
  collapsed: boolean;
  setMobileOpen: (open: boolean) => void;
}

const NavItem: React.FC<NavItemProps> = ({ category, collapsed, setMobileOpen }) => {
  const Icon = iconMap[category.iconName] || Globe;
  
  return (
    <NavLink
      to={`/category/${category.id}`}
      onClick={() => setMobileOpen(false)}
      className={({ isActive }) => `
        flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 group relative
        ${collapsed ? 'justify-center px-2' : ''}
        ${isActive ? 'bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'}
      `}
    >
      {({ isActive }) => (
        <>
          {/* Active Indicator (Left Bar) */}
          {isActive && !collapsed && (
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gold-500 rounded-r-sm shadow-[0_0_8px_rgba(197,157,46,0.4)]"></span>
          )}
          
          <Icon 
            size={collapsed ? 20 : 18} 
            strokeWidth={isActive ? 2 : 1.5}
            className={`shrink-0 transition-colors duration-200 ${isActive ? 'text-gold-500' : 'group-hover:text-gold-500'}`} 
          />
          
          {!collapsed && (
            <span className={`text-[13px] font-medium tracking-wide truncate transition-all`}>
              {category.name}
            </span>
          )}

          {/* Hover Tooltip for Collapsed State */}
          {collapsed && (
            <div className="absolute left-14 z-50 bg-[#0f0f0f] text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-2 rounded shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
              {category.name}
            </div>
          )}
        </>
      )}
    </NavLink>
  );
};

interface SidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ mobileOpen, setMobileOpen }) => {
  const [collapsed, setCollapsed] = useState(false);

  // Group Categories for better structure
  const wealthCategories = CATEGORIES.filter(c => 
    ['credit-cards', 'investing-basics', 'retirement', 'budgeting', 'insurance', 'global-economy'].includes(c.id)
  );
  const wanderCategories = CATEGORIES.filter(c => 
    ['airline-miles', 'hotel-status', 'luxury-travel', 'digital-nomad'].includes(c.id)
  );

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-500 ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      />

      <aside 
        className={`fixed top-0 left-0 z-50 h-screen bg-white dark:bg-[#050505] border-r border-slate-200 dark:border-white/5 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] flex flex-col
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          ${collapsed ? 'w-20' : 'w-72'}
        `}
      >
        {/* Header */}
        <div className={`h-20 flex items-center ${collapsed ? 'justify-center' : 'justify-between px-6'} border-b border-slate-100 dark:border-white/5 shrink-0`}>
          <Link 
            to="/" 
            onClick={() => setMobileOpen(false)}
            className="group"
          >
            {collapsed ? (
               <span className="font-serif font-bold text-2xl text-gold-500">T</span>
            ) : (
               <span className="font-serif font-medium text-2xl tracking-widest text-slate-900 dark:text-white group-hover:text-gold-500 transition-colors">
                TRE<span className="text-gold-500 italic">ZZO</span>
              </span>
            )}
          </Link>
          
          <button 
            onClick={() => setMobileOpen(false)}
            className="md:hidden p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white"
          >
            <X size={20} />
          </button>

          {!collapsed && (
            <button 
              onClick={() => setCollapsed(true)}
              className="hidden md:flex p-1.5 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
          )}
        </div>
        
        {/* Floating Expand Button (Visible when collapsed) */}
        {collapsed && (
           <button 
              onClick={() => setCollapsed(false)}
              className="hidden md:flex absolute top-7 -right-3 z-50 p-1 bg-white dark:bg-[#0A0A0A] border border-slate-200 dark:border-white/10 text-gold-500 rounded-full shadow-md hover:scale-110 transition-transform"
            >
              <ChevronRight size={12} strokeWidth={2.5} />
            </button>
        )}

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hide py-6 px-3 space-y-8">
           
           {/* Search Input */}
           <div className={`transition-all duration-300 ${collapsed ? 'px-0 flex justify-center' : ''}`}>
             {!collapsed ? (
               <div className="relative group">
                 <input 
                   type="text" 
                   placeholder="Search..." 
                   className="w-full bg-slate-50 dark:bg-[#0A0A0A] border border-slate-200 dark:border-white/10 rounded-md py-2.5 pl-9 pr-4 text-xs font-medium text-slate-900 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all"
                 />
                 <Search className="absolute left-3 top-2.5 text-slate-400 group-focus-within:text-gold-500 transition-colors" size={14} />
               </div>
             ) : (
                <button className="p-2.5 rounded-md hover:bg-slate-100 dark:hover:bg-white/5 text-slate-400 hover:text-gold-500 transition-colors" title="Search">
                   <Search size={18} strokeWidth={2} />
                </button>
             )}
           </div>

           {/* Navigation Group: Wealth */}
           <div>
             {!collapsed && (
               <h3 className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400/80 dark:text-slate-600 mb-3 flex items-center gap-2">
                 <Briefcase size={10} className="text-gold-600/70" /> Wealth
               </h3>
             )}
             <div className="space-y-1">
               {wealthCategories.map(cat => <NavItem key={cat.id} category={cat} collapsed={collapsed} setMobileOpen={setMobileOpen} />)}
             </div>
           </div>

           {/* Navigation Group: Wander */}
           <div>
             {!collapsed && (
               <h3 className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400/80 dark:text-slate-600 mb-3 flex items-center gap-2">
                 <Compass size={10} className="text-gold-600/70" /> Wander
               </h3>
             )}
             <div className="space-y-1">
               {wanderCategories.map(cat => <NavItem key={cat.id} category={cat} collapsed={collapsed} setMobileOpen={setMobileOpen} />)}
             </div>
           </div>
        </div>

        {/* Footer / Theme Toggle */}
        <div className="p-4 border-t border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-[#080808]">
          <ThemeToggle collapsed={collapsed} />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;