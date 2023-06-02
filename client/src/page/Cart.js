import React, { useState } from "react";
import { useSelector } from "react-redux";
import EmptyCart from "../components/EmptyCart";
import { MdOutlineAdd, MdOutlineRemove } from "react-icons/md";
import CartAddedItem from "../components/CartAddedItem";
import { Link } from "react-router-dom";
import PaymentSummary from "../components/PaymentSummary";
// import {loadStripe} from '@stripe/stripe-js';

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import toast from "react-hot-toast";
import { GrValidate } from "react-icons/gr";

import "../footer.css";
import "../Delivery.css";
import { Form } from "reactstrap";

const Cart = () => {
  const user = useSelector((state) => state.user);
  const [addType, setAddType] = useState("home");

  console.log(user.email);

  const cartProduct = useSelector((state) => state.cartProduct);
  // console.log(cartProduct);

  const cartTotal = cartProduct.cartProductItem.reduce((acc, curr) => acc + curr.total, 0);
  const deliveryCharge = 0;
  const Total = cartTotal + deliveryCharge;

  /**** */

  const stripeURL = "http://localhost:8080/create-checkout-session";
  const handlePayment = async (e) => {
    e.preventDefault();

    const Elements = document.getElementsByClassName("form-input");

    for (let i = 0; i < Elements.length; i++) {
      if (Elements[i].value.trim().length == 0) {
        // console.dir("empty field not allowed");
        toast("Please fill the delivery details first");
        return;
      }
    }

    if (user.email) {
      console.log("fetch");
      const stripePromise = await loadStripe("pk_test_51JHCCgSEpjnELdRqQK1nDAab18LXFyslLrZ42w04B36JXzi2HcVSZ8mRDcDiBnSBKZH9pKCkekLLQG73QIKU9HhD00YERJifbI");

      const res = await fetch(stripeURL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartProduct.cartProductItem),
      });

      if (res.statusCode === 500) return;

      const data = await res.json();
      console.log(data);
      toast("Redirecting to payment gateway");
      stripePromise.redirectToCheckout({ sessionId: data });
    } else {
      toast("You are not login!!");
    }
  };
  /*** */

  return (
    <div className="p-4 font__5">
      <h1 className="capitalize text-lg md:text-2xl  font-semibold before:rounded-lg relative before:absolute before:-bottom-2 before:content before:left-0 before:w-32 before:h-1 before:bg-yellow-300 transition-all ease-in-out duration-100 text-fuchsia-200 justify-between">Your Shopping Cart</h1>

      {cartProduct.cartProductItem[0] ? (
        <>
          <p className="mt-3 text-white ">Product</p>
          <div className="flex-row md:flex-row w-full justify-between mr-4 mt-1 text-pink-50 ">
            <div className=" w-full text-pink-50">
              {cartProduct.cartProductItem.map((el) => {
                return (
                  <div className="text-pink-50 mb-2">
                    <CartAddedItem id={el.id} img={el.imgURL} title={el.title} qty={el.qty} price={el.price} total={el.total} />
                  </div>
                );
              })}
            </div>

            <div className="flex-col-cart">
              <Form>
                <div className="bg-black flex-delivery div__1 ">
                  <p> Delivery Detail -</p>
                  <div className="form">
                    <span className=" display-contact">
                      <p className=" font__5 text-lime-100">Contact -</p>
                      <div className="newsletter_delivery font__5 ml-8 border-teal-500 font-semibold text-xm">
                        <input
                          id="telNo"
                          name="telNo"
                          type="tel"
                          required
                          className="form-input"
                          // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          pattern="[0-9]{10}"
                          placeholder="xxxxxxxxxx"
                          minLength={10}
                          maxLength={10}
                        />
                        <span class="validity"></span>
                      </div>
                    </span>
                    

                    <p className=" font__5 text-lime-100">Address -</p>
                    <div style={{ margin: "1rem", display: "inline-block" }}>
                      <label htmlFor="home">Home</label>
                      <input style={{ margin: "0 1rem", color:"green" }} checked={addType === "home"} onChange={(e) => setAddType(e.target.value)} type="checkbox" name="home" id="home" value="home" />
                    </div>
                    <div style={{ margin: "1rem", display: "inline-block" }}>
                      <label htmlFor="other" style={{color: "red"}}>Other</label>
                      <input style={{ margin: "0 1rem" }} checked={addType === "other"} onChange={(e) => setAddType(e.target.value)} type="checkbox" name="home" id="home" value="other" />
                    </div>
                    <div className="newsletter_delivery font__5 border-teal-500 font-semibold text-xm">
                      <input className="form-input" type="text" size={15} minLength={1} maxLength={15} required placeholder="Flat/House No." />
                    </div>
                    <div className="newsletter_delivery font__5 border-teal-500 font-semibold text-xm">
                      <input className="form-input" type="text" size={15} minLength={1} maxLength={15} required placeholder="Street" />
                    </div>
                    <div className="newsletter_delivery font__5 border-teal-500 font-semibold text-xm">
                      <input className="form-input" type="text" size={15} minLength={1} maxLength={15} required placeholder="Landmark" />
                    </div>
                    <div className="newsletter_delivery font__5 border-teal-500 font-semibold text-xm">
                      <input className="form-input" type="tel" placeholder="Pincode" value="313001" />
                    </div>
                    <div className="newsletter_delivery font__5 border-teal-500 font-semibold text-xm">
                      <input className="form-input" type="text" placeholder="City" value="Udaipur" />
                    </div>
                    <div className="newsletter_delivery font__5 border-teal-500 font-semibold text-xm">
                      <input className="form-input" type="text" placeholder="State" value="Rajasthan" />
                    </div>
                  </div>
                </div>
              </Form>
              <div className="w-full min-w-210 mt-5 md:mt-0 md:min-w-350 max-w-lg  relative text-pink-50">
                <PaymentSummary cartTotal={cartTotal} deliveryCharge={deliveryCharge} Total={Total} handlePayment={handlePayment} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}

      <></>
    </div>
  );
};

export default Cart;
