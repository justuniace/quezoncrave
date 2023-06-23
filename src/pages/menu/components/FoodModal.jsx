import PropTypes from "prop-types";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  HStack,
} from "@chakra-ui/react";

export function FoodModal({ onClose, food }) {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateTotalPrice = () => {
   const totalPrice = food.price * quantity;
   return totalPrice.toFixed(2);
  };

  return (
    <Modal isCentered isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{food && food.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack>
                
          </HStack>
          <Text>Price: ₱{calculateTotalPrice()}</Text>
          <Text>Quantity: {quantity}</Text>
          <Button onClick={incrementQuantity}>Increment</Button>
          <Button onClick={decrementQuantity}>Decrement</Button>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

FoodModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  food: PropTypes.object,
};
