"use strict";

// Express App for React eStore

const express = require("express");
const cors = require("cors");
const { NotFoundError } = require("./expressError");
const { authenticateJWT } = require("./middleware/auth");

/**stripe payment**/
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const bodyParser = require("body-parser");
/******************** */

/************eStore Routes */
const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");

const morgan = require("morgan");

const app = express();

/**stripe payment route**/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/****************** */

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(authenticateJWT);

app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/order", ordersRoutes);

//////////////////////////////////////////////////
////////////////Stripe payments route////////////

app.post("/payment", cors(), async (req, res) => {
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

////////////////////////////////////////////////////

/**404 Error handler */
app.use((req, res, next) => {
    return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use((err, req, res, next) => {
    if (process.env.NODE_ENV !== "test") console.error(err.stack);
    const status = err.status || 500;
    const message = err.message;

    return res.status(status).json({
        error: { message, status },
    });
});



module.exports = app;