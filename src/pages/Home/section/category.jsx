import { Box, Flex, Image } from "@chakra-ui/react";

function Category() {
  return (
    <Flex>
      <Box
        bg="red"
        width="100%"
        overflow="auto"
       
        minH="500px"
        className="custom-box"
      >
        <Image src="./src/assets/categories-elipse.png" />
      </Box>
    </Flex>
  );
}

export default Category;
