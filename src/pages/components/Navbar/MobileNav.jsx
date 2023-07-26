import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";


 function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box position="relative">
      <Menu isOpen={isOpen} onClose={toggleMenu}>
        <MenuButton
          as={Box}
          fontSize="1.5rem"
          cursor="pointer"
          onClick={toggleMenu}
        >
          <AiOutlineMenu />
        </MenuButton>
        <MenuList>
          <Flex direction="column">
            <MenuItem>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/menu" onClick={toggleMenu}>
                Menu
              </Link>
            </MenuItem>
            
            <MenuItem>
              <Link to="/about" onClick={toggleMenu}>
                Blog
              </Link>
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
    </Box>
  );
}
export default MobileNav;
