// Define your TypeScript interfaces here

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'business' | 'customer' | 'referrer';
  subscriptionPlan?: string;
}

export interface Business {
  id: string;
  name: string;
  description?: string;
  ownerId: string;
  storeCount: number;
}

export interface Store {
  id: string;
  name: string;
  businessId: string;
  description?: string;
  category: string;
  location?: string;
  productCount: number;
}

export interface Product {
  id: string;
  storeId: string;
  name: string;
  description?: string;
  price: number;
  discountPrice?: number;
  category: string;
  inStock: boolean;
  imageUrl?: string;
}

// Add other interfaces as needed
