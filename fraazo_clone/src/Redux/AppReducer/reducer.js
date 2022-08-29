import {
  GET_FRUITS_DATA_FAILURE,
  GET_FRUITS_DATA_REQUEST,
  GET_FRUITS_DATA_SUCCESS,
  GET_VEGI_DATA_FAILURE,
  GET_VEGI_DATA_REQUEST,
  GET_VEGI_DATA_SUCCESS,
} from "./action.type";

const init = {
  products: [],
  vegitable: [],
  isLoading: false,
  isError: false,
};
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_FRUITS_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_FRUITS_DATA_SUCCESS:
      return {
        ...state,
        products: payload,
        isLoading: false,
        isError: false,
      };
    case GET_FRUITS_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_VEGI_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_VEGI_DATA_SUCCESS:
      return {
        ...state,
        vegitable: payload,
        isLoading: false,
        isError: false,
      };
    case GET_VEGI_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
