import React from "react";
import { ThemeProvider, Box, Image, Heading, Text, Stack} from '@chakra-ui/core';

const App = () => {
  return (
    <ThemeProvider>
      <Heading textAlign='center'>Movie Database</Heading>
      <Stack isInline>
        {/* Create boxes */}
        <Box w='150px' border='1px solid red' overflow='hidden' rounded='10px' boxShadow='sm'>
          <Image src={require('../img/not-found.jpg')} alt='pic' />
          <Box>
            <Text as='h5' mt='-3px' mb='-5px'>Movie Title</Text>
            <Text fontSize='50%'>Description</Text>
          </Box>
        </Box>
        <Box w='150px' border='1px solid red' overflow='hidden' boxShadow='sm'>
          <Image src={require('../img/not-found.jpg')} alt='pic' />
          <Box>
            <Text as='h5' mt='-3px' mb='-5px'>Movie Title</Text>
            <Text fontSize='50%'>Description</Text>
          </Box>
        </Box>
        <Box w='150px' border='1px solid red' overflow='hidden' boxShadow='sm'>
          <Image src={require('../img/not-found.jpg')} alt='pic' />
          <Box>
            <Text as='h5' mt='-3px' mb='-5px'>Movie Title</Text>
            <Text fontSize='50%'>Description</Text>
          </Box>
        </Box>
        <Box w='150px' border='1px solid red' overflow='hidden' boxShadow='sm'>
          <Image src={require('../img/not-found.jpg')} alt='pic' />
          <Box>
            <Text as='h5' mt='-3px' mb='-5px'>Movie Title</Text>
            <Text fontSize='50%'>Description</Text>
          </Box>
        </Box>
        <Box w='150px' border='1px solid red' overflow='hidden' boxShadow='sm'>
          <Image src={require('../img/not-found.jpg')} alt='pic' />
          <Box>
            <Text as='h5' mt='-3px' mb='-5px'>Movie Title</Text>
            <Text fontSize='50%'>Description</Text>
          </Box>
        </Box>
   
      </Stack>
      
     
    </ThemeProvider>
   
  )
};

export default App;
