const express = require("express");
const { ensureCorrectUserOrAdmin, ensureLoggedIn } = require("../middleware/auth");
const Order = require("../models/order");

const router = express.Router();

//

router.post("/new", ensureLoggedIn, async (req, res, next) => {
    try {
        const order = await Order.createOrder(req.body);
        return res.status(201).json({ order });
    } catch (err) {
        return next(err);
    }
});

router.get("/orders", ensureLoggedIn, async (req, res, next) => {
    try {
        const result = await Order.getOrders();
        return res.status(201).json({ result });
    } catch (err) {
        return next(err);
    }
})


module.exports = router;