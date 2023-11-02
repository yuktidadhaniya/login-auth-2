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
} from "../action/actionType";

const initialState = {
  users: [],
  list: [],
  
  isLoading: false,
};


const authReducer = (state = initialState, action) => {
  console.log('state: ', state);
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
    case FETCH_PRODUCT:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    case ADD_PRODUCT:
      return {
        ...state,

        isLoading: true,
      };
    case ADD_PRODUCT_SUCCESS:
      const newList = action.payload;
      console.log('action.payload.list: ', action.payload);
      console.log('newList: ', newList);
      const list = Array.isArray(state.list) ? state.list : [];
      const updatedList = [newList, ...list];
      return {
        ...state,
        isLoading: false,
        list: updatedList,
      };


    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,

      };
    case EDIT_PRODUCT:
      return {
        ...state,
        isLoading: true,

      };
    case EDIT_PRODUCT_SUCCESS: {
      const { id } = action.payload || {};
      console.log('action.payload1111111111: ', action.payload);
      console.log('id: ', id);

      const updateList = Array.isArray(state.list) ? state.list.map(user => {
        console.log('user1111: ', user);
        if (user.id === id) {
          return action.payload;
        } else {
          return user;
        }
      }) : [];

      console.log('updateList:', updateList);

      return {
        ...state,
        isLoading: false,
        list: updateList,
      };
    }




    case EDIT_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,

      };

    case DELETE_PRODUCT:
      return {
        ...state,
        isLoading: true,

      };
    case DELETE_PRODUCT_SUCCESS: {
      const deletedProductId = action.payload;
      console.log('action.payload:', action.payload);


      console.log('state:', state);
      console.log('state.list:', state.list);

      const updatedProductList = state.list.filter(product => product.id !== deletedProductId);
      console.log('updatedProductList:', updatedProductList);

      return {
        ...state,
        isLoading: false,
        list: updatedProductList,
      };
    }



    case DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,

      };
    default:
      return state;
  }
};

export default authReducer;

