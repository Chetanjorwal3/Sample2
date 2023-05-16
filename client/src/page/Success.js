import React, { useEffect } from 'react';
import iconSuccess from "../assest/img/success.gif";
import { useNavigate } from "react-router-dom";

export default function Success () {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 3000)
  }, [])
  return (
    <div className='w-full h-full flex justify-center items-center pt-10 px-2  md:p-10'>
        <div className='bg-black w-full max-w-md text-center flex justify-center items-center flex-col rounded'>
            <div className=''>
                <img src={iconSuccess} className="h-40" />
            </div>
            <h1 className='text-green-600 font__1 font-bold text-lg py-3 '>Payment successful</h1>
            <h2 className='text-slate-300 font__1 font-bold text-lg py-3 '>THANK YOU</h2>
            <h1 className='text-slate-300 font__1 font-bold text-lg py-3 '>
              for shopping with us
            </h1>
            <h1 className='text-slate-300 font__1 font-bold text-lg py-3 '>
              Your Order is getting ready and will be deliver shortly
            </h1>

        </div>
    </div>
  )
}


