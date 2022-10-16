const express = require("express");
const router = express.Router();
const cors = require("cors");

require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


router.post("/payment", cors(), async (req, res) => {
    let { amount, id } = req.body;

    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Test product",
            payment_method: id,
            confirm: true
        })
        console.log("Payment: ", payment);
        res.json({
            message: "Payment Successful!",
            success: true

        })
    } catch (err) {
        console.log("Error :", err)
        res.json({
            message: "Payment Failed!",
            success: false
        })
    }
})

//database log for paymentIntents if needed:::::::::::::::
// paymentIntents: {
//     _stripe: [Circular *1],
//     basePath: [Function (anonymous)],
//     resourcePath: 'payment_intents',
//     path: [Function (anonymous)]
//   },