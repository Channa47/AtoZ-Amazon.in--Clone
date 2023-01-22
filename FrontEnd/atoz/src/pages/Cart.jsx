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
import { CheckCircleIcon } from "@chakra-ui/icons";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { Navigation } from "../Components/Navigation";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const navigate = useNavigate();
  let totalSum = 0;
  cartItems.map((el) => {
    totalSum += el.price;
  });

  console.log(totalSum);
  useEffect(() => {
    axios
      .get(`https://long-plum-ray-ring.cyclic.app/api/v1/products`)
      .then((res) => setCartData(res.data.products))
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log(cartData);
  return (
    <>
 <Header/>
 <Navigation/>
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
          >
            Shopping Cart
          </Text>
          <Text textAlign="right">Price</Text>
          <Divider />
          {cartItems.map((el) => {
            return (
              <Flex>
                <Box w={{ base: "26%", sm: "24%", md: "22%", lg: "20%" }}>
                  <Image
                    m="auto"
                    h={{ base: "80px", sm: "120px", md: "120px", lg: "160px" }}
                    src={el.images[0].url}
                    alt={el.name}
                  />
                </Box>
                <Box w={{ base: "58%", sm: "57%", md: "56%", lg: "64%" }}>
                  <Text
                    noOfLines={2}
                    fontWeight="semibold"
                    textAlign="left"
                    fontSize={{ base: "6", sm: "8", md: "10", lg: "16" }}
                    mt="2"
                    mb="1"
                  >
                    {el.name}-{el.description}
                  </Text>
                  <Text
                    textAlign="left"
                    color="green"
                    fontSize={{ base: "6", sm: "8", md: "10", lg: "12" }}
                  >
                    In stock
                  </Text>
                  <Text
                    color="gray"
                    textAlign="left"
                    fontSize={{ base: "3", sm: "5", md: "7", lg: "11" }}
                    mt="1"
                    mb="1"
                  >
                    Eligible for FREE Shipping
                  </Text>
                  <Image
                    w={{ base: "6", sm: "7", md: "10", lg: "16" }}
                    mt="1"
                    mb="2"
                    src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
                  />

                  <SimpleGrid w="70%" minChildWidth="30px" gap="2">
                    <Select
                      placeholder={`Qty :`}
                      bgColor="#f0f2f2"
                      h={{ base: "6", sm: "7", md: "7", lg: "8" }}
                    >
                      <option value="option1">1</option>
                      <option value="option2">2</option>
                      <option value="option3">3</option>
                      <option value="option1">4</option>
                      <option value="option2">5</option>
                      <option value="option3">6</option>
                      <option value="option1">7</option>
                      <option value="option2">8</option>
                      <option value="option3">9</option>
                      <option value="option3">10+</option>
                    </Select>

                    <Button
                      color="blue.400"
                      fontSize={{ base: "3", sm: "6", md: "8", lg: "12" }}
                      bg="none"
                    >
                      Delete
                    </Button>

                    <Button
                      color="blue.400"
                      fontSize={{ base: "3", sm: "4", md: "8", lg: "12" }}
                      bg="none"
                    >
                      Save for later
                    </Button>

                    <Button
                      color="blue.400"
                      fontSize={{ base: "3", sm: "4", md: "8", lg: "12" }}
                      bg="none"
                    >
                      See more like this
                    </Button>
                  </SimpleGrid>
                </Box>
                <Box
                  w={{ base: "16%", sm: "18%", md: "22%", lg: "16%" }}
                  fontWeight="semibold"
                  fontSize={{ base: "8", sm: "10", md: "14", lg: "18" }}
                >
                  ₹{el.price}
                </Box>
              </Flex>
            );
          })}
        </Box>
        {/* R I G H T   S I D E  O F    F L E X */}
        <Box w="24%" m="5" ml="0" bg="#eaeded">
          <Box borderRadius={5} bg="white" p="2">
            <Text
              textAlign="left"
              fontSize={{ base: "5", sm: "6", md: "10", lg: "14" }}
            >
              <Icon textAlign="left" color="green" as={CheckCircleIcon} /> Your
              order is eligible for FREE Delivery. Select this option at
              checkout.
            </Text>
            <Text
              m="2"
              textAlign="left"
              fontSize={{ base: "8", sm: "10", md: "16", lg: "20" }}
              fontWeight="semibold"
            >
              Subtotal ({cartItems.length} items) :
              <Text
                fontSize={{ base: "8", sm: "10", md: "16", lg: "20" }}
                fontWeight="bold"
              >
                ₹{totalSum}
              </Text>
            </Text>
            <Button
              w="100%"
              mt="2"
              mb="2"
              bgColor="#ffd814"
              fontWeight="normal"
              fontSize={{ base: "8", sm: "10", md: "16", lg: "20" }}
              onClick={()=>navigate("/address")}
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
                      Your order qualifies for EMI with valid credit cards (not
                      available on purchase of Gold, Jewelry, Gift cards and
                      Amazon pay balance top up)
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
            {cartData.map((el) => {
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
                      fontSize={{ base: "10", sm: "12", md: "14", lg: "16" }}
                    >
                      {el.name}
                    </Text>
                    <Text
                      textAlign="left"
                      color="brown"
                      fontSize={{ base: "10", sm: "12", md: "14", lg: "16" }}
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
    <Footer/>
    </>
  );
};

export default Cart;
