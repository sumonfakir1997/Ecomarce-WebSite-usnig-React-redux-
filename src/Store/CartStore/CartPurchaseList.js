
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { apiTopProducts } from "../../Apifolder/TopProductsApi";
import produce from "../../Components/Product";

import Cart from "../../Pages/Cart";


const CartPurchase = () => {
    const cart = useSelector((state.cart.count));
    const dispatch = useDispatch();
    const params = useParams()
    const [CartAdd,setCartAdd] = useState([]);

    useEffect(()=>{
      console.log('params in cartpurchase ',params);
    })
    
    const filterResult = (item) => {
      CartAdd.push(item)
      setCartAdd(item)
    }
    return(
      <div className=" cart ">
        {apiTopProducts.map((products,index) => {
             if(products.catagory.replace(/ /g, "-") == params.id)
             return <><Cart
                 item={products} key={index}
                 onClick={filterResult} /><div className="flex self-start ">
                     {/* {productInfo?.map((pr))} */}
                     <img src={productInfo.src} alt="tee-shirt"
                         className="w-[7.2rem] h-4/5 rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300 m-2 " />
                     <div className=" description flex flex-col ml-5 h-auto justify-between my-1">
                         <p>
                             <b className="mr-1">Product-Id: {productInfo.id}</b>
                         </p>
                         <p>
                             <b className="mr-1">Product-Title: {productInfo.catagory} </b>
                         </p>
                         <p>
                             <b className="mr-1">Size: {productInfo.size}</b>
                         </p>
                     </div>
                 </div></>  
          

})}


      </div>

    )
}
export default CartPurchase;