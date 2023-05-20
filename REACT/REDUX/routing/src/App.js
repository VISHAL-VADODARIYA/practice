import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Root from "./pages/Root";
import Error from "./pages/Error";
import ProductsDetail from "./pages/ProductsDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement:<Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "products/:productId", element: <ProductsDetail /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
