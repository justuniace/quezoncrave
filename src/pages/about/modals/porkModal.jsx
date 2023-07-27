import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import PropTypes from "prop-types";

function PorkModal({ isOpen, onClose, toggleModal }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton onClick={toggleModal} />
        <ModalBody>jkjkkk</ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}

PorkModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
export default PorkModal;
