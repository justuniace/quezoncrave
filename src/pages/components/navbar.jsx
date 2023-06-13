import { Box, Flex, Image, HStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import Navlink from "./navlink";
import { Link } from "react-router-dom";
import Cart from "/src/assets/cart.json";
import Lottie from "lottie-react";

function Navbar(props) {
  const { logo, navLinks } = props;

  return (
    <Box
      w="100%"
      pos="fixed"
      zIndex={999}
      bg="#262424"
      h="6rem"
      boxShadow="none"
      top="0"
      right="0"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        h="100%"
        margin="auto"
        w="95%"
      >
        <Box paddingLeft="5rem">
          <Link to="/">
            <Image
              transition="all .3s ease"
              width="8rem"
              borderRadius="1rem"
              src={logo}
            />
          </Link>
        </Box>

        <Flex flex="1" justifyContent="center">
          <HStack spacing="5rem">
            {navLinks.map((nav) => {
              return <Navlink nav={nav} key={nav} />;
            })}
          </HStack>
        </Flex>

        <Box
          fontSize="1.5rem"
          transition="all .3s ease"
          _hover={{ transform: "scale(.9)" }}
          cursor="pointer"
          
          pos="relative"
          display={{ base: "none", md: "block" }}
          paddingRight="5rem"
        >
          <Lottie
            loop
            animationData={Cart}
            play
            style={{ width: 85, height: 80 }}
          />
        </Box>
      </Flex>
    </Box>
  );
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  navLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navbar;
