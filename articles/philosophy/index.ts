import { Article } from '../../types';
import { courageToBeDislikedArticle } from './courage-to-be-disliked';
import { mansSearchForMeaningArticle } from './mans-search-for-meaning';
import { aiSleeperIndustryContent } from './ai-sleeper-industry';
import { adultJokesContent } from './adult-jokes';

const generateContent = (topic: string) => `
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Introduction to ${topic}</h3>
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    In today's fast-paced world, understanding ${topic} is crucial for personal growth and a fulfilling lifestyle.
    Whether you are a seasoned thinker or just starting out, mastering the nuances of this subject can open doors to new perspectives.
  </p>
  
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Key Takeaways</h3>
  <div class="mb-6 p-5 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 dark:from-purple-900/20 dark:via-indigo-900/15 dark:to-purple-900/20 rounded-xl border border-purple-200/50 dark:border-purple-500/30 shadow-md dark:shadow-lg">
    <ul class="list-disc pl-5 space-y-3">
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Deep reflection on life's fundamental questions.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Practical wisdom for everyday decisions.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Finding meaning and purpose in modern life.</li>
    </ul>
  </div>
  
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    By exploring these ideas, you can develop a richer understanding of ${topic}. Remember, wisdom is a journey, not a destination.
  </p>
  
  <div class="my-6 p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border border-indigo-200/50 dark:border-indigo-500/30 shadow-md dark:shadow-lg">
    <p class="italic text-slate-700 dark:text-slate-300">"The unexamined life is not worth living." - Socrates</p>
  </div>
  
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
    Continue reading our detailed guides to dive deeper into philosophical concepts. We update our content regularly to ensure you have fresh perspectives at your fingertips.
  </p>
`;

export const philosophyArticles: Article[] = [
  {
    id: 'adult-jokes-collection',
    title: 'Eleven Grown-Up Jokes That Will Leave You in Stitches',
    excerpt: "Proceed at your own risk. These gems are guaranteed to make you laugh until you cry.",
    content: adultJokesContent,
    imageUrl: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&q=80',
    date: 'Jan 4, 2026',
    readTime: '8 min',
    tags: ['Humor', 'Comedy', 'Entertainment'],
  },
  mansSearchForMeaningArticle,
  courageToBeDislikedArticle,
  {
    id: 'ai-sleeper-industry',
    title: 'The Sleeper Industry That Will 100x Because of AI',
    excerpt: "The gold rush isn't in AI models. It's in the bottleneck no one's paying attention to. Here's the contrarian opportunity.",
    content: aiSleeperIndustryContent,
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    date: 'Dec 25, 2025',
    readTime: '12 min',
    tags: ['AI', 'Entrepreneurship', 'Opportunity', 'Business'],
  },
  {
    id: 'stoicism-modern-life',
    title: 'Stoicism for Modern Life',
    excerpt: 'Ancient wisdom meets modern challenges. How Marcus Aurelius can help you navigate today\'s world.',
    content: generateContent('Stoicism'),
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    date: 'Dec 10, 2025',
    readTime: '8 min',
    tags: ['Philosophy', 'Stoicism', 'Mindset'],
  },
  {
    id: 'mindfulness-philosophy',
    title: 'The Philosophy of Mindfulness',
    excerpt: 'Beyond meditation apps. Understanding the deep roots of present-moment awareness.',
    content: generateContent('Mindfulness'),
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80',
    date: 'Dec 8, 2025',
    readTime: '6 min',
    tags: ['Philosophy', 'Mindfulness', 'Wellness'],
  },
];
