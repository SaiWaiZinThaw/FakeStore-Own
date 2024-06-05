import { ProductDataType } from "../types/type";
import { URL } from "./ApiEndPoint";

export const fetchProducts = async ({
  limit,
  sort,
  category,
}: {
  limit: number;
  sort: string;
  category: string;
}) => {
  const filterLimit = limit ? `limit=${limit}` : "";
  const filterSort = sort ? `sort=${sort}` : "";
  const filterCategory = category ? `category/${category}` : "";
  try {
    const response: Response = await fetch(
      `${URL}/products/${filterCategory}?${filterLimit}&${filterSort}`
    );

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message);
    }
    return result as any[];
  } catch (error) {
    return error;
  }
};

export const createProduct = async ({
  data,
}: {
  data: {
    title: string;
    price: string;
    description: string;
    image: string;
    category: string;
  };
}) => {
  const response: Response = await fetch(`${URL}/products`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result as ProductDataType;
};
