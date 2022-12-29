import {React, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const Announce = () => {
    const [annoStyle,setAnnoStyle] = useState('bg-navbg  font-bold text-white flex  justify-center items-center ')

    const handleClose = () => {
        setAnnoStyle(annoStyle + "hidden")
        
        console.log("hi")
    }
    return(
        <div className={annoStyle} >
            <h2 className=" p-2">Hurry up its 40% off now </h2>
            <CloseIcon className="cursor-pointer mx-4 text-white" onClick = {handleClose} />
        </div>
    )
}
export default Announce; 