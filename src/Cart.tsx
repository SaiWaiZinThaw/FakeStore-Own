import { useEffect, useState } from "react";
import CartProducts from "./CartProducts";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

const Cart = (props: any) => {
  const [totalCost, setTotalCost] = useState(0);

  const cartClass =
    "transition-transform duration-300 flex flex-col w-[440px] p-6 min-h-screen bg-[#D8DDEF] fixed right-0 top-0 border-2 border-black ";

  const crossBtnHandler = () => {
    props.setShowCart(false);
  };

  useEffect(() => {
    let cost: number = 0;
    props.cartProducts.forEach((product: Product) => {
      cost += product.price * product.quantity;
    });
    setTotalCost(parseFloat(cost.toFixed(2)));
  }, [props.cartProducts]);

  return (
    <div
      className={
        !props.showCart ? `${cartClass} translate-x-[100%]` : cartClass
      }
      style={{ overflowY: "auto", maxHeight: "80vh", overflowX: "hidden" }}
    >
      <button className="self-end" onClick={crossBtnHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>

      <CartProducts
        cartProductsUpdater={props.cartProductsUpdater}
        cartProducts={props.cartProducts}
        setCartProducts={props.setCartProducts}
      />
      <div className=" w-full mt-auto flex flex-col gap-3  ">
        <div className="flex text-3xl border-t border-t-black  w-full justify-between p-4 ">
          <span>Total</span>
          <span className="font-BebasNeue">{totalCost}$</span>
        </div>
        <div className="flex w-full  justify-between">
          <button
            onClick={() => {
              props.setCartProducts([]);
            }}
            className=" w-[120px] h-[50px] text-black rounded-md text-2xl bg-white active:scale-95"
          >
            Clear
          </button>
          <button className=" w-[120px] h-[50px] rounded-md text-white bg-black active:scale-95 ">
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
