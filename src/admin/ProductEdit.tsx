import React, { useState } from "react";
import { useFetchProducts } from "../hooks/useProductApi";
import { useParams } from "react-router";

const ProductEdit = () => {
  const [editProductId, setEditProductId] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>("");
  const { data, isLoading } = useFetchProducts<Product[]>({});
  const { id } = useParams();

  const cancelEditHandler = () => {
    setEditProductId(null);
    setEditedTitle("");
  };

  const saveEditHandler = (productId: string) => {
    setEditProductId(null);
    setEditedTitle("");
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(event.target.value);
  };

  if (!isLoading) {
    const product = data.find((element) => element.id === parseInt(id));

    if (product) {
      return (
        <div className="flex items-center justify-center w-full min-h-screen">
          <div className="w-[800px] flex flex-col justify-center items-center gap-5">
            <img
              src={product.image}
              alt={product.image}
              className="w-[300px]"
            />
            {editProductId === id ? (
              <input
                className="w-full text-3xl font-bold text-center"
                value={editedTitle}
                onChange={handleTitleChange}
              />
            ) : (
              <span className="text-3xl font-bold text-center">
                {product.title}
              </span>
            )}
            <span className="text-3xl font-bold">{product.price}$</span>
            {editProductId === id ? (
              <div>
                <button onClick={() => saveEditHandler(id)}>Save</button>
                <button onClick={cancelEditHandler}>Cancel</button>
              </div>
            ) : (
              <button onClick={() => setEditProductId(id)}>Edit</button>
            )}
          </div>
        </div>
      );
    } else {
      return <div>Product not found</div>;
    }
  }

  return <div>Loading</div>;
};

export default ProductEdit;
