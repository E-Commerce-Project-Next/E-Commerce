import { Product } from "@/features/products/types/productType";

type GetProductsParams = {
  categoryId?: string;
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: "salesCount";
  isFeatured?: boolean;
};

export async function getProducts(
  params: GetProductsParams = {}
): Promise<Product[]> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/products`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value));
      }
    });
  }

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function getProductById(id: string): Promise<Product> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
}
