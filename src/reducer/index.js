import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../action/actionType";

const initialState = {
  users: [],
  isLoading: false,

};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,

      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,

      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default authReducer;

