import { Article } from '../../types';

const generateContent = (topic: string) => `
  <h3 class="text-xl font-bold mb-4">Introduction to ${topic}</h3>
  <p class="mb-4">
    In today's fast-paced world, understanding ${topic} is crucial for financial freedom and a fulfilling lifestyle.
    Whether you are a seasoned expert or just starting out, mastering the nuances of this subject can open doors to new opportunities.
  </p>
  <h3 class="text-xl font-bold mb-4">Key Takeaways</h3>
  <ul class="list-disc pl-5 mb-4 space-y-2">
    <li>Comprehensive analysis of current market trends.</li>
    <li>Strategic planning for long-term success.</li>
    <li>Risk management and mitigation strategies.</li>
  </ul>
  <p class="mb-4">
    By implementing these strategies, you can optimize your approach to ${topic}. Remember, consistency is key.
    Stay informed, stay agile, and keep exploring new horizons.
  </p>
  <div class="my-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg border-l-4 border-blue-500">
    <p class="italic">"The journey of a thousand miles begins with a single step." - Lao Tzu</p>
  </div>
  <p>
    Continue reading our detailed guides to dive deeper into specific aspects of ${topic}. We update our content regularly to ensure you have the latest information at your fingertips.
  </p>
`;

export const investingBasicsArticles: Article[] = [
  {
    id: 'etf-vs-mutual-funds',
    title: 'ETFs vs Mutual Funds: The Showdown',
    excerpt: 'Low fees and tax efficiency make ETFs a favorite, but mutual funds still have their place.',
    content: generateContent('ETFs and Mutual Funds'),
    imageUrl: 'https://picsum.photos/800/400?random=5',
    date: 'Aug 15, 2023',
    readTime: '7 min',
    tags: ['Investing', 'Stocks'],
  },
];
