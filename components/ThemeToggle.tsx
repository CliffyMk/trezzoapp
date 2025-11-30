import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  collapsed?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ collapsed = false }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 group w-full hover:bg-slate-50 dark:hover:bg-white/5 focus:outline-none ${collapsed ? 'justify-center' : ''}`}
      aria-label="Toggle Theme"
      title={collapsed ? "Toggle Theme" : ""}
    >
      <div className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gold-500' : 'text-slate-400 group-hover:text-gold-500'}`}>
        {theme === 'dark' ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
      </div>
      
      {!collapsed && (
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 tracking-wide">
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;