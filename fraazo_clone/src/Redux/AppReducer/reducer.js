import {
  GET_FRUITS_DATA_FAILURE,
  GET_FRUITS_DATA_REQUEST,
  GET_FRUITS_DATA_SUCCESS,
} from "./action.type";

const init = {
  products: [],
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
    default:
      return state;
  }
};
