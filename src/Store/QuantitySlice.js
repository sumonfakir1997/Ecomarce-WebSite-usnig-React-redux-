// import { createSlice} from "@reduxjs/toolkit";

// export const counterSlice = createSlice({
//     name:'counter',
//     initialState:{
//         count: 0,
//         CartAdd:[]
//     },
//     reducers:{
//         increment:(state) =>{
//             state.count += 1
//         },
//         decrement:(state) => {
//             state.count > 0 ? state.count -= 1 : state.count = 0
//         },

// decreaseCart: (state, action)=> {
//     const cartIndex = state.CartAdd.findIndex((CartAdd) => CartAdd.id === action.payload.id
//     );
//     if (state.CartAdd[cartIndex].cartQuantity > 1) {
//       state.CartAdd[cartIndex].cartQuantity -= 1;
//     } else if (state.CartAdd[cartIndex].cartQuantity === 1) {
//       const nextCart = state.CartAdd.filter(
//         (CartAdd) => CartAdd.id !== action.payload.id);
//       state.CartAdd = nextCart;
//     }
//   }
//  },
// })
// export const { increment, decrement, decreaseCart } = counterSlice.actions

// export default counterSlice.reducer
