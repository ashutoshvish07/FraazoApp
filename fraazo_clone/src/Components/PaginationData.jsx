import React from "react";
import { FaRupeeSign } from "react-icons/fa";
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
import { BsCartPlus } from "react-icons/bs";
import { InfoIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const PaginationData = ({ data }) => {
  return (
    <div>
      <Grid
        templateColumns={{
          lg: "repeat(3,1fr)",
          md: "repeat(2,1fr)",
          base: "repeat(1,1fr)",
        }}
        gap={2}
        justifyContent="center"
        alignItems="center"
      >
        {data?.map(({ id, image, name, price, quantity, quantity2 }) => (
          <Box
            key={id}
            border="1px solid   gray"
            borderRadius="md"
            _hover={{
              boxShadow:
                "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
            }}
          >
            <Link to={`/single/product/${id}`}>
              <Image
                objectFit="cover"
                w="100%"
                backgroundColor="gray.50"
                borderRadius="md"
                src={image}
              />
            </Link>
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
    </div>
  );
};

export default PaginationData;
