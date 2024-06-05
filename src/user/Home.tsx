import { useState } from "react";
import Products from "../Products";
import SearchBar from "../SearchBar";
import Cart from "../Cart";
import Filter from "../Filter";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
  total: number;
}

const Home = () => {
  const [search, setSearch] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sort, setSort] = useState("asc");
  const [limit, setLimit] = useState(20);
  const [category, setCategory] = useState("");

  const cartProductsUpdater = () => {
    const updatedCartProducts = cartProducts.filter(
      (product) => product.quantity > 0
    );
    setCartProducts(updatedCartProducts);
  };

  const createCartProduct = (product: Product) => {
    const newProduct: Product = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: 1,
      total: product.price,
    };
    if (!cartProducts.some((item) => item.id === product.id)) {
      setCartProducts([...cartProducts, newProduct]);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#EADEDA] p-8 items-center relative overflow-hidden">
      <span className="font-Josefin text-4xl absolute font-bold left-16 ">
        Chit Lu Mike Co.
      </span>
      <div className="flex items-center justify-between w-full">
        <div className="flex-grow flex items-center justify-center">
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        <Link to="/admin">
          <button className="bg-black w-[120px] h-[40px] text-white mx-4">
            Admin Login
          </button>
        </Link>

        <button
          className=" justify-self-center relative"
          onClick={() => {
            setShowCart(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <span className="p-2 text-sm bg-red-600 text-white rounded-full w-[10px] h-[10px] flex items-center justify-center absolute top-0 right-0 -translate-y-[30%] translate-x-[50%] shadow-sm shaodw-red-700">
            {cartProducts.length}
          </span>
        </button>
      </div>
      <Products
        sort={sort}
        limit={limit}
        category={category}
        search={search}
        cartProducts={cartProducts}
        createCartProduct={createCartProduct}
      />
      <Filter
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        setSort={setSort}
        setLimit={setLimit}
        setCategory={setCategory}
      />
      <Cart
        showCart={showCart}
        setShowCart={setShowCart}
        setCartProducts={setCartProducts}
        cartProducts={cartProducts}
        cartProductsUpdater={cartProductsUpdater}
      />
    </div>
  );
};

export default Home;
