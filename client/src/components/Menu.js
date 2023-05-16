import React from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";

import { useSelector } from "react-redux";
import CardFilter from "./cardFilter";
import RenderFilter from "./renderFilter";
import {FaFilter} from "react-icons/fa"
import Loading from "../utils/Loading";

import { FaAward } from "react-icons//fa";
import "../home.css";

const Menu = ({heading="Our Menu",filterbyProps="fruits"}) => {
  const productItem = useSelector((state) => state.productItem.productItem);
  const productLoading = useSelector(state => state.productItem.productLoading)
    // console.log(productLoading)
  const allCategory = [
    ...new Set(
      productItem.map((el) => el.category)
    ),
  ];
  const [filterBy, setFilterBy] = useState(filterbyProps);

  const data = useMemo(
    () => productItem,
    [productItem,filterbyProps]
  );

  // console.log(data)
  const [filterData, setFilderData] = useState(data);

  useEffect(() => {
    setFilderData(
      productItem.filter(
        (el) => el.category.toLowerCase() == filterBy.toLowerCase()
      )
    );
  }, [filterBy,filterbyProps,productLoading]);

  const filterByProduct = (by) => {
     setFilterBy(by.toLowerCase());
    //  console.log(filterData)
  };
  

  return (
    <><section>
    <div className="p-2 md:p-4 " id="menu">
      <div className="flex items-center justify-between mb-3">
        <h2 className=" capitalize text-2xl md:text-2xl  font-semibold before:rounded-lg relative before:absolute before:-bottom-2 before:content before:left-0 before:w-32 before:h-1 before:bg-gradient-to-tr from-yellow-300 to-yellow-600 transition-all ease-in-out duration-100
        text-fuchsia-300 font__1">
          { heading}
        </h2>
      </div>
      <div className="flex flex-wrap justify-center my-6">
        {allCategory.map((el) => (
          
            <div className="hidden md:block" key={el+"category"}>
              <CardFilter
                name={el}
                active={filterBy.toLowerCase() == el.toLowerCase() }
                onClick={() => filterByProduct(el)}
                
              />
            </div>
          
        ))}
        <div className="flex md:hidden w-full max-w-xs text-lg  items-center border-2 border-solid rounded px-3 py-1">
          <FaFilter className="text-xl mr-2 text-white"/>
          <select
            onChange={(e) => filterByProduct(e.target.value)}
            className="w-full bg-black text-pink-50 font__5 border-none outline-none"
          >
            {allCategory.map((el) => (
              <option value={el} className="capitalize bg-s" key={el+"optionMenu"}>
                {el}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="my-6 flex flex-wrap gap-4 max-w-5xl m-auto justify-center md:justify-start">
        {productLoading ? 
          (
          <div className="bg-slate-200 w-full p-16 flex justify-center items-end">
            <Loading/>
          </div>
        )
        : (
          filterData.map((el) => (
            <RenderFilter
              key={el.id+"menu"}
              id={el.id}
              name={el.title}
              img={el.imgURL}
              decs={el.category}
              price={el.price}
              
            />
          ))
        )}
      </div>
    </div>
    </section>
  </>


  );
};

export default Menu;
