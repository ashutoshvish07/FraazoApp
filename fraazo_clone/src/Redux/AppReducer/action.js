import axios from "axios";
import {
  GET_FRUITS_DATA_FAILURE,
  GET_FRUITS_DATA_REQUEST,
  GET_FRUITS_DATA_SUCCESS,
  GET_VEGI_DATA_FAILURE,
  GET_VEGI_DATA_REQUEST,
  GET_VEGI_DATA_SUCCESS,
} from "./action.type";

export const getFruitsData = () => (dispatch) => {
  //  console.log("params",params)
  dispatch({ type: GET_FRUITS_DATA_REQUEST });
  axios
    .get("http://localhost:8080/products")
    .then((res) => {
      //console.log(res);
      dispatch({ type: GET_FRUITS_DATA_SUCCESS, payload: res.data });
    })
    .catch((er) => {
      dispatch({ type: GET_FRUITS_DATA_FAILURE });
    });
};

export const getVegitableData = () => (dispatch) => {
  //  console.log("params",params)
  dispatch({ type: GET_VEGI_DATA_REQUEST });
  axios
    .get("http://localhost:8080/Vegitables")
    .then((res) => {
      //console.log(res);
      dispatch({ type: GET_VEGI_DATA_SUCCESS, payload: res.data });
    })
    .catch((er) => {
      dispatch({ type: GET_VEGI_DATA_FAILURE });
    });
};
