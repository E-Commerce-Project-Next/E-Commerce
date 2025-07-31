export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: string;
  images: ProductImage[];
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  discountStart: string; // ISO format (Date string)
  discountEnd: string;   // ISO format (Date string)
  isFeatured: boolean;
  salesCount: number;
  rating: number;
}

export interface ProductImage {
  url: string;
  altText: string;
}