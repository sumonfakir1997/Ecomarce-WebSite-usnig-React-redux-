import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const Footer = () => {
    const socialIcon = "m-3 rounded-full cursor-pointer p-2 text-white"
    return (
        <div className="flex items-center justify-around p-2">
           <div className=" flex flex-1 flex-wrap p-2">
             <h1 className="text-xxl">ZainkeepsCode</h1>
             <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis non dolorem esse vero eum illum saepe suscipit velit adipisci! Quae iure nam similique corporis voluptates neque nihil magnam temporibus necessitatibus.
             </p>
           
           <div className="flex items-center justify-center mt-3 self-start ">
                <div className={socialIcon + ` bg-blue-700`}>
                    <FacebookIcon/>
                </div>
                <div className={socialIcon + `  bg-orange-500`}>
                    < InstagramIcon/>
                </div>

                <div className={socialIcon + `  bg-sky-600`}>
                   <TwitterIcon />
                </div>
                <div className={socialIcon + `  bg-red-600`}>
                    < PinterestIcon/>
                </div>
           </div>
           </div>
           <div className="flex-1 flex flex-col p-2">
            <div className="flex m-3">
               <LocationOnOutlinedIcon/> 
               <p className="pl-3">State of California</p> 
            </div>
            <div className="flex m-3">
               <LocalPhoneOutlinedIcon/> 
               <p className="pl-3">+088 12345678</p> 
            </div>
            <div className="flex m-3">
               <EmailOutlinedIcon/> 
               <p className="pl-3">sumonfakir1997@gmail.com</p> 
            </div>
             
           </div>
        </div>  
      
    )
}
export default Footer;