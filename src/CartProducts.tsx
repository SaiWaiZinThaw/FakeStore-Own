import "animate.css";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

const CartProducts = (props: any) => {
  const addQtnHandler = (id: number) => {
    const updatedCartProducts = props.cartProducts.map((product: Product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    props.setCartProducts(updatedCartProducts);
  };

  const subQtnHandler = (id: number) => {
    const updatedCartProducts = props.cartProducts
      .map((product: Product) => {
        if (product.id === id && product.quantity > 0) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      })
      .filter((product: Product) => product.quantity > 0);
    props.setCartProducts(updatedCartProducts);
  };

  return (
    <div className="px-2 py-4">
      {props.cartProducts.map(
        (product: Product) =>
          product.quantity > 0 && (
            <div
              key={product.id}
              className="product flex p-2 animate__animated animate__fadeIn w-full bg-white rounded-md mb-5 relative"
            >
              <span className="p-2 text-sm bg-red-600 text-white rounded-full w-[28px] h-[28px] flex items-center justify-center absolute top-0 right-0 -translate-y-[50%] translate-x-[50%] shadow-sm shaodw-red-700">
                <span>{product.quantity}</span>
              </span>
              <div className="w-6/12 flex items-center justify-center ">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[80px] h-[80px]"
                />
              </div>
              <div className="w-6/12 flex flex-col items-center self-center justify-self-end gap-2">
                <span className="font-BebasNeue text-2xl">
                  {(product.price * product.quantity).toFixed(2)} $
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => subQtnHandler(product.id)}
                    className="w-6 h-6 text-white rounded-sm flex items-center justify-center bg-black text-lg font-bold active:scale-95 subBtn"
                  >
                    -
                  </button>

                  <button
                    onClick={() => addQtnHandler(product.id)}
                    className="w-6 h-6 text-white rounded-sm flex items-center justify-center bg-black text-lg font-bold active:scale-95 addBtn"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default CartProducts;
