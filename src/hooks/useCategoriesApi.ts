import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../api/categoriesApi";

export const useFetchCategories = () => useQuery({queryKey: ['categories'], queryFn: () => fetchCategories()});