import { useFetchProducts } from "./hooks/useProductApi";
import StarRating from "./components/StarRating";
import Loading from "./components/Loading";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const Products = (props: any) => {
  const { data, isLoading } = useFetchProducts({
    limit: props.limit,
    sort: props.sort,
    category: props.category,
  });

  const buyBtnHandler = (id: number) => {
    const productToAdd = (data as Product[]).find(
      (product: Product) => product.id === id
    );
    if (productToAdd) {
      addProduct(productToAdd);
      console.log(props.cartProducts);
    }
  };

  const addProduct = (product: Product) => {
    props.createCartProduct(product);
  };

  const generateRandomNumber = () => {
    return Math.random() * (5 - 1) + 1;
  };

  return (
    <div className="grid grid-cols-4 gap-5 p-10">
      {isLoading ? (
        <div className="flex items-center justify-center self-center justify-self-center w-full">
          <Loading />
        </div>
      ) : (
        (data as Product[])
          .filter((item: Product) => {
            return props.search.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(props.search.toLowerCase());
          })
          .map((ele: Product) => (
            <div
              key={ele.id}
              className="product bg-white p-5 rounded-md flex flex-col items-center gap-5 shadow-sm shadow-black"
            >
              <img
                src={ele.image}
                alt=""
                className="w-[200px] h-[260px] p-2 cursor-pointer"
              />
              <span className="h-[100px]  font-lg font-semibold font-Josefin text-black text-lg text-center">
                {ele.title}
              </span>

              <div className="flex justify-between items-center gap-5">
                <span className="font-BebasNeue text-3xl font-semibold self-start">
                  {ele.price}$
                </span>
                <StarRating className="self-end" value={generateRandomNumber} />
              </div>

              <button
                onClick={() => {
                  buyBtnHandler(ele.id);
                }}
                className="w-full mb-0 h-[40px] bg-black text-white active:scale-90 duration-300"
              >
                Buy Now
              </button>
            </div>
          ))
      )}
    </div>
  );
};

export default Products;
