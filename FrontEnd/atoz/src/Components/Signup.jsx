import React from "react";
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
  Link,
} from "@chakra-ui/react";

const Signup = () => {
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
          <FormControl>
            <FormLabel
              mb="0.5"
              mt="2"
              fontSize={13}
              fontWeight="bold"
              type="text"
            >
              Your Name
            </FormLabel>
            <Input mb="2" h="9" placeholder="First and last name" />
            <FormLabel mb="0.5" mt="2" fontSize={13} fontWeight="bold">
              Mobile Number
            </FormLabel>
            <Flex>
              <Select
                placeholder="IN +91"
                h="9"
                w="18%"
                m="auto"
                textAlign="left"
                fontSize={10}
                bg="#ebedf0"
              >
                <option value="option1">USA +21</option>
                <option value="option2">UK +65</option>
                <option value="option3">RS +44</option>
              </Select>
              <Input
                mb="2"
                m="auto"
                h="9"
                placeholder="Mobile number"
                w="80%"
              />
            </Flex>
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
            />
            <Text textAlign="left" fontSize={11} mt="-1" mb="3">
              Passwords must be at least 6 characters.
            </Text>
            <Text textAlign="left" fontSize={14}>
              By enrolling your mobile phone number, you consent to receive
              automated security notifications via text message from Amazon.
              Message and data rates may apply.
            </Text>
            <Button h="8" bgColor="#f1c350" w="100%" mt="3" mb="4">
              Continue
            </Button>
          </FormControl>
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
              Sign in
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
