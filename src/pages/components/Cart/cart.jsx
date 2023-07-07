// Drawer
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Divider,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

import { Cart } from "./cartBody";

function CartDrawer({ isOpen, onClose, cartItems }) {
  console.log("Cart Items:", cartItems);
  return (
    <Drawer size="md" isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>My Cart</DrawerHeader>
        <Divider />
        <DrawerBody bg="#ECECEC">
          <VStack w="100%" h="100%">
            
            <Cart cartItems={cartItems} />
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

CartDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
};

export default CartDrawer;
