import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer, cartItemsReducer } from "./ProductReducers";
const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductsReducer,
    shoppingCart: cartItemsReducer,
});
export default reducers;




// import { combineReducers } from "redux";
// import { productsReducer, selectedProductsReducer, cartItemsReducer } from "./ProductReducers";
// // import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';

// // const cartPersistConfig = {
// //     key: 'shoppingCart',
// //     storage,
// // }

// const notPersistProducts = {
//     key: 'allProducts',
//     blacklist: ['productsReducer']
// }

// const notPersistProduct = {
//     key: 'product',
//     blacklist: ['selectedProductsReducer']
// }

// const reducers = combineReducers({
//     shoppingCart: cartItemsReducer,
//     product: persistReducer(notPersistProduct, selectedProductsReducer),
//     allProducts: persistReducer(notPersistProducts, productsReducer),

// })


// export default reducers;
