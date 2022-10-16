import { ActionTypes } from "../actions/action-types"
import { calculateCartTotal } from "../../helpers/helpers";
import data from "./data.json";


const intialState = {
    products: [],
};

const cartInitialState = {
    products: data.products,
    cartItems: {},
    cartValue: 0.0,
}


export const productsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: payload };
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};

export const cartItemsReducer = (state = cartInitialState, { type, payload }) => {

    switch (type) {
        case ActionTypes.ADD_TO_CART: {
            const cartCopy = { ...state.cartItems };
            cartCopy[payload.id] = (cartCopy[payload.id] || 0) + 1;
            return {
                ...state,
                cartItems: cartCopy,
                cartValue: calculateCartTotal(
                    state.products,
                    cartCopy,
                )
            };
        }

        case ActionTypes.REMOVE_FROM_CART: {
            const cartCopy = { ...state.cartItems };
            if (!cartCopy[payload.id]) return state;
            cartCopy[payload.id]--;
            if (cartCopy[payload.id] === 0) {
                delete cartCopy[payload.id];
            }
            return {
                ...state,
                cartItems: cartCopy,
                cartValue: calculateCartTotal(
                    state.products,
                    cartCopy,
                )
            };
        }

        case ActionTypes.CLEAR_CART: {
            return {
                ...state,
                cartItems: {},
                cartValue: 0.0,
            };
        }

        default:
            return state;
    }
}
