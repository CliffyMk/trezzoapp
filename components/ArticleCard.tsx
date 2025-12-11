import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import { Clock, Calendar, ArrowUpRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  categoryId: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, categoryId }) => {
  return (
    <Link 
      to={`/category/${categoryId}/article/${article.id}`}
      className="group block h-full"
    >
      <div className="h-full bg-white dark:bg-[#0A0A0A] rounded-sm overflow-hidden transition-all duration-500 border border-slate-200 dark:border-white/5 group-hover:border-gold-500/30 flex flex-col relative">
        
        {/* Image Section (compact height) */}
        <div className="relative h-32 overflow-hidden">
          {/* Dark gradient overlay for text readability on image if needed, or just mood */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-40"></div>
          
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          
          <div className="absolute top-0 right-0 z-20 p-1.5">
             {article.tags.slice(0, 1).map(tag => (
               <span key={tag} className="px-1.5 py-0.5 bg-black/50 backdrop-blur-md text-gold-400 text-[9px] font-bold uppercase tracking-widest border border-gold-500/20">
                 {tag}
               </span>
             ))}
          </div>
        </div>

        {/* Content Section (compact spacing) */}
        <div className="p-3.5 flex flex-col flex-grow relative">
          <div className="flex items-center gap-2 text-[9px] font-medium text-slate-400 mb-2.5 uppercase tracking-widest">
            <span className="flex items-center gap-1.5"><span className="w-0.5 h-0.5 rounded-full bg-gold-500"></span> {article.date}</span>
            <span className="text-slate-600 dark:text-slate-600">|</span>
            <span>{article.readTime} Read</span>
          </div>
          
          <h3 className="text-lg font-serif font-medium mb-2 text-slate-900 dark:text-slate-100 leading-snug group-hover:text-gold-400 transition-colors duration-300">
            {article.title}
          </h3>
          
          <p className="text-slate-600 dark:text-slate-400 text-xs mb-4 line-clamp-2 flex-grow leading-tight font-normal">
            {article.excerpt}
          </p>
          
          <div className="mt-auto pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors duration-300">Read Analysis</span>
            <ArrowUpRight size={16} className="text-slate-500 group-hover:text-gold-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;