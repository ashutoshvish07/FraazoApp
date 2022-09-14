import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFruitsData } from "../Redux/AppReducer/action";
import { Box, Text } from "@chakra-ui/react";

const Product = () => {
  // const { id } = useParams();
  // console.log(id);
  // const dispatch = useDispatch();
  // const fruits = useSelector((store) => store.products);
  // console.log(fruits);
  // const [current, setcurrent] = useState({});

  // useEffect(() => {
  //   if (fruits.length === 0) {
  //     dispatch(getFruitsData());
  //   }
  // }, []);

  // useEffect(() => {
  //   if (id) {
  //     const CurrentData = fruits.find((fruit) => fruit.id === id);
  //     CurrentData && setcurrent(CurrentData);
  //   }
  // }, [id]);
  console.log(" helloo");
  // console.log(current);
  return (
    <Box my={"8rem"}>
      <Text fontSize="6xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        deserunt est molestias natus perferendis, impedit velit corporis, cum
        labore repudiandae necessitatibus saepe. Itaque illum ut enim,
        recusandae perspiciatis delectus eum sint cum totam vitae corrupti
        placeat labore necessitatibus, hic impedit aspernatur veniam mollitia
        odio harum natus reprehenderit excepturi non. Aliquam rerum saepe
        similique sequi officia eaque mollitia temporibus unde enim. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Error, quam porro.
        Doloremque quae architecto minima dolore cum dolores, ex facere nemo?
        Odit veritatis molestias sint illum in totam incidunt laborum sunt,
        quasi eos vero ipsam labore perspiciatis dolor voluptas obcaecati
        libero. Architecto cupiditate libero doloremque ipsum quibusdam dolores
        ex vel.
      </Text>
    </Box>
  );
};

export default Product;
