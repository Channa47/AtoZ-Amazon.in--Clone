import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Select 
  } from '@chakra-ui/react';
import { useState } from 'react';
import Cookies from 'js-cookie'
import axios from 'axios';
import { useToast } from "@chakra-ui/react";

  export default function AddNewItem() {
    let Authtoken = Cookies.get('token');
    const [name , setname] = useState('');
    const [price , setprice] = useState('');
    const [description , setdesc] = useState('');
    const [category , setcat] = useState('');
    const [images , setimges] = useState({public_id:"Random Id",url:""});
    const toast = useToast()
    const handleSubmit = () =>{
      let payload = {
        name : name ,
        price : Number(price),
        description : description,
        category : category,
        images : images
      }
      axios.post(`https://long-plum-ray-ring.cyclic.app/api/v1/products/new`,payload,{
        headers : {
          token : Authtoken
        }
      })
      .then((r)=>{console.log(r);
        toast({
        title: "Done",
        description: `New Product Added To Data Base`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });})
      .catch(r=>{console.log(r)})
    }
   
    return (
      <Flex
        mt={10}
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'xlg'} py={12} px={6} w={"60%"} mt={-10}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} color="Highlight">Add New Item</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl >
                <FormLabel>Enter Product Name</FormLabel>
                <Input focusBorderColor='lime' value={name} onChange={(e)=>setname(e.target.value)} borderColor={"green"}  type="text" />
              </FormControl>
              <FormControl >
                <FormLabel>Enter Image Url</FormLabel>
                <Input focusBorderColor='lime'  value={images.url} onChange={(e)=>setimges({...images,url:e.target.value})} borderColor={"green"}  type="url" />
              </FormControl>
              <FormControl >
                <FormLabel>Enter Price of the Product</FormLabel>
                <Input focusBorderColor='lime' value={price} onChange={(e)=>setprice(e.target.value)} borderColor={"green"}  />
              </FormControl>
              <FormControl >
                <FormLabel>Select The Catgory of The Produc</FormLabel>
                 <Select placeholder="Choose Catogory" borderColor='green' onChange={(e)=>setcat(e.target.value)}>
                    <option  name='name' value='laptops'>laptops </option>
                    <option  name='name' value='mobile'>mobile </option>
                    <option  name='name' value='clothes'>clothes </option>
                    <option  name='name'value='shoes'>shoes </option>
                    <option  name='name' value='grocery'>grocery </option>
                 </Select>
              </FormControl>
              <FormControl >
                <FormLabel>description</FormLabel>
                <Input focusBorderColor='lime' value={description}  onChange={(e)=>setdesc(e.target.value)} borderColor={"green"} isInvalid={false} type="text" />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  onClick={handleSubmit}
                  w={"50%"}
                  m="auto"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                    Submit
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }