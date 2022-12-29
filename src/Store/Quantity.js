import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import _ from "lodash"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DELETE_QUANTITY, ADD_QUANTITY, productDelect,calculateTotals } from "../Store/CartStore/CartSlice"
import { useSelector } from "react-redux";

const Counter = ({ item }) => {
    const dispatch = useDispatch();

//    const {quantity} = handleDecreaseCart;

    const handleIncreaseCart = () => {
        let temp_cart_add = _.cloneDeep(CartAdd)
        let temp_cart = temp_cart_add.map(value => {
            if (value.id == item.id) {
                if (value.quantity < value.cartQuantity) {
                    value.quantity += 1
                } else {
                    alert("Product out of stock")
                    // toast.warning(`Out of Stocks`,{position:toast.POSITION.BOTTOM_CENTER})
                    //   toast.warning("Sorry out of Stocks ")
                }
                return value
            }
            else {
                return value
            }
        })
        console.log("temp_cart", temp_cart)
        dispatch(ADD_QUANTITY(temp_cart))

    }
    // const forwardQuantityRef = React.forwardRef( handleIncreaseCart)

    // export default forwardQuantityRef;


    const handleDecreaseCart = () => {
        let temp_cart_delete = _.cloneDeep(CartAdd)
        let temp_cart = temp_cart_delete.map(value => {
            if (value.id == item.id) {
                // if (value.quantity !== 0) {
                //     if (value.quantity -= 1 || value.quantity == 0) {
                //         dispatch(productDelect())
                //     }
                // }
                //     return value
                value.quantity -= 1
                if(value.quantity == 0){
                    dispatch(productDelect(item));
                    console.log(productDelect(item));
                    return {}
                }
                else {
                    return value
                }
                
            } else {
                toast.warning(`Out of Stocks`,{position:toast.POSITION.BOTTOM_CENTER})
                return value
                 
            }
            
        })
        const actual_cart = temp_cart.filter(value => Object.keys(value).length > 0)
        console.log("temp_cart delete", temp_cart)
        dispatch( DELETE_QUANTITY(actual_cart))
    }

    const { CartAdd } = useSelector(state => state.cart)
    const btnStyle = "bg-navbg text-white w-8 flex items-center justify-center  rounded-l-md cursor-pointer";
    const countValueStyle = " flex items-center justify-center  border-1 border-navbg px-2";
    // console.log(`cartQuantity`,cartQuantity);
    return (
        <div className="flex items-center justify-center text-2xl">
            Quantity
            <div className="ml-5 shadow-md flex">
                <div className={btnStyle} onClick={() => handleDecreaseCart()} >
                    <button >  - </button>
                </div>

                <div className={countValueStyle}> {item.quantity}
                </div>

                <div className={btnStyle}
                    onClick={() => handleIncreaseCart()}
                >
                    <button  > + </button>
                </div>
            </div>

        </div>
    );
}
export default Counter;