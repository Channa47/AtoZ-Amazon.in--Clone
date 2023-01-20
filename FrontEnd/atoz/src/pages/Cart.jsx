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
} from "@chakra-ui/react";
import React from "react";

const Cart = () => {
  return (
    <div style={{ backgroundColor: "#eaeded" }}>
      <Heading>Cart Page</Heading>
      <Flex>
        {/* L E F T   S I D E  O F    F L E X */}
        <Box w="76%" border="solid red 1px" m="5" bg="white" p="4">
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
            <Box border="solid green 1px" w="20%">
              <Image src="https://m.media-amazon.com/images/I/61VyUXLL+8L._AC_AA180_.jpg" />
            </Box>
            <Box border="solid blue 1px" w="64%">
              <Text
                noOfLines={2}
                fontWeight="semibold"
                textAlign="left"
                fontSize={{ base: "10", sm: "12", md: "14", lg: "16" }}
              >
                Lenovo Legion 7 Intel Core i9-12900HX 16" (40.64cm) QHD IPS
                165Hz 500Nits Gaming Laptop (32GB/1TB SSD/Win 11/Office
                2021/NVIDIA )
              </Text>
              <Text
                textAlign="left"
                color="green"
                fontSize={{ base: "8", sm: "10", md: "12", lg: "14" }}
              >
                In stock
              </Text>
              <Text
                color="gray"
                textAlign="left"
                fontSize={{ base: "7", sm: "8", md: "10", lg: "12" }}
              >
                Eligible for FREE Shipping
              </Text>
              <Image src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" />
              <Box
                textAlign="left"
                fontSize={{ base: "7", sm: "8", md: "10", lg: "12" }}
              >
                <input type="checkbox" style={{ margin: "0.2rem" }} />
                This will be a gift
              </Box>
              <Flex w="70%">
                <Select placeholder={`Qty :`} w="24%" h="8" m="auto" mr="3">
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
                <Divider
                  border="solid lightgrey 0.5px"
                  orientation="vertical"
                  mt="2"
                  mr="2"
                  h="6"
                />
                <Button
                  color="blue.400"
                  fontSize={{ base: "7", sm: "8", md: "10", lg: "12" }}
                  bg="none"
                  mr="2"
                >
                  Delete
                </Button>
                <Divider
                  border="solid lightgrey 0.5px"
                  orientation="vertical"
                  mt="2"
                  mr="2"
                  h="6"
                />
                <Button
                  color="blue.400"
                  fontSize={{ base: "7", sm: "8", md: "10", lg: "12" }}
                  bg="none"
                  mr="2"
                >
                  Save for later
                </Button>
                <Divider
                  border="solid lightgrey 0.5px"
                  orientation="vertical"
                  mt="2"
                  mr="2"
                  h="6"
                />
                <Button
                  color="blue.400"
                  fontSize={{ base: "7", sm: "8", md: "10", lg: "12" }}
                  bg="none"
                  mr="2"
                >
                  See more like this
                </Button>
              </Flex>
            </Box>
            <Box border="solid yellow 1px" w="16%" fontWeight="semibold">
              ₹3,07,990.00
            </Box>
          </Flex>
        </Box>
        {/* R I G H T   S I D E  O F    F L E X */}
        <Box w="24%" border="solid black 1px" m="5" ml="0" bg="white" p="4">
          <Heading>hello</Heading>
          <Heading>hello</Heading>
          <Heading>hello</Heading>
        </Box>
      </Flex>
    </div>
  );
};

export default Cart;
