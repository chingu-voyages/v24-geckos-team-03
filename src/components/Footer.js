import React from "react";
import { Link as Links } from "react-router-dom";
import {
    Link,
    Text,
    Stack,
    Divider,
    Flex
  } from "@chakra-ui/core";

  const Footer = () => {
    return (
      <Stack
        bg="primaryBackground" 
        paddingTop="10px"
        boxShadow="0px -4px 4px 1px rgba(0,0,0,0.25)"
        >
        <Divider />
        <Flex
          justifyContent="space-between"
          isInline
          paddingTop="20px"
          paddingBottom="20px"
        
        >
          <Flex color="#e5e5e5" margin="0 4px">
            <Link _hover={{textDecoration : 'none'}} >Home</Link>
            <Divider orientation="vertical" />
            <Text>Created by: </Text>
            <Text mt={-2}>Pajek <i className="fa fa-fw fa-2x fa-inverse fa-github footer-icons"></i></Text>
            <Text mt={-2}>Erion <i className="fa fa-fw fa-2x fa-inverse fa-github footer-icons"></i></Text>
            <Text mt={-2}>Rayhan<i className="fa fa-fw fa-2x fa-inverse fa-github footer-icons"></i></Text>
            <Divider orientation="vertical" />
          </Flex>
          <Flex>
            <i className="fa fa-fw fa-2x fa-inverse fa-twitter footer-icons"></i>
            <i className="fa fa-fw fa-2x fa-inverse fa-youtube footer-icons"></i>
            <i className="fa fa-fw fa-2x fa-inverse fa-github footer-icons"></i>
          </Flex>
          <Flex color="#fff" mr={4}>
              <Text>Powered By MovieDB</Text>
          </Flex>   
        </Flex>
      </Stack>
    );
  };
  
  export default Footer;
