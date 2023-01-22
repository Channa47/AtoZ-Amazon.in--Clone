import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import MainLogo from "./Logo/MainLogo.png"
import MainLogo2 from "./Logo/MainLogo2.png"

import { useState } from 'react';
import Items from './Items';
import User from './User';
import Orders from './Orders';
import AddNewItem from './AddNewItem';
import UserSkeliton from './UserSkeliton';


export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [display,setdisplay] = useState("ManageItems")

  const handelClick = (e)=>{
    setdisplay(e.target.name)
    console.log(display)
  }

  return (
    <>
      <Box bg={useColorModeValue('teal.100', 'teal.900')} px={10} position='fixed' w='100%'  >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <Button onClick={handelClick} backgroundColor={display==="ManageUsers"?"green":""} name="ManageUsers">ManageUsers</Button>
              <Button onClick={handelClick} backgroundColor={display==="ManageItems"?"green":""} name="ManageItems" >ManageItems</Button>
              <Button onClick={handelClick} backgroundColor={display==="ManageOrders"?"green":""} name="ManageOrders">ManageOrders</Button>
              <Button onClick={handelClick} backgroundColor={display==="Add New Items"?"green":""} name="Add New Items">Add New Items</Button>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Image
                  src={
                    MainLogo2
                  }
                  w={100}
                />
              </MenuButton>
              {/* <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList> */}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <Button onClick={handelClick} backgroundColor={display==="ManageUsers"?"green":""} name="ManageUsers">ManageUsers</Button>
              <Button onClick={handelClick} backgroundColor={display==="ManageItems"?"green":""} name="ManageItems" >ManageItems</Button>
              <Button onClick={handelClick} backgroundColor={display==="ManageOrders"?"green":""} name="ManageOrders">ManageOrders</Button>
              <Button onClick={handelClick} backgroundColor={display==="Add New Items"?"green":""} name="Add New Items">Add New Items</Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
       
      <Box p={4} >
        
        {display==="ManageItems" && <Items/>}
        {display==='ManageUsers' && <User/>}
        {display==='ManageOrders' && <Orders/>}
        {display === "Add New Items" && <AddNewItem/>}
       
        </Box>
    </>
  );
}