import React, { useEffect } from "react";

import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsCartPlus } from "react-icons/bs";
import Clouser from "../Components/Clouser";
import Clouser2 from "../Components/Clouser2";
const Home = () => {
  return (
    <Box w={"90%"} m="auto">
      {/* Hero section Start*/}
      <Flex gap="1.5rem" w={"100%"} m="auto" mt="1rem">
        <Box w={"68%"}>
          <Image src="https://imageprod.fraazo.com/fraazo-prod/web_ban/2562.png" />
        </Box>
        <Box w={"33%"} pt="1rem">
          <VStack>
            <Box>
              <Image src="https://webasset.fraazo.com/production/Web1.ab035db9ab9fe7b21326.png" />
            </Box>
            <Box>
              <Image src="https://webasset.fraazo.com/production/Web2.3f0b675c24dcb702b13d.png" />
            </Box>
            <Box>
              <Image src="https://webasset.fraazo.com/production/Web3.e2495d9eb26022ba0363.png" />
            </Box>
          </VStack>
        </Box>
      </Flex>
      {/* Hero section Ends*/}
      {/* Best deals section Start*/}
      <Box mt={"2rem"}>
        <Text fontSize={"4xl"}>Best Deals</Text>
        <Divider orientation="horizontal" backgroundColor="gray.400" />

        <Flex alignItems={"left"} gap="1rem" mt="2rem">
          <Box border="1px solid   gray" borderRadius="md">
            <Image
              backgroundColor="gray.50"
              borderRadius="md"
              src="https://imagemaster.fraazo.com/fraazo-master/products/BONI11.png?width=256&height=256&format=webp"
            />
            <Box pl={"1rem"}>
              <Text fontSize="1xl" pt="0.6rem">
                Onion
              </Text>
              <Flex
                justifyContent={"space-between"}
                w="90%"
                mt="1rem"
                mb="1rem"
              >
                <Box pt={".5rem"}>
                  <Text fontSize="sm">1Kg</Text>
                  <Text fontWeight="bold">22 Rs</Text>
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
          <Box border="1px solid gray" borderRadius="md">
            <Image
              backgroundColor="gray.50"
              borderRadius="md"
              src="https://imageprod.fraazo.com/fraazo-prod/images/images/000/006/605/original/data?width=300&height=256&format=webp"
            />
            <Box pl={"1rem"}>
              <Text fontSize="1xl" pt="0.6rem">
                Tomato
              </Text>
              <Flex
                justifyContent={"space-between"}
                w="90%"
                mt="1rem"
                mb="1rem"
              >
                <Box pt={".5rem"}>
                  <Text fontSize="sm">1Kg</Text>
                  <Text fontWeight="bold">28 Rs</Text>
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
        </Flex>
      </Box>

      {/* Best deals section End*/}

      {/* Variety section Start*/}

      <Flex justifyContent="center" gap="1rem" mt="5rem">
        <Box>
          <Image
            h="280px"
            src="https://imagemaster.fraazo.com/fraazo-master/webban/Fruits.png"
          />
        </Box>
        <Box>
          <Image
            h="280px"
            src="https://imagemaster.fraazo.com/fraazo-master/webban/Vegetables.png"
          />
        </Box>
      </Flex>
      {/* Variety section ends*/}

      {/* Fruits section Start*/}
      <Box>
        <Flex>
          <Text fontSize={"4xl"}>FRUITS</Text>
          <Text
            pt={5}
            pl={2}
            color="orange"
            _hover={{ color: "#5dc6ad" }}
            cursor="pointer"
            transition="1s easy"
          >
            (View All)
          </Text>
        </Flex>
        <Divider orientation="horizontal" backgroundColor="gray.400" />
        <Clouser />
      </Box>
      {/* Fruits section ends*/}
      {/* Vegitable section Start*/}
      <Box mt="15rem">
        <Flex>
          <Text fontSize={"4xl"}>VEGETABLES</Text>
          <Text
            pt={5}
            pl={2}
            color="orange"
            _hover={{ color: "#5dc6ad" }}
            cursor="pointer"
            transition="1s easy"
          >
            (View All)
          </Text>
        </Flex>
        <Divider orientation="horizontal" backgroundColor="gray.400" />
        <Box>
          <Clouser2 />
        </Box>
      </Box>
      {/* Vegitable section ends*/}

      {/* Dowmload the app Start  */}
      <Flex mt="15rem" justifyContent="space-between">
        <Box w="50%">
          <Image
            w="90%"
            src="https://webasset.fraazo.com/production/app-screen.64b2c07bae4a9c5a4ec4.png"
          />
        </Box>
        <Box>
          <Heading>Download The App</Heading>
        </Box>
      </Flex>
      {/* Dowmload the app End  */}
    </Box>
  );
};

export default Home;
