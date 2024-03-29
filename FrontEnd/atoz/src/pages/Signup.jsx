//import statements
import React from "react";
import { useEffect } from "react";
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

//signup component
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();

  //getting  states using react-redux library hooks
  const isRegisteredLoading = useSelector(
    (state) => state.AuthReducer.isRegisteredLoading
  );
  const isRegistered = useSelector((state) => state.AuthReducer.isRegistered);
  const isRegisteredFailure = useSelector(
    (state) => state.AuthReducer.isRegisteredFailure
  );

  const navigate = useNavigate();

  // console.log(isRegisteredLoading);

  //handling form after submitting with handleSubmit function
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

  //if registered , redirecting user to login page
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
      {/* F O R M   C O N T A I N E R  */}
      <Container w={{ base: "80%", sm: "65%", md: "40%", lg: "29%" }}>
        <Box m="auto" p="3" border="lightgrey solid 1px" borderRadius="5">
          <Text
            fontSize={{ base: "18", sm: "16", md: "24", lg: "28" }}
            textAlign="left"
          >
            Create Account
          </Text>
          {/* F O R M */}
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
          {/* F O R M   E N D S   H E R E */}
          <Box
            boxShadow="base"
            p="0.5"
            w="40%"
            m="auto"
            rounded="md"
            bg="white"
          ></Box>
          <Text
            textAlign="left"
            fontSize={{ base: "10", sm: "12", md: "14", lg: "14" }}
            mt="2"
          >
            Already have an account ?
            <Link color="blue" to="/login">
              <span style={{ color: "blue" }}> Sign in</span>
            </Link>
          </Text>
          <Text
            textAlign="left"
            fontSize={{ base: "10", sm: "12", md: "14", lg: "14" }}
            mt="2"
          >
            Buying for work ?
            <Link color="blue" to="/login">
              Create a free business account
            </Link>
          </Text>
          <Text
            textAlign="left"
            fontSize={{ base: "10", sm: "12", md: "14", lg: "14" }}
            mt="4"
          >
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
      {/* F O R M   C O N T A I N E R   E N D S   H E R E*/}

      {/* SNACKBAR DIV FOR SHOWING TOAST */}
      <div id="snackbar"></div>
    </div>
  );
};

export default Signup;
