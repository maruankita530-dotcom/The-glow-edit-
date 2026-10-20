export type CategoryType = 
  | 'Skincare' 
  | 'Ingredients' 
  | 'Product Reviews' 
  | 'Acne Care' 
  | 'Student Routines';

export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs: string[];
  callout?: {
    title: string;
    text: string;
    type?: 'tip' | 'warning' | 'science';
  };
  listItems?: string[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
}

export interface ProductPick {
  name: string;
  brand: string;
  price: string;
  role: string;
  keyIngredient: string;
  bestFor: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: CategoryType;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  altText: string;
  caption: string;
  summary: string;
  featured?: boolean;
  trending?: boolean;
  tags: string[];
  keyTakeaways: string[];
  sections: ArticleSection[];
  recommendedPicks?: ProductPick[];
  dosAndDonts?: {
    dos: string[];
    donts: string[];
  };
  faq?: {
    question: string;
    answer: string;
  }[];
}

export interface UserComment {
  id: string;
  articleId: string;
  author: string;
  date: string;
  text: string;
}
