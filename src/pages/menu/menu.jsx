
import { Box, Center, Text} from "@chakra-ui/react";
import MenuNav from "./components/menuNav"


export const Menu = () => {

  return (
    <Box>
      <Center h="10rem">
        <Text
          top="18%"
          display="flex"
          position="fixed"
          fontSize="25"
          fontFamily="inter"
          fontWeight="semibold"
          justifyContent="center"
          alignItems="center"
        >
          Heartwarming Traditions, Savored in Every Bite!
        </Text>
      </Center>
      <Center paddingBlock="4rem">
       <MenuNav/>
      </Center>
     
    </Box>
  );
};
