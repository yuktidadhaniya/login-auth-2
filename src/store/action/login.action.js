// import axios from 'axios'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_PRODUCT,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    EDIT_PRODUCT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_FAILURE,
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE
} from "./actionType";
import axios from "axios";
import { message } from "antd";

export const loginRequest = payload => ({
    type: LOGIN_REQUEST,
    payload: payload
})
export const loginSuccess = payload => ({

    type: LOGIN_SUCCESS,
    payload: payload
})
export const loginFailure = payload => ({
    type: LOGIN_FAILURE,
    payload: payload
})
export const userLogin = (body) => async dispatch => {
    dispatch(loginRequest())
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            username: 'kminchelle',
            password: '0lelplR',

        })
    })
        .then((response) => {
            const  token = response.data.token;
            localStorage.setItem('token', token);
            // localStorage.getItem('token');
            dispatch(loginSuccess(response.data));
        })
        .catch((error) => {
            dispatch(loginFailure());
            console.log("error", error);
        });
}
export const fetchProduct = payload => ({
    type: FETCH_PRODUCT,
    payload: payload
})
export const fetchProductSuccess = payload => ({

    type: FETCH_PRODUCT_SUCCESS,
    payload: payload
})
export const fetchProductFailure = payload => ({
    type: FETCH_PRODUCT_FAILURE,
    payload: payload
})
export const fetchAllUsers = () => async dispatch => {
    dispatch(fetchProduct());

    axios
        .get('https://dummyjson.com/products')
        .then(res => {
            console.log('res: ', res);
            dispatch(fetchProductSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchProductFailure({ error: error.response.data.message }));
        });
};

export const addProduct = payload => ({
    type: ADD_PRODUCT,
    payload: payload
})
export const addProductSuccess = payload => ({

    type: ADD_PRODUCT_SUCCESS,
    payload: payload
})
export const addProductFailure = payload => ({
    type: ADD_PRODUCT_FAILURE,
    payload: payload
})
export const addProductList = (body) => async dispatch => {
    dispatch(addProduct());

    axios
        .post('https://dummyjson.com/products/add', body)
        .then(res => {
            console.log('res: ', res);
            dispatch(addProductSuccess(res.data));
            message.success("Product added successfully.");
        })
        .catch((error) => console.log(error));
};


export const editList = payload => {
    return {
        type: EDIT_PRODUCT,
        payload: payload,
    };
};

export const editListSuccess = payload => {
    return {
        type: EDIT_PRODUCT_SUCCESS,
        payload: payload,
    };
};

export const editListFailure = payload => {
    return {
        type: EDIT_PRODUCT_FAILURE,
        payload: payload,
    };
};



export const editProduct = (body, id) => async (dispatch, getState) => {
    dispatch(editList());

    axios
        .put(`https://dummyjson.com/products/${id}`, body)
        .then(res => {
            console.log('res111111111111: ', res);


            dispatch(editListSuccess(res.data));
            message.success("Product edited successfully.");

            const currentList = getState().list.products;
            const updatedList = currentList.map((product) => {
                if (product.id === res.data.id) {
                    return res.data;
                } else {
                    return product;
                }
            });
            
            dispatch(fetchProductSuccess(updatedList));
        })
        .catch((error) => {
            dispatch(editListFailure(error.data));
        });
};


export const deleteList = payload => {
    return {
        type: DELETE_PRODUCT,
        payload: payload,
    };
};

export const deleteListSuccess = payload => {
    return {
        type: DELETE_PRODUCT_SUCCESS,
        payload: payload,
    };
};

export const deleteListFailure = payload => {
    return {
        type: DELETE_PRODUCT_FAILURE,
        payload: payload,
    };
};




export const deleteProduct = (id) => async dispatch => {
    dispatch(deleteList());

    axios
        .delete(`https://dummyjson.com/products/${id}`)
        .then(res => {
            console.log('res2222222222: ', res);
            dispatch(deleteListSuccess(res.data.id));
            message.success("Product deleted successfully")
        })
        .catch((error) => console.log(error));
};