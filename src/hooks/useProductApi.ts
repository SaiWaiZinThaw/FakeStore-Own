import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/index";

export const useFetchProducts = () => useQuery({queryKey: ['products'], queryFn: fetchProducts})