import React, { useState } from "react";
// import "../App.css"
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Icon,
  Button,
  Link,
  Image,
  Badge,
  InputRightElement,
  InputGroup,
  Input,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { FaSearch, FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsCart3, BsCreditCard } from "react-icons/bs";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as ReachLink } from "react-router-dom";
import Filter2 from "../Components/Filter2";
import { useDispatch } from "react-redux";
import {
  getFruitsData,
  QueryFruitsData,
  QueryVegitableData,
} from "../Redux/AppReducer/action";

const Links = [
  {
    id: 1,
    title: "Card",
    to: "/cart",
  },
  {
    id: 2,
    title: "Creadits",
    to: "/credit",
  },
  {
    id: 3,
    title: "Login",
    to: "/login",
  },
];

const Navbar = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (e) => {
    setQuery(e.target.value);
    dispatch(QueryFruitsData(query));
    // dispatch(QueryVegitableData(query));
  };

  console.log(query);
  return (
    <Box
      bg={useColorModeValue("white.100", "gray.900")}
      px={4}
      py={2}
      className="Navbar_sticly"
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={4} alignItems={"center"}>
          <Box display={{ base: "center" }}>
            <Link as={ReachLink} to="/">
              <Image
                boxSize="170px"
                objectFit="fill"
                src="https://webasset.fraazo.com/production/b70a67f4e825e3d388ac4466952c20a8.svg"
                alt="Dan Abramov"
              />
            </Link>
          </Box>
        </HStack>

        <HStack spacing={4} alignItems={"center"}>
          <Flex color={"gray.900"} _hover={{}}>
            <Link color="gray.600" _hover={{}} as={ReachLink} to="/">
              <Icon as={MdLocationOn} mr={3} />
              Location
            </Link>
          </Flex>
        </HStack>

        <Flex
          alignItems={"center"}
          w={"50%"}
          display={{ base: "none", md: "flex" }}
        >
          <InputGroup>
            <InputRightElement
              // pointerEvents="none"
              m={"5px"}
              color="gray.400"
              children={<FaSearch />}
            />
            <Input
              // value={query}
              onChange={handleChange}
              variant="unstyled"
              p={"3"}
              border={"1px solid gray"}
              borderRadius={"30px"}
              type="tel"
              placeholder="Find fresh vegitable, fruits and dairy..."
            />
          </InputGroup>

          {/* <Box zIndex="100" textAlign="center" pl="5rem">
            Abckdnlsdkn
          </Box> */}
        </Flex>

        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          <Link
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("gray.200", "gray.700"),
            }}
            as={ReachLink}
            to="/cart"
          >
            <Icon as={BsCart3} mr={3} />
            Cart
          </Link>
          <Link
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("gray.200", "gray.700"),
            }}
            as={ReachLink}
            to="/credit"
          >
            <Icon as={BsCreditCard} mr={3} />
            Credits
          </Link>

          <Link
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("gray.200", "gray.700"),
            }}
            as={ReachLink}
            to="/login"
          >
            <Icon as={FaUser} mr={3} />
            Login
          </Link>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <Link as={ReachLink} key={link.id} to={link.to}>
                {link.title}
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
