import React from "react";
import SendIcon from '@mui/icons-material/Send';

const Newlatter = () => {
    return(
        <div className="flex justify-center items-center h-87.5 w-full flex-col bg-purple-300">
               <h1 className="text-xxxxl font-bold">
                    NEWSLETTER
               </h1>
               <h2 className="text-[20px] mt-2">
                    Always in touch with us for your faourite products 
               </h2>

               <div className="flex mt-12 py-1 items-center justify-between min-w-[30rem] min-h-[2rem]">
                    <input type="email" 
                    placeholder="email"
                    className=" border-none pl-5 flex-[7] outline-none"
                    
                    />
                    <button className="bg-green-500 flex-1 h-full">
                        <SendIcon className = "text-white" /> 
                    </button>
               </div>
        </div>
    )
}
export default Newlatter;