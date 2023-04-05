import React from "react";
import { useRef } from "react";

import masterCard from "../assets/masterCard.jpg";
import unionPay from "../assets/unionPay.png";
import visa from "../assets/visa.png";
import americanExpress from "../assets/americanExpress.png";
import dinersClub from "../assets/dinersClub.png";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import amzlogo from "../assets/amzlogo.png";
import {
  Grid,
  GridItem,
  Box,
  SimpleGrid,
  Radio,
  RadioGroup,
  Skeleton,
  Stack,
  Flex,
  Spinner,
  FormHelperText,
  Image,
  Input,
  Select,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  CheckboxGroup,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import logo1 from "../assets/logo1.png";
import { useState, useEffect } from "react";

const Payment = () => {
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();
  const cancelRef = useRef();
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const [bupi, setbUpi] = React.useState("");
  const [bank, setBank] = React.useState("");
  const [payData, setPayData] = useState({});
  const [pmethod, setpMethod] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dadd, setDadd] = React.useState(0);
  const navigate = useNavigate();
  let totalSum = 0;
  cartItems.map((el) => {
    totalSum += el.price * el.quantity;
  });

  const elements = useElements();
  const stripe = useStripe();
  const initialPayData = {
    otp: "",
  };

  const userData = JSON.parse(localStorage.getItem("form")) || [];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setPayData(initialPayData);
  }, []);
  const handleChange = (e) => {
    setPayData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleOtp = (e) => {
    toast({
      title: "Your OTP is 0931",
      description: "Payment OTP",
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top",
    });
  };
  const datas = JSON.parse(localStorage.getItem("payData")) || [];
  const handlePayment = (e) => {
    if (payData.otp === "0931") {
      toast({
        title: "Payment Successful",
        description: "Order has been placed",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      datas.push(payData);
      localStorage.setItem("payData", JSON.stringify(datas));
      onClose();
      localStorage.removeItem("cartItems");
      navigate("/");
    } else {
      toast({
        title: "Payment failed",
        description: "Otp is incorrect.",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    toast({
      title: "Your OTP is 0931",
      description: "Payment OTP",
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top",
    });
    onOpen();
  };

  return (
    <div>
      {isLoading ? (
        <Stack w="80%" margin="auto" mt="175px" gap={8}>
          <Skeleton height="30px" />
          <Skeleton height="30px" />
          <Skeleton height="30px" />
          <Skeleton height="30px" />
          <Skeleton height="30px" />
          <Skeleton height="30px" />
        </Stack>
      ) : (
        <>
          <Box
            display="flex"
            border="0px"
            alignItems="center"
            // justifyContent="space-around"
            width="95%"
            margin="auto"
            bgGradient="linear(to-t, blue.50, white)"
            boxShadow="base"
          >
            <Image
              src={logo1}
              border="0px"
              w="10%"
              ml={[3, 5, 8, 8, 110, 500]}
            />
            <Text border="0px" fontSize="3xl" ml={[20, 40, 60, 80, 400, 500]}>
              Checkout
            </Text>
          </Box>

          <SimpleGrid
            columns={["1", "1", "1", "2", "2", "2"]}
            spacing={[0, 0, 0, 50, 540, 80]}
            width="80%"
            margin="auto"
          >
            <Box
              border="0px"
              h={1450}
              w={["300px", "400px", "720px", "700px", "800px", "800px"]}
              margin="auto"
            >
              <Box
                height="50px"
                align="left"
                color="#C45500"
                fontWeight="bold"
                fontSize="2xl"
              >
                <h3>Payment Method</h3>
              </Box>
              <Box height="50px" align="left" fontWeight="bold" fontSize="xl">
                Delivery address
              </Box>
              <Box fontSize="lg" mb={10} align="left">
                <Text fontWeight="bold">{userData[0]}</Text>
                <Text>
                  {userData[2]}, {userData[3]}, {userData[6]}, {userData[1]},{" "}
                  {userData[5]}, {userData[7]},
                </Text>
                <Text>Landmark: {userData[4]}</Text>
                <Text>Phone number: {userData[8]}</Text>
              </Box>
              <Box height="50px" align="left">
                {/* <SimpleGrid columns={1} spacing={3}> */}
                <Box height="50px" align="left" fontWeight="bold" fontSize="xl">
                  Select a Payment Address
                </Box>

                <RadioGroup>
                  <Stack direction="column">
                    <Box>
                      <Radio value="1">
                        <Text fontWeight="bold">
                          Pay with Debit/Credit/ATM Cards
                        </Text>
                        <Text>
                          You can save your cards as per new RBI guidelines
                        </Text>

                        <Box height="40px">
                          <Grid
                            templateColumns="repeat(6, 1fr)"
                            gap={5}
                            mt={3}
                            w={["100%", "70%", "80%", "75%", "50%", "50%"]}
                          >
                            <GridItem w="100%">
                              <Image
                                h={7}
                                w="100px"
                                src={americanExpress}
                              ></Image>
                            </GridItem>
                            <GridItem w="100%">
                              <Image h={7} w="100px" src={visa}></Image>
                            </GridItem>
                            <GridItem w="100%">
                              <Image h={7} w="100px" src={masterCard}></Image>
                            </GridItem>
                            <GridItem w="100%">
                              <Image h={7} w="100px" src={dinersClub}></Image>
                            </GridItem>
                            <GridItem w="100%">
                              <Image h={7} w="100px" src={unionPay}></Image>
                            </GridItem>
                          </Grid>
                        </Box>
                      </Radio>
                      <Box
                        w={[300, 300, 300, 400, 400, 400]}
                        margin="auto"
                        ml={5}
                        mt={3}
                        border="2px"
                        borderColor="grey"
                        borderRadius={5}
                        h={8}
                        pt="5px"
                      >
                        <CardElement />
                      </Box>
                    </Box>
                    <Box>
                      <Radio value="2" mt={5}>
                        <Text fontWeight="bold">Net Banking</Text>
                      </Radio>
                      <Box>
                        <Select
                          placeholder="Select Bank"
                          size="md"
                          value={bank}
                          onChange={(e) => setBank(e.target.value)}
                          w={200}
                          ml={5}
                        >
                          <option value="Axis Bank">Axis Bank</option>
                          <option value="Airtel Payments Bank">
                            Airtel Payments Bank
                          </option>
                          <option value="HDFC Bank">HDFC Bank</option>
                          <option value="ICICI Bank">ICICI Bank</option>
                          <option value="Kotak Bank">Kotak Bank</option>
                          <option value="State Bank of India">
                            State Bank of India
                          </option>
                          <option value="Allahabad Bank">Allahabad Bank</option>
                          <option value="Canara Bank">Canara Bank</option>
                        </Select>
                      </Box>
                    </Box>
                    <Box>
                      <Radio value="3" mt={5}>
                        <Text fontWeight="bold">Other UPI Apps</Text>
                        <Text>Please enter your UPI ID</Text>
                      </Radio>
                      <Box>
                        <Input
                          ml={5}
                          placeholder="Ex:MobileNumber@upi"
                          value={bupi}
                          onChange={(e) => setbUpi(e.target.value)}
                          w={200}
                        />

                        <Button
                          ml={5}
                          h={8}
                          fontWeight=""
                          colorScheme="#FFD729"
                          bg="#FFD729"
                          color="black"
                        >
                          Verify
                        </Button>
                      </Box>
                    </Box>
                    <Box>
                      <Radio value="4" mt={5}>
                        <Text fontWeight="bold">
                          Cash On Delivery/Pay On Delivery
                        </Text>
                        <Text>
                          Scan & Pay using Amazon app. Cash, UPI ,Cards also
                          accepted.
                        </Text>
                      </Radio>
                    </Box>
                  </Stack>
                </RadioGroup>

                <Accordion allowMultiple mt={20}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton mb={10}>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          fontSize="xl"
                        >
                          Items and delivery
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      value={dadd}
                      onChange={(e) => setDadd(e.target.value)}
                    >
                      {cartItems.map((el) => {
                        return (
                          <Box
                            // border="1px"
                            borderColor="gray.300"
                            display="flex"
                            align="left"
                            p="4"
                            bg="white"
                            cursor="pointer"
                          >
                            <Box w="30%" mr={5} ml={5}>
                              <Text>Items dispatched by Amazon</Text>
                              <Box bg="gray.50">
                                <Image
                                  src={el.images[0].url}
                                  m="auto"
                                  h="180px"
                                ></Image>
                              </Box>
                            </Box>
                            <Box>
                              <Text mt="2">{el.name}</Text>
                              <Box display="flex" fontSize="sm" mt="2" m="auto">
                                <Text fontWeight="medium" fontSize="2xl">
                                  ₹{el.price}
                                </Text>
                                <Text
                                  ml="2"
                                  color="grey"
                                  fontWeight="medium"
                                  mt={2}
                                >
                                  ₹<del>5000</del>
                                </Text>
                                <Text
                                  ml="2"
                                  color="black"
                                  fontWeight="medium"
                                  mt={2}
                                  border="1px"
                                  p={1}
                                  borderRadius={5}
                                >
                                  Qty: 1
                                </Text>
                              </Box>
                              <Box display="flex" mt={4}>
                                <Image src={amzlogo} h={4} mt={1.5}></Image>
                                <Text ml={1}>FREE One-Day</Text>
                              </Box>
                              <Text mt={2}>
                                FREE Delivery by Tomorrow, January 20
                              </Text>
                            </Box>
                          </Box>
                        );
                      })}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Confirm Payment
                      </AlertDialogHeader>

                      <AlertDialogBody>
                        Are you sure? You can't undo this action afterwards.
                      </AlertDialogBody>
                      <FormControl p={5}>
                        <FormLabel>Enter OTP</FormLabel>
                        <Input
                          name="otp"
                          value={payData.otp}
                          type="text"
                          onChange={handleChange}
                        />
                        <FormHelperText>
                          Never share your OTP with anyone.
                        </FormHelperText>
                      </FormControl>
                      <AlertDialogFooter>
                        <Button colorScheme="yellow" onClick={handleOtp} mr={3}>
                          Send OTP again
                        </Button>
                        <Button
                          colorScheme="red"
                          ref={cancelRef}
                          onClick={onClose}
                        >
                          Cancel
                        </Button>
                        <Button
                          colorScheme="green"
                          onClick={handlePayment}
                          ml={3}
                        >
                          Process
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
                <Button
                  mt={5}
                  mb={10}
                  fontWeight=""
                  colorScheme="#FFD729"
                  bg="#FFD729"
                  color="black"
                  onClick={handleClick}
                >
                  Place order
                </Button>
              </Box>
            </Box>
            <Box border="0px" w="auto">
              <Box
                border="2px"
                mt={5}
                p={2}
                borderColor="gray.400"
                borderRadius={8}
                h="auto"
                mb={5}
              >
                <Box borderBottom="1px" borderBottomColor="gray.400">
                  <Button
                    w={[300, 300, 300, 300, 200, 300]}
                    fontWeight=""
                    colorScheme="#FFD729"
                    bg="#FFD729"
                    color="black"
                    onClick={handleClick}
                    mt={5}
                  >
                    Place order
                  </Button>
                  <Text fontSize="xs">
                    Continue to step 3 to finish checking out.{" "}
                  </Text>
                  <Text fontSize="xs">
                    You'll have a chance to review your order{" "}
                  </Text>
                  <Text fontSize="xs">before it's final.</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold" align="left" fontSize="lg" mt={2}>
                    Order Summary
                  </Text>
                </Box>
                <Box borderBottom="1px" borderBottomColor="gray.400">
                  <Flex justifyContent="space-between">
                    <Text>Items:</Text>
                    <Text>₹{totalSum}</Text>
                  </Flex>
                  <Flex justifyContent="space-between">
                    <Text>Delivery:</Text>
                    <Text>₹0.00</Text>
                  </Flex>
                  <Flex justifyContent="space-between">
                    <Text>Total:</Text>
                    <Text>₹{totalSum}</Text>
                  </Flex>
                  <Flex justifyContent="space-between">
                    <Text>Promotion Applied:</Text>
                    <Text>-₹0.00</Text>
                  </Flex>
                </Box>
                <Box
                  borderBottom="1px"
                  borderBottomColor="gray.400"
                  fontWeight="bold"
                  align="left"
                  fontSize="lg"
                  mt={2}
                  pb={2}
                  color="#B12704"
                >
                  <Flex justifyContent="space-between">
                    <Text>Order Total:</Text>
                    <Text>₹{totalSum}</Text>
                  </Flex>
                </Box>
                <Box align="left">
                  <Text color="#B12704" fontWeight="bold">
                    Your Savings: ₹966.35 (54%)
                  </Text>
                  <Text>Promotion Applied:</Text>
                  <Text>Promotion Applied:</Text>
                  <Text>Item discount</Text>
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
        </>
      )}
    </div>
  );
};

export default Payment;
