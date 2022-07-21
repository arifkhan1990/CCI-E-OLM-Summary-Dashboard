
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

    var myHeaders = {'Accept': 'application/json'};
    //myHeaders.append("Content-Type", "application/json");
    //myHeaders.append("Access-Control-Allow-Headers", "access-control-allow-origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    var login_data = JSON.stringify({'email': email, 'password': password});
    localStorage.setItem('login-info',JSON.stringify(login_data));
          history.push("/");
    // console.log({login_data});
    // var requestOptions = {
    //   method: 'GET',
    //   headers: myHeaders,
    //   data: login_data
    // };
    // console.log({requestOptions});
    // fetch("http://103.205.180.187:80/ccielive/public/index.php/api/login", requestOptions)
    //   .then(response => response.json())
    //   .then(result => {
    //     response.json()
    //     console.log({result})
    //     if(result.status == 202) {
    //       localStorage.setItem('login-info',JSON.stringify(result));
    //       history.push("/");
    //     }else {
    //       history.push("/");
    //       // alert('Email or Password incorrect !.');
    //     }
    //   })
    //   .catch(error => console.log('error', error));
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
