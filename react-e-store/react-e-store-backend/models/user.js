"use strict";

const db = require("../db");
const bcrypt = require("bcrypt");

const { BCRYPT_WORK_FACTOR } = require("../config.js");
const { UnauthorizedError, BadRequestError, NotFoundError } = require("../expressError");

/**Related functions for users. */

class User {
    /** authenticate user with username, password.
   *
   * Returns { username, first_name, last_name, email, is_admin }
   *
   * Throws UnauthorizedError is user not found or wrong password.
   **/

    static async authenticate(username, password) {
        //try to find if user exists first
        const result = await db.query(
            `SELECT email,
                    username,
                    password,
                    is_admin AS "isAdmin"
            FROM users
            WHERE username = $1`,
            [username],
        );

        const user = result.rows[0];

        if (user) {
            // compare hashed password to a new hash from password
            const isValid = await bcrypt.compare(password, user.password);
            if (isValid === true) {
                delete user.password;
                return user;
            }
        }
        throw new UnauthorizedError("Invalid username/password");
    }

    /** Register user with data.
   *
   * Returns { email, username, password, isAdmin }
   *
   * Throws BadRequestError on duplicates.
   **/

    static async register(
        { email, username, password, isAdmin }) {
        const duplicateEmail = await db.query(
            `SELECT email
            FROM users
            WHERE email = $1`,
            [email],
        );
        if (duplicateEmail.rows[0]) {
            throw new BadRequestError(`Email is already taken: ${email}`);
        }

        const duplicateUsername = await db.query(
            `SELECT username
            FROM users
            WHERE username = $1`,
            [username]
        );
        if (duplicateUsername.rows[0]) {
            throw new BadRequestError(`Username is already taken: ${username}`);
        }

        const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

        const result = await db.query(
            `INSERT INTO users
            (email,
            username,
            password,
            is_admin)
            VALUES ($1, $2, $3, $4)
            RETURNING email, username, is_admin AS "isAdmin"`,
            [
                email,
                username,
                hashedPassword,
                isAdmin,
            ],
        );
        const user = result.rows[0];

        return user;
    };

    /** 
     * Given a username, return data about user.
     *Returns existing data about the user.
     *Throws NotFoundError if user not found.
    **/

    static async get(username) {
        const userRes = await db.query(
            `SELECT id,
                    email,
                    username,
                    first_name AS "firstName",
                    last_name AS "lastName",
                    phone,
                    address1, 
                    city, 
                    state, 
                    zipcode,
                    is_admin AS "isAdmin"
            FROM users
            WHERE username = $1`,
            [username],
        );
        const user = userRes.rows[0];

        if (!user) throw new NotFoundError(`No user: ${username}`);

        return user;
    }


    //update a customer profile for an existing user
    static async update(username, data) {
        if (data.password) {
            data.password = await bcrypt.hash(data.password, BCRYPT_WORK_FACTOR);
        }

        const result = await db.query(
            `UPDATE users
            SET first_name=$1, 
            last_name=$2, 
            email=$3, 
            phone=$4, 
            address1=$5, 
            city=$6, 
            state=$7, 
            zipcode=$8
            WHERE username=$9
            RETURNING first_name AS "firstName",
                    last_name AS "lastName",
                    email,
                    phone,
                    address1,
                    city, 
                    state, 
                    zipcode,
                    username`,
            [
                data.firstName,
                data.lastName,
                data.email,
                data.phone,
                data.address1,
                data.city,
                data.state,
                data.zipcode,
                username
            ])

        const user = result.rows[0];

        if (!user) throw new NotFoundError(`No user: ${username}`);

        delete user.password;
        return user;
    }


}

module.exports = User;