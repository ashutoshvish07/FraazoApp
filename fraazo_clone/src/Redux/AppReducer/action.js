import axios from "axios";
import {
  GET_FRUITS_DATA_FAILURE,
  GET_FRUITS_DATA_REQUEST,
  GET_FRUITS_DATA_SUCCESS,
  GET_VEGI_DATA_FAILURE,
  GET_VEGI_DATA_REQUEST,
  GET_VEGI_DATA_SUCCESS,
} from "./action.type";

export const getFruitsData = (params) => (dispatch) => {
  // console.log("params", query);
  dispatch({ type: GET_FRUITS_DATA_REQUEST });
  axios
    .get(`http://localhost:8080/products`,params)
    .then((res) => {
      //console.log(res);
      dispatch({ type: GET_FRUITS_DATA_SUCCESS, payload: res.data });
    })
    .catch((er) => {
      dispatch({ type: GET_FRUITS_DATA_FAILURE });
    });
};

export const getVegitableData = (params) => (dispatch) => {
  //console.log("params", params);
  dispatch({ type: GET_VEGI_DATA_REQUEST });
 return axios
    .get("http://localhost:8080/Vegitables", params)
    .then((res) => {
      //console.log(res);
     return dispatch({ type: GET_VEGI_DATA_SUCCESS, payload: res.data });
    })
    .catch((er) => {
    return  dispatch({ type: GET_VEGI_DATA_FAILURE });
    });
};

export const QueryFruitsData = (query) => (dispatch) => {
  console.log("params", query);
  dispatch({ type: GET_FRUITS_DATA_REQUEST });
  axios
    .get(`http://localhost:8080/products?q=${query}`)
    .then((res) => {
      //console.log(res);
      dispatch({ type: GET_FRUITS_DATA_SUCCESS, payload: res.data });
    })
    .catch((er) => {
      dispatch({ type: GET_FRUITS_DATA_FAILURE });
    });
};

export const QueryVegitableData = (query) => (dispatch) => {
  console.log("params", query);
  dispatch({ type: GET_VEGI_DATA_REQUEST });
  axios
    .get(`http://localhost:8080/Vegitables?q=${query}`)
    .then((res) => {
      //console.log(res);
      dispatch({ type: GET_VEGI_DATA_SUCCESS, payload: res.data });
    })
    .catch((er) => {
      dispatch({ type: GET_VEGI_DATA_FAILURE });
    });
};
