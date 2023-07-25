import PropTypes from "prop-types";
import { useState } from "react";
import Lottie from "lottie-react";
import ConfirmIcon from "/src/assets/confirm.json";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";

export function ConfirmModal({ onClose }) {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsAnimationPlaying(false);
    setIsOpen(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      isCentered
      returnFocusOnClose={false}
      motionPreset="none"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Box align="center">
            <Lottie
              loop
              animationData={ConfirmIcon}
              play={isAnimationPlaying.toString()}
              style={{ width: 200, height: 200 }}
            />
          </Box>

          <Text align="center" fontWeight="bold" fontSize="20px">
            Thank You for Reserving!
          </Text>

          <br />

          <Text align="center" fontSize="15px" fontWeight="light">
            Your reservation is being processed! You will get a call to confirm
            your reservation. Thank You!
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button bg="#452B1A" color="white" onClick={handleClose}>
            Continue Browsing
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
ConfirmModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ConfirmModal;
