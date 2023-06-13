import {  Center,Text,Flex, Image, Box } from "@chakra-ui/react";

function Category() {
  return (
    <Flex h="100vh" w="100%" position="absolute" bg="#262424">
      <Image
        w="100%"
        position="relative"
        bottom="26px" // Adjust this value to move the image higher
        src="./src/assets/categories-elipse.png"
      />
      <Box
        h="2.5px"
        w="12rem"
        
        position="absolute"
        top="8rem"
        left="41.4rem"
      
        
        borderRadius="20px"
        background="pallete.accent"
        boxShadow="28px 28px 55px #d4d4d4, -28px -28px 55px #ffffff"
        zIndex="1"
      ></Box>
      <Box>
        <Center h="10rem">
          <Text
            fontFamily="body"
            fontSize="30px"
            display="flex"
            position="absolute"
            top="5rem"
            left="0"
            right="0"
            justifyContent="center"
            alignContent="center"
          >
            Categories
          </Text>
        </Center>
      </Box>
    </Flex>
  );
}

export default Category;
