import React from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { Register } from "./Register";
import { Singin } from "./Singin";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const style = "text-sm cursor-pointer ml-[25px]";
    // const dispatch = useDispatch();
    // const cartState = useSelector((state) => state.cart.item ) ;
    return(
       <div className=" relative h-15 shadow-md z-10  " >
         <div className="wrapper px-5 p-2.5 flex  justify-between ">
            <div className="left flex flex-1 items-center">
                <div className="cursor-pointer text-md">
                    En
                </div>
                <div className="searchInput flex border-2  border-indigo-200
                border-solid rounded-md items-center ml-2.5 p-[5px]focus-within:border-sky-600 transition-all ">
                    <input className="input outline-none pl-2 " type='text' />
                    <SearchRoundedIcon />
                </div>
            </div>

            <div className=" center text-  flex-1 text-center">
                <div className=" logo  font-bold text-lg">
                    Summer Kings
                </div>
            </div>
            {/* right  */}
            <div className=" righ flex flex-1 justify-end items-center ">
                <div className={style}>Register</div>
                <NavLink
                to = "/Singin">
                    <div className={style}>Sing in  </div>
                </NavLink>
               
                <div className={style}>
                    <NavLink
                     to="/cart" >
                        <Badge badgeContent={2} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </NavLink>
                   
                </div>
            </div>

         </div>
       </div>
    )
}

export default Navbar;