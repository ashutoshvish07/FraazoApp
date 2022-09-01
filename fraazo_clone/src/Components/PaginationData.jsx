import React from "react";
import { usePagination } from "../Hooks/pagination";

import { FaRupeeSign } from "react-icons/fa";
import { Button, Flex, Icon, Image, Text, Tooltip } from "@chakra-ui/react";
import { BsCartPlus } from "react-icons/bs";
import { InfoIcon } from "@chakra-ui/icons";

const PaginationData = ({ data }) => {
  // //   const { totalPages, startPageIndex, endPageIndex, displayPageFunc } =
  //   console.log(  usePagination(5, data.length))
  //const Vegitables = useSelector((store) => store.vegitable);

  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPageFunc,
  ] = usePagination(10, data.length);

  return (
    <div>
      {(() => {
        console.log("start");
        const displayPosts = [];

        for (let i = startPageIndex; i <= endPageIndex; i++) {
          displayPosts.push(
            <Box
              key={data[i].id}
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
                src={data[i].image}
              />
              <Box pl={"1rem"}>
                <Text fontSize="1xl" pt="0.6rem">
                  {data[i].name}
                </Text>
                <Flex
                  justifyContent={"space-between"}
                  w="90%"
                  mt="1rem"
                  mb="1rem"
                >
                  <Box pt={".5rem"}>
                    <Text fontSize="sm">
                      {data[i].quantity}

                      {data[i].quantity2 && (
                        <Tooltip
                          cursor="pointer"
                          ml={1}
                          label={data[i].quantity2}
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
                      {data[i].price}
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
          );
        }

        return displayPosts;
      })()}

      <Pagination
        color="primary"
        count={totalPages}
        style={{ width: "28%", margin: "auto" }}
        onChange={(e, value) => displayPageFunc(value)}
      />
    </div>
  );
};

export default PaginationData;
