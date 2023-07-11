//import statements
import { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Input,
  RangeSlider,
  Select,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Button,
  Checkbox,
  Image,
  SimpleGrid,
  Stack,
  Skeleton,
  Flex,
  Heading,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsWindows } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import ProductsCard from "../Components/ProductsCard";
import amzlogo from "../assets/amzlogo.png";
import star4 from "../assets/star4.png";
import star3 from "../assets/star3.png";
import star2 from "../assets/star2.png";
import star1 from "../assets/star1.png";
import { useParams } from "react-router-dom";
import { Header } from "../Components/Header";
import { Navigation } from "../Components/Navigation";
import { Footer } from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../Redux/CartReducer/action";

//Products Component
const Products = () => {
  let { name } = useParams();
  //nums array for pagination
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, "..."];
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [page, setPage] = useState(1);

  const [sort, setSort] = useState("");

  let [cat, setCat] = useState(name);

  const dispatch = useDispatch();
  const items = useSelector((state) => state.CartReducer.items);
  const productsLoading = useSelector(
    (state) => state.CartReducer.getProductsLoading
  );
  // console.log("products ->>", items);
  //console.log("<-----name------->", name);

  useEffect(() => {
    dispatch(getProductsData(cat, page));
  }, [cat, page]);
  useEffect(() => {
    dispatch(getProductsData(name, page));
  }, [name]);
  return (
    <div>
      <Header />
      <Navigation />

      <Grid templateColumns="21% 78.5%" gap={1} bg="white">
        <GridItem w="100%" h="auto" px="2">
          <Box
            h="auto"
            p="3"
            pl="4"
            borderColor="gray.300"
            mt="2"
            align="left"
            bg="white"
          >
            <Text
              align="left"
              fontSize="md"
              fontWeight="medium"
              color="blackAlpha.800"
            >
              AtoZ Prime
            </Text>
            <Checkbox mt="2" colorScheme="blue">
              <Image src={amzlogo} />
            </Checkbox>
          </Box>
          <Box
            h="auto"
            p="3"
            pl="4"
            // border="1px"
            borderColor="gray.300"
            mt="2"
            align="left"
            display="grid"
            bg="white"
          >
            <Text
              align="left"
              fontSize="md"
              fontWeight="medium"
              color="blackAlpha.800"
            >
              Category
            </Text>
            <Checkbox
              mt="2"
              colorScheme="blue"
              value="mobile"
              onChange={(e) => setCat(e.target.value)}
            >
              Smartphones
            </Checkbox>
            <Checkbox
              mt="2"
              colorScheme="blue"
              value="laptop"
              onChange={(e) => setCat(e.target.value)}
            >
              Laptops
            </Checkbox>
            <Checkbox
              mt="2"
              colorScheme="blue"
              value="grocery"
              onChange={(e) => setCat(e.target.value)}
            >
              Grocery
            </Checkbox>
            <Checkbox
              mt="2"
              colorScheme="blue"
              value="clothes"
              onChange={(e) => setCat(e.target.value)}
            >
              Fashion
            </Checkbox>
            <Checkbox
              mt="2"
              colorScheme="blue"
              value="shoes"
              onChange={(e) => setCat(e.target.value)}
            >
              Shoes
            </Checkbox>
          </Box>
          <Box
            h="auto"
            p="3"
            pl="4"
            // border="1px"
            borderColor="gray.300"
            mt="2"
            align="left"
            display="grid"
            bg="white"
          >
            <Text
              align="left"
              fontSize="md"
              fontWeight="medium"
              color="blackAlpha.800"
            >
              Brand
            </Text>
            <Checkbox mt="2" colorScheme="blue">
              Samsung
            </Checkbox>
            <Checkbox mt="2" colorScheme="blue">
              Xiaomi
            </Checkbox>
            <Checkbox mt="2" colorScheme="blue">
              OPPO
            </Checkbox>
            <Checkbox mt="2" colorScheme="blue">
              Tecno
            </Checkbox>
            <Checkbox mt="2" colorScheme="blue">
              VIVO
            </Checkbox>
            <Checkbox mt="2" colorScheme="blue">
              Realme
            </Checkbox>
          </Box>

          <Box
            h="auto"
            p="3"
            pl="4"
            // border="1px"
            borderColor="gray.300"
            mt="2"
            align="left"
            display="grid"
            bg="white"
          >
            <Text
              align="left"
              fontSize="md"
              fontWeight="medium"
              color="blackAlpha.800"
            >
              Customer Review
            </Text>
            <Checkbox mt="2" colorScheme="blue">
              <Image src={star4}></Image>
            </Checkbox>
            <Checkbox mt="2" colorScheme="blue">
              <Image src={star3}></Image>
            </Checkbox>
            <Checkbox mt="2" colorScheme="blue">
              <Image src={star2}></Image>
            </Checkbox>
            <Checkbox mt="2" colorScheme="blue">
              <Image src={star1}></Image>
            </Checkbox>
          </Box>

          <Box
            h="auto"
            p="3"
            pl="4"
            // border="1px"
            borderColor="gray.300"
            mt="2"
            bg="white"
          >
            <Text
              align="left"
              fontSize="md"
              fontWeight="bold"
              color="blackAlpha.800"
            >
              Price
            </Text>
            <Text align="left">Under ₹1,000</Text>
            <Text align="left">₹1,000 - ₹5,000</Text>
            <Text align="left">₹5,000 - ₹10,000</Text>
            <Text align="left">₹10,000 - ₹20,000</Text>
            <Text align="left">Over ₹20,000</Text>
            <Box display="flex">
              <Input
                w="35%"
                borderRadius="none"
                borderColor="black"
                value={min}
                onChange={(e) => setMin(e.target.value)}
                placeholder="₹ Min"
              ></Input>
              <Text p="2">to</Text>
              <Input
                w="35%"
                borderRadius="none"
                borderColor="black"
                value={max}
                onChange={(e) => setMax(e.target.value)}
                placeholder="₹ Max"
              ></Input>
              <Button
                bg="white"
                border="1px"
                borderRadius="5px"
                borderColor="black"
                ml="2"
                color="black"
              >
                Go
              </Button>
            </Box>
          </Box>

          <Box
            h="auto"
            p="3"
            pl="4"
            // border="1px"
            borderColor="gray.300"
            mt="2"
            align="left"
            display="grid"
            bg="white"
          >
            <Text
              align="left"
              fontSize="md"
              fontWeight="medium"
              color="blackAlpha.800"
            >
              Deals & Discounts
            </Text>
            <Text align="left" fontSize="md" color="blackAlpha.800">
              Today's Deals
            </Text>
          </Box>
        </GridItem>

        {productsLoading ? (
          <Flex>
            <Stack w="20%" mt="100px" mr="1rem" gap={8}>
              <Skeleton height="10rem" />
              <Skeleton height="10rem" />
              <Skeleton height="10rem" />
              <Skeleton height="10rem" />
              <Skeleton height="10rem" />
              <Skeleton height="10rem" />
            </Stack>
            <Stack w="78%" mt="100px" gap={8}>
              <Skeleton height="10rem" />
              <Skeleton height="10rem" />
              <Skeleton height="10rem" />
              <Skeleton height="10rem" />
              <Skeleton height="10rem" />
              <Skeleton height="10rem" />
            </Stack>
          </Flex>
        ) : (
          <GridItem w="100%" h="auto">
            <Grid
              templateColumns="57% 45%"
              gap="auto"
              bg="white"
              mt="2"
              // border="1px"
              borderColor="gray.300"
            >
              <GridItem w="auto" h="auto">
                <Box p="2" align="left" bg="white">
                  <Text fontSize="2xl" fontWeight="bold">
                    RESULTS <span> </span>{" "}
                  </Text>
                  <Text>
                    (Showing 1- 10 products of <span>{items.length}</span>{" "}
                    products )
                  </Text>
                </Box>
              </GridItem>
              <GridItem w="auto" margin="auto" h="auto" mt="4">
                <Box display="flex" mt="2" h="auto" align="right">
                  <Select fontSize="md" fontWeight="medium">
                    <option value="Featured">Featured</option>
                    <option
                      value="asc"
                      onClick={(e) => setSort(e.target.value)}
                    >
                      Price: Low to High
                    </option>
                    <option
                      value="asc"
                      onClick={(e) => setSort(e.target.value)}
                    >
                      Price: High to Low
                    </option>
                  </Select>
                </Box>
              </GridItem>
            </Grid>

            <SimpleGrid columns={[1, 1, 1, 1, 1, 1]} spacing={2} mt="2">
              {items.length == 0 && (
                <Box w="80%" m="auto">
                  <Heading color="blue.300">No Results</Heading>
                  <Image
                    src="https://cdn.dribbble.com/users/745861/screenshots/7889509/media/5891d9d48179ca0b3a8fcdf178db8737.png?compress=1&resize=768x576&vertical=top"
                    alt="no items img"
                    w="100%"
                  />
                </Box>
              )}
              {items &&
                items.map((el) => (
                  <ProductsCard
                    key={el._id}
                    img={el.images[0].url}
                    title={el.name}
                    price={el.price}
                    mrp={el.mrp}
                    discount={el.discount}
                    id={el._id}
                  />
                ))}
            </SimpleGrid>

            <Box mt="2" bg="white" p="6">
              {nums.map((el) => (
                <Button
                  value={el}
                  key={el}
                  border="1px"
                  ml="2"
                  bg="white"
                  color="black"
                  onClick={(e) => setPage(e.target.value)}
                >
                  {el}
                </Button>
              ))}
            </Box>
          </GridItem>
        )}
      </Grid>

      <Footer />
    </div>
  );
};

export default Products;
