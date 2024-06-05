import React, { useState } from "react";
import { useFetchCategories } from "../hooks/useCategoriesApi";
import { useCreateProducts } from "../hooks/useProductApi";

const CreateNew = () => {
  const { data, isLoading } = useFetchCategories();
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const createProductMutation = useCreateProducts();

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const data = { ...newProduct };
    createProductMutation.mutate(data);
  };

  return (
    <form className="flex flex-col items-center gap-6 ml-[280px] w-[480px] self-center">
      <input
        required
        value={newProduct.title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewProduct((prev) => ({ ...prev, title: e.target.value }));
        }}
        type="text"
        className="p-4 border border-black rounded-md w-full h-11"
        placeholder="Title"
      />

      <input
        required
        value={newProduct.price}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewProduct((prev) => ({ ...prev, price: e.target.value }));
        }}
        type="number"
        className="p-4 border border-black rounded-md w-full h-11"
        placeholder="Price"
      />

      <textarea
        required
        value={newProduct.description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setNewProduct((prev) => ({ ...prev, description: e.target.value }));
        }}
        className="p-4 border border-black rounded-md w-full h-20"
        placeholder="Description"
      />

      <input
        required
        value={newProduct.image}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewProduct((prev) => ({ ...prev, image: e.target.value }));
        }}
        type="text"
        className="p-4 border border-black rounded-md w-full h-11"
        placeholder="Image URL"
      />

      <select
        className="p-2 border border-black rounded-md w-full h-12"
        value={newProduct.category}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setNewProduct((prev) => ({ ...prev, category: e.target.value }));
        }}
      >
        {!isLoading ? (
          data.map((ele, index) => (
            <option key={index} value={ele}>
              {ele}
            </option>
          ))
        ) : (
          <option>Loading...</option>
        )}
      </select>
      <button
        type="submit"
        onClick={handleSubmit}
        className="flex justify-center items-center bg-blue-400 hover:bg-blue-500 m-2 p-4 rounded-sm w-18 h-10 text-white self-end active:scale-95"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateNew;
