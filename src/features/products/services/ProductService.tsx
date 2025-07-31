import { Product } from "@/features/products/types/productType";

type GetProductsParams = {
  categoryId?: string;
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: "salesCount";
  isFeatured?: boolean;
};

// Mocks
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Mock Product 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, enim erat cursus erat, nec dictum sem urna eu sapiente. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Etiam euismod, velit nec facilisis cursus, enim erat cursus erat, nec dictum sem urna eu sapienseretmani. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    price: 100,
    stock: 10,
    categoryId: "cat1",
    images: [{ url: "/no_image.jpg", altText: "Image 1" }],
    discountType: "percentage",
    discountValue: 10,
    discountStart: "2024-06-01T00:00:00Z",
    discountEnd: "2024-06-30T23:59:59Z",
    isFeatured: true,
    salesCount: 5,
    rating: 3.5,
  },
  {
    id: "2",
    name: "Mock Product 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, enim erat cursus erat, nec dictum sem urna eu sapiente. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Etiam euismod, velit nec facilisis cursus, enim erat cursus erat, nec dictum sem urna eu sapienseretmani. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    price: 200,
    stock: 5,
    categoryId: "cat2",
    images: [{ url: "/no_image.jpg", altText: "Image 2" }],
    discountType: "fixed",
    discountValue: 20,
    discountStart: "2024-06-01T00:00:00Z",
    discountEnd: "2024-06-30T23:59:59Z",
    isFeatured: false,
    salesCount: 2,
    rating: 5,
  },
];

// Helper para saber si usar la API o mock
const useApi = process.env.NEXT_PUBLIC_USE_API === "true";

// Función principal: lista de productos
export async function getProducts(
  params: GetProductsParams = {}
): Promise<Product[]> {
  if (!useApi) {
    // Filtra mocks si hay filtros activos
    let filtered = mockProducts;

    if (params.categoryId) {
      filtered = filtered.filter((p) => p.categoryId === params.categoryId);
    }

    if (params.search) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(params.search!.toLowerCase())
      );
    }

    if (params.isFeatured !== undefined) {
      filtered = filtered.filter((p) => p.isFeatured === params.isFeatured);
    }

    if (params.sortBy === "salesCount") {
      filtered = filtered.sort((a, b) => b.salesCount - a.salesCount);
    }

    if (params.page !== undefined && params.limit !== undefined) {
      const start = (params.page - 1) * params.limit;
      filtered = filtered.slice(start, start + params.limit);
    }

    return Promise.resolve(filtered);
  }

  // Si se usa API
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/products`);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, String(value));
    }
  });

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return await response.json();
}

// Función principal: producto individual
export async function getProductById(id: string): Promise<Product> {
  if (!useApi) {
    const product = mockProducts.find((p) => p.id === id);
    if (!product) throw new Error("Producto no encontrado");
    return Promise.resolve(product);
  }

  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return await response.json();
}
