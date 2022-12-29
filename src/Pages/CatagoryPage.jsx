import React, { useEffect } from "react";
import Announce from "../Components/Announce";
// import home from "./Home";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import Newlatter from "../Components/Newslatter";
import Footer from "../Components/Footer";



const CatagoryPage = () => {


    useEffect(() => {
        window.scrollTo(0, 0)

        return () => {
            // console.log("i am destroyed")
        }
    })

    return(
        <div className="category-page">
            <Announce/>
            <Navbar/>
            <div className="flex flex-col text-xxxl p-5 ">
                <h1 className="text-xxxl" >Men's Cloth</h1>
                <div className="flex items-center justify-between mt-3">
                   <div className="flex"> 
                    <p>Filter by</p> 
                    <select defaultValue={'DEFAULT'} className="ml-3 border-2 border-silver ">
                        <option value='DEFAULT'disabled >Size</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                    <select  defaultValue={'defualt'} className="ml-3 border-2 border-silver">
                        <option value='default'disabled > Color</option>
                        <option>Yellow</option>
                        <option>Blue</option>
                        <option>Red</option>
                    </select>
                    </div>
                    <div className="flex">
                        <p>Sort by</p>
                        <select className="ml-3 border-2 border-silver">
                            <option>Newset(first)</option>
                            <option>Oldest (first)</option>
                            <option>Price (Asc) </option>
                            <option>Price (Des)</option>
                        </select>
                    </div>


                </div>
            </div>


            <Products/> 
            <Newlatter/>
            <Footer/>
            
        </div>
    )
}

export default CatagoryPage;