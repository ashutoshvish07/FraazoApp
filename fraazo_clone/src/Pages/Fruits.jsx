import { InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { BsCartPlus } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Filter2 from "../Components/Filter2";
import Pagination from "../Components/Pagination";
import PaginationData from "../Components/PaginationData";
import { getFruitsData, getVegitableData } from "../Redux/AppReducer/action";

const Fruits = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const fruits = useSelector((store) => store.products);

  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage] = useState(9);

  useEffect(() => {
    dispatch(getFruitsData());
  }, [dispatch, getFruitsData]);

  useEffect(() => {
    if (location || fruits.length === 0) {
      const queryParams = {
        params: {
          type: searchParams.getAll("type"),
        },
      };
      dispatch(getFruitsData(queryParams));
    }
  }, [location.search]);
  //console.log(Vegitables);

  // get current data  here
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = fruits.slice(indexOfFirstPost, indexOfLastPost);

  // chage pages
  const paginate = (pageNumber) => setcurrentPage(pageNumber);
  return (
    <Flex w="90%" m="auto" direction={{ base: 'column', md: 'row' }}  my="6rem"
    >
      <Box w="20%"   >
        <Filter2 />
      </Box>
      <Box w="80%">
        <PaginationData data={currentPost} />
        <Pagination
          postsPerPage={postPerPage}
          totalPage={fruits.length}
          paginate={paginate}
        />
      </Box>
    </Flex>
  );
};

export default Fruits;
