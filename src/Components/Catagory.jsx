import React, { useEffect } from "react";
// import { useEffect } from "react";
import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { Link as scroll } from "react-scroll";
// import { apiTopProducts } from "../Apifolder/TopProductsApi";
// import Products from "./Products";

const Catagory = ({item}) => {
    const navigate = useNavigate();
    const {id} = useParams()
   
    
    useEffect(() => {
        console.log("manto", item)
    }, [item])
    // const {title } = item. title.join("");
    const handleOnClick = useCallback(() =>{
        navigate(`/catagory-page/${item.title.replace(/ /g, "-")}`)
    })

    return (
        <div className="flex flex-1 relative m-2 shadow-lg rounded-md overflow-hidden" >

        <img className="w-full" src={item.src} alt="catagory_image"  />

        <div className="flex absolute w-full h-full top-0 left-0 items-center justify-center flex-col">
            <h2 className="text-white font-medium text-[30px]">{item.title}</h2>
            <button onClick={handleOnClick } className={`btn mt-3`} >See More </button>
        </div>  
    
    </div> 
    )
} 
export default Catagory;