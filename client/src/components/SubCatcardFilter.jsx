import React from "react";
import { MdFoodBank, MdGpsNotFixed } from "react-icons/md";
import { BsShopWindow } from "react-icons/bs";
import "../home.css";

const SubCatCardFilter = ({name,active = false,onClick}) => {

  return (
    <div onClick={onClick} className={`group flex justify-center items-center p-2 ${active ? " bg-black" : "bg-black" } text-cyan-300 transition-all flex-col rounded min-w-[75px] h-20 cursor-pointer font__5 hover:scale-105 mr-3 mt-1 drop-shadow `}>
      <div className="text-6xl  bg-black p-2 text-orange-200 drop-shadow hover:text-pink-600">
        <MdFoodBank />
      </div>
      <h6 className={`mt-0 ${active ? " text-lime-200 text-xl" : ""} group-hover:text-pink-600 capitalize`}>{name}</h6>
    </div>
  );
};

export default SubCatCardFilter;
