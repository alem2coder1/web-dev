// product.model.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  gallery?: string[]; // Optional for image gallery
}
