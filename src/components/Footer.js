import React from "react";
import { Link, Text, Divider, Flex, Image, Box, useColorMode } from "@chakra-ui/core";
import { FaGithub } from 'react-icons/fa';

const movieDB_logo =
  "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";

const Footer = () => {

  //color mode 
  const {colorMode} = useColorMode();
  const textGradient = {
    background: "-webkit-linear-gradient(#90cea1, #01b4e4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  };
  return (
    <Flex
      className="footer-container"
      bg={colorMode === 'light' ? "white" : 'primaryBackground'} 
      paddingTop="10px"
      paddingBottom="10px"
      boxShadow="0px -4px 4px 1px rgba(0,0,0,0.25)"
      justifyContent=""
      position="relative"
      justifyContent="space-evenly"
    >
        <Flex
          className="githubs-container"
          mt="30px"
          flexDirection="row"
        >
              {/* <Text className="copyright" color="#F34C28">&copy; Copyright 2020  </Text>
              <Link className="names"href="https://github.com/dpajek" _hover={{color : "#49c3fd"}} isExternal mt={-2} ml={2} >Pajek<FaGithub size="30px"/></Link>
             <Link className="names" href="https://github.com/Eerian" _hover={{color : "#49c3fd"}} isExternal mt={-2}>Erion<FaGithub size="30px" /> </Link>
              <Link className="names" href="https://github.com/Rayhan1998" _hover={{color : "#49c3fd"}} isExternal mt={-2}>Rayhan<FaGithub size="30px" /></Link> */}
              <Text className="copyright" color="#F34C28">&copy; Copyright 2020  </Text>
              <Link className="dev-names" href="https://github.com/dpajek" _hover={{color : "#49c3fd"}} isExternal mt={-2} ml={2} >Pajek</Link>
              <FaGithub size="30px" className="git-icons" />
             <Link className="dev-names" href="https://github.com/Eerian" _hover={{color : "#49c3fd"}} isExternal mt={-2}>Erion </Link>
             <FaGithub size="30px" className="git-icons" />
              <Link className="dev-names" href="https://github.com/Rayhan1998" _hover={{color : "#49c3fd"}} isExternal mt={-2}>Rayhan</Link>
            <FaGithub size="30px" className="git-icons" />
            <Divider mt="-4px" orientation="vertical" className="footer-divider" />
        </Flex>
        <Flex className="project-repo">
              <Link color={colorMode === 'light' ? "#333" : '#fff'} w="100%" ml="20px" _hover={{color : "#49c3fd"}} href="https://github.com/chingu-voyages/v24-geckos-team-03" isExternal mt={-2}><span className="repo-name">Project Repo</span></Link>
              <Link href="https://github.com/chingu-voyages/v24-geckos-team-03"><FaGithub size="30px" className="repo-git-icon"/></Link>
        </Flex>
        <Flex color="#fff" className="footer-logo" flexDirection="column">
          <Text
            fontSize={["sm", "md", "lg", "xl"]}
            fontWeight="bold"
            style={textGradient}
          >
            Powered By
          </Text>
          <Image src={movieDB_logo} size="50px" />
        </Flex>  
    </Flex>
  );
};

export default Footer;
