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
import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import style from "./Navigation.module.css";

function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");
  const [user, setUser] = useState("sign in");
  const navigate = useNavigate();

  useEffect(() => {}, [Link]);
  return (
    <div className={style.navigation_container}>
      <div className={style.nav_link}>
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

            <DrawerBody
              mt="12px"
              lineHeight={10}
              borderBottom="1px solid #d5dbdb"
            >
              <Heading fontSize="lg">Trending</Heading>
              <Link to="#">
                <p className={style.drawer_opt}>Best Sellers</p>
              </Link>
              <Link to="#">
                <p className={style.drawer_opt}>New Releases</p>
              </Link>
              <Link to="#">
                <p className={style.drawer_opt}>Movers & Shakers</p>
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
            <DrawerBody
              mt="12px"
              lineHeight={10}
              borderBottom="1px solid #d5dbdb"
            >
              <Heading fontSize="lg">Shop By Category</Heading>
              <Link to="#">
                <p className={style.drawer_opt}>TV, Appliances, Electronics</p>
              </Link>
              <Link to="#">
                <p className={style.drawer_opt}>Men's Fashion</p>
              </Link>
              <Link to="#">
                <p className={style.drawer_opt}>Women's Fashion</p>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        All
      </div>
      <div className={style.nav_link}>
        <Link to="/products/laptop">Computer</Link>
      </div>
      <div className={style.nav_link}>
        <Link to="/products/clothes">Fashion</Link>
      </div>
      <div className={style.nav_link}>
        <Link to="/products/shoes">Shoes</Link>
      </div>
      <div className={style.nav_link}>
        <Link to="/products/mobile">Mobiles</Link>
      </div>
      <div className={style.nav_link}>
        <Link to="/products/grocery">Household</Link>
      </div>
      <div className={style.nav_link}>
        <Link to="/products/mobile">Technology</Link>
      </div>
      <div className={style.nav_link}>
        <Link to="/products/grocery">Food</Link>
      </div>

      <div className={style.nav_link}>
        <Link to="/products/shoes">Footwear</Link>
      </div>
      <div className={style.nav_link}>
        <Link to="/products/laptop">Laptops</Link>
      </div>
    </div>
  );
}

export { Navigation };
