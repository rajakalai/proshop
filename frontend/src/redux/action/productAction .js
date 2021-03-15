import axios from 'axios'
import * as action from '../constant/productConstants';
import { PRODUCT_DETAILS_SUCCESS } from './../constant/productConstants';

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: action.PRODUCT_LIST_REQUEST
        })
        const { data } = await axios.get('/api/products');
        dispatch({
            type: action.PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: action.PRODUCT_LIST_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const listProductsDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: action.PRODUCT_DETAILS_REQUEST
        })
        const { data } = await axios.get(`/api/products/${id}`);
        dispatch({
            type: action.PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: action.PRODUCT_DETAILS_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}