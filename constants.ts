import { Category } from './types';
import { allArticles } from './articles';

export const CATEGORIES: Category[] = [
  {
    id: 'credit-cards',
    name: 'Premium Credit Cards',
    iconName: 'CreditCard',
    description: 'Maximize your rewards with top-tier travel and cashback cards.',
    articles: allArticles['credit-cards'],
  },
  {
    id: 'airline-miles',
    name: 'Airline Miles',
    iconName: 'Plane',
    description: 'Fly for free. Learn the secrets of airline alliances and award charts.',
    articles: allArticles['airline-miles'],
  },
  {
    id: 'hotel-status',
    name: 'Hotel Elite Status',
    iconName: 'Hotel',
    description: 'Room upgrades, free breakfast, and late checkout. Live the suite life.',
    articles: allArticles['hotel-status'],
  },
  {
    id: 'investing-basics',
    name: 'Investing Basics',
    iconName: 'TrendingUp',
    description: 'Building wealth for the long term. Stocks, bonds, and ETFs explained.',
    articles: allArticles['investing-basics'],
  },
  {
    id: 'retirement',
    name: 'Retirement Planning',
    iconName: 'Umbrella',
    description: 'Secure your future. 401ks, IRAs, and the FIRE movement.',
    articles: allArticles['retirement'],
  },
  {
    id: 'digital-nomad',
    name: 'Digital Nomad',
    iconName: 'Laptop',
    description: 'Work from anywhere. Visas, connectivity, and tax implications.',
    articles: allArticles['digital-nomad'],
  },
  {
    id: 'budgeting',
    name: 'Smart Budgeting',
    iconName: 'PieChart',
    description: 'Take control of your cash flow without sacrificing your lifestyle.',
    articles: allArticles['budgeting'],
  },
  {
    id: 'insurance',
    name: 'Insurance & Risk',
    iconName: 'ShieldCheck',
    description: 'Protecting your assets. Travel, health, and life insurance guides.',
    articles: allArticles['insurance'],
  },
  {
    id: 'luxury-travel',
    name: 'Luxury Travel',
    iconName: 'Gem',
    description: 'First class flights and 5-star resorts. Experience the best for less.',
    articles: allArticles['luxury-travel'],
  },
  {
    id: 'global-economy',
    name: 'Global Economy',
    iconName: 'Globe',
    description: 'Macro trends that affect your wallet. Currencies and geopolitics.',
    articles: allArticles['global-economy'],
  },
];
