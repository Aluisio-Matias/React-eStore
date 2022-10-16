import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** Database API Class.
 * Static class tying together methods used to get/send to to the API.
 */

class E_StoreApi {
    // the token for interactive with the API will be stored here.
    static token;

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${E_StoreApi.token}` };
        const params = (method === "get") ? data : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    };

    /** Individual API routes **/

    //Signup for React eStore

    static async signup(data) {
        let res = await this.request(`auth/register`, data, "post");
        return res.token;
    };

    //Login for React eStore - will get the token for login from username, password.

    static async login(data) {
        let res = await this.request(`auth/token`, data, "post");
        return res.token;
    }

    //Get current user.

    static async getCurrentUser(username) {
        let res = await this.request(`users/${username}`);
        return res.user;
    };


    //Update client profile for exisiting user

    static async updateProfile(username, data) {
        let res = await this.request(`users/${username}`, data, "patch");
        return res.user;
    };

    //ADD a new order to the orders database

    static async createOrder(data) {
        let res = await this.request(`order/new`, data, "post");
        return res.order;
    }

    //Get order from currentUser

    static async getOrder() {
        let res = await this.request(`order/orders`);
        return res;
    }







}

export default E_StoreApi;