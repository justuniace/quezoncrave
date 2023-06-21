import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
   VStack,
  Divider,

} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { CartFooter } from "./CartFooter";
import { CartBody } from "./CartBody";



function CartDrawer({ isOpen, onClose }) {
  return (
    <Drawer size="md" isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>My Cart</DrawerHeader>
        <Divider />
        <DrawerBody bg="#ECECEC" >
          <VStack
            w="100%"
            h="100%"
          >
             <CartBody/>
          </VStack>
        </DrawerBody>
       
        <DrawerFooter>
          <CartFooter />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

CartDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CartDrawer;
