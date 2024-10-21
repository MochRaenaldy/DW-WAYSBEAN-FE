import { RouteObject } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import AuthLayout from "../layout/AuthLayout";
import Home from "../components/Home";
import Detail from "../components/Detail";
import AddProduct from "../components/AddProduct";
import AdminTrc from "../components/AdminTrc";
import Cart from "../components/cart";
import Profile from "../components/Profile";
import Transaction from "../components/Transaction";

const route: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Detail/:id",
        element: <Detail />,
      },
      {
        path: "Transaction",
        element: <Transaction />,
      },
      {
        path: "AddProduct",
        element: <AddProduct />,
      },
      {
        path :"Cart",
        element: <Cart />
      },
      {
        path: "IncomeTransaction",
        element: <AdminTrc />,
      },
      {
        path: "Profile",
        element: <Profile />,
      },

      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
    ],
  },
];

export default route;
