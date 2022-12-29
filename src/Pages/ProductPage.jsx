import React from "react";
import Announce from "../Components/Announce";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newlatter from "../Components/Newslatter";
import Tee from "../Images/teee shairt.png";
import Counter from "../Store/Quantity";
import { useEffect } from "react";
import { Route, useLocation, useNavigate, useParams } from "react-router-dom";
import { useCallback } from "react";
// import { clear } from "@testing-library/user-event/dist/clear";
import Product from "../Components/Product";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const ProductPage = (item) => {
    const count = useSelector((state) => state.counter.count )
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleOnClick = useCallback(() => {
        // dispatch(decrement())
            // navigate('/Cart')
        // navigate({Route path="cart" element={/Cart}})
        navigate("/Cart", { state: { productInfo: item } })
        
        console.log(`isItWork!!! cart state`,{ state: { productInfo: item }})
        // navigate("/Cart",{state: {productInfo: item}});
        
    });
//    const filter = (event,item) =>{
//     // if (event.currentTarget.classlist.contains("btnClick") == true ){
//         navigate("/Cart", { state: { productInfo: item } });
//         // console.log(selectedProduct);
//     }
//   }


    const location = useLocation()
    useEffect(()=>{
     console.log("loaction ",location)
     setProductInfo(location.state.productInfo)
    },[location])

    const [productInfo,setProductInfo] = useState({})

      useEffect(() => {
        window.scrollTo(0,0)
    
        return () => {
        //   console.log('cleanup')
        }
       })
    return (
        <>
        <Announce/>
        <Navbar/>
        <div className="flex justify-center">
            <div className="flex flex-1 items-center justify-center">
                <img src={productInfo.src} alt=""
                className="w-4/5 h-4/5 rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300 " />
            </div>
            <div className="flex-[1.3] flex items-start flex-col mt-10">
                <h1 className="title text-tx"> {productInfo.catagory}</h1>
                <p  className="pr-16 text-justify mt-4" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laboriosam aut adipisci ducimus placeat doloremque animi incidunt vitae veniam debitis ullam, quos vel at dicta hic voluptatem. Natus, inventore iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugit?</p>

                <p className="mt-7 text-3xl "> Price:<b>{productInfo.price}</b></p>

                {/* colors  */}
                <div className="flex text-2xl mt-7" >
                    Color
                    <div className="bg-red-600 w-8 h-8 rounded-full border-2 p-2.5  cursor-pointer ml-5 hover:border-navbg">   
                    </div>
                    <div className="bg-blue-600 w-8 h-8 rounded-full border-2 p-2.5 ml-5 cursor-pointer hover:border-navbg">   
                    </div>
                    <div className="bg-yellow-400 w-8 h-8 rounded-full border-2 ml-5 cursor-pointer hover:border-navbg ">
                         
                    </div>
                </div>
                <div className="mt-5 text-2xl" >
                    Size
                    <select defaultValue={'DEFAULT'} className="ml-5 border-2">
                        <option value='DEFAULT'disabled >Select</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>large</option>
                    </select>
                </div>
                <div className="mt-5">
                    <Counter/>
                </div>
                {/* <button onClick={() =>{
                    handleOnClick(navigate("/Cart",{state: {productInfo: item}}) );
                    // handleClick(location);
                    console.log(`state hit`)
                }} 
                className="btn mt-5">Add to cart</button> */}
                 <button onClick={handleOnClick}
                className="btn btnClick mt-5">Add to cart</button>
               
            
           </div>
        </div>
        <Newlatter/>
        <Footer/> 
        </>
    )
} 
export default ProductPage;