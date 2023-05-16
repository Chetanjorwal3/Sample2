import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Label, Row } from "reactstrap";

const PaymentSummary = ({ cartTotal, deliveryCharge, Total, Contact, House, Street, Landmark, Pincode, City, State, handlePayment }) => {

  return (
    <>
      <div className="max-w-sm ml-auto drop-shadow rounded shadow-md overflow-hidden">
        <h3 className="py-3 px-3 border-b bg-red-500 font-bold text-white">
          Price Summary
        </h3>
        <div className="py-2 px-3 text-base flex justify-between">
          <p>Cart Total</p>
          <p>₹ {cartTotal}</p>
        </div>
        <div className="py-2 px-3 text-base flex justify-between">
          <p>Delivery Charge</p>
          <p>₹ {deliveryCharge}</p>
        </div>
        <div className="py-2 px-3 text-base flex justify-between font-bold hover text-green-500">
          <p>Total</p>
          <p>₹ {Total}</p>
        </div>
      
      </div>

      <div className="max-w-sm ml-auto drop-shadow rounded shadow-md overflow-hidden mt-4">
        <a href="">
          <button
            type="button"
            className="text-center w-full py-2 font-bold bg-pink-100 text-slate-800 hover:bg-teal-300 hover:text-slate-900 duration-100"
            onClick={handlePayment}
          >
            Payment
          </button>
        </a>
      </div>
    </>
  );
};

export default PaymentSummary;
