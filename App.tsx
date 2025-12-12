import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useParams, Link, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import ArticleCard from './components/ArticleCard';
import Loader from './components/Loader';
import { CATEGORIES } from './constants';

// Component to handle scroll-to-top on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
import { 
  ArrowLeft, Clock, Calendar, Tag, Share2, Globe, Sparkles, TrendingUp, ShieldCheck, 
  ArrowRight, ArrowUpRight, Award, Users, Home,
  CreditCard, Plane, Hotel, Umbrella, Laptop, PieChart, Gem
} from 'lucide-react';

// Icon Mapping
const iconMap: { [key: string]: React.ElementType } = {
  CreditCard, Plane, Hotel, TrendingUp, Umbrella, Laptop,
  PieChart, ShieldCheck, Gem, Globe
};

// --- Page Components ---

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = CATEGORIES.find(c => c.id === categoryId);

  if (!category) {
    return <div className="text-center py-20 text-xl text-slate-500 font-serif italic">Category not available</div>;
  }

  const Icon = iconMap[category.iconName] || Globe;

  return (
    <div className="animate-fade-in w-full">
      {/* Breadcrumb / Page History */}
      <nav className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-12">
        <Link to="/" className="hover:text-gold-500 transition-colors flex items-center gap-2 group">
           <Home size={14} className="mb-0.5 group-hover:text-gold-500 transition-colors" /> 
           <span className="hidden sm:inline">Home</span>
        </Link>
        <span className="text-slate-300 dark:text-slate-700">/</span>
        <span className="text-gold-500">{category.name}</span>
      </nav>

      {/* Header Section */}
      <div className="mb-16 md:mb-24 relative">
        <div className="absolute top-0 left-0 w-20 h-1 bg-gold-500 mb-6"></div>
        
        <div className="pt-8 flex flex-col md:flex-row gap-8 items-start md:items-end justify-between">
            <div className="max-w-3xl relative z-10">
                <span className="text-gold-500 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Editorial Collection</span>
                <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6 text-slate-900 dark:text-white tracking-tight leading-none">
                {category.name}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light border-l border-slate-200 dark:border-white/10 pl-6 ml-1">
                {category.description}
                </p>
            </div>
            
            {/* Large Category Icon (Watermark Style) */}
            <div className="hidden md:block text-slate-200 dark:text-white/5 transform translate-y-4">
                <Icon size={140} strokeWidth={0.5} />
            </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {category.articles.map(article => (
          <ArticleCard key={article.id} article={article} categoryId={category.id} />
        ))}
      </div>
    </div>
  );
};

const ArticlePage = () => {
  const { categoryId, articleId } = useParams();
  const category = CATEGORIES.find(c => c.id === categoryId);
  const article = category?.articles.find(a => a.id === articleId);

  if (!article || !category) {
    return <div className="text-center py-20 text-xl text-slate-500">Article not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
      <nav className="mb-12 flex items-center justify-between">
        <button 
          onClick={() => window.history.back()} 
          className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all">
             <ArrowLeft size={14} /> 
          </span>
          Back to {category.name}
        </button>
      </nav>

      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400 mb-8 font-medium uppercase tracking-widest">
          <span className="text-gold-600 dark:text-gold-500">
            {category.name}
          </span>
          <span className="text-slate-300 dark:text-slate-700">/</span>
          <span className="flex items-center gap-2">{article.date}</span>
          <span className="text-slate-300 dark:text-slate-700">/</span>
          <span className="flex items-center gap-2">{article.readTime} read</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif font-medium text-slate-900 dark:text-white mb-10 leading-[1.1]">
          {article.title}
        </h1>

        <div className="w-full h-[500px] overflow-hidden mb-12 relative">
           <div className="absolute inset-0 border border-white/10 z-10"></div>
           <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
        </div>
      </header>

      <article className="prose prose-lg dark:prose-invert prose-slate max-w-none 
        prose-headings:font-serif prose-headings:font-medium prose-headings:text-slate-900 dark:prose-headings:text-white 
        prose-p:font-light prose-p:leading-8 prose-p:text-slate-600 dark:prose-p:text-slate-300
        prose-a:text-gold-600 dark:prose-a:text-gold-500 hover:prose-a:text-gold-400 
        prose-blockquote:border-l-gold-500 prose-blockquote:text-xl prose-blockquote:font-serif prose-blockquote:italic
        prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-medium
        prose-li:marker:text-gold-500">
        
        <div className="text-2xl md:text-3xl font-serif text-slate-800 dark:text-slate-200 mb-12 leading-relaxed font-normal">
          {article.excerpt}
        </div>
        
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>

      <div className="my-16 h-px bg-slate-200 dark:bg-white/10"></div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className="flex flex-wrap gap-2">
          {article.tags.map(tag => (
            <span key={tag} className="px-4 py-1.5 bg-transparent border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-widest hover:border-gold-500 hover:text-gold-500 transition-colors cursor-default">
              #{tag}
            </span>
          ))}
        </div>
        <button className="flex items-center gap-3 text-slate-500 hover:text-gold-500 transition-colors text-xs font-bold uppercase tracking-widest">
          <Share2 size={16} /> Share Article
        </button>
      </div>
    </div>
  );
};

const HomePage = () => {
  // Select featured content for the homepage
  const featuredArticle = CATEGORIES.find(c => c.id === 'luxury-travel')?.articles[0];
  const featuredCategory = CATEGORIES.find(c => c.id === 'luxury-travel');

  const latestArticles = [
    { cat: CATEGORIES.find(c => c.id === 'credit-cards'), art: CATEGORIES.find(c => c.id === 'credit-cards')?.articles[0] },
    { cat: CATEGORIES.find(c => c.id === 'investing-basics'), art: CATEGORIES.find(c => c.id === 'investing-basics')?.articles[0] },
    { cat: CATEGORIES.find(c => c.id === 'global-economy'), art: CATEGORIES.find(c => c.id === 'global-economy')?.articles[0] },
  ].filter(item => item.cat && item.art);

  return (
    <div className="flex flex-col w-full animate-fade-in">
      
      {/* Masthead */}
      <div className="flex flex-col items-center justify-center pt-12 pb-20 md:pb-28 text-center border-b border-slate-200 dark:border-white/5 mb-16">
        <div className="mb-6">
          <span className="inline-block py-1.5 px-4 border border-gold-500/30 rounded-full bg-gold-500/5 text-gold-500 text-[10px] font-bold uppercase tracking-[0.25em]">
             Premier Financial & Travel Insight
          </span>
        </div>
        
        <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-serif font-medium text-slate-900 dark:text-white mb-6 tracking-tighter leading-[0.8]">
          TRE<span className="italic text-gold-500">ZZO</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-light font-serif italic">
          "The definitive guide to maximizing wealth and experiencing the world in style."
        </p>
      </div>

      {/* Featured Story Section */}
      {featuredArticle && featuredCategory && (
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500 flex items-center gap-2">
              <Sparkles size={14} /> Editor's Choice
            </h2>
            <Link to={`/category/${featuredCategory.id}`} className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">View Category</Link>
          </div>

          <Link to={`/category/${featuredCategory.id}/article/${featuredArticle.id}`} className="group relative block w-full h-[60vh] min-h-[500px] overflow-hidden rounded-[2px]">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 opacity-90"></div>
            
            <img 
              src={featuredArticle.imageUrl} 
              alt={featuredArticle.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />
            
            <div className="absolute bottom-0 left-0 z-20 p-8 md:p-16 max-w-4xl">
              <span className="inline-block px-3 py-1 bg-gold-500 text-black text-[10px] font-bold uppercase tracking-widest mb-6">
                Featured Analysis
              </span>
              <h3 className="text-4xl md:text-6xl font-serif font-medium text-white mb-6 leading-tight group-hover:text-gold-200 transition-colors">
                {featuredArticle.title}
              </h3>
              <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed mb-8 max-w-2xl line-clamp-2">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                Read Full Story <ArrowUpRight size={16} className="text-gold-500" />
              </div>
            </div>
          </Link>
        </section>
      )}
      
      {/* Latest Intelligence Grid */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-12 border-b border-slate-200 dark:border-white/5 pb-4">
           <h2 className="text-2xl font-serif font-medium text-slate-900 dark:text-white">Latest Intelligence</h2>
           <div className="h-px flex-1 bg-slate-200 dark:bg-white/5"></div>
           <Link to="/category/credit-cards" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-gold-500 transition-colors">View All</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {latestArticles.map((item, idx) => (
             item.art && item.cat ? (
              <ArticleCard key={idx} article={item.art} categoryId={item.cat.id} />
             ) : null
          ))}
        </div>
      </section>

      {/* Trust & Philosophy Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 bg-white dark:bg-[#0A0A0A] p-10 md:p-16 border border-slate-200 dark:border-white/5 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-6 flex items-center gap-2">
            <ShieldCheck size={16} /> Why Trust Trezzo?
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 dark:text-white mb-6 leading-tight">
            Independent. Analytical. <br/><span className="italic text-gold-500">Uncompromising.</span>
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-8">
            In an era of sponsored content and fleeting trends, Trezzo stands apart. Our team of financial analysts and travel strategists dissect the fine print so you don't have to. We don't just report the news; we calculate the ROI of your lifestyle.
          </p>
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-gold-500">
                  <TrendingUp size={18} />
                </div>
                <div>
                  <h4 className="font-serif font-medium text-slate-900 dark:text-white">Data-Driven Strategy</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Mathematical approach to points & miles</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-gold-500">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="font-serif font-medium text-slate-900 dark:text-white">Unbiased Reviews</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">No paid placements, ever.</p>
                </div>
             </div>
          </div>
        </div>
        
        <div className="relative h-full min-h-[300px] border border-slate-200 dark:border-white/10 p-2">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 grayscale"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
           <div className="absolute bottom-8 left-8 right-8">
             <p className="font-serif italic text-xl text-white mb-4">
               "Trezzo has completely changed how I view my assets and my travel. It's not just a blog; it's a blueprint for a better life."
             </p>
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-gold-500"></div>
               <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Jonathan S., Wealth Manager</span>
             </div>
           </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="text-center py-20 border-t border-slate-200 dark:border-white/5">
        <Users size={32} className="mx-auto text-gold-500 mb-6" />
        <h2 className="text-3xl md:text-5xl font-serif font-medium text-slate-900 dark:text-white mb-6">
          Join the <span className="italic">Inner Circle</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-10 font-light">
          Get weekly briefings on credit card strategies, award chart devaluations, and investment opportunities before the masses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 px-6 py-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:border-gold-500 focus:outline-none transition-colors rounded-sm"
          />
          <button className="px-8 py-4 bg-gold-500 text-black font-bold uppercase tracking-widest hover:bg-gold-400 transition-colors rounded-sm">
            Subscribe
          </button>
        </div>
        <p className="text-[10px] text-slate-500 mt-4 uppercase tracking-widest">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </section>

    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Wait for window load (all assets)
    // 2. Minimum timer for branding animation (2s)
    
    const minLoadTime = 2000;
    const startTime = Date.now();

    const finishLoading = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minLoadTime - elapsed);

      setTimeout(() => {
        setIsLoading(false);
      }, remaining);
    };

    if (document.readyState === 'complete') {
      finishLoading();
    } else {
      window.addEventListener('load', finishLoading);
      return () => window.removeEventListener('load', finishLoading);
    }
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      
      {/* 
        The main app content is always rendered in the background to ensure it's ready.
        We fade it in as the loader fades out.
      */}
      <div className={`transition-opacity duration-1000 delay-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="category/:categoryId" element={<CategoryPage />} />
              <Route path="category/:categoryId/article/:articleId" element={<ArticlePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;