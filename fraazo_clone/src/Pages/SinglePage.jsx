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
import Filter from "../Components/Filter";
import Pagination from "../Components/Pagination";
import PaginationData from "../Components/PaginationData";
import { getVegitableData } from "../Redux/AppReducer/action";

const SinglePage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const Vegitables = useSelector((store) => store.vegitable);

  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage] = useState(9);

  useEffect(() => {
    dispatch(getVegitableData());
  }, [dispatch, getVegitableData]);

  useEffect(() => {
    if (location || Vegitables.length === 0) {
      const queryParams = {
        params: {
          type: searchParams.getAll("type"),
        },
      };
      dispatch(getVegitableData(queryParams));
    }
  }, [location.search]);
  //console.log(Vegitables);

  // get current data  here
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = Vegitables.slice(indexOfFirstPost, indexOfLastPost);

  // chage pages
  const paginate = (pageNumber) => setcurrentPage(pageNumber);
  return (
    <Flex w="90%" m="auto" my="6rem"  direction={{ base: 'column', md: 'row' }} >
      <Box w="20%">
        <Filter />
      </Box>
      <Box w="80%">
        <PaginationData data={currentPost} />
        <Pagination
          postsPerPage={postPerPage}
          totalPage={Vegitables.length}
          paginate={paginate}
        />
      </Box>
    </Flex>
  );
};

export default SinglePage;
