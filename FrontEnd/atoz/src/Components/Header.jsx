import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Flex,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import style from "./Header.module.css";
import { Search2Icon, TriangleDownIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cookies from 'js-cookie'
import axios from "axios";


function Header() {
  const role =JSON.parse(localStorage.getItem('role'));
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");
  const [user, setUser] = useState("sign n"); // for showing logedin user name
   // for showing total cart items count
  const [category, setCategory] = useState("");
  const [inputValue, setInputValue] = useState("");
  // const [query, setQuery] = useState({ category: "", search: "" });
  const navigate = useNavigate()
  let catItems = JSON.parse(localStorage.getItem('cartItems')) || 0
  const [count, setCount] = useState(catItems.length);
  let cccc = useSelector((s)=>s.CartReducer.cartData)
  console.log(cccc)
  let loggedInUser =JSON.parse(localStorage.getItem('user')) || {}
  const toast = useToast();
  useEffect(()=>{
    setCount(catItems.length)
    if(loggedInUser.user){
      setUser(loggedInUser.user.name)
    }
  },[catItems])

  const handleSearch = (input) => {
    // setQuery({ category: category, search: input });
    navigate(`/products/${inputValue}`)
  };

  const handleLogOut = () =>{
     localStorage.clear()
     toast({
      description: `Logged Out`,
      status: "success",
      duration: 3000,
      isClosable: true,
    })
    window.location.reload();
  }

  // console.log(query);

  return (
    <div id={style.top_container}>
      <div className={style.header_container}>
        <div className={style.hamburger}>
          <HamburgerIcon
            _hover={{ cursor: "pointer" }}
            onClick={onOpen}
            boxSize={6}
            pb="2px"
          />
          <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <Flex bg="#232f3e" alignItems="center" pl="25px" h="50px">
                <Avatar boxSize="30px" src="https://bit.ly/broken-link" />
                <Heading size="md" color="white" pl="10px">
                  Hello, {user}
                </Heading>
              </Flex>
              <Flex
                pl="10px"
                borderBottom="1px solid #d5dbdb"
                h="50px"
                alignItems="center"
              >
                <Heading size="md" pl="16px">
                  Browse, Amazon
                </Heading>
              </Flex>
              <DrawerBody
                mt="12px"
                lineHeight={10}
                borderBottom="1px solid #d5dbdb"
              >
                <Heading fontSize="lg">Profile</Heading>
                <Link to="#">
                  <p className={style.drawer_opt}>Account</p>
                </Link>
                <Link to="#">
                  <p className={style.drawer_opt}>Order History</p>
                </Link>
                <Link to="#">
                  <p className={style.drawer_opt} onClick={handleLogOut}>Sign Out</p>
                </Link>
              </DrawerBody>
              <DrawerBody
                mt="12px"
                lineHeight={10}
                borderBottom="1px solid #d5dbdb"
              >
                <Heading fontSize="lg">Shop By Category</Heading>
                <Link to="#">
                  <p className={style.drawer_opt}>Electronics</p>
                </Link>
                <Link to="#">
                  <p className={style.drawer_opt}>Fashion</p>
                </Link>
                {/* <Link to="#">
                  <p className={style.drawer_opt}>Women's Fashion</p>
                </Link> */}
                <Link to="#">
                  <p className={style.drawer_opt}>Health</p>
                </Link>
                <Link to="#">
                  <p className={style.drawer_opt}>Household</p>
                </Link>
              </DrawerBody>
              <DrawerBody
                mt="12px"
                lineHeight={10}
                borderBottom="1px solid #d5dbdb"
              >
                <Heading fontSize="lg">Digital Content And Devices</Heading>
                <Link to="#">
                  <p className={style.drawer_opt}>Echo & Alexa</p>
                </Link>
                <Link to="#">
                  <p className={style.drawer_opt}>Fire TV</p>
                </Link>
                <Link to="#">
                  <p className={style.drawer_opt}>Kindle E-Readers & eBooks</p>
                </Link>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
        {/************************************** a to z Logo ********************************/}
        <Link to="/">
          <img
            className={style.header_logo}
            src="https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/Best/A_to_z__1.png"
            alt="Logo"
          />
        </Link>
        {/************************************** location ********************************/}
        <div className={style.location}>
          <span className={style.header_line1}>Hello</span>
          <div className={style.icon}>
            <img
              src="https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/location.png"
              alt="Location"
            />
            <span className={style.header_line2}>Select your address</span>
          </div>
        </div>
        {/************************************** Search bar ********************************/}
        <div className={style.seachbox}>
          <select
            className={style.searchoption}
            onChange={(e) => setCategory(e.target.value)}
            name="category"
          >
            <option value="">All</option>
            <option value="">All Categories</option>
            <option value="Beauty">Beauty</option>
            <option value="Clothing">Clothing & Accessories</option>
            <option value="Deals">Deals</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Grocery">Grocery & Gourmet Foods</option>
            <option value="Home">Home & Kichen</option>
            <option value="Jwellery">Jwellery</option>
            <option value="Sports">Sports, Fitness & Outdors</option>
          </select>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Search2Icon
            onClick={() => handleSearch(inputValue)}
            color="black"
            bg={"#febd69"}
            boxSize="47px"
            p={3}
            borderRadius="0px 5px 5px 0px"
            _hover={{ cursor: "pointer" }}
          />
        </div>
        {/************************************** Language selection ********************************/}
        <div className={style.language}>
          <img
            src="https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/flag.jpg"
            alt="Flag"
          />
          <span className={style.header_line2}>EN</span>
          <TriangleDownIcon color="gray" boxSize="9px" mt="10px" ml="1.5px" />
        </div>
        {/******************************* Signin and Return & Order option ****************************/}
        <div className={style.account}>
          {role === "admin" ? (
            <Menu>
              <MenuButton
                border="1px solid transparent"
                _hover={{ border: "1px solid white" }}
              >
                <div className={style.login}>
                  <div className={style.signin_opt}>
                    <span className={style.header_line1}>Hello, {user}</span>
                    <span className={style.header_line2}>
                      Accounts & List
                      <TriangleDownIcon
                        color="gray"
                        boxSize="9px"
                        mt="4px"
                        ml="2.5px"
                      />
                    </span>
                  </div>
                  {/* <div className={style.order_opt}>
          <span className={style.header_line1}>Return</span>
          <span className={style.header_line2}>& Orders</span>
        </div> */}
                </div>
              </MenuButton>
              <MenuList w="15px">
                {loggedInUser.user ? <MenuItem fontWeight="bold" _hover={{ bg: "#f08804" }}onClick={handleLogOut} >
                Sign Out
                </MenuItem>:
                <MenuItem fontWeight="bold" _hover={{ bg: "#f08804" }} onClick={()=>navigate('/login')} >
                LOG In
              </MenuItem> }
              </MenuList>
            </Menu>
          ) : (
            <Menu>
              <MenuButton>
                <div className={style.login}>
                  <div className={style.signin_opt}>
                    <span className={style.header_line1}>Hello, {user}</span>
                    <span className={style.header_line2}>
                      Accounts & List
                      <TriangleDownIcon
                        color="gray"
                        boxSize="9px"
                        mt="4px"
                        ml="2.5px"
                      />
                    </span>
                  </div>
                  {/* <div className={style.order_opt}>
          <span className={style.header_line1}>Return</span>
          <span className={style.header_line2}>& Orders</span>
        </div> */}
                </div>
              </MenuButton>
              <MenuList>
              {loggedInUser.user ? <MenuItem fontWeight="bold" _hover={{ bg: "#f08804" }}onClick={handleLogOut} >
                Sign Out
                </MenuItem>:
                <MenuItem fontWeight="bold" _hover={{ bg: "#f08804" }} onClick={()=>navigate('/login')} >
                LOG In
              </MenuItem> }
              </MenuList>
            </Menu>
          )}
        </div>
        {/************************************** Cart icon & count ********************************/}
        <div className={style.cart}>
          <div className={style.cart_icon}>
            <img
              onClick={()=>navigate('/cart')}
              src="https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/Amazon%20Cart.png"
              alt="Cart"
            />
            <span className={style.count}>{count}</span>
          </div>
          <span className={style.header_line2}>Cart</span>
        </div>
        {role === "admin" && (
          <div className={style.admin_btn}>
            <button className={style.admin_btn} onClick={()=>navigate('/admin')}>Admin Panel</button>
          </div>
        )}
      </div>
      <div id={style.mob_searchbox} className={style.seachbox}>
        <select
          className={style.searchoption}
          onChange={(e) => setCategory(e.target.value)}
          name="category"
        >
          <option value="">All</option>
          <option value="">All Categories</option>
          <option value="Beauty">Beauty</option>
          <option value="Clothing">Clothing & Accessories</option>
          <option value="Deals">Deals</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Grocery">Grocery & Gourmet Foods</option>
          <option value="Home">Home & Kichen</option>
          <option value="Jwellery">Jwellery</option>
          <option value="Sports">Sports, Fitness & Outdors</option>
        </select>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Search2Icon
          onClick={() => handleSearch(category, inputValue)}
          color="black"
          bg={"#febd69"}
          boxSize="47px"
          p={3}
          borderRadius="0px 5px 5px 0px"
          _hover={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export { Header };
