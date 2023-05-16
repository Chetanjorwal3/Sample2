// import { async } from "@firebase/util";
import React, { useEffect, useState, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import FeatureCard from "./FeatureCard";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Loading from "../utils/Loading";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import "../home.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const Feature = () => {
    const notHaveData = new Array(7).fill(null)
    // console.log(notHaveData)

  const productItem = useSelector((state) => state.productItem.productItem);
  const productLoading = useSelector(
    (state) => state.productItem.productLoading
  );
  // console.log(productItem);
  const data = useMemo(
    () => productItem.filter((el) => el.category.toLowerCase() == "fruits", []),
    [productItem]
  );
  // console.log(data);

  // const fetureRef = useRef();

  // const nextPart = () => {
  //   fetureRef.current.scrollLeft += 250;
  // };
  // const prevePart = () => {
  //   fetureRef.current.scrollLeft -= 250;
  // };

const scrollRef = React.useRef(null);
const scroll = (direction) => {
      const { current } = scrollRef;
      if (direction === 'left') {
        current.scrollLeft -= 300;
        } 
      else {
          current.scrollLeft += 300;
        }
      }

  

  return (
    <div className="p-2  md:p-4 my-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold capitalize text-fuchsia-300 relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-yellow-300 to-yellow-600 transition-all ease-in-out duration-100 font__1">
          Our Fresh & Healthy Fruits
        </h2>
          {/* <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg md:flex bg-pink-500 hover:bg-pink-800 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={prevePart}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-pink-500 hover:bg-pink-800 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={nextPart}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div> */}
      </div>
      {/* <div
        className="w-full overflow-hidden overflow-x-auto scrollbar-none relative"
        ref={scrollRef}
      >
        <div className="flex">
          {productLoading
            ? new Array(7).fill(null).map((el, index) => {
                return (
                  <div  key={index} className="bg-slate-100  min-w-[250px] min-h-[200] m-2 my-6 p-16 flex justify-center items-end">
                    <Loading />
                  </div>
                );
              })
            : data.map((el) => {
                return (
                  <FeatureCard 
                    key={el.id}
                    id={el.id}
                    img={el.imgURL}
                    title={el.title}
                    price={el.price}
                  />
                );
              })}
        </div>
      </div> */}

        <div className="app__gallery-imagesfruit">
          <div className="app__gallery-images_containerfruit" ref={scrollRef}>
            {/* {[gallery01, gallery02, gallery03, gallery04].map((image, index) => (
              <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                <img src={image} alt="gallery_image" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            ))} */}
            <div className="flex">
          {productLoading
            ? new Array(7).fill(null).map((el, index) => {
                return (
                  <div  key={index} className="bg-slate-100 app__gallery-images_card  min-w-[250px] min-h-[200] m-2 my-6 p-16 flex justify-center items-end">
                    <Loading />
                  </div>
                );
              })
            : data.map((el) => {
                return (
                  <FeatureCard 
                    key={el.id}
                    id={el.id}
                    img={el.imgURL}
                    title={el.title}
                    price={el.price}
                  />
                );
              })}
            </div>
          </div>
          <div className="app__gallery-images_arrowsfruit text-purple-600 hover:text-purple-900 font__1">
            <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
            <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
          </div>
        </div>
    </div>
  );
};

export default Feature;
