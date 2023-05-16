import React, { useEffect } from 'react'
import iconCancel from "../assest/img/cancelled.gif";
import { useNavigate } from "react-router-dom";

export default function Cancelled () {
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
                <img src={iconCancel} className="h-40" />
            </div>
            <h1 className='text-red-600 font__1 font-bold text-lg py-3 '>Payment Cancelled</h1>
            <h1 className='text-slate-300 font__1 font-bold text-lg py-3 '>
              We're sorry to see you leave.
            </h1>
        </div>
    </div>
  )
}
