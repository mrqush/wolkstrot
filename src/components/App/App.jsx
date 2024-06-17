import React from "react";

import "../../styles/global.css";
import HomePage from "../../pages/HomePage";
import CartPage from "../../pages/CartPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";
import HelpPage from "../../pages/HelpPage";
import CatalogPage from "../../pages/CatalogPage";
import SuccessfullOrderPage from "../../pages/SuccessfullOrderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/help',
    element: <HelpPage />,
  },
  {
    path: '/catalog',
    element: <CatalogPage />,
  },
  {
    path: '/success',
    element: <SuccessfullOrderPage />
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
