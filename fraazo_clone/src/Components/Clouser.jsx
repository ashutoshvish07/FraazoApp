import React, { useState, useEffect, useRef } from "react";
// import "./Clouser.css";
import { useDispatch, useSelector } from "react-redux";
import { getFruitsData } from "../Redux/AppReducer/action";
import { Box, Button, Icon, Text, Tooltip } from "@chakra-ui/react";
import { BsCartPlus, BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { InfoIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const Clouser = () => {
  const dispatch = useDispatch();
  const ProductsData = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getFruitsData());
  }, [dispatch, getFruitsData]);

  const carouser = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(carouser.current.offsetWidth);
    carouser.current.scrollLeft -= carouser.current.offsetWidth;
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    console.log(carouser.current.offsetWidth);
    carouser.current.scrollLeft += carouser.current.offsetWidth;
  };
  if (!ProductsData || !ProductsData.length) return null;
  // console.log("ProductsData", ProductsData);

  return (
    <div className="container">
      <div className="carouser" ref={carouser}>
        {ProductsData.map(
          ({ id, name, price, image, quantity, quantity2 }, index) => (
            <div key={id} className="item">
              <div className="image">
              <Link to ={`/product/${id}`}>

                <img src={image} alt={name} />
              </Link>
              </div>
              <Text fontSize="1xl" pt="0.6rem">
                {name}
              </Text>
              <Box className="info">
                <Box pt={".5rem"}>
                  <Text fontSize="sm">
                    {quantity} {"  "}
                    {quantity2 && (
                      <Tooltip
                        cursor="pointer"
                        ml={1}
                        label={quantity2}
                        aria-label="A tooltip"
                        color="gray.900"
                        bg="gray.100"
                      >
                        <InfoIcon color="gray" />
                      </Tooltip>
                    )}
                  </Text>
                  <Text fontWeight="bold">
                    {" "}
                    <Icon fontSize="sm" as={FaRupeeSign} />
                    {price}
                  </Text>
                </Box>
                <Box pt={".8rem"}>
                  <Button
                    borderRadius={"3xl"}
                    _hover={{ backgroundColor: "Teal", color: "#fff" }}
                    leftIcon={<BsCartPlus />}
                    colorScheme="teal"
                    variant="outline"
                  >
                    Add
                  </Button>
                </Box>
              </Box>
            </div>
          )
        )}
      </div>
      <div className="buttons">
        <Button
          onClick={handleLeftClick}
          _hover={{ backgroundColor: "Teal", color: "#fff" }}
          leftIcon={<BsCaretLeftFill />}
          colorScheme="teal"
          variant="outline"
        ></Button>
        <Button
          className="rightIcon"
          onClick={handleRightClick}
          _hover={{ backgroundColor: "Teal", color: "#fff" }}
          leftIcon={<BsCaretRightFill />}
          colorScheme="teal"
          variant="outline"
        ></Button>
      </div>
    </div>
  );
};

export default Clouser;
