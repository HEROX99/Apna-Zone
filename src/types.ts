export interface Product {
  id: number;
  name: string;
  category: 'books' | 'accessories' | 'electronics';
  subcategory?: string;
  price: number;
  description: string;
  image: string;
  images?: string[];         // 🔹 Optional: for additional gallery images
  features?: string[];       // 🔹 Optional: list of product features
}

export interface User {
  id: number;
  email: string;
  name?: string;
}