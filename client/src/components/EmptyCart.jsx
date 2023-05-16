import React from "react";
import EmptyImage from "../assest/img/empty-red.gif";

const EmptyCart = () => {
  return (
    <div className="flex justify-center items-center  flex-col">
      <div className="h-60 md:h-96">
        <img src={EmptyImage} className="h-full " />
      </div>
      <h2 className="text-red-300 font-semibold text-3xl my-2">Your cart is empty</h2>
    </div>
  );
};

export default EmptyCart;
