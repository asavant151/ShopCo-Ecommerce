import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Category from "./pages/Category/Category";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/product-details" element={<ProductDetails/>} />
        <Route path="/category" element={<Category/>} />
      </Route>
    </Routes>
  );
};

export default App;
