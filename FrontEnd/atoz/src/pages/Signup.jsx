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
import { Link } from "react-router-dom";
import { useState } from "react";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const handleSubmit = () => {
    setIsLoading(true);
    const payload = {
      name,
      email,
      password,
    };

    axios
      .post(
        `https://better-gold-grasshopper.cyclic.app/users/register`,
        payload
      )
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        toast({
          title: "Account Created.",
          description: `${name} your account successfully created`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Account Created.",
          description: `Failed to Register`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };
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
        <Box m="auto" p="3" border="lightgrey solid 1px" borderRadius="5">
          <Text
            fontSize={{ base: "12", sm: "16", md: "24", lg: "28" }}
            textAlign="left"
          >
            Create Account
          </Text>
          <form>
            <FormLabel
              mb="0.5"
              mt="2"
              fontSize={13}
              fontWeight="bold"
              type="text"
            >
              Your Name
            </FormLabel>
            <Input
              mb="2"
              h="9"
              placeholder="First and last name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <FormLabel mb="0.5" mt="2" fontSize={13} fontWeight="bold">
              Email
            </FormLabel>
            <Input
              mb="2"
              m="auto"
              h="9"
              placeholder="Enter Your Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <FormLabel
              mb="0.5"
              mt="2"
              fontSize={13}
              fontWeight="bold"
              type="text"
            >
              Password
            </FormLabel>
            <Input
              mb="2"
              h="9"
              placeholder="At least 6 characters"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Text textAlign="left" fontSize={11} mt="-1" mb="3">
              Passwords must be at least 6 characters.
            </Text>
            <Text textAlign="left" fontSize={14}>
              By enrolling your mobile phone number, you consent to receive
              automated security notifications via text message from Amazon.
              Message and data rates may apply.
            </Text>
            <Button
              isLoading={isLoading}
              loadingText="Submitting"
              h="8"
              bgColor="#f1c350"
              w="100%"
              mt="3"
              mb="4"
              onClick={handleSubmit}
            >
              Continue
            </Button>
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
    </div>
  );
};

export default Signup;
