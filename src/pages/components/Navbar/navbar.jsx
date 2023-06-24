
import { useState, useContext } from "react";
import { Box, Flex, Image, HStack , Center} from "@chakra-ui/react";
import PropTypes from "prop-types";
import Navlink from "./navlink";
import { Link } from "react-router-dom";
import Cart from "/src/assets/cart.json";
import Lottie from "lottie-react";
import CartDrawer from "../Cart/cart";
import {CartContext} from "../Context/Context";



function Navbar(props) {
  const { cartItems} = useContext(CartContext);
  const { logo, navLinks } = props;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isAnimationPlaying = true;



  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

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
          onClick={openDrawer}
        >
          <Lottie
            loop
            animationData={Cart}
            play={isAnimationPlaying.toString()}
            style={{ width: 85, height: 80 }}
          />
          <Box pos="absolute" top="1rem" right="6rem">
            <Center
              fontSize=".8rem"
              fontFamily="inter"
              fontWeight="md"
              bg="#FFC700"
              w="1rem"
              p=".7rem"
              h="1rem"
              borderRadius="10rem"
            >
              {cartItems.length}
            </Center>
          </Box>
        </Box>
      </Flex>

      {isDrawerOpen && (
        <Box
          pos="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.6)"
          zIndex={998}
          onClick={closeDrawer}
        />
      )}

      {isDrawerOpen && (
        <CartDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
      )}
    </Box>
  );
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  navLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navbar;
