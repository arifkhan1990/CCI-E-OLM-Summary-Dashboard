
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Icon,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
// Assets
import signInImage from "assets/img/signInImage.png";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() =>{
    if (localStorage.getItem('login-info')){
      history.push("/admin/dashboard");
    }
  }, []);

  function login(){
    console.warn(email, password);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var login_data = JSON.stringify({'email': email, 'password': password});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: login_data
    };

    fetch("http://103.159.37.7:4100/api/users/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log({result})
        if(result.message == 'Auth Success') {
          localStorage.setItem('login-info',JSON.stringify(result));
          history.push("/");
        }else {
          alert('Email or Password incorrect !.');
        }
      })
      .catch(error => console.log('error', error));
  }
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");
  const colorIcons = useColorModeValue("gray.700", "white");
  const bgIcons = useColorModeValue("trasnparent", "navy.700");
  const bgIconsHover = useColorModeValue("gray.50", "whiteAlpha.100");
  return (
    <Flex position='relative' mb='40px'>
      <Flex
        // minH={{ md: "1000px" }}
        // h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        justifyContent='space-between'
        mb='30px'
        pt={{ md: "0px" }}>
        <Flex
          w='100%'
          h='75vh'
          alignItems='center'
          justifyContent='center'
          mb='60px'
          mt={{ base: "50px", md: "20px" }}>
          <Flex
            zIndex='2'
            direction='column'
            w='445px'
            background='transparent'
            borderRadius='15px'
            p='40px'
            mx={{ base: "100px" }}
            m={{ base: "20px", md: "auto" }}
            bg={bgForm}
            boxShadow={useColorModeValue(
              "0px 5px 14px rgba(0, 0, 0, 0.05)",
              "unset"
            )}>
            <FormControl>
              <FormLabel ms='4px' fontSize='md' fontWeight='normal'>
                Email
              </FormLabel>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='text'
                placeholder='Your Email Id'
                mb='24px'
                size='lg'
                onChange={(e)=>setEmail(e.target.value)}
              />
              <FormLabel ms='4px' fontSize='md' fontWeight='normal'>
                Password
              </FormLabel>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='password'
                placeholder='Your password'
                mb='24px'
                size='lg'
                onChange={(e)=>setPassword(e.target.value)}
              />
              <Button
                onClick={login}
                fontSize='10px'
                variant='dark'
                fontWeight='bold'
                w='100%'
                h='45'
                mb='24px'>
                SIGN IN
              </Button>
            </FormControl>
          </Flex>
        </Flex>
        <Box
          overflowX='hidden'
          h='100%'
          w='100%'
          left='0px'
          position='absolute'
          bgImage={signInImage}>
          <Box
            w='100%'
            h='100%'
            bgSize='cover'
            bg='blue.500'
            opacity='0.8'></Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
