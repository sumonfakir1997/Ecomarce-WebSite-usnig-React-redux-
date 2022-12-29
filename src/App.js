import React from "react";
import Home from "./Pages/Home";
// import Counter from "./Store/Quantity/Quantity";
import Counter from "./Store/Quantity"

import CatagoryPage from "./Pages/CatagoryPage";
import ProductPage from "./Pages/ProductPage";
import Cart from "./Pages/Cart";
import { Route, Routes } from "react-router-dom";
import Slider from "./Components/Slider";
import Login from "./Pages/Login";
import Pratice from "./Components/Radio";
import Jeans from "./Components/Jeans";
import Photo from "./Store/Photos";
import { Singin } from "./Components/Singin";
// import { apiTopProducts } from "./Apifolder/TopProductsApi";


export const  App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/catagory-page/:id" element={<CatagoryPage/>}/>
        {/* <Route path="/catagory-page/Products:id" element={<CatagoryPage/>}/> */}
        <Route path="/product-Page" element={<ProductPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/slider" element={<Slider/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/radio" element={<Pratice/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/jeans" element={<Jeans/>}/>
        <Route path="/index" element={<Photo/>}/>
        <Route path="/singin" element= {<Singin/>}/>
        
        {/* <Route path="*" element={` 404 error `}/>   */}
        <Route path="*" element={<Home/>}  />

      </Routes>  
  );
}

export default App;
