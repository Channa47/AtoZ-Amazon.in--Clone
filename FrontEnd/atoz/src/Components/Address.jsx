import React from 'react'
import { Grid, GridItem, Box, SimpleGrid, Radio, RadioGroup, Stack, Input, Select,Button, Checkbox,FormControl,FormLabel,Text, CheckboxGroup } from '@chakra-ui/react';

import { useState, useEffect } from "react";

const Address = () => {

   
        const [ bfullName, setbFullName ] = React.useState('');
        const [ bstate, setbState ] = React.useState('');
        const [ badd, setbAdd ] = React.useState('');
        const [ bstreet, setbStreet ] = React.useState('');
        const [ blineTwo, setbLineTwo ] = React.useState('');
        const [ bpost, setbPost ] = React.useState('');
        const [ bcity, setbCity ] = React.useState('');
        const [ bcountry, setbCountry ] = React.useState('');
        const [ bphone, setbPhone ] = React.useState('');
  return (
 

        <div>
          <Box>
              
          </Box>
              <Grid templateColumns='repeat(1,1fr)' gap={6}>
                 <GridItem w={['118%','95%', '75%', '80%', '75%', '75%']} h='10' ml={[3,5,50,50,150,150]} >
                 <SimpleGrid columns={1} spacing={0}>
                  <Box  height='50px' align='left' color="#C45500" fontWeight="bold" fontSize="2xl">
                   <h3>Delivery Address</h3> 
                  </Box>
                  <Box  height='50px' align='left'>
                    Please enter your delivery address in the form below.
                  </Box>
                  <Box  height='50px' align='left'>
                
                    {/* <SimpleGrid columns={1} spacing={3}> */}
                    <FormControl   p={2} isRequired > 
                    <FormLabel>Country/Region</FormLabel>
                    <Select placeholder='Country' size='md' value={bcountry} bg="blue.50"onChange={(e) =>   setbCountry(e.target.value)}>
                    <option value="China">China</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Russia">Russia</option>
                    <option value="Australlia">Australlia</option>
                    <option value="Japan">Japan</option>
                    <option value="Canada">Canada</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Italy">Italy</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Chile">Chile</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Hon Kong">Hon Kong</option>
                    <option value="South Korea">South Korea</option>
                    </Select>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder='Full name'  value={bfullName} onChange={(e) => setbFullName(e.target.value)}/>
                    <FormLabel>Mobile Number</FormLabel>
                    <Input placeholder='Mobile'  value={bphone} onChange={(e) =>   setbPhone(e.target.value)}/>
                    <FormLabel>Pincode</FormLabel>
                    <Input placeholder='6-digit pin'  value={bpost} onChange={(e) =>   setbPost(e.target.value)}/>
                    <FormLabel>Flat, House no., Building, Company, Apartment</FormLabel>
                    <Input placeholder='Flat, House no., Building, Company, Apartment'  value={badd} onChange={(e) =>   setbAdd(e.target.value)}/>
                    <FormLabel>Area, Street, Sector, Village</FormLabel>
                    <Input placeholder='Area, Street, Sector, Village'  value={bstreet} onChange={(e) =>   setbStreet(e.target.value)}/>
                    <FormLabel>Landmark</FormLabel>
                    <Input placeholder='Landmark' value={blineTwo} onChange={(e) =>   setbLineTwo(e.target.value)}/>
                    <FormLabel>Town/City</FormLabel>
                    <Input placeholder='Town/City'  value={bcity} onChange={(e) =>   setbCity(e.target.value)}/>
                    <FormLabel>State</FormLabel>
                    <Input placeholder='State'  value={bstate} onChange={(e) =>   setbState(e.target.value)}/>
                    </FormControl>
      
                  <Box  height='10px' align='left' ml={2} pt={5}>
                  <Checkbox>Make this my default address</Checkbox>
                  </Box>
                  <Box  height='10px' align='left'mt={10} ml={2}>
                  <Text fontSize="xl" fontWeight="bold">Add delivery instructions</Text>
                  <Text>Preferences are used to plan your delivery. However, shipments can sometimes arrive early or later than planned.</Text>
                  <Text pt={5} fontSize="lg" fontWeight="bold">Address Type</Text>
                  <Select placeholder='Select an Address Type' size='md' bg="blue.50"  value={bcountry} onChange={(e) =>   setbCountry(e.target.value)}>
                        <option value="Home (7 am – 9 pm delivery)">Home (7 am – 9 pm delivery)</option>
                        <option value="Office/Commercial (10 AM - 6 PM delivery)">Office/Commercial (10 AM - 6 PM delivery)</option>
                    </Select>
                    <Button mt={5} mb={20} fontWeight="" colorScheme="#FFD729" bg="#FFD729" color="black">Use this address</Button>
                  </Box>
                    {/* </SimpleGrid> */}
                  </Box>
    </SimpleGrid>
      </GridItem>
    </Grid>
         
        </div>
      )
    
  
}

export default Address

