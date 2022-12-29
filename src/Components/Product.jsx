import { React, useState, useParams, useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productAdd ,decrement } from "../Store/CartStore/CartSlice";


// import { Route, Routes } from "react-router-dom";

const Product = ({ item }) => {
  const [hoverEffect, setHoverEffect] = useState(" opacity-0 ");
  const handleHoverEnter = () => {
    setHoverEffect(" opacity-1 ");
    // console.log("hit")
  };
  const handleHoverExit = () => {
    setHoverEffect(" opacity-0");
    // console.log("leave")
  };
  // const params = useParams()
  // useEffect(() => {
  //     console.log(params)
  // })
 
  const navigate = useNavigate();
  const count = useSelector((state) => state.cart.count );
  const dispatch = useDispatch();
  
  // const handleOnClick = useCallback(() => {
  //   // navigate("/product-Page",{state: {productInfo: item}});
  // });

  // const [data, setdata] = useState(apiTopProducts);

  const filterResult = (event, selectedProduct) => {
    // const result = apiTopProducts.filter((product => selectedProduct.id == product.id))

  
    // navigate("/product-Page");
    // console.log(`event `, event.currentTarget.classList.contains("serarchicon"));
    // console.log(`selectedproduct`, selectedProduct);
    // console.log(`eventis it work!!! `,event)
    // navigate("/product-Page",{state: {productInfo: item}});

    if (event.currentTarget.classList.contains("carticon") == true) {
      (navigate("/Cart", { state: { productInfo: item } }));
      // console.log("carticon work ");
      
    }
    if (event.currentTarget.classList.contains("serarchicon") == true) {
      navigate("/product-Page", { state: { productInfo: item } });
      console.log("searchicon work perfectly");
    }
   
  };
  useEffect(() => {});

  const iconsStyle =
    "flex h-10 w-10  rounded-full bg-white items-center  justify-center m-3 cursor-pointer hover: text-black hover:scale-[1.1] hover:bg-red-500 ease-in duration-100 cursor-pointer ";

  return (
    // w-75 h-87 ay 2ta kaj kore na !
    <div
      className="flex items-center  justify-center  overflow-hidden rounded-md shadow-lg m-2 relative"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <img className="w-300 h-87.5 " src={item.src} alt="product-pic" />

      <div
        className={
          `flex items-center justify-center w-full h-full absolute ease-in duration-100` +
          hoverEffect
        }
      >
        {/* icon */}
        <div
          className={`carticon ` + iconsStyle}
          onClick={(event) => {
            filterResult(event, item);
            // handleOnClick();
            dispatch(productAdd(item))
          }}
        >
          <ShoppingCartOutlinedIcon />
        </div>
        <div
          className={`loveicon ` + iconsStyle}
          onClick={() => {
            // dispatch(increment) 
            // handleOnClick();
            // dispatch((increment) =>{
            //   filterResult(item)
            // })
          }}
        >
          <FavoriteBorderIcon />
        </div>
        {/* <Link to="/product-Page" state={{productInfo: item}}
          className={iconsStyle}
           
        >
          <SearchOutlinedIcon />
        </Link> */}
        <div
          className={`serarchicon ` + iconsStyle}
          onClick={(event) => {
            filterResult(event, item);
            // handleOnClick();
            // dispatch((increment) =>{
            //   filterResult(item)
            // })
          }}
        >
          <SearchOutlinedIcon />
        </div>
      </div>
    </div>
  );
};
export default Product;
