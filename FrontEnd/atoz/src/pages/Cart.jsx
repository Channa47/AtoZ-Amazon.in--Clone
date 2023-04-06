//import statements
import {
  Heading,
  Flex,
  Box,
  Text,
  Divider,
  Image,
  Radio,
  Select,
  Button,
  Input,
  SimpleGrid,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { CheckCircleIcon } from "@chakra-ui/icons";
import CartItem from "../Components/CartItem";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { Navigation } from "../Components/Navigation";
import { useNavigate } from "react-router-dom";

//cart component
const Cart = () => {
  const [recommend, setRecommend] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);

  //getting state from redux store
  const cartPageData = useState(
    useSelector((state) => state.CartReducer.cartData) || []
  );
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const navigate = useNavigate();

  //calculating total price of items inside cart
  let total = 0;

  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price * cartItems[i].quantity;
  }

  //fetching data for similar products
  useEffect(() => {
    axios
      .get(`https://long-plum-ray-ring.cyclic.app/api/v1/products`)
      .then((res) => setRecommend(res.data.products))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(
    (cartItems = JSON.parse(localStorage.getItem("cartItems")) || []) => {},
    [cartItems, total]
  );
  // console.log("cartItems - - > ", cartItems);
  return (
    <>
      <Header />
      <Navigation />
      <div style={{ backgroundColor: "#eaeded" }}>
        <Flex>
          {/* L E F T   S I D E  O F    F L E X */}
          <Box
            w="76%"
            m={{ base: "2", sm: "3", md: "4", lg: "5" }}
            bg="white"
            p="4"
          >
            <Text
              textAlign="left"
              fontWeight="semibold"
              fontSize={{ base: "12", sm: "16", md: "24", lg: "27" }}
              fontFamily="Raleway, sans-serif"
            >
              Shopping Cart
            </Text>
            <Text textAlign="right">Price</Text>
            <Divider />
            {cartItems.length == 0 && (
              <Box>
                <img
                  src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/media/314560586aef7f1eae694d78a015c69c.gif"
                  alt="emptyCart"
                />
                <Text
                  fontWeight="semibold"
                  color="blue.500"
                  fontSize={{ base: "12", sm: "16", md: "24", lg: "35" }}
                >
                  Cart is Empty
                </Text>
              </Box>
            )}
            {/* mapping through cartItems and displaying in CartItem companent  */}
            {cartItems &&
              cartItems.map((el) => {
                return <CartItem {...el} />;
              })}
          </Box>
          {/* R I G H T   S I D E  O F    F L E X */}
          <Box w="24%" m="5" ml="0" bg="#eaeded">
            <Box borderRadius={5} bg="white" p="2">
              <Text
                textAlign="left"
                fontSize={{ base: "5", sm: "6", md: "10", lg: "14" }}
              >
                <Icon textAlign="left" color="green" as={CheckCircleIcon} />{" "}
                Your order is eligible for FREE Delivery. Select this option at
                checkout.
              </Text>
              <Text
                m="2"
                textAlign="left"
                fontSize={{ base: "8", sm: "10", md: "16", lg: "20" }}
                fontWeight="semibold"
              >
                Total ({cartItems.length} items) :
                <Text
                  fontSize={{ base: "8", sm: "10", md: "16", lg: "20" }}
                  fontWeight="bold"
                >
                  ₹{total}
                </Text>
              </Text>
              <Button
                isDisabled={total == 0}
                w="100%"
                mt="2"
                mb="2"
                bgColor="#ffd814"
                fontWeight="normal"
                fontSize={{ base: "8", sm: "10", md: "16", lg: "20" }}
                onClick={() => navigate("/address")}
              >
                Proceed to Buy
              </Button>
              <Box
                borderRadius="5"
                mt="3"
                mb="2"
                w={{ base: "90%", sm: "90%", md: "90%", lg: "100%" }}
              >
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          fontSize={{ base: "8", sm: "10", md: "12", lg: "14" }}
                        >
                          EMI Available
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <Box>
                      <AccordionPanel pb={4} textAlign="left">
                        Your order qualifies for EMI with valid credit cards
                        (not available on purchase of Gold, Jewelry, Gift cards
                        and Amazon pay balance top up)
                      </AccordionPanel>
                    </Box>
                  </AccordionItem>
                </Accordion>
              </Box>
            </Box>
            <Box borderRadius={15} bg="white" p="2" mt="5">
              <Text
                textAlign="left"
                fontWeight="bold"
                fontSize={{ base: "6", sm: "8", md: "12", lg: "15" }}
              >
                Similar products like this
              </Text>

              {recommend &&
                recommend.map((el) => {
                  return (
                    <Flex mt="4">
                      <Box w="35%">
                        <Image
                          m="auto"
                          w="60%"
                          h={{ base: "55", sm: "70", md: "75", lg: "100" }}
                          src={el.images[0].url}
                        />
                      </Box>
                      <Box w="65%">
                        <Text
                          textAlign="left"
                          color="blue.400"
                          fontSize={{
                            base: "10",
                            sm: "12",
                            md: "14",
                            lg: "16",
                          }}
                        >
                          {el.name}
                        </Text>
                        <Text
                          textAlign="left"
                          color="brown"
                          fontSize={{
                            base: "10",
                            sm: "12",
                            md: "14",
                            lg: "16",
                          }}
                        >
                          ₹{el.price}
                        </Text>
                        <Box textAlign="left">
                          <Button
                            m="1"
                            w={{ base: "3", sm: "4", md: "5", lg: "14" }}
                            fontSize={{ base: "5", sm: "6", md: "7", lg: "8" }}
                            h={{ base: "3", sm: "4", md: "5", lg: "7" }}
                            bgColor="#ffd814"
                          >
                            Add to Cart
                          </Button>
                        </Box>
                      </Box>
                    </Flex>
                  );
                })}
            </Box>
          </Box>
        </Flex>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
