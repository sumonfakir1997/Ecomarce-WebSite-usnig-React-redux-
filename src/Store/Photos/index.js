import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";

import { getPhotos } from "./PhotoSlice";

const Photo = () => {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photosState.photos);

    useEffect (() => {
        dispatch(getPhotos());
    },[dispatch]);
    // console.log(`here api photos`,photos)
    // console.log(`sumon `)
    return(
        <div className="photo bg-blue-500">
            <h1 className="text-center">api 100 photos </h1>
            <p className="text-center">lorem 10</p>
            <hr/>
            <div className="photos grid grid-cols-4">
                {photos.map(photo => 
                   <img  className="w-[400]"
                   key={photo.id}
                   alt = {photo.author}
                   src= {photo.download_url}
                //    width="400px"
                //    height="400px"
                      />
                    )}
            </div>
        </div>
        
    );
}
export default Photo;