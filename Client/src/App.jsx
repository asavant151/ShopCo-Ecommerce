import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/Home/ProductDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/product-details" element={<ProductDetails/>} />
      </Route>
    </Routes>
  );
};

export default App;
