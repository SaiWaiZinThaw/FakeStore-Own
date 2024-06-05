import { RouteObject } from "react-router";
import AdminDashboard from "../admin/AdminDashboard";
import ProductList from "../admin/ProductList";
import ProductDetails from "../ProductDetails";
import ProductEdit from "../admin/ProductEdit";
import CreateNew from "../admin/CreateNew";

const AdminRouter: RouteObject[] = [
  {
    path: "/admin",
    element: <AdminDashboard />,
    children: [
      {
        path: "/admin/product",
        element: <ProductList />,
      },
      { path: "/admin/product/:id", element: <ProductDetails /> },
      { path: "/admin/product/edit/:id", element: <ProductEdit /> },
      { path: "/admin/create", element: <CreateNew /> },
    ],
  },
];

export default AdminRouter;
