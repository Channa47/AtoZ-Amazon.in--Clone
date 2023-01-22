import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Image,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Icon,
  Flex,
  Container,
  Button,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { Toast } from "@chakra-ui/toast";
import { GoTriangleRight } from "react-icons/go";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../Redux/AuthReducer/action";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const comingFrom = location.state?.data || "/";
  console.log("location", location);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();
  const dispatch = useDispatch();
  const isAuthLoading = useSelector((state) => state.AuthReducer.isAuthLoading);
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const isAuthFailure = useSelector((state) => state.AuthReducer.isAuthFailure);

  const handleSubmit = () => {
    const payload = {
      email,
      password,
    };
    console.log(payload);
    if (payload) {
      dispatch(loginUser(payload))
        .then((r) => {
          navigate(comingFrom, { replace: true });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  useEffect(() => {
    if (isAuth) {
      toast({
        title: `You are successfully logged in`,
        description: `Login Successful`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }

    if (isAuthFailure) {
      toast({
        title: "Failed to Log in",
        description: `Please enter correct details`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [isAuth, isAuthFailure]);
  return (
    <div>
      <Box m="auto" w={{ base: "60%", sm: "50%", md: "40%", lg: "28%" }}>
        <Image
          m="auto"
          w={{ base: "90px", sm: "100px", md: "125px", lg: "150px" }}
          src="https://i.imgur.com/YVSZcA4.png"
        />
      </Box>

      <Container w={{ base: "60%", sm: "50%", md: "40%", lg: "29%" }}>
        <Box m="auto" p="7" border="lightgrey solid 1px" borderRadius="5">
          <Text
            fontSize={{ base: "12", sm: "16", md: "24", lg: "28" }}
            textAlign="left"
          >
            Sign in
          </Text>
          <FormControl>
            <FormLabel mb="0.5" mt="2" fontSize={13} fontWeight="bold">
              Email
            </FormLabel>
            <Input
              mb="2"
              h="9"
              placeholder="Enter your email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel mb="0.5" mt="2" fontSize={13} fontWeight="bold">
              Password
            </FormLabel>
            <Input
              mb="2"
              h="9"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              isLoading={isAuthLoading}
              loadingText="Logging In"
              h="8"
              bgColor="#f1c350"
              w="100%"
              mt="3"
              mb="4"
              onClick={handleSubmit}
            >
              Continue
            </Button>
          </FormControl>

          <Text textAlign="left" fontSize={12} mt="3">
            By continuing, you agree to Amazon's
            <span style={{ color: "#2B6CB0" }}>
              Conditions of Use{" "}
            </span> and{" "}
            <span style={{ color: "#2B6CB0" }}>Privacy Notice.</span>
          </Text>
          <Text textAlign="left" mt="4" fontSize={12} color="#2B6CB0">
            <Icon as={GoTriangleRight} color="black" />
            Need Help ?
          </Text>
        </Box>
        <Flex mt="10">
          <Box w="33.33%">
            <Divider orientation="horizontal" />
          </Box>
          <Box w="33.33%">
            <Text mt="-2" fontSize={12}>
              New to Amazon?
            </Text>
          </Box>
          <Box w="33.33%">
            <Divider orientation="horizontal" />
          </Box>
        </Flex>
        <Button w="100%" h="8" mt="2" fontSize={13}>
          <Link to="/register">Create your Amazon Account</Link>
        </Button>
        <Box m="auto" mt="5" w="70%">
          <Flex w="100%">
            <Text m="auto" fontSize={11} color="blue.600">
              Conditions of Use
            </Text>
            <Text m="auto" fontSize={11} color="blue.600">
              Privacy Notice
            </Text>
            <Text m="auto" fontSize={11} color="blue.600">
              Help
            </Text>
          </Flex>
        </Box>
        <Text fontSize={11} mt="2" mb="3">
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </Text>
      </Container>
    </div>
  );
};

export default Login;
