import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Announce from "../Components/Announce";
import Counter from "../Store/Quantity";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newlatter from "../Components/Newslatter";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    productAdd,
    productDelect,
    getTotals,
    calculateTotals,
} from "../Store/CartStore/CartSlice";
import Photo from "../Store/Photos";
// import Photos from "../Store/Photos"
// import FetchPhotoReducer from "../useContextPhotos/reducer";

// import count from "../Store/index";

const Cart = () => {
    const location = useLocation();
    const [productInfo, setProductInfo] = useState({});
    
    useEffect(() => {
        window.scrollTo(0, 0);
        // console.log("location",location)
        setProductInfo(location.state.productInfo);
    }, [location]);

    const navigate = useNavigate();
    const seeMore = () => {
        navigate("/ProductPage");
    };
    const {
        CartAdd,
        price,
        Shipping,
        totalPrice,
        id,
        cartTotalAmount,
        amount,
        cartQuantity,
        quantity,
        total,
    } = useSelector((state) => state.cart);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(calculateTotals());
    }, [CartAdd]);

    useEffect(() => {
        dispatch(getTotals());
    }, [CartAdd]);

    return (
        <div>
            <Announce />
            <Navbar />
            <Photo/>
            {/* <FetchPhotoReducer/> */}
            
            
            <div className="p-5">
                <div className="flex justify-center text-5xl">Cart</div>
                <div className="flex items-center justify-between mt-4">
                    <button
                        onClick={seeMore}
                        className="btn bg-white text-navbg border-navbg border-2 hover:bg-white"
                    >
                        Continue Shopping
                    </button>
                    <div className="flex underline text-lg hover:cursor-pointer">
                        <p>Items in you Cart : 3</p>
                        <p className="ml-5">Whitlist items: 0</p>
                    </div>
                    <button className="btn"> CheckOut </button>
                </div>
                {/* central div */}
                <div className="flex mt-7 pl-5 ">
                    <div className="flex flex-col flex-1 ">
                        {/* ay kahne thake  */}

                        {CartAdd.map((item, index) => (
                            <div key={index} className="flex w-full h-auto items-center ">
                                <div className="flex self-start ">
                                    {/* {productInfo?.map((pr,index)=>} */}

                                    <img
                                        src={item.src}
                                        alt="tee-shirt"
                                        className="w-[7.2rem] h-4/5 rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300 m-2 "
                                    />
                                    <div className=" description flex flex-col ml-5 h-auto justify-between my-1">
                                        <p>
                                            <b className="mr-1">Product-Id: {item.id}</b>
                                        </p>
                                        <p>
                                            <b className="mr-1">Product-Title: {item.catagory} </b>
                                        </p>
                                        {/* <p className="flex items-center justify-start"> 
                                     <b className="mr-1">Color: {productInfo.color}</b> 
                                     <div className="rounded-full bg-green-500 border-2 p-2.5 cursor-pointer ml-1 w-5 h-2.5">
                                    </div> 
                                  </p> */}
                                        <p>
                                            <b className="mr-1">Size: {item.size}</b>
                                        </p>
                                    </div>
                                </div>

                                <div className=" flex flex-col flex-auto items-center justify-center">
                                    <Counter item={item}/>

                                    <p className="flex items-center justify-center text-4xl ">
                                        <b> Price $ : {item.price*quantity}</b>
                                    </p>
                                </div>
                                <button
                                    onClick={() => {
                                        dispatch(productDelect(item));
                                        // console.log(`onhit remove`,item ,price)
                                    }}
                                    className={`btn mt-3 mr-2`}
                                >
                                    Removed Cart{" "}
                                </button>
                                <button className={`btn mt-3`}>See More </button>
                                <hr className="mt-7 mb-7" />
                            </div>
                        ))}

                        {/* here the end  */}
                        <hr className="mt-7 mb-7" />
                    </div>

                    {/* here  */}
                    <div className=" flex-[0.5] w-auto border-2 border-navbg h-[65vh] rounded-md shadow-lg flex flex-col items-center p-5 ">
                        <h1>Summary</h1>
                        <div className="flex justify-between w-full mt-3">
                            <p>Subtotal</p>
                            <p>
                                Price $:
                                {/* {productInfo.price} */}
                                {cartTotalAmount}
                            </p>
                        </div>
                        <div className="flex justify-between mt-3 w-full">
                            <p>Shipping</p>
                            <p className="">Price $:{Shipping}</p>
                        </div>
                        <div className="flex justify-between w-full mt-3">
                            <p>Shipping discount</p>
                            <p>Price $:{productInfo.price}</p>
                        </div>
                        <div className="flex justify-between w-full mt-3 text-3xl font-bold">
                            <p>Total Cost  </p>
                            <p> $ {total}</p>

                            {/* <p>${ CartAdd +     productInfo.price  }</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <Newlatter />
            <Footer />
        </div>
    );
};
export default Cart;
