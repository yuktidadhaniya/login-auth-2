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
  list: {
    products: [],

  },
  isLoading: false,
};



const authReducer = (state = initialState, action) => {
  console.log('state.list1111111111:', state.list);
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
        if (action.payload) {
          return {
            ...state,
            isLoading: false,
            error: action.payload.error,
          };
        } else {
          // Handle the case where action.payload is undefined
          return state; // or return an appropriate default state
        }
      
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
    // case ADD_PRODUCT_SUCCESS:
    //   const newList = action.payload;
    //   console.log('action.payload.list: ', action.payload);
    //   console.log('newList: ', newList);
    //   const list = Array.isArray(state.list) ? state.list : [];
    //   const updatedList = [newList, ...list];
    //   return {
    //     ...state,
    //     isLoading: false,
    //     list: updatedList,
    //   };

    case ADD_PRODUCT_SUCCESS:
      const newProduct = action.payload;
      return {
        ...state,
        list: {
          ...state.list,
          products: [newProduct, ...state.list.products],
        },
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
      case EDIT_PRODUCT_SUCCESS:
        const editedProduct = action.payload; 
        console.log('editedProduct: ', editedProduct);
        console.log('action.payload: ', action.payload);
        const updatedProducts = state.list.products.map((product) => {
       
          if (product.id === editedProduct.id) {
            console.log("1212121212");
            console.log('product.id === editedProduct.id: ', product.id === editedProduct.id);
          
            return editedProduct;
          } else {
            console.log("2121212121212")
            return product;
          }
        });
        console.log('updatedProducts: ', updatedProducts);
      
        return {
          ...state,
          isLoading: false,
          list: {
            ...state.list,
            products: updatedProducts,
          },
        };
      



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

    case DELETE_PRODUCT_SUCCESS:
      const deletedProductId = action.payload;
      return {
        ...state,
        list: {
          ...state.list,
          products: state.list.products.filter(
            (product) => product.id !== deletedProductId
          ),
        },
      };




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

