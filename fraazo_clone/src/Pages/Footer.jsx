import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  VStack,
  HStack,
  Heading,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { Image } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box py={20} pb="0px" mb={0}>
      <Image
        w="100%"
        src="https://webasset.fraazo.com/production/a72cf5cd03bd56f4be37fa1c4ce7062d.svg"
      />
      <Box bg={useColorModeValue("#165241")} color="whiteAlpha.900">
        <Box w="90%" m="auto" py={10}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
            spacing={20}
            justifyContent="center"
          >
            <Stack spacing={6}>
              <Box>
                <Image
                  w="50%"
                  src="https://webasset.fraazo.com/production/f01ccf2737aa24558c3808178effa5fb.svg"
                />
              </Box>
              <Text fontSize={"sm"} pr="5rem">
                Order online vegetables & fruits directly from the farm. Fraazo
                is online platform that allows customer to get farm fresh
                produce directly from farmers.
              </Text>
              <Stack direction={"row"} spacing={6}>
                <FaTwitter />

                <FaYoutube />

                <FaInstagram />
              </Stack>
            </Stack>
            <Stack align={"flex-start"} lineHeight="8">
              <ListHeader>Useful Links</ListHeader>
              <Link href={"#"}>About us</Link>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>FAQ</Link>
              <Link href={"#"}>Terms & Conditions</Link>
              <Link href={"#"}>Sitemap</Link>
            </Stack>
            <Stack align={"flex-start"} lineHeight="8">
              <ListHeader>Cities We Serve</ListHeader>
              <Link href={"#"}>Mumbai</Link>
              <Link href={"#"}>Hydrabad</Link>
              <Link href={"#"}>Delihi</Link>
              <Link href={"#"}>Pune</Link>
              <Link href={"#"}>Noida</Link>
              <Link href={"#"}>Gurugram</Link>
              <Link href={"#"}>Banglore</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Connect with us</ListHeader>

              <Stack mb="5rem" lineHeight={4}>
                <Link textDecoration="none">
                  {" "}
                  {<EmailIcon />} &nbsp; Contact US
                </Link>
                <Link textDecoration="none">
                  {" "}
                  {<PhoneIcon />} &nbsp; +91 9120694576
                </Link>
              </Stack>

              <Box pt="3rem">
                <ListHeader>Download The App</ListHeader>
              </Box>
              <HStack direction={{ lg: "row", base: "column", md: "column" }}>
                <Box>
                  <Image
                    alt="playStore"
                    src="https://webasset.fraazo.com/production/footer-g-play.53194b32f1f28968b89e.png"
                  />
                </Box>
                <Box>
                  <Image
                    alt="appleStore"
                    src="https://webasset.fraazo.com/production/footer-appstore.b90f071a00b68166f2af.png"
                  />
                </Box>
              </HStack>
            </Stack>
          </SimpleGrid>

          <Heading fontWeight="normal" pt="2rem">
            Fresh Fruits & Vegetables Grocery Shopping Online
          </Heading>

          <Box>
            <Text
              fontSize="sm"
              color="white"
              fontWeight="300"
              pt="2rem"
              textAlign="justify"
            >
              The quality of fruits & vegetables is synonymous with its
              freshness, while getting fresh fruits and vegetables is a tedious
              task at times but with Fraazo you can get it delivered at your
              doorstep. Fraazo brings a wide range of farm fresh fruits,
              vegetables and dairy products to you, all in just a click. We
              currently serve about more than 3lacs+ happy customers in Mumbai,
              Navi Mumbai, Thane, Kalyan-Dombivli and Virar. Fraazo has made
              online shopping of fresh produce much easier with its hassle-free
              home delivery options. You can choose the delivery slot as per
              your choice and schedule your order accordingly. Or you can simply
              opt for the option of 90 mins Express Delivery and get your order
              delivered in not more than 90 mins. The farm fresh fruits and
              vegetables on Fraazo are available at best prices compared to
              other vendors & supermarkets. Plus with so many exciting offers,
              one can save up to 20% on their Monthly grocery budgets. No need
              to wait in long queues in crowded supermarkets or local mandis for
              getting the best prices on veggies. Kick the stress out & just
              Fraazo your dose of freshness with savings at the comfort of your
              home. Fraazo directly sources fresh fruits and veggies from an
              extensive network of farmers across Maharashtra, hence bringing
              you fresh produce straight from farm to table in less than 18
              hours. With our Safe & Hygienic packaging and minimal multiple
              handling, we ensure you get the best quality fresh produce.
            </Text>

            <Text
              pt="1rem"
              fontSize="sm"
              color="white"
              fontWeight={300}
              textAlign="justify"
            >
              The fruits and vegetables are 100% hand-picked fresh from farm,
              while some products are hydroponically-grown. The wide range of
              fruits and veggies on Fraazo include more than 100+ farm fresh
              vegetables and fruits, starting from regular veggies like dudhi,
              cauliflower, beetroot, cabbage, etc. to exotic veggies like
              broccoli, lettuce etc. We also provide the essential vegetable
              combos like Onion, Potato, Tomato Combo, Salad Combo, Fresh
              Cut-Veg Combos or Fruit Combos like Banana, Apple Combo, & more.
              There are a lot of exciting deals on vegetables & fruits, every
              day of the week, the major highlights being Monday Mandi, Veggie
              Wednesday, Freelivery Thursday & Fruit Friday.For payments, you
              can choose from the multiple payment options as Fraazo accepts
              Debit card, Credit card, UPI options like iMobile, Google Pay, 8+
              e-Wallet options like Phonepe, JioPay, MobiKwik, Sodexo,
              NetBanking and Cash on Delivery (COD). If you ever have an issue
              with missing items or any quality issue, you can raise your
              concern with us in 48 hrs & we shall refund/ replace your product
              with “no-questions-asked-policy”. You can simply connect with our
              Customer Support team via Chat Support or Call on 9152291522.
            </Text>
          </Box>

          <Divider pt="1rem" orientation="horizontal" color="#75998e" />

          <Flex justifyContent="center" pt="2rem" fontWeight="bold">
            © Copyrights 2021 - 2022. Fraazo. All Rights Reserved.
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
