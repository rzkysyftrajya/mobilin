// src/lib/types.ts

export interface Car {
  id: number;
  name: string;
  capacity: number;
  year: number;
<<<<<<< HEAD
  fuel: "Bensin" | "Diesel" | "Hybrid";
  image: string;
  specs: string[];
  "data-ai-hint"?: string;
=======
  fuel: 'Bensin' | 'Diesel' | 'Hybrid';
  image: string;
  specs: string[];
  'data-ai-hint'?: string;
>>>>>>> e866a6b50af04e8f05f0763f00abcaaf9ea88329
  gallery?: string[];
}

export interface Testimonial {
  name: string;
  review: string;
  rating: number;
  avatar: string;
<<<<<<< HEAD
  "data-ai-hint"?: string;
=======
  'data-ai-hint'?: string;
>>>>>>> e866a6b50af04e8f05f0763f00abcaaf9ea88329
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
  content: string;
<<<<<<< HEAD
  "data-ai-hint"?: string;
=======
  'data-ai-hint'?: string;
>>>>>>> e866a6b50af04e8f05f0763f00abcaaf9ea88329
}

export interface Destination {
  name: string;
  image: string;
  description: string;
<<<<<<< HEAD
  "data-ai-hint"?: string;
=======
  'data-ai-hint'?: string;
>>>>>>> e866a6b50af04e8f05f0763f00abcaaf9ea88329
}

export interface DestinationArea {
  slug: string;
  province: string;
  name: string;
  heroImage: string;
  short_description: string;
  destinations: Destination[];
<<<<<<< HEAD
  "data-ai-hint"?: string;
=======
  'data-ai-hint'?: string;
>>>>>>> e866a6b50af04e8f05f0763f00abcaaf9ea88329
}
