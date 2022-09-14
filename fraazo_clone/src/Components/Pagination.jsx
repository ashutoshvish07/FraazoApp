import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ postsPerPage, totalPage, paginate }) => {
  const pageNumvbers = [];

  for (let i = 1; i < Math.ceil(totalPage / postsPerPage); i++) {
    pageNumvbers.push(i);
  }
  return (
    <Flex direction={"row"}>
      {pageNumvbers.map((number) => (
        <Box  key={number}>
          <Button onClick={() => paginate(number)}>
            <Link>{number}</Link>
          </Button> 
          
        </Box>
      ))}
    </Flex>
  );
};

export default Pagination;
