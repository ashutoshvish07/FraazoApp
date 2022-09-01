import React from "react";
import { Routes, Route } from "react-router-dom";
import Credits from "../Pages/Credits";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Product from "../Pages/Product";
import SinglePage from './../Pages/SinglePage';
import Cart from './../Pages/Cart';
import Fruits from "../Pages/Fruits";
const Allroutres = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route prth="/product" element={<Product/>}/>
      <Route path="/single"  element={<SinglePage/>}/>
      <Route path="/fruits"  element={<Fruits/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/credit" element={<Credits/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};

export default Allroutres;
