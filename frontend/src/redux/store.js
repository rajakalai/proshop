import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import  { productListReducer, productDetailsReducer } from './reducers/productReducers'
import cartReducers from './reducers/cartReducers';
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducers
});
const middleware = [thunk];
const cartItemsFromStorage = localStorage.getItem('cartItems') ? 
    JSON.parse(localStorage.getItem('cartItems')) : []
const initalState = {
    cart: {cartItems: cartItemsFromStorage}
}

const store = createStore(
    reducer,
    initalState, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

