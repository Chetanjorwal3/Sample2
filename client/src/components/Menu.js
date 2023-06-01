import React from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";

import { useSelector } from "react-redux";
import CatCardFilter from "./CatcardFilter";
import SubCatCardFilter from "./SubCatcardFilter";
import RenderFilter from "./renderFilter";
import { FaFilter } from "react-icons/fa";
import Loading from "../utils/Loading";

import { FaAward } from "react-icons//fa";
import "../home.css";

const Menu = ({ heading = "Best Dishes", filterbyProps = "Itailian" }) => {
  const productItem = useSelector((state) => state.productItem.productItem);
  const productLoading = useSelector((state) => state.productItem.productLoading);
  // console.log(productLoading)

  console.log(productItem);
  const allCategory = [...new Set(productItem.map((el) => el.category))];
  console.log("allCats", allCategory);

  const [filterBy, setFilterBy] = useState({ category: filterbyProps, subcategory: null });

  const data = useMemo(() => productItem, [productItem, filterbyProps]);

  // console.log(data)
  const [filterData, setFilderData] = useState(data);
  const [subCats, setSubCats] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setFilderData(productItem.filter((el) => el.category?.toLowerCase() === filterBy.category?.toLowerCase()));
  }, [filterBy, filterbyProps, productLoading]);

  const filterByProduct = (by) => {
    setFilterBy(by.toLowerCase());
    //  console.log(filterData)
  };

  const filterByCategory = (by) => {
    console.log(by);
    // setFilterBy({ subCategory: by.toLowerCase() });
    const subCats = [...new Set(productItem.filter((el) => el.category === by).map((el) => el.subcategory))];

    setSubCats(subCats);
    setItems([]);
    setFilterBy({ category: by, subcategory: "" });
  };

  const filterBySubCategory = (by) => {
    console.log(by);
    setFilterBy((prev) => {
      return { ...prev, subcategory: by };
    });
    const items = [...new Set(productItem.filter((el) => el.subcategory === by))];
    setItems([...items]);
  };

  console.log("items", items);
  console.log(subCats);

  return (
    <>
      <section>
        <div className="p-2 md:p-4 " id="menu">
          <div className="flex items-center justify-between mb-3">
            <h2
              className=" capitalize text-2xl md:text-2xl  font-semibold before:rounded-lg relative before:absolute before:-bottom-2 before:content before:left-0 before:w-32 before:h-1 before:bg-gradient-to-tr from-yellow-300 to-yellow-600 transition-all ease-in-out duration-100
        text-fuchsia-300 font__1"
            >
              {heading}
            </h2>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-wrap justify-center my-6">
              {allCategory.map((el) => (
                <div className="hidden md:block mt-2" key={el + "category"}>
                  <CatCardFilter name={el} active={filterBy.category?.toLowerCase() === el?.toLowerCase()} onClick={() => filterByCategory(el)} />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center my-6">
              {subCats.map((el) => (
                <div className="hidden md:block" key={el + "category"}>
                  <SubCatCardFilter name={el} active={filterBy.subcategory?.toLowerCase() === el?.toLowerCase()} onClick={() => filterBySubCategory(el)} />
                </div>
              ))}
            </div>


            <div className="flex md:hidden w-full max-w-xs text-lg  items-center justify-between p-1.5 border mb-2  border-solid rounded-md border-cyan-400">
              <FaFilter className="text-xl mr-2 text-white" />
              <select onChange={(e) => filterByCategory(e.target.value)} className="w-full bg-black text-pink-50 font__5 border-none outline-none">
                {allCategory.map((el) => (
                  <option value={el} className="capitalize bg-s" key={el + "optionMenu"}>
                    {el}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex md:hidden w-full max-w-xs text-lg  items-center border-solid rounded-md justify-between p-1.5 border border-cyan-400 mb-2">
              <FaFilter className="text-xl mr-2 text-white" />
              <select onChange={(e) => filterBySubCategory(e.target.value)} className="w-full bg-black text-pink-50 font__5 border-none outline-none">
                {subCats.map((el) => (
                  <option value={el} className="capitalize bg-s" key={el + "optionMenu"}>
                    {el}
                  </option>
                ))}
              </select>
            </div>

          </div>
          <div className="my-6 flex flex-wrap gap-4 max-w-5xl m-auto justify-center md:justify-start">
            {productLoading ? (
              <div className="bg-slate-200 w-full p-16 flex justify-center items-end">
                <Loading />
              </div>
            ) : (
              items?.map((el) => <RenderFilter key={el.id + "menu"} id={el.id} name={el.title} img={el.imgURL} decs={el.category} price={el.price} />)
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
