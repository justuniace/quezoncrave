//foodmodal.jsx
import PropTypes from "prop-types";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

export function FoodModal({ onClose }) {
  return (
    <Modal isCentered  isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Food Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>Food content goes here.</p>
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
};
