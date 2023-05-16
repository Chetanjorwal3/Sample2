import React from "react";
import { MdFoodBank, MdGpsNotFixed } from "react-icons/md";

const CardFilter = ({name,active = false,onClick}) => {

  return (
    <div onClick={onClick} className={`group flex justify-center items-center p-2 ${active ? "bg-red-600" : "bg-white" } hover:bg-red-600 transition-all flex-col rounded min-w-[75px] h-20 cursor-pointer hover:scale-105 mr-3 mt-1 drop-shadow `}>
      <div className="text-2xl rounded-full bg-white p-2 text-red-600 drop-shadow">
        <MdFoodBank />
      </div>
      <h5 className={`mt-0 ${active ? "text-white" : ""} group-hover:text-red-600 capitalize`}>{name}</h5>
    </div>
  );
};

export default CardFilter;
