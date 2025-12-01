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

export const airlineMilesArticles: Article[] = [
  {
    id: 'miles-sweet-spots',
    title: 'Hidden Sweet Spots in Award Charts',
    excerpt: 'Fly business class to Europe for under 40k miles. Yes, it is possible if you know where to look.',
    content: generateContent('Airline Award Charts'),
    imageUrl: 'https://picsum.photos/800/400?random=3',
    date: 'Nov 01, 2023',
    readTime: '12 min',
    tags: ['Travel', 'Hacking'],
  },
];
