import { Box, Center, Text } from "@chakra-ui/react";
import MenuNav from "./components/menuNav";

export const Menu = () => {
  return (
    <Box h="100vh" w="100%">
      <Center h="10rem">
        <Text
          top="20%"
          display="flex"
          position="absolute"
          fontSize="25"
          fontWeight="semibold"
          justifyContent="center"
          alignItems="center"
          fontFamily="Abril-Fatface"
        >
          Heartwarming Traditions, Savored in Every Bite!
        </Text>
      </Center>
      <Center paddingBlock="5rem">
        <MenuNav />
      </Center>
    </Box>
  );
};
