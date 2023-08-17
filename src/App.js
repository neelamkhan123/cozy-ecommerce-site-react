import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import HomeProducts from "./pages/Products/HomeProducts";
import GardenProducts from "./pages/Products/GardenProducts";
import KitchenProducts from "./pages/Products/KitchenProducts";
import DecorProducts from "./pages/Products/DecorProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/wishlist", element: <WishlistPage /> },
      { path: "/cart", element: <CartPage /> },
      {
        path: "/products",
        children: [
          {
            path: "/products/home",
            element: <HomeProducts />,
          },
          { path: "/products/garden", element: <GardenProducts /> },
          { path: "/products/kitchen", element: <KitchenProducts /> },
          { path: "/products/decor", element: <DecorProducts /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
