const dotenv = require("dotenv").config();
const Stripe = require("stripe");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 8080;
const YOUR_DOMAIN = `http://localhost:3000/`;

const stripe = new Stripe("sk_test_51JHCCgSEpjnELdRqSeTprvaoUpcmphWApJqT9aNxlacJWTERnkpalAwNX5uAiuCLGYjvmH71CVtYZCC1HGOH86tM00w5kKuPwW");

app.post("/create-checkout-session", async (req, res) => {
  console.log(req.body);
  try {
    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",

      line_items: req.body.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.title,
              images: [item.imgURL],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.qty,
        };
      }),

      //mode: "payment",
      success_url: `${YOUR_DOMAIN}success`,
      cancel_url: `${YOUR_DOMAIN}cancelled`,
    };
    let session;
    try {
      session = await stripe.checkout.sessions.create(params);
    } catch (err) {
      console.log(err);
    }
    console.log(session.id);
    res.status(200).json(session.id);
    //   res.redirect(303, session.url);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
});

app.get("/success", async (req, res) => {
  res.json({ status: "Payment Successful" });
});

app.get("/cancelled", async (req, res) => {
  res.json({ status: "Payment Failed" });
});

app.listen(PORT, () => console.log("Running on port " + PORT));
