import { RouteObject } from "react-router";
import Home from "../user/Home";
import ProductDetails from "../ProductDetails";

const UserRouter: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
];

export default UserRouter;
