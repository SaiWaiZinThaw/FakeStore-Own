import { URL } from "./ApiEndPoint";

export const fetchProducts = async () => {
  try {
    const response: Response = await fetch(`${URL}/products`);
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message);
    }
    return result as any[];
  } catch (error) {
    return error;
  }
};
