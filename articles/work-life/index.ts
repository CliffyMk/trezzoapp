import { Article } from '../../types';
import { actionTrapArticle } from './action-trap';
import { fourHourWorkWeekArticle } from './four-hour-work-week';
import { screenTimeContent } from './screen-time';

const generateContent = (topic: string) => `
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Introduction to ${topic}</h3>
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    In today's fast-paced world, understanding ${topic} is essential for maintaining balance and achieving fulfillment.
    Whether you're climbing the corporate ladder or building your own venture, mastering this subject can transform your life.
  </p>
  
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Key Takeaways</h3>
  <div class="mb-6 p-5 bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-50 dark:from-teal-900/20 dark:via-cyan-900/15 dark:to-teal-900/20 rounded-xl border border-teal-200/50 dark:border-teal-500/30 shadow-md dark:shadow-lg">
    <ul class="list-disc pl-5 space-y-3">
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Strategies for sustainable productivity.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Building boundaries that protect your energy.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Finding harmony between ambition and well-being.</li>
    </ul>
  </div>
  
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    By implementing these practices, you can optimize your approach to ${topic}. Remember, balance is not static—it's a continuous practice.
  </p>
  
  <div class="my-6 p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border border-indigo-200/50 dark:border-indigo-500/30 shadow-md dark:shadow-lg">
    <p class="italic text-slate-700 dark:text-slate-300">"Almost everything will work again if you unplug it for a few minutes, including you." - Anne Lamott</p>
  </div>
  
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
    Continue reading our detailed guides to dive deeper into work-life integration. We update our content regularly to help you thrive in all areas of life.
  </p>
`;

export const workLifeArticles: Article[] = [
  {
    id: 'screen-time-research',
    title: "I'm a Psychologist and I Let My Kids Have Screen Time",
    excerpt: "What the science actually says about screens, and why a child development psychologist stopped feeling guilty about Bluey.",
    content: screenTimeContent,
    imageUrl: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80',
    date: 'Dec 26, 2025',
    readTime: '15 min',
    tags: ['Parenting', 'Psychology', 'Research', 'Work-Life'],
  },
  fourHourWorkWeekArticle,
  actionTrapArticle,
  {
    id: 'remote-work-productivity',
    title: 'Remote Work Productivity Secrets',
    excerpt: 'Master the art of working from anywhere. Build routines that maximize output without burnout.',
    content: generateContent('Remote Work Productivity'),
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    date: 'Dec 12, 2025',
    readTime: '10 min',
    tags: ['Work-Life', 'Productivity', 'Remote Work'],
  },
  {
    id: 'burnout-prevention',
    title: 'Preventing Burnout: A Complete Guide',
    excerpt: 'Recognize the signs early and build sustainable habits. Your career is a marathon, not a sprint.',
    content: generateContent('Burnout Prevention'),
    imageUrl: 'https://images.unsplash.com/photo-1494599948593-3dafe8338d71?w=800&auto=format&fit=crop&q=80',
    date: 'Dec 5, 2025',
    readTime: '12 min',
    tags: ['Work-Life', 'Wellness', 'Mental Health'],
  },
];
