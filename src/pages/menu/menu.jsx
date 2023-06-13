
import { Box, Center, Text} from "@chakra-ui/react";
import MenuNav from "./components/menuNav"


export const Menu = () => {

  return (
    <Box>
      <Center h="10rem">
        <Text
          top="20%"
          display="flex"
          position="fixed"
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
