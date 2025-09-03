
export type CarPrice = {
  manual?: number;
  matic?: number;
};

export interface Car {
  name: string;
  price: CarPrice;
  capacity: number;
  year: number;
  fuel: 'Bensin' | 'Diesel';
  image: string;
  'data-ai-hint': string;
  category: 'City Car' | 'MPV' | 'SUV' | 'Mewah' | 'Niaga';
  gallery?: string[];
  specs: {
    engine: string;
    horsepower: string;
  };
}

export interface Testimonial {
  name: string;
  review: string;
  rating: number;
  avatar: string;
  'data-ai-hint': string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    author: string;
    image: string;
    'data-ai-hint': string;
    content: string;
}

export interface Destination {
    name: string;
    image: string;
    'data-ai-hint': string;
    description: string;
}

export interface DestinationArea {
    slug: string;
    province: string;
    name: string;
    heroImage: string;
    'data-ai-hint': string;
    short_description: string;
    destinations: Destination[];
}
