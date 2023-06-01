import React from "react";
import { MdOutlineStarPurple500, MdOutlineStarHalf } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import Menu from "../components/Menu";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCartProduct } from "../redux/cartSlice";

const MenuStatic = () => {
  const productItem = useSelector(state => state.productItem.productItem)
//   const params = useParams()
  const navigate = useNavigate()

  const data = productItem.filter(product => product.id ===  "1685611982604" ,[])[0]
  // console.log(data)

  const dispatch = useDispatch()
  const cartProduct = useSelector(state => state.cartProduct)

  const handleCartProduct = (e)=>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(setCartProduct(data))  
  }

  const handleBuyProduct = (e)=>{
      handleCartProduct(e)
      navigate("/cart")

  }


  return (
    <div className="h-full font__5">
      <div className="w-full  p-4 max-w-3xl m-auto h-auto flex flex-col sm:flex-row" >
        <div className="group w-full md:min-w-350 md:w-80 md:p-9 bg-slate-100 cursor-pointer">
          <img className="w-full  rounded group-hover:scale-125 transition-all " src={data.imgURL} />
        </div>
        <div className="h-full sm:px-6 py-4">
          <h1 className="text-lime-200 font-bold capitalize text-xl md:text-2xl">
            {data.title}
          </h1>
          <div>
            <div className="text-red-600 flex items-center my-2">
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarHalf />
              <span className="text-white px-1">8.4</span>
              <span className="bg-gray-100 p-1 rounded-full"></span>
              <span className="px-1 text-pink-50">{data.category}</span>
            </div>
          </div>

          <p className="text-xl font-semibold text-white">
            <span className=" text-red-600">₹ </span>
            {data.price}
          </p>

          <div className="flex gap-4 w-full my-2">
            <button className="flex justify-center items-center py-1 px-5 border-2 border-solid w-full  min-w-[100px] max-w-[250px] hover:bg-green-400 hover:text-white font-semibold rounded bg-lime-50" onClick={handleBuyProduct}>
              <span className=" whitespace-nowrap">Buy</span>
            </button>
            <button className="flex justify-center items-center py-1 px-5 border-2 border-solid  w-full min-w-[100px] max-w-[200px] hover:bg-red-600 hover:text-white font-semibold rounded bg-lime-50" onClick={handleCartProduct}>
              <span className="whitespace-nowrap">Add to Cart</span>
              <FaCartPlus className="text-xl text-slate-600 hover:text-red-600 cursor-pointer self-end mx-2" />
            </button>
          </div>

          <div>
            <h4 className="font-semibold text-teal-200">Descriptions : </h4>
            <span className="text-pink-50">{data.desc}</span>
          </div>
        </div>
      </div>
      <Menu heading={"Our Dishes"} filterbyProps={data.category} />
    </div>
  );
};

export default MenuStatic;
