import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { JeansApi } from "../Apifolder/JeansApi";


const Jeans = () => {
    const navigate = useNavigate()
    const handleClick = useCallback(()=> {
        navigate('/catagory-page/jeans')
    } )
    return(
        <div className="">
            {
                JeansApi .map((product,index)=> (
                    
                        <Jeans item={product} key={index}/>
                    
                ))
                
            }

        </div>
    )
}
export default Jeans;