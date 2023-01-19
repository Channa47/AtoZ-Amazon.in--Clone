import React from "react";
import { useNavigate } from "react-router-dom";
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
  useToast
} from "@chakra-ui/react";
import logo1 from "../assets/logo1.png";
import { useState, useEffect } from "react";


const Address = () => {
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();
  const[country,setCountry]=useState([]);
  const navigate = useNavigate();

  const [bfullName, setbFullName] = React.useState("");
  const [bstate, setbState] = React.useState("");
  const [badd, setbAdd] = React.useState("");
  const [bstreet, setbStreet] = React.useState("");
  const [blineTwo, setbLineTwo] = React.useState("");
  const [bpost, setbPost] = React.useState("");
  const [bcity, setbCity] = React.useState("");
  const [bcountry, setbCountry] = React.useState("");
  const [bphone, setbPhone] = React.useState("");
  const [badtype, setbAdtype] = React.useState("");
  const [dadd,setDadd]=React.useState("0")
  const [user,setUser]=React.useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const getcountry=async ()=>{
      const res = await fetch("https://serverapp-wwy8.onrender.com/countries");
      const getcon = await res.json()
      setCountry(await getcon)
  
      }
     getcountry();
  }, []);


  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem('form', JSON.stringify([bfullName, bstate, badd, bstreet, blineTwo, bpost, bcity, bcountry, bphone, badtype]));
 
    if( bfullName === "" || bstate === "" || badd === "" || bstreet === "" || bpost === "" || bcity === "" || bcountry === "" || bphone === "" ||badtype==="" ) {
      return toast({
        title: "Fill all the details !!!",
        status: "error",
        duration: 1500,
        isClosable: true,
        position: "top",
      });
    }
 
    else if(bphone.length !== 10 && bpost.length !== 6) {
      return toast({
        title: "Please enter correct phone number",
        status: "error",
        duration: 1500,
        isClosable: true,
        position: "top",
      });
    }
      
    setUser(JSON.parse(localStorage.getItem("form")));
  
  }

 const handleClick1=(e)=>{
  e.preventDefault();
  navigate('/payment');
 }

    
  return (
    <div>
      {isLoading ? (
        <Stack  w="80%" margin="auto" mt="175px" gap={8}>
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
            <Image src={logo1} border="0px" w="10%" ml={[3, 5, 8, 8, 110, 500]}/>
            <Text border="0px" fontSize="3xl" ml={[20, 40, 60, 80, 400, 500]}>
              Checkout
            </Text>
            <Text border="0px" ml={[8, 20, 40, 60, 400, 500]}>Checkout</Text>
          </Box>

          <SimpleGrid columns={['1','1','1','1','1','2']}>
          <Flex>
            <Box>
          <Grid templateColumns="repeat(1,1fr)" gap={6}>
            <GridItem
              w="80%"
              h="10"
              ml={[3, 5, 50, 50, 150, 150]}
            >
              <SimpleGrid columns={['2','1','1','1','1','1']} spacing={0}>
                <Box
                  height="50px"
                  align="left"
                  color="#C45500"
                  fontWeight="bold"
                  fontSize="2xl"
                  mb={[20,0,0,0,0,0]}
                >
                  <h3>Select a Delivery Address</h3>
                </Box>
                <Box height="50px" align="left" mb={[12,0,0,0,0,0]}>
                  Please enter your delivery address in the form below.
                </Box>
                <Box height="50px" align="left">
                  {/* <SimpleGrid columns={1} spacing={3}> */}
                  <FormControl  isRequired>
                    <FormLabel>Country/Region</FormLabel>
                    <Select
                      placeholder="Country"
                      size="md"
                      value={bcountry}
                      bg="blue.50"
                      onChange={(e) => setbCountry(e.target.value)}
                    >
                   { country.map((dat)=>(
                <option key={dat.country_id}>{dat.country_name}</option>
              ))

              }
                    </Select>
                    <FormLabel>Name</FormLabel>
                    <Input
                      placeholder="Full name"
                      value={bfullName}
                      onChange={(e) => setbFullName(e.target.value)}
                    />
                    <FormLabel>Mobile Number</FormLabel>
                    <Input
                      placeholder="Mobile"
                      value={bphone}
                      onChange={(e) => setbPhone(e.target.value)}
                    />
                    <FormLabel>Pincode</FormLabel>
                    <Input
                      placeholder="6-digit pin"
                      value={bpost}
                      onChange={(e) => setbPost(e.target.value)}
                    />
                    <FormLabel>
                      Flat, House no., Building, Company, Apartment
                    </FormLabel>
                    <Input
                      placeholder="Flat, House no., Building, Company, Apartment"
                      value={badd}
                      onChange={(e) => setbAdd(e.target.value)}
                    />
                    <FormLabel>Area, Street, Sector, Village</FormLabel>
                    <Input
                      placeholder="Area, Street, Sector, Village"
                      value={bstreet}
                      onChange={(e) => setbStreet(e.target.value)}
                    />
                    <FormLabel>Landmark</FormLabel>
                    <Input
                      placeholder="Landmark"
                      value={blineTwo}
                      onChange={(e) => setbLineTwo(e.target.value)}
                    />
                    <FormLabel>Town/City</FormLabel>
                    <Input
                      placeholder="Town/City"
                      value={bcity}
                      onChange={(e) => setbCity(e.target.value)}
                    />
                    <FormLabel>State</FormLabel>
                    <Input
                      placeholder="State"
                      value={bstate}
                      onChange={(e) => setbState(e.target.value)}
                    />
                  </FormControl>

                  <Box height="10px" align="left" ml={2} pt={5} mb={[20,0,0,0,0,0]}>
                    <Checkbox>Make this my default address</Checkbox>
                  </Box>
                  <Box height="10px" align="left" mt={10} ml={2}>
                    <Text fontSize="xl" fontWeight="bold">
                      Add delivery instructions
                    </Text>
                    <Text>
                      Preferences are used to plan your delivery. However,
                      shipments can sometimes arrive early or later than
                      planned.
                    </Text>
                    <Text pt={5} fontSize="lg" fontWeight="bold">
                      Address Type
                    </Text>
                    <Select
                      placeholder="Select an Address Type"
                      size="md"
                      bg="blue.50"
                      value={badtype}
                      onChange={(e) => setbAdtype(e.target.value)}
                    >
                      <option value="Home (7 am – 9 pm delivery)">
                        Home (7 am – 9 pm delivery)
                      </option>
                      <option value="Office/Commercial (10 AM - 6 PM delivery)">
                        Office/Commercial (10 AM - 6 PM delivery)
                      </option>
                    </Select>
    
                    <Button
                      mt={5}
                      mb={10}
                      fontWeight=""
                      colorScheme="#FFD729"
                      bg="#FFD729"
                      color="black"
                      onClick={handleClick}
                    >
                      Add this address
                    </Button>
                 
                  {/* </SimpleGrid> */}
                     
          <Accordion allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton  mb={10}>
        <Box as="span" flex='1' textAlign='left' fontWeight="bold">
        Most recently used address       
</Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} value={dadd} onChange={(e) => setDadd(e.target.value)}>
    <RadioGroup >
      <Stack direction='column'>
        <Box>
      <Radio value='1'>
      <Text fontWeight="bold" >Victor Paul Choudhury</Text>
     <Text>Flat no.810, Model apartment, Kahilipara road, Guwahati, Assam, 781086, India,</Text>
     <Text>Phone number: 8632893425</Text>
     </Radio>
     </Box>
     <Box>
      <Radio value='2'>
      <Text fontWeight="bold" >Nick</Text>
     <Text>House no.10, M.G road, Delhi, Delhi, 481086, India,</Text>
     <Text>Landmark: Near N.K hotel</Text>
     <Text>Phone number: 5896315420</Text>
     </Radio>
     </Box>
     <Box>
      <Radio value='3'>
      <Text fontWeight="bold" >{user[0]}</Text>
     <Text>{user[2]}, {user[3]}, {user[6]}, {user[1]}, {user[5]}, {user[7]},</Text>
     <Text>Landmark: {user[4]}</Text>
     <Text>Phone number: {user[8]}</Text>
     </Radio>
     </Box>
      </Stack>
    </RadioGroup>
    <Button
                      mt={5}
                      mb={10}
                      fontWeight=""
                      colorScheme="#FFD729"
                      bg="#FFD729"
                      color="black"
                      onClick={handleClick1}
                    >
                      Use this address
                    </Button>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
  </Box>
  </Box>
              </SimpleGrid>
            </GridItem>
                
          </Grid>
          </Box>
          <Box border="2px" ml="100px" mt={5} p={5} borderColor="gray.400" borderRadius={8} w={[150,200,300,300,300,300]}>
            <Box borderBottom="1px" borderBottomColor="gray.400">
          <Button
                      // w={[100,200,300,300,300,300]}
                      fontWeight=""
                      colorScheme="#FFD729"
                      bg="#FFD729"
                      color="black"
                      onClick={handleClick1}
                    >
                      Use this address
                    </Button>
                    <Text fontSize="xs">Continue to step 3 to finish checking out. </Text>
                    <Text fontSize="xs">You'll have a chance to review your order </Text>
                    <Text fontSize="xs">before it's final.</Text>
                    </Box>
                    <Box>
                    <Text fontWeight="bold" align="left" fontSize="lg" mt={2}>Order Summary</Text>
                    </Box>
                    <Box borderBottom="1px" borderBottomColor="gray.400">
                    <Flex justifyContent="space-between">
                      <Text>Items:</Text>
                      <Text>₹1,490.00</Text>
                    </Flex>
                    <Flex justifyContent="space-between">
                      <Text>Delivery:</Text>
                      <Text>₹0.00</Text>
                    </Flex>
                    <Flex justifyContent="space-between">
                      <Text>Total:</Text>
                      <Text>₹1,490.00</Text>
                    </Flex>
                    <Flex justifyContent="space-between">
                      <Text>Promotion Applied:</Text>
                      <Text>-₹660.35</Text>
                    </Flex>
                    </Box>
                    <Box borderBottom="1px" borderBottomColor="gray.400" fontWeight="bold" align="left" fontSize="lg" mt={2} pb={2} color="#B12704">
                    <Flex justifyContent="space-between">
                      <Text>Order Total:</Text>
                      <Text >₹829.65</Text>
                    </Flex>
                    </Box>
                    <Box align="left">
                      <Text color="#B12704" fontWeight="bold">Your Savings: ₹966.35 (54%)</Text>
                      <Text>Promotion Applied:</Text>
                      <Text>Promotion Applied:</Text>
                      <Text>Item discount</Text>
                    </Box>

          </Box>
          </Flex>
          </SimpleGrid>
        </>
      )}
    </div>
  );
};

export default Address;

