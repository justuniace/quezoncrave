import { Box, Center, Text } from "@chakra-ui/react";
import MenuNav from "./components/menuNav";
// import Food from "./sections/food";
import Dessert from "./sections/dessert";


export const Menu = () => {
  return (
    <Box w="100%" h="auto">
      <Center h="10rem">
        <Text
          top="50%"
          position="relative"
          fontSize="25"
          fontWeight="semibold"
          justifyContent="center"
          alignItems="center"
          fontFamily="Abril-Fatface"
        >
          Heartwarming Traditions, Savored in Every Bite!
        </Text>
      </Center>
      <Center paddingTop="5rem">
        <MenuNav />
      </Center>
      <Box>
        <Dessert />
      </Box>
    </Box>
  );
};
