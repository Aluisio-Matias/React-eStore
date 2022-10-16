import FakeStoreApi from "../../api/FakeStoreApi";
import { ActionTypes } from "./action-types";

export const fetchProducts = () => async (dispatch) => {
    const response = await FakeStoreApi.get("/products");

    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
    const response = await FakeStoreApi.get(`/products/${id}`);

    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const fetchElectronics = () => async (dispatch) => {
    const response = await FakeStoreApi.get(`/products/category/electronics`);

    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
}

export const fetchJewelery = () => async (dispatch) => {
    const response = await FakeStoreApi.get(`products/category/jewelery`);

    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
}

export const fetchMensClothing = () => async (dispatch) => {
    const response = await FakeStoreApi.get(`products/category/men's%20clothing`);

    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
}

export const fetchWomensClothing = () => async (dispatch) => {
    const response = await FakeStoreApi.get(`products/category/women's%20clothing`);

    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
}

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};
export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};

export const addToCart = (id) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: id
    }
};

export const removeFromCart = (id) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: id
    }
};

export const clearCart = () => {
    return {
        type: ActionTypes.CLEAR_CART,
    }
};

