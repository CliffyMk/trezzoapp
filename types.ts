export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown string
  imageUrl: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  iconName: string; // key for Lucide icons
  description: string;
  articles: Article[];
}

export type Theme = 'dark' | 'light';