import { Product } from "@/types/productType";

export async function getProducts(){
  /*const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();*/
}

export async function getPopularProducts(): Promise<Product[]> {
  try {
    /*const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/popular`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();*/
  } catch (error) {
    console.error("Error fetching popular products:", error);
    throw error;
  }
}