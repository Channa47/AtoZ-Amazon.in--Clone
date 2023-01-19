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
  
  export default function AddNewItem() {
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
                <Input focusBorderColor='lime' borderColor={"green"} isInvalid={false} type="text" />
              </FormControl>
              <FormControl >
                <FormLabel>Enter Image Url</FormLabel>
                <Input focusBorderColor='lime' borderColor={"green"} isInvalid={false} type="url" />
              </FormControl>
              <FormControl >
                <FormLabel>Enter Price of the Product</FormLabel>
                <Input focusBorderColor='lime' borderColor={"green"} isInvalid={false} type="number" />
              </FormControl>
              <FormControl >
                <FormLabel>Select The Catgory of The Produc</FormLabel>
                 <Select placeholder="Choose Catogory" borderColor='green'>
                    <option value='option1'>Option 1</option>
                    <option value='option1'>Option 2</option>
                    <option value='option1'>Option 3</option>
                    <option value='option1'>Option 4</option>
                    <option value='option1'>Option 5</option>
                 </Select>
              </FormControl>
              <FormControl >
                <FormLabel>description</FormLabel>
                <Input focusBorderColor='lime' borderColor={"green"} isInvalid={false} type="text" />
              </FormControl>
              <Stack spacing={10}>
                <Button
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