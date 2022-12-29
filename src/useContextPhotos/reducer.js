// import React, {useContext}from "react";
// import { useReducer } from "react";
// import { useEffect } from "react";
// import axios from "axios";
// import { ContextPhoto, photoContext } from "./Context";

// // export const initialState = {
// //   isloading: false,
// //   error: "",
// //   photos: [],
// // };
// export const reducer = (state, action) => {
//   switch (action.type) {
//     case "PENDING":
//       return {
//         // ...state,
//         isloading: true,
//       };
//     case "FULLFILD":
//       return {
//         isloading: false,
//         photos: action.payload,
//       };
//     case "ERROR":
//       return {
//         isloading: false,
//         error: "code problem !!!",
//       };
//     default:
//       return state;
//   }
// };
//  const FetchPhotoReducer = () => {
// //   const [state, dispatch] = useReducer(reducer, initialState);
//    const context = useContext(photoContext);
//    console.log(context);
   
// //   useEffect(() => {
// //     axios
// //       .get(`https://picsum.photos/v2/list?page=2&limit=8`)
// //       .then((response) => {
// //         dispatch({ type: "FULLFILD", payload: response.data });
// //       })
// //     //   .catch((error) => {
// //     //     dispatch({ type: "ERROR" });
// //     //   });
// //   }, []);

//   return (
//     'sumon'
//     // <div>
//     //     <div className="photos grid grid-cols-4">
//     //             {photos.map(photo => 
//     //                <img  
//     //                key={photo.id}
//     //                alt = {photo.author}
//     //                src= {photo.download_url}
//     //                   />
//     //                 )}
//     //         </div>

//     // </div>
//   )
// };
// export default FetchPhotoReducer;
