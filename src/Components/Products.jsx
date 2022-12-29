import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiTopProducts } from "../Apifolder/TopProductsApi";
import Product from "./Product";
 import Cart from "../Pages/Cart";

const Products = () =>{

    const params = useParams()
    // useEffect(() => {
    //     console.log(params)
    // })
    const [Cart , setCart] = useState([]);


   const handleClick = (item) => {
        Cart.push(item)
        setCart(item)
        // setCart(item)
        // console.log(item)
   }
   
    return(
        <div className="flex flex-1 flex-wrap p-5 items-center justify-center">
            {/* {
            apiTopProducts.map((products,index) => (
                <Product item= {products}  key={index} />
           
            ) ) 
           } */}
           
             {
            apiTopProducts.map((products,index) => {
                if(products.catagory.replace(/ /g, "-") == params.id)
                    return <Product item= {products}  key={index} onClick={handleClick} />
            } ) 
        } 
        </div>
    )
} 
export default Products;