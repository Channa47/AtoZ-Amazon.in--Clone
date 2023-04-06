import { useState } from "react";
import { Box, Image, Text, Grid, GridItem, Checkbox } from "@chakra-ui/react";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import amzlogo from "../assets/amzlogo.png";

const ProductsCard = ({ img, title, price, id }) => {
  //console.log(id);
  return (
    <div>
      <Box
        borderColor="gray.300"
        display="flex"
        align="left"
        p="4"
        bg="white"
        cursor="pointer"
      >
        <Box w="20%" mr={5} ml={5}>
          <Link to={`/single/${id}`}>
            <Box bg="gray.50">
              <Image src={img} m="auto" h="180px"></Image>
            </Box>
          </Link>
        </Box>
        <Link to={`/single/${id}`}>
          <Box>
            <Text mt="2">{title}</Text>
            <Box display="flex" fontSize="sm" mt="2" m="auto">
              <Text fontWeight="medium" fontSize="2xl">
                ₹{price}
              </Text>
              <Text ml="2" color="grey" fontWeight="medium" mt={2}>
                ₹<del>5000</del>
              </Text>
              <Text ml="2" color="green" mt={2}>
                ₹4200
              </Text>
            </Box>
            <Text color="grey">Get up to 5% back + rewards worth ₹2,000</Text>
            <Box display="flex" mt={4}>
              <Image src={amzlogo} h={4} mt={1.5}></Image>
              <Text ml={1}>FREE One-Day</Text>
            </Box>
            <Text mt={2}>FREE Delivery by Tomorrow, January 20</Text>
          </Box>
        </Link>
      </Box>
    </div>
  );
};

export default ProductsCard;
