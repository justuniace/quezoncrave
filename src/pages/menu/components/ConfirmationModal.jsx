
import PropTypes from "prop-types";
import{ useState } from "react";
import Lottie from "lottie-react";
import ConfirmIcon from "/src/assets/confirm2.json";
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
            Thank You for Ordering!
          </Text>

          <br />

          <Text align="center" fontSize="15px" fontWeight="light">
            Your meal has been placed successfully. We are currently processing
            it now. You will get a call to confirm your order.
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
