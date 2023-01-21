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
import React from "react";

const Cart = () => {
  return (
    <div style={{ backgroundColor: "#eaeded" }}>
      <Heading>Cart Page</Heading>
      <Flex>
        {/* L E F T   S I D E  O F    F L E X */}
        <Box
          w="76%"
          border="solid red 1px"
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
          <Flex>
            <Box
              border="solid green 1px"
              w={{ base: "26%", sm: "24%", md: "22%", lg: "20%" }}
            >
              <Image
                w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                src="https://m.media-amazon.com/images/I/61VyUXLL+8L._AC_AA180_.jpg"
              />
            </Box>
            <Box
              border="solid blue 1px"
              w={{ base: "50%", sm: "54%", md: "56%", lg: "64%" }}
            >
              <Text
                noOfLines={2}
                fontWeight="semibold"
                textAlign="left"
                fontSize={{ base: "6", sm: "8", md: "10", lg: "16" }}
                mt="2"
                mb="1"
              >
                Lenovo Legion 7 Intel Core i9-12900HX 16" (40.64cm) QHD IPS
                165Hz 500Nits Gaming Laptop (32GB/1TB SSD/Win 11/Office
                2021/NVIDIA )
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
              border="solid yellow 1px"
              w={{ base: "24%", sm: "21%", md: "22%", lg: "16%" }}
              fontWeight="semibold"
              fontSize={{ base: "8", sm: "10", md: "14", lg: "18" }}
            >
              ₹3,07,990.00
            </Box>
          </Flex>
        </Box>
        {/* R I G H T   S I D E  O F    F L E X */}
        <Box w="24%" border="solid black 1px" m="5" ml="0" bg="white" p="4">
          <Text
            textAlign="left"
            fontSize={{ base: "5", sm: "6", md: "10", lg: "14" }}
          >
            <Icon textAlign="left" color="green" as={CheckCircleIcon} /> Your
            order is eligible for FREE Delivery. Select this option at checkout.
          </Text>
          <Text
            m="2"
            textAlign="left"
            fontSize={{ base: "8", sm: "10", md: "16", lg: "20" }}
            fontWeight="semibold"
          >
            Subtotal(5 items):
            <Text
              fontSize={{ base: "8", sm: "10", md: "16", lg: "20" }}
              fontWeight="bold"
            >
              ₹50000
            </Text>
          </Text>
          <Button
            w="100%"
            mt="2"
            mb="2"
            bgColor="#ffd814"
            fontWeight="normal"
            fontSize={{ base: "8", sm: "10", md: "16", lg: "20" }}
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
      </Flex>
    </div>
  );
};

export default Cart;
