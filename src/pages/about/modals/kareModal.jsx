import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";

import PropTypes from "prop-types";

function KareModal({ isOpen, onClose, toggleModal }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton onClick={toggleModal} />
        <ModalBody>
          <Text>
           
          </Text>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}

KareModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
export default KareModal;
