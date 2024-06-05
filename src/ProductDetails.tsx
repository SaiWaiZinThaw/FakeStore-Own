import { useParams } from "react-router";
import { useFetchProducts } from "./hooks/useProductApi";

interface Product {
  id: string;
  title: string;
  image: string;
  category: string;
}

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetchProducts({});

  if (!isLoading) {
    const product = data.find((element) => element.id === parseInt(id));

    if (product) {
      return (
        <div className="flex items-center justify-center w-full min-h-screen">
          <div className="w-[600px] flex flex-col justify-center items-center gap-5">
            <img
              src={product.image}
              alt={product.image}
              className="w-[300px]"
            />
            <span className="text-3xl font-bold text-center">
              {product.title}
            </span>
            <span className="text-3xl font-bold">{product.price}$</span>
          </div>
        </div>
      );
    } else {
      return <div>Product not found</div>;
    }
  }

  return <div>Loading</div>;
};

export default ProductDetails;
