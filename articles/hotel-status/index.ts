import { Article } from '../../types';

const generateContent = (topic: string) => `
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Introduction to ${topic}</h3>
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    In today's fast-paced world, understanding ${topic} is crucial for financial freedom and a fulfilling lifestyle.
    Whether you are a seasoned expert or just starting out, mastering the nuances of this subject can open doors to new opportunities.
  </p>
  
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Key Takeaways</h3>
  <div class="mb-6 p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-xl border border-blue-200/50 dark:border-blue-500/30 shadow-md dark:shadow-lg">
    <ul class="list-disc pl-5 space-y-3">
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Comprehensive analysis of current market trends.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Strategic planning for long-term success.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Risk management and mitigation strategies.</li>
    </ul>
  </div>
  
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    By implementing these strategies, you can optimize your approach to ${topic}. Remember, consistency is key.
    Stay informed, stay agile, and keep exploring new horizons.
  </p>
  
  <div class="my-6 p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border border-indigo-200/50 dark:border-indigo-500/30 shadow-md dark:shadow-lg">
    <p class="italic text-slate-700 dark:text-slate-300">"The journey of a thousand miles begins with a single step." - Lao Tzu</p>
  </div>
  
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
    Continue reading our detailed guides to dive deeper into specific aspects of ${topic}. We update our content regularly to ensure you have the latest information at your fingertips.
  </p>
`;

import { accorGuideContent } from './accor-guide';
import { clubItcGuideContent } from './club-itc-guide';
import { ihclGuideContent } from './ihcl-guide';

export const hotelStatusArticles: Article[] = [
  {
    id: 'accor-ultimate-guide',
    title: 'ALL Accor: The Complete Indian Guide',
    excerpt: 'Your ultimate guide to Accor Live Limitless. From 50% dining discounts to free nights at Raffles, master the second-largest hotel chain in the world.',
    content: accorGuideContent,
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
    date: 'Dec 25, 2025',
    readTime: '20 min',
    tags: ['Hotels', 'Loyalty', 'India', 'Accor'],
  },
  {
    id: 'club-itc-guide',
    title: 'Club ITC: The Complete Indian Guide',
    excerpt: "India's premier luxury hotel loyalty. Earn Green Points, unlock suite upgrades, and dine like royalty across 6 iconic brands.",
    content: clubItcGuideContent,
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
    date: 'Dec 25, 2025',
    readTime: '18 min',
    tags: ['Hotels', 'Loyalty', 'India', 'ITC'],
  },
  {
    id: 'ihcl-taj-guide',
    title: 'IHCL (Taj Hotels): The Complete Indian Guide',
    excerpt: "From the legendary Taj Mahal Palace to Epicure dining benefits, master India's most iconic hospitality brand.",
    content: ihclGuideContent,
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80',
    date: 'Dec 25, 2025',
    readTime: '15 min',
    tags: ['Hotels', 'Loyalty', 'India', 'Taj', 'IHCL'],
  },
  {
    id: 'hotel-lifetime-status',
    title: 'Is Lifetime Status Worth Chasing?',
    excerpt: 'We analyze the loyalty programs of Marriott, Hyatt, and Hilton to see which one rewards loyalty best.',
    content: generateContent('Lifetime Hotel Status'),
    imageUrl: 'https://picsum.photos/800/400?random=4',
    date: 'Sep 20, 2023',
    readTime: '6 min',
    tags: ['Hotels', 'Loyalty'],
  },
];
