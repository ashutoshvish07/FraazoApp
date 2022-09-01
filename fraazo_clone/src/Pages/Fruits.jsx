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
import React from "react";
import { useEffect } from "react";
import { BsCartPlus } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Filter2 from "../Components/Filter2";
import { getFruitsData, getVegitableData } from "../Redux/AppReducer/action";

const Fruits = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const fruits = useSelector((store) => store.products);

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
  return (
    <Flex w="90%" m="auto">
      <Box w="20%">
        <Filter2 />
      </Box>
      <Box w="80%">
        <Grid templateColumns="repeat(3, 1fr)" gap={2}>
          {fruits?.map(({ id, image, name, price, quantity, quantity2 }) => (
            <Box
              key={id}
              border="1px solid   gray"
              borderRadius="md"
              _hover={{
                boxShadow:
                  "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
              }}
            >
              <Image
                objectFit="cover"
                w="100%"
                backgroundColor="gray.50"
                borderRadius="md"
                src={image}
              />
              <Box pl={"1rem"}>
                <Text fontSize="1xl" pt="0.6rem">
                  {name}
                </Text>
                <Flex
                  justifyContent={"space-between"}
                  w="90%"
                  mt="1rem"
                  mb="1rem"
                >
                  <Box pt={".5rem"}>
                    <Text fontSize="sm">
                      {quantity}

                      {quantity2 && (
                        <Tooltip
                          cursor="pointer"
                          ml={1}
                          label={quantity2}
                          aria-label="A tooltip"
                          color="gray.900"
                          bg="gray.100"
                        >
                          <InfoIcon ml={2} color="gray" />
                        </Tooltip>
                      )}
                    </Text>
                    <Text fontWeight="bold">
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
                </Flex>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};

export default Fruits;
