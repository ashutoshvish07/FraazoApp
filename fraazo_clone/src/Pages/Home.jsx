import React, { useEffect } from "react";

import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import Clouser from "../Components/Clouser";
import Clouser2 from "../Components/Clouser2";
import android from "../assets/AndroidStore.png"
import iphone from "../assets/iphone.png"
const Home = () => {
  return (
    <Box w={["90%", "80%"]} m="auto" my="5rem">
      {/* Hero section Start*/}
      <Flex gap="1.5rem" w={"100%"} m="auto" mt="1rem"  direction={{ base: 'column', md: 'row' }}>
        <Box w={{base: '100%', md: '68%'}} >
          <Image src="https://imageprod.fraazo.com/fraazo-prod/web_ban/2562.png" />
        </Box>
        <Box w={{base: '100%', md: '33%'}} pt="1rem">
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

        <Flex alignItems={"left"} gap="1rem" mt="2rem" direction={{ base: 'column', md: 'row' }} >
          <Box border="1px solid   gray" borderRadius="md">
            <Image
             w="100%"
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
             w="100%"
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

      <Flex justifyContent="center" gap="1rem" mt="5rem" direction={{ base: 'column', md: 'row' }}>
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
            <Link to="/fruits">(View All)</Link>
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
            <Link to="/single">(View All)</Link>
          </Text>
        </Flex>
        <Divider orientation="horizontal" backgroundColor="gray.400" />
        <Box>
          <Clouser2 />
        </Box>
      </Box>
      {/* Vegitable section ends*/}

      {/* Dowmload the app Start  */}
      <Flex mt="15rem" direction={{ base: 'column', md: 'row' }}>
        <Box w={{base: '100%', md: '50%'}}>
          <Image
            w="90%"
            src="https://webasset.fraazo.com/production/app-screen.64b2c07bae4a9c5a4ec4.png"
          />
        </Box>
        <Box>
          <Heading fontWeight="500" pl="3rem">
            Download The App
          </Heading>
          <Text w="80%" pl="3rem" fontSize="lg" pt={"1.7rem"} fontWeight="400">
            Enter your phone number to receive a text with a link to download
            the app
          </Text>

          <Flex border="1px solid gray" p=".8rem" w="50%" ml="3rem" mt="4rem" rounded="lg">
            <Flex cursor="pointer"
              bg={"black"}
              rounded="lg"
              p={"0 30px"}
              gap={2}
              alignItems={"center"}
              >
              <Image
                h='20px'
                src={android}
                alt="android"
              />
              <Text color='white'>Android</Text>
            </Flex>
            <Flex cursor="pointer">
              <Image

                h="20px"
                src={iphone}
                alt="android"
              />
              <Text color='blackAlpha.800'>IPhone</Text>
            </Flex>
          </Flex>
          <InputGroup pl="3rem" mt="1.5rem" w="90%" border="lg">
            <InputLeftAddon p={"2rem"} children="+91" bg="white" />
            <Input p={"2rem"} type="tel" placeholder="Enter Mobile Number" />
          </InputGroup>
          <Box pl="3rem" mt="1.5rem">
            <Button
              bg="#5dc6ad"
              color="white"
              w="90%"
              m="auto"
              p="2rem"
              fontWeight="normal"
              fontSize={"1.5rem"}
              _hover={{ backgroundColor: "#2dc6ad" }}
            >
              Submit
            </Button>
          </Box>

          <Flex pl={"3rem"} mt="4rem" alignItems="center">
            <Box fontSize="1.2rem" color="gray.500">
              Available on
            </Box>
            <Box ml="1rem">
              <Image
                src="https://webasset.fraazo.com/production/googleplaystore.863bf06a3d2d326a5b94.png"
                alt="play Store"
              />
            </Box>
            <Box>
              <Image
                src="https://webasset.fraazo.com/production/appstore.a8155c5772ea7d80d435.png"
                alt="Apple Store"
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
      {/* Dowmload the app End  */}
    </Box>
  );
};

export default Home;
