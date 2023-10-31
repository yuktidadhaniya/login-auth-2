// import axios from 'axios'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "./actionType";
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
            const { token } = response.data.token;
            localStorage.setItem('token', token);
            // localStorage.getItem('token');
            dispatch(loginSuccess(response.data));
        })
        .catch((error) => {
            dispatch(loginFailure());
            console.log("error", error);
        });
}
// export const userLogin = (body) => async dispatch => {
//     dispatch(loginRequest());
//     fetch('https://dummyjson.com/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             username: 'kminchelle',
//             password: '0lelplR',
//         })
//     })
//         .then((response) => {
//             const { token } = response.data.token;
//             localStorage.setItem('token', token);

//             if (localStorage.getItem('token')) {
//                 window.location.href = '/dashboard';
//             } else {
//                 dispatch(loginSuccess(response.data));
//             }
//         })
//         .catch((error) => {
//             dispatch(loginFailure());
//             console.log("error", error);
//         });
// }

