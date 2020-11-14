import React from "react";
import { Link as Links } from "react-router-dom";
import { FaGithub, FaGithubAlt} from 'react-icons/fa';
import {
  useColorMode,
    Link,
    Text,
    Stack,
    Divider,
    Flex,
    Image,
    Box
  } from "@chakra-ui/core";
const movieDB_logo = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg';

  const Footer = () => {
    //color mode 
    const {colorMode} = useColorMode();

    return (
      <Box
        className="footer-container"
        bg={colorMode === 'light' ? "white" : 'primaryBackground'} 
        paddingTop="10px"
        boxShadow="0px -4px 4px 1px rgba(0,0,0,0.25)"
        >
        <Divider />
        <Flex
          className="footer"
          justifyContent="space-around"
          flexDirection="row"
          paddingTop="8px"
          paddingBottom="10px"
        
        >
          <Flex 
            className="githubs-container" 
            justifyContent="space-around"
            mt="30px" 
         
          >
            <Flex  margin="0 4px" className="footer-githubs">
              <Text className="copyright" color="#F34C28">&copy; Copyright 2020  </Text>
              <Link className="names"href="https://github.com/dpajek" _hover={{color : "#49c3fd"}} isExternal mt={-2} ml={2} ><i className="fa fa-fw fa-2x fa-inverse fa-github footer-icons"></i>Pajek</Link>
              <Link className="names" href="https://github.com/Eerian" _hover={{color : "#49c3fd"}} isExternal mt={-2}><i className="fa fa-fw fa-2x fa-inverse fa-github footer-icons"></i>Erion </Link>
              <Link className="names" href="https://github.com/Rayhan1998" _hover={{color : "#49c3fd"}} isExternal mt={-2}><i className="fa fa-fw fa-2x fa-inverse fa-github footer-icons"></i>Rayhan</Link>
            </Flex>
            <Divider mt="-4px" orientation="vertical"/>
            <Flex className="project-repo">
              <Link color={colorMode === 'light' ? "#333" : '#fff'} w="100%" ml="20px" _hover={{color : "#49c3fd"}} href="https://github.com/chingu-voyages/v24-geckos-team-03" isExternal mt={-2}><span className="repo-name">Project Repo</span></Link>
              {colorMode === 'light' ? <FaGithub size="30px" /> : <FaGithubAlt size="30px" />} 
            </Flex>
          </Flex>
    
          
          <Flex color="#fff" className="footer-logo" >
              <Image src={movieDB_logo}
                    size="65px"
              />
          </Flex>   
        </Flex>
      </Box>
    );
  };
  
  export default Footer;
