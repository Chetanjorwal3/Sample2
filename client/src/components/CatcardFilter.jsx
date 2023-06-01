import React from "react";
import { MdFoodBank, MdGpsNotFixed } from "react-icons/md";
import { BsShopWindow } from "react-icons/bs";
import "../home.css";

const CatCardFilter = ({ name, active = false, onClick }) => {
  return (
    <div>
      <div onClick={onClick} className={`group flex justify-center items-center p-2 ${active ? " bg-black" : "bg-black"} text-purple-300 transition-all flex-col font__5 rounded min-w-[75px] h-20 cursor-pointer hover:scale-105 mr-3 mt-1 drop-shadow `}>
        <div className={`text-6xl  bg-black p-2 drop-shadow hover:text-orange-200 ${active ? " text-orange-500" : ""}`}>
          <BsShopWindow />
        </div>
        <h5 className={`${active ? " text-orange-200" : ""} group-hover:text-cyan-300 capitalize`}>{name}</h5>
      </div>
    </div>
  );
};

export default CatCardFilter;
