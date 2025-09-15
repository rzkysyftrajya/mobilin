// src/lib/types.ts

export interface Car {
  id: number;
  name: string;
  capacity: number;
  year: number;
  fuel: "Bensin" | "Diesel" | "Hybrid";
  image: string;
  specs: string[];
  "data-ai-hint"?: string;
  gallery?: string[];
}

export interface Testimonial {
  name: string;
  review: string;
  rating: number;
  avatar: string;
  "data-ai-hint"?: string;
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
  "data-ai-hint"?: string;
}

export interface Destination {
  name: string;
  image: string;
  description: string;
  "data-ai-hint"?: string;
}

export interface DestinationArea {
  slug: string;
  province: string;
  name: string;
  heroImage: string;
  short_description: string;
  destinations: Destination[];
  "data-ai-hint"?: string;
}
