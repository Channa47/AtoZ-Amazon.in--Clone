import React from "react";
import axios from "axios";
import {
  Image,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Flex,
  Container,
  Button,
  useToast,
} from "@chakra-ui/react";

import { Toast } from "@chakra-ui/toast";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../Redux/AuthReducer/action";
import { useEffect } from "react";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();
  const isRegisteredLoading = useSelector(
    (state) => state.AuthReducer.isRegisteredLoading
  );
  const isRegistered = useSelector((state) => state.AuthReducer.isRegistered);
  const isRegisteredFailure = useSelector(
    (state) => state.AuthReducer.isRegisteredFailure
  );
  const navigate = useNavigate();

  console.log(isRegisteredLoading);
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
    };

    if (payload) {
      dispatch(registerUser(payload));
    }
  };

  if (isRegistered) {
    navigate("/login");
  }
  return (
    <div>
      <Box m="auto" w={{ base: "60%", sm: "50%", md: "40%", lg: "28%" }}>
        <Image
          m="auto"
          w={{ base: "90px", sm: "100px", md: "125px", lg: "150px" }}
          src="https://i.imgur.com/YVSZcA4.png"
        />
      </Box>

      <Container w={{ base: "80%", sm: "65%", md: "40%", lg: "29%" }}>
        <Box m="auto" p="3" border="lightgrey solid 1px" borderRadius="5">
          <Text
            fontSize={{ base: "12", sm: "16", md: "24", lg: "28" }}
            textAlign="left"
          >
            Create Account
          </Text>
          <form onSubmit={handleSubmit}>
            <FormLabel mb="0.5" mt="2" fontSize={13} fontWeight="bold">
              Name
            </FormLabel>
            <input
              className="inputBox"
              placeholder="Enter your Name"
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <FormLabel mb="0.5" mt="2" fontSize={13} fontWeight="bold">
              Email
            </FormLabel>
            <input
              className="inputBox"
              placeholder="Enter your email address"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel mb="0.5" mt="2" fontSize={13} fontWeight="bold">
              Password
            </FormLabel>
            <input
              className="inputBox"
              placeholder="Enter your Password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            {!isRegisteredLoading && (
              <input className="inputSubmitBtn" type="submit" />
            )}
            {isRegisteredLoading && (
              <div className="InputSubmitBtnLoading">
                <div>
                  <img
                    src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
                    alt="loading..."
                  />
                </div>
              </div>
            )}
          </form>

          <Box
            boxShadow="base"
            p="0.5"
            w="40%"
            m="auto"
            rounded="md"
            bg="white"
          ></Box>
          <Text textAlign="left" fontSize={14} mt="2">
            Already have an account ?
            <Link color="blue" to="/login">
              <span style={{ color: "blue" }}> Sign in</span>
            </Link>
          </Text>
          <Text textAlign="left" fontSize={14} mt="2">
            Buying for work ?
            <Link color="blue" to="/login">
              Create a free business account
            </Link>
          </Text>
          <Text textAlign="left" fontSize={11} mt="4">
            By creating an account or logging in, you agree to Amazon’s{" "}
            <span style={{ color: "blue" }}>Conditions of Use</span> and{" "}
            <span style={{ color: "blue" }}>Privacy Policy.</span>
          </Text>
        </Box>

        <Box m="auto" mt="5" w="70%">
          <Flex w="100%">
            <Text m="auto" fontSize={11} color="blue.600">
              Conditions of Use{" "}
            </Text>
            <Text m="auto" fontSize={11} color="blue.600">
              Privacy Notice{" "}
            </Text>
            <Text m="auto" fontSize={11} color="blue.600">
              Help{" "}
            </Text>
          </Flex>
        </Box>
        <Text fontSize={11} mt="2" mb="3">
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </Text>
      </Container>
      <div id="snackbar"></div>
    </div>
  );
};

export default Signup;
