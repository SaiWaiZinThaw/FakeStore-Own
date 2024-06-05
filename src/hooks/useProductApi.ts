import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchProducts,createProduct } from "../api/index";
import { ProductDataType } from "../types/type";

export const useFetchProducts = ({
    limit,
    sort,
    category
}: 
{limit: number; 
    sort: string;
    category: string;
}) => useQuery({
    queryKey: ["products",limit,sort,category],
     queryFn: () => fetchProducts({limit,sort,category}),
    });



export const useCreateProducts = () => 
    useMutation({
      mutationFn: (data: ProductDataType) => createProduct({ data })});