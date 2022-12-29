import { createSlice, current } from "@reduxjs/toolkit";
import { useEffect, useReducer, useRef } from "react";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";



// const quantityupdate = useSelector(handleDecreaseCart())

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    count: 0,
    CartAdd: [],
    price: [""],
    Shipping: 5,
    id: [],
    cartTotalAmount: 0,
    cartQuantity: 1,
    total: 0,
    quantity: 1,
  },
 
  reducers: {
    productAdd: (state, actions) => {
      state.CartAdd = [...state.CartAdd, { ...actions.payload, quantity: 1 }];
    },
    productDelect: (state, action) => {
      const nextCart = state.CartAdd.filter(
        (CartAdd) => CartAdd.id !== action.payload.id
      );
      state.CartAdd = nextCart;
      
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      let Shipping = 0;
      // let quantity = 1;
      state .CartAdd.map((item) => {
        const { price, cartQuantity }= item ;
        
        // const {quantity} = handleDecreaseCart.quantity 
        //  const quantity  = useSelector(state => state.handleDecreaseCart.value.quantity )
        console.log(`new price `,price );
        // console.log(`hee quantity`, {quantity});

        // const quantityRef = useRef(null)
        
        // useEffect(() =>{
        //   quantityRef.current.quantity()
        // },[quantity])

        console.log(`new quantity of cart `,cartQuantity);
        state.CartAdd.forEach((additem) => {
// new add 
        amount += additem.amount;
        total += additem.price  * cartQuantity;

      })
      });
      // const [price, cartQuantity] = additem
      state.amount = amount;
      state.total = total  ;

      // state.quantity = quantity ;
      // console.log('add item',additem)
      // console.log('cartquantity',cartQuantity)
      // console.log('price',price)
      console.log(`amount of totals  sumon nnnn`, { total });
      // console.log('quantity',{quantity})
      // console.log('price',{additem.price});
    },
    getTotals: (state) => {
      // console.log("CartAdd", current(state.CartAdd));
      let total = state.CartAdd.reduce((accumulator, currentValue) => {
        // ----
        // const [price, cartQuantity] = CartAdd
        // const total = price * cartQuantity
        // ----
        // const { price } = CartAdd;
        // // const itemTotal = price;
        // // const totalPrice = cartTotal + CartAdd;
        //  cartTotal.total += price
        //  console.log(cartTotal,`sumonnnnnnnnnnnn`);
        // return cartTotal; //ay kahne sob gola price store hosce
        return accumulator + `${currentValue.price.toString()}+`;
      }, "");
      // let total = state.CartAdd.map(value => value.price.toString())
      // console.log("total test", total)
      // let joined_string = total.join("+")
      // console.log("total string", total)
      // console.log(`new try`,total)
      state.cartTotalAmount = total.slice(0, -1);
    },
    ADD_QUANTITY: (state, action) => {
      state.CartAdd = action.payload;
    },
    DELETE_QUANTITY: (state, action) => {
      state.CartAdd = action.payload;
    },

  },
});

export const {
  productAdd,
  productDelect,
  decreaseCart,
  getTotals,
  calculateTotals,
  ADD_QUANTITY,
  DELETE_QUANTITY,
  deleteQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
