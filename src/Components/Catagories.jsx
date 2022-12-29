import React from "react";
import {apiCategories} from "../Apifolder/CatagoriesApi";
import Catagory from "./Catagory";
 
const Catagories = () => {
   
    return (
        <div className="flex justify-between p-5 ">
            {
                apiCategories.map((catagory,index) => (
                
                 <Catagory item = {catagory} key = {index} />
                )) 
            } 
        </div>
    )
}

export default Catagories ;