import {  Flex, Image, Box } from "@chakra-ui/react";

function Category() {
  return (
    <Flex h="100vh" w="100%" position="absolute" bg="#262424">
      <Image
        w="100%"
        position="relative"
        bottom="26px" // Adjust this value to move the image higher
        src="./src/assets/categories-elipse.png"
      />
   <Box>

   </Box>
    </Flex>

  );
}

export default Category;
