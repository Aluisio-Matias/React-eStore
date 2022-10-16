"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");

class Order {

    //Add a submitted order to the orders database 
    static async createOrder(data) {
        const result = await db.query(
            `INSERT INTO orders (product_name,
                                quantity,
                                total_amount,
                                user_id)
            VALUES ($1, $2, $3, $4)
            RETURNING order_id, 
                    product_name AS "productName", 
                    quantity, 
                    total_amount AS "totalAmount",
                    order_date AS "orderDate",
                    order_status AS "orderStatus",
                    user_id`,
            [
                data.productName,
                data.quantity,
                data.totalAmount,
                data.user_id
            ]);
        let order = result.rows[0];
        return order;
    }


    static async getOrders() {
        const result = await db.query(
            `SELECT order_id,
                    product_name AS "productName",
                    quantity,
                    total_amount AS "totalAmount",
                    order_date AS "orderDate",
                    order_states AS "ordersStatus",
                    user_id,
            FROM orders
            RETURNING order_id, 
            product_name AS "productName",
            quantity,
            total_amount AS "totalAmount",
            order_date AS "orderDate",
            order_states AS "ordersStatus",
            user_id`
        );
        let order = result;
        return order;
    }



}

module.exports = Order;