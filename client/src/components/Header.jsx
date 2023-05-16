import React, { useEffect } from "react";
//import Logo from "./Logo";

//Google Auth
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import "../index.css";

import logo from "../assest/img/logo.png"
import {
  MdShoppingCart,
  MdLogout,
  MdAddCircleOutline,
  MdVerified,
} from "react-icons/md";


import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { useSelector, usedDispatch, useDispatch } from "react-redux";
import { setLoginGoogle } from "../redux/userSlice";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  //cart product item
  const cartProductNumber = useSelector(state => state.cartProduct.cartProductItem).length
  // console.log(cartProductNumber)

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //firebase authentication
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  //
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = async () => {
    if (!user.name) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);

      dispatch(
        setLoginGoogle({
          name: providerData[0].displayName,
          img: providerData[0].photoURL,
          email: providerData[0].email,
          uid: providerData[0].uid,
          token: refreshToken,
        })
      );

      //set user detail in localstorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: providerData[0].displayName,
          img: providerData[0].photoURL,
          email: providerData[0].email,
          uid: providerData[0].uid,
          token: refreshToken,
        })
      );
    } else {
      setIsLogin((preve) => !preve);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(
      setLoginGoogle({
        name: "",
        img: "",
        email: "",
        uid: "",
        token: "",
      })
    );
    setIsLogin(false)
  };


 

  return (
    <header className="fixed z-50 w-screen bg-black text-white px-1 p-3 md:p-6 md:px-7 shadow-md select-none">
      {/**desktop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2 " onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="flex items-center gap-2 ">
            {/* <Logo className="w-20 object-cover" alt="logo" /> */}
            <img src={logo} className=" w-12 object-cover" alt="logo" />
            <p className="font__2 flex text-white font-thin text-3xl m-0 ">Udaipur City</p>
          </div>
        </Link>

        {user.email && (
          <div className="flex items-center justify-center text-white text-base">
            <MdVerified />
            <p className="px-1 m-0 lg:block">{user.name}</p>
            {/* {process.env.REACT_APP_ADMIN_ID === user.email && */}
            { "badshahrocks1@gmail.com" === user.email &&
              <p className="text-sm font-medium text-lime-200 bg-red-600 px-3 rounded-full m-0">
              Admin
              </p>
            }
            
          </div>
        )}

        <div className="flex items-center gap-6 mr-5 ">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-6 h-full m-0 font__1"
          >
            <NavLink  to="/"  onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}  className={({isActive}) => `text-base  text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer box-border h-full flex items-center hover:border-b-4 hover:border-yellow-400 hover:font-semibold p-1  ${isActive ? "border-b-2 border-green-600 font-semibold" : ""} `} end>
              Home
            </NavLink>
            <NavLink to={"/menu"}  onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})} className={({isActive}) => `text-base text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  box-border h-full flex items-center hover:border-b-4 hover:border-yellow-400 hover:font-semibold p-1 ${isActive ? "border-b-2 border-green-600 font-semibold" : ""} `}>
              Menu
            </NavLink>
            <NavLink to={"/about"} onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}  className={({isActive}) =>`text-base text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  box-border h-full flex items-center hover:border-b-4 hover:border-yellow-400 hover:font-semibold p-1 ${isActive ? "border-b-2 border-green-600 font-semibold" : ""} `}>
              About Us
            </NavLink>
            <NavLink to={"service"} onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}  className={({isActive}) =>`text-base text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  box-border h-full flex items-center hover:border-b-4 hover:border-yellow-400 hover:font-semibold p-1 ${isActive ? "border-b-2 border-green-600 font-semibold" : ""} `}>
              Service
            </NavLink>
          </motion.ul>
          <motion.div
            whileTap={{ scale: 0.8 }}
            className="relative flex items-center justify-center"
          >
          <Link to={"/cart"} onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}>
            <MdShoppingCart className="text-white text-2xl cursor-pointer" />
            <div className="absolute top-0 -right-2 w-4 h-4  rounded-full bg-red-600 -translate-y-1/3 text-center">
              <p className="text-xs text-white font-semibold">
                {cartProductNumber}
              </p>
            </div>
            </Link>
          </motion.div>


          <div className="relative">
            <motion.div
              whileTap={{ scale: 0.6 }}
              onClick={handleLogin}
              className="flex shadow-lg overflow-hidden w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            >
              {user && user.img ? (
                <img src={user.img} className="w-full h-full" />
              ) : (
                <FaRegUser className="text-white w-8 h-8" />
              )}
            </motion.div>
            {isLogin && (

              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="absolute right-0 bg-white shadow-lg top-9 p-1 rounded mt-1 mr-2"
              >
              <div className="arrowShow"></div>
                <div className="rounded overflow-hidden font__5">
                  {/* {process.env.REACT_APP_ADMIN_ID === user.email && */}
                  { "badshahrocks1@gmail.com" === user.email &&
                    <Link
                    to={"./createitem"}
                    onClick={()=>setIsLogin(false)}

                    className="whitespace-nowrap flex hover:bg-green-400 hover:text-textColor text-gray-700 py-1 px-2 items-center w-full gap-3"
                  >
                    New Item
                    <MdAddCircleOutline className=" flex items-center justify-items-center" />
                  </Link>
                  }
                </div>

                <div className="rounded overflow-hidden font__5">
                  <Link
                    onClick={handleLogout}
                    to={"./"}
                    className="whitespace-nowrap flex hover:bg-red-500 bg-red-700 py-1 px-2 text-gray-700 font-semibold items-center w-full gap-3"
                  >
                    Logout
                    <MdLogout className="ml-auto " />
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full  h-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to={"/"} className="py-2">
            <div className="flex items-center gap-0 ">
              {/* <Logo /> */}
              <img src={logo} className="w-8 object-cover" alt="logo" />
              <p className=" flex font__2 text-white font-thin text-3xl m-0">Udaipur City</p>
            </div>
          </Link>
        </div>

        {user.email && (
          <div className="flex items-center text-white text-base">
            <MdVerified />
            <p className="px-1 m-0 lg:block">{user.name}</p>
            {/* {process.env.REACT_APP_ADMIN_ID === user.email && */}
            {"badshahrocks1@gmail.com" === user.email &&
              <p className="flex text-xs text-lime-200 bg-red-600 px-1 rounded-full m-0">
              Admin
            </p>
            }
            
          </div>
        )}

        <div className="relative flex gap-4">
          <motion.div
            whileTap={{ scale: 0.8 }}
            className="relative flex items-center justify-center"
          >
          <Link to={"/cart"} onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}>
            <MdShoppingCart className="text-white text-2xl cursor-pointer" />
            <div className="absolute top-1 -right-2 w-4 h-4  rounded-full bg-red-600 -translate-y-1/3 text-center">
              <p className="text-xs text-white font-semibold">
              {cartProductNumber}
              </p>
            </div>
            </Link>

          </motion.div>
          <motion.div
            whileTap={{ scale: 0.8 }}
            onClick={handleLogin}
            className="flex justify-center items-center shadow-lg overflow-hidden w-8 min-w-[40px] h-8 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full m-1"
          >
            {user && user.img ? (
              <img src={user.img} className="w-full h-full" />
            ) : (
              <FaRegUser className="text-white w-8 h-8" />
            )}
          </motion.div>
          {isLogin && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="absolute right-0 w-screen z-40 bg-lime-100 shadow-lg top-12 px-4 py-6 rounded "
            >
            <div className="arrowShow"></div>
              <div className="w-full font__1">
                <ul className="flex flex-col  h-full text-slate-800 hover:border-b-2 hover:border-green-400  ">
                  <NavLink to="/" onClick={()=>setIsLogin(false)} className="text-base  whitespace-nowrap flex 
                  py-2 rounded hover:font-semibold px-3 items-center w-full gap-3 text-slate-800 hover:text-yellow-400">
                    Home
                  </NavLink>
                  <NavLink to={"/menu"} onClick={()=>setIsLogin(false)}  className="text-base  whitespace-nowrap flex 
                  py-2 rounded hover:font-semibold px-3 items-center w-full gap-3 text-slate-800 hover:text-yellow-400 ">
                    Menu
                  </NavLink>
                  <NavLink to={"about"} onClick={()=>setIsLogin(false)} className="text-base  whitespace-nowrap flex 
                 text-slate-800 hover:text-yellow-400 py-2 rounded hover:font-semibold px-3 items-center w-full gap-3 ">
                    About Us
                  </NavLink>
                  <NavLink to={"service"} onClick={()=>setIsLogin(false)} className="text-base  whitespace-nowrap 
                  flex text-slate-800 hover:text-yellow-400 py-2 rounded hover:font-semibold px-3 items-center w-full gap-3 ">
                    Service
                  </NavLink>
                </ul>
              </div>
              <div className="rounded overflow-hidden font__5">
                {/* { process.env.REACT_APP_ADMIN_ID === user.email && */}
                { "badshahrocks1@gmail.com" === user.email &&
                <Link
                  to={"./createitem"}
                  onClick={()=>setIsLogin(false)}
                  className="whitespace-nowrap flex hover:bg-green-400 hover:text-textColor text-gray-700
                   py-2 px-3 items-center w-full gap-3 hover:font-semibold"
                >
                  New Item
                  <MdAddCircleOutline className="ml-auto " />
                </Link>
              }
              </div>
              <div className="rounded overflow-hidden font__5">
                <div
                  onClick={handleLogout}
                  className="whitespace-nowrap flex bg-red-800 text-white hover:bg-red-500 py-1 px-3 items-center w-full gap-3"
                >
                  Logout ({user.name && user.name.split(" ")[0]})
                  <MdLogout className="ml-auto " />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
