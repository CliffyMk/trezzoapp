import { Category } from './types';

// Helper to generate placeholder content
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

export const CATEGORIES: Category[] = [
  {
    id: 'credit-cards',
    name: 'Premium Credit Cards',
    iconName: 'CreditCard',
    description: 'Maximize your rewards with top-tier travel and cashback cards.',
    articles: [
      {
        id: 'cc-sapphire-reserve',
        title: 'The Ultimate Guide to Premium Travel Cards',
        excerpt: 'Is the annual fee worth it? We break down the benefits of the top contenders in the market.',
        content: generateContent('Premium Travel Cards'),
        imageUrl: 'https://picsum.photos/800/400?random=1',
        date: 'Oct 12, 2023',
        readTime: '8 min',
        tags: ['Travel', 'Finance'],
      },
      {
        id: 'cc-points-strategy',
        title: 'Points vs. Cashback: What Should You Choose?',
        excerpt: 'Deciding between flexible points and liquid cash can be tricky. Here is our mathematical breakdown.',
        content: generateContent('Points Strategy'),
        imageUrl: 'https://picsum.photos/800/400?random=2',
        date: 'Oct 15, 2023',
        readTime: '5 min',
        tags: ['Strategy', 'Beginner'],
      },
    ]
  },
  {
    id: 'airline-miles',
    name: 'Airline Miles',
    iconName: 'Plane',
    description: 'Fly for free. Learn the secrets of airline alliances and award charts.',
    articles: [
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
    ]
  },
  {
    id: 'hotel-status',
    name: 'Hotel Elite Status',
    iconName: 'Hotel',
    description: 'Room upgrades, free breakfast, and late checkout. Live the suite life.',
    articles: [
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
    ]
  },
  {
    id: 'investing-basics',
    name: 'Investing Basics',
    iconName: 'TrendingUp',
    description: 'Building wealth for the long term. Stocks, bonds, and ETFs explained.',
    articles: [
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
    ]
  },
  {
    id: 'retirement',
    name: 'Retirement Planning',
    iconName: 'Umbrella',
    description: 'Secure your future. 401ks, IRAs, and the FIRE movement.',
    articles: [
      {
        id: 'fire-movement',
        title: 'Understanding the FIRE Movement',
        excerpt: 'Financial Independence, Retire Early. Is it a pipe dream or a rigorous mathematical certainty?',
        content: generateContent('FIRE Movement'),
        imageUrl: 'https://picsum.photos/800/400?random=6',
        date: 'Oct 05, 2023',
        readTime: '10 min',
        tags: ['Retirement', 'Lifestyle'],
      },
    ]
  },
  {
    id: 'digital-nomad',
    name: 'Digital Nomad',
    iconName: 'Laptop',
    description: 'Work from anywhere. Visas, connectivity, and tax implications.',
    articles: [
      {
        id: 'best-nomad-visas',
        title: 'Top 5 Digital Nomad Visas for 2024',
        excerpt: 'From Portugal to Costa Rica, countries are opening their doors to remote workers.',
        content: generateContent('Nomad Visas'),
        imageUrl: 'https://picsum.photos/800/400?random=7',
        date: 'Nov 10, 2023',
        readTime: '9 min',
        tags: ['Travel', 'Work'],
      },
    ]
  },
  {
    id: 'budgeting',
    name: 'Smart Budgeting',
    iconName: 'PieChart',
    description: 'Take control of your cash flow without sacrificing your lifestyle.',
    articles: [
      {
        id: '50-30-20-rule',
        title: 'The 50/30/20 Rule Explained',
        excerpt: 'A simple framework to manage your needs, wants, and savings effortlessly.',
        content: generateContent('Budgeting Rules'),
        imageUrl: 'https://picsum.photos/800/400?random=8',
        date: 'Jul 22, 2023',
        readTime: '4 min',
        tags: ['Budgeting', 'Basics'],
      },
    ]
  },
  {
    id: 'insurance',
    name: 'Insurance & Risk',
    iconName: 'ShieldCheck',
    description: 'Protecting your assets. Travel, health, and life insurance guides.',
    articles: [
      {
        id: 'travel-insurance-myth',
        title: 'Do You Really Need Travel Insurance?',
        excerpt: 'Credit cards offer some protection, but is it enough for a medical emergency abroad?',
        content: generateContent('Travel Insurance'),
        imageUrl: 'https://picsum.photos/800/400?random=9',
        date: 'Jun 30, 2023',
        readTime: '6 min',
        tags: ['Insurance', 'Safety'],
      },
    ]
  },
  {
    id: 'luxury-travel',
    name: 'Luxury Travel',
    iconName: 'Gem',
    description: 'First class flights and 5-star resorts. Experience the best for less.',
    articles: [
      {
        id: 'private-jet-empty-legs',
        title: 'How to Book Empty Leg Private Jets',
        excerpt: 'The secret way to fly private for the price of a commercial business class ticket.',
        content: generateContent('Private Aviation'),
        imageUrl: 'https://picsum.photos/800/400?random=10',
        date: 'May 12, 2023',
        readTime: '8 min',
        tags: ['Luxury', 'Aviation'],
      },
    ]
  },
  {
    id: 'global-economy',
    name: 'Global Economy',
    iconName: 'Globe',
    description: 'Macro trends that affect your wallet. Currencies and geopolitics.',
    articles: [
      {
        id: 'strong-dollar-impact',
        title: 'What a Strong Dollar Means for Your Vacation',
        excerpt: 'Why Europe and Japan are cheaper than ever for American tourists right now.',
        content: generateContent('Currency Exchange'),
        imageUrl: 'https://picsum.photos/800/400?random=11',
        date: 'Dec 01, 2023',
        readTime: '5 min',
        tags: ['Economics', 'Travel'],
      },
    ]
  },
];