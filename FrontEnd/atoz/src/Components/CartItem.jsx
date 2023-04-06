//import statements
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Heading,
  Button,
  useToast,
  Input,
  Flex,
  Image,
  Text,
  Box,
  useFocusEffect,
} from "@chakra-ui/react";
import { updateQuantity, deleteFromCart } from "../Redux/CartReducer/action";

//cartItem Component
const CartItem = ({ name, images, category, price, quantity, _id }) => {
  const [count, setCount] = useState(quantity);
  const [cartPageData, setCartPageData] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const dispatch = useDispatch();

  //getting state from redux store
  const latest = useSelector((state) => state.CartReducer.carts);

  //function for reducing quantity of particular cart item
  const handleDecrement = () => {
    setCount((pre) => pre - 1);

    const payload = {
      quantity: count - 1,
      _id,
    };
    dispatch(updateQuantity(payload));
  };

  //function for increasing quantity of particular cart item
  const handleIncrement = () => {
    setCount((pre) => pre + 1);

    const payload = {
      quantity: count + 1,
      _id,
    };
    dispatch(updateQuantity(payload));
  };
  //console.log("quantity", quantity);

  //function for deleting particular item from cart

  const handleDelete = () => {
    dispatch(deleteFromCart(_id));
  };

  //calculatiing subtotal from cart item
  let subTotal = price * count;

  useEffect(() => {}, [
    handleIncrement,
    handleDelete,
    handleDecrement,
    quantity,
    count,
    cartPageData,
  ]);

  //console.log("cart item - - \\- - >", name, images);

  return (
    <Box boxShadow="md" p="6" rounded="md">
      <Flex>
        <Box w="28.33%">
          <Image
            w={{ base: "20", md: "22", lg: "24", xl: "26" }}
            src={images[0].url}
            alignContent="center"
            alignItems="center"
            textAlign="center"
            m="auto"
          />
        </Box>
        <Box
          alignContent="center"
          alignItems="center"
          textAlign="center"
          m="auto"
          w="38.33%"
        >
          <Text
            alignContent="center"
            alignItems="center"
            textAlign="center"
            fontWeight="bold"
            fontFamily="Roboto Mono, monospace"
            fontSize={{ base: "12", md: "14", lg: "18", xl: "20" }}
          >
            {name}
          </Text>
          <Text
            fontSize={{ base: "10", md: "12", lg: "14", xl: "16" }}
            alignContent="center"
            alignItems="center"
            textAlign="center"
            fontFamily="Roboto Mono, monospace"
          >
            {category}
          </Text>
          <Text
            alignContent="center"
            alignItems="center"
            textAlign="center"
            fontWeight="bold"
          >
            {`₹ ${price}`}
          </Text>
          <Flex m="auto" mt="1" ml={{ base: "-5", md: "0", lg: "0", xl: "0" }}>
            <Button
              isDisabled={count <= 1}
              _hover={{ bg: "#DD6B20", color: "white" }}
              borderRadius={"0"}
              fontSize={"small"}
              alignContent="center"
              alignItems="center"
              textAlign="center"
              m="auto"
              onClick={handleDecrement}
            >
              -
            </Button>
            <Text fontWeight="semibold">Quantity : {count} </Text>
            <Button
              isDisabled={count >= 10}
              _hover={{ bg: "#DD6B20", color: "white" }}
              borderRadius={"0"}
              fontSize={"small"}
              alignContent="center"
              alignItems="center"
              textAlign="center"
              m="auto"
              onClick={handleIncrement}
            >
              +
            </Button>
          </Flex>
        </Box>
        <Box
          display={{ base: "none", md: "block", lg: "block", xl: "block" }}
          alignContent="center"
          alignItems="center"
          textAlign="center"
          m="auto"
          w="33.33%"
        >
          <Button
            alignContent="center"
            alignItems="center"
            textAlign="center"
            mb="2"
            w={{ base: "14", md: "16", lg: "18", xl: "20" }}
            _hover={{ bg: "#DD6B20", color: "white" }}
            onClick={handleDelete}
          >
            Remove
          </Button>

          <Text
            mt="2"
            fontWeight="semibold"
            alignContent="center"
            alignItems="center"
            textAlign="center"
          >
            Subtotal : ₹ {subTotal}
          </Text>
        </Box>
      </Flex>
      <Box
        display={{ base: "flex", md: "none", lg: "none", xl: "none" }}
        alignContent="center"
        alignItems="center"
        textAlign="center"
        m="auto"
        w="33.33%"
      >
        <Button
          alignContent="center"
          alignItems="center"
          textAlign="center"
          mb="2"
          mr={{ base: "5", md: "2", lg: "2", xl: "2" }}
          _hover={{ bg: "#DD6B20", color: "white" }}
          onClick={handleDelete}
          backgroundColor={{
            base: "white",
          }}
          color="red"
        >
          Remove
        </Button>
        <Text
          mr="5"
          display={{ base: "block", md: "none", lg: "none", xl: "none" }}
        >
          |
        </Text>
        <Text
          mt="2"
          fontWeight="semibold"
          alignContent="center"
          alignItems="center"
          textAlign="center"
        >
          Subtotal : ₹ {subTotal}
        </Text>
      </Box>
    </Box>
  );
};

export default CartItem;
