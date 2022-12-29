import {React, useState } from "react";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { ApiSlider } from "../Apifolder/SliderApi"; 
import "../Components/Slider.css";
import {useNavigate } from "react-router-dom"
import { useCallback } from "react";

const Slider = () => {
    const navigate = useNavigate()
    const handleOnClick = useCallback(() =>{
        navigate('/product-Page')
    })
    
    
    const [slider]= useState(ApiSlider)
    const [activeSlide, setActiveSlide] = useState(0)
    const arrowStyle = " rounded-full bg-gray-50 flex justify-center items-center shadow-sm hover:cursor-pointer ";

    const nextSlide = () =>{
        if(activeSlide === slider.length - 1){
            setActiveSlide(0)
        } else {
            setActiveSlide(activeSlide + 1 )
        }
    }
    const prevousSlide = () => {
        if(activeSlide === 0){
            setActiveSlide(slider.length - 1)
        } else {
            setActiveSlide(activeSlide - 1)
        }
    
    }
    return(
        // h-135 = 540px this height fixed for icons
        <div className="parent h-135 bg-white flex items-center justify-between">
            <div className={arrowStyle}>
              <ArrowLeftIcon className="text-xxxxl" onClick={prevousSlide} />
            </div> 

            {slider.map((slider, index) => {
                if(index === activeSlide) {
                    return(
                        <div className={`wrapper flex relative w-full h-125 justify-center items-center shadow-2xl rounded-lg border-gray-50 border-10 overflow-hidden `+ slider.background} key={index}>
                        <div className="slide flex flex-1 items-center justify-center h-full">
                            <div className="h-full object-cover  ">
                                <img className="h-full"
                                src={slider.src } alt="slide_image"
                                />  
                            </div>
                            <div className="description flex flex-col flex-1 place-items-start justify-center ml-11  ">
                                <h2 className="text-sText">{slider.content.h2}</h2>
                                <p className=" mb-2 text-xxxl">{slider.content.p}</p>
                                <button onClick={handleOnClick}  className="btn">Shop Now </button>

                            </div>
                        </div>
                    </div>
                    )
                }
            })}
          
 

            <div className={arrowStyle}>
                <ArrowRightIcon className="text-xxxxl" onClick={nextSlide} />
            </div>

        
        
        </div>
        
    )
}
export default Slider; 