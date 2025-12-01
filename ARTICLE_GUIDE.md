# Article Management Guide

## Overview

The application now uses a scalable **modular article structure** that makes it easy to maintain hundreds of articles without cluttering the main constants file.

## Folder Structure

```
articles/
├── index.ts (main export that combines all categories)
├── credit-cards/
│   ├── index.ts (imports and exports all credit card articles)
│   ├── axis-magnus-burgundy.ts (individual article file)
│   └── [other card articles].ts
├── airline-miles/
│   ├── index.ts
│   └── [article files].ts
├── hotel-status/
│   ├── index.ts
│   └── [article files].ts
├── investing-basics/
├── retirement/
├── digital-nomad/
├── budgeting/
├── insurance/
├── luxury-travel/
└── global-economy/
```

## How to Add a New Article

### Step 1: Create the Article File

Create a new `.ts` file in the appropriate category folder:

```typescript
// articles/credit-cards/new-card-article.ts

import { Article } from '../../types';

export const newCardArticle: Article = {
  id: 'cc-new-card',
  title: 'Article Title',
  excerpt: 'Brief excerpt...',
  content: `
    <h3 class="text-xl font-bold mb-4">Section Title</h3>
    <p class="mb-4">Content here...</p>
  `,
  imageUrl: 'https://picsum.photos/800/400?random=13',
  date: 'Dec 20, 2024',
  readTime: '10 min',
  tags: ['Tag1', 'Tag2'],
};
```

### Step 2: Export from Category Index

Update the category's index file (e.g., `articles/credit-cards/index.ts`):

```typescript
import { axisMagnusBurgundyArticle } from './axis-magnus-burgundy';
import { newCardArticle } from './new-card-article';  // Add this
import { Article } from '../../types';

export const creditCardsArticles: Article[] = [
  axisMagnusBurgundyArticle,
  newCardArticle,  // Add this
  // ... other articles
];
```

### Step 3: Build & Deploy

```bash
npm run build
npm run deploy
```

## Creating a New Category

### Step 1: Create Category Folder

```bash
mkdir articles/new-category-name
```

### Step 2: Create Category Index

```typescript
// articles/new-category-name/index.ts

import { Article } from '../../types';

export const newCategoryArticles: Article[] = [
  // Add articles here
];
```

### Step 3: Update Main Articles Index

```typescript
// articles/index.ts

import { newCategoryArticles } from './new-category-name';

export const allArticles = {
  'credit-cards': creditCardsArticles,
  // ... other categories
  'new-category-name': newCategoryArticles,  // Add this
};
```

### Step 4: Add Category to Constants

```typescript
// constants.ts

{
  id: 'new-category-name',
  name: 'Category Display Name',
  iconName: 'IconName',  // From lucide-react
  description: 'Category description',
  articles: allArticles['new-category-name'],
}
```

## Key Benefits

✅ **Scalability**: Easy to add 100+ articles without performance issues  
✅ **Maintainability**: Each article is in its own file  
✅ **Organization**: Articles grouped by category in folders  
✅ **Clean constants.ts**: No article content bloat  
✅ **Easy to update**: Modify one article without touching others  
✅ **Version control**: Cleaner diffs when reviewing changes  

## File Size Comparison

**Before**: `constants.ts` was 370+ lines with all article content  
**After**: `constants.ts` is 76 lines with just category metadata  

Articles are now distributed across modular files, making the codebase more maintainable!

## Routing

The application automatically routes to articles:

- Category page: `/category/:categoryId`
- Article page: `/category/:categoryId/article/:articleId`

No changes needed to routing—the App.tsx component handles all paths dynamically.
