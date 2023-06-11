import { Box, Flex, Image,  HStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import Navlink from "./navlink";
import { Link } from "react-router-dom"; 


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
        <Box>
          <Link to="/">
            <Image
              transition="all .3s ease"
              width="7rem"
              borderRadius="1rem"
              marginLeft="50%"
              src={logo}
            />
          </Link>
        </Box>
        

        <Flex 
        justifyContent="center"
        flex="1"
        marginRight="9.5%"
        >
          <HStack spacing="5rem">
            {navLinks.map((nav) => {
              return <Navlink nav={nav} key={nav} />;
            })}
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  navLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navbar;
