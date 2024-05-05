import { RouteObject } from "react-router";
import Home from "../user/Home";

const UserRouter: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

export default UserRouter;
