import React, { useContext } from "react";
import Announce from "../Components/Announce";
import Navbar from "../Components/Navbar";
import Newlatter from "../Components/Newslatter";
import Slider from "../Components/Slider";
import Products from "../Components/Products";
import Catagories from "../Components/Catagories";
import Footer from "../Components/Footer";
import getPhotos from "../Store/Photos/PhotoSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Photocontext } from "../index";

const Home = () => {
  // const context = useContext(Photocontext);
  // console.log("home context api ", context);
  // const dispatch = useDispatch();
  // const get = useSelector(getPhotos());
  // console.log(get);

  // getPhotos();
  // const dispatch = useDispatch();
  //   const photos = useSelector(state => state.photosState.photos);

  //   useEffect (() => {
  //       dispatch(getPhotos());
  //   },[dispatch])
  //   console.log(getPhotos);

  return (
    <div className="home-page">
      <Announce />
      <Navbar />
      <Slider />
      <Catagories />
      <Products />
      <Newlatter />


      <Footer />
    </div>
  );
};
export default Home;
