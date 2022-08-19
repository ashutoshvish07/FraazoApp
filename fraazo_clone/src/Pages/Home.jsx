import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFruitsData } from "../Redux/AppReducer/action";

const Home = () => {
  const dispatch = useDispatch();
  const ProductsData = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getFruitsData());
  }, []);
  console.log("ProductsData", ProductsData);
  return <div>HOme</div>;
};

export default Home;
