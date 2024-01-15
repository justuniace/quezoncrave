import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  VStack,
  Text
} from "@chakra-ui/react";

import PropTypes from "prop-types";


function BistekModal({ isOpen, onClose, toggleModal }) {
 

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Bistek Tagalog</ModalHeader>
        <ModalCloseButton onClick={toggleModal} />
        <ModalBody>
          <VStack align={"start"}>
            <Text fontWeight={"semibold"}>Ingredients</Text>
            <Text>▢1 1/2 lbs beef sirloin thinly sliced</Text>
            <Text>▢5 tablespoons soy sauce</Text>
            <Text>▢4 pieces calamansi or 1-piece lemon</Text>
            <Text>▢1/2 tsp ground black pepper</Text>
            <Text>▢3 cloves garlic minced</Text>
            <Text>▢3 pieces yellow onion sliced into rings</Text>
            <Text>▢4 tablespoons cooking oil</Text>
            <Text>▢1 cup water</Text>
            <Text>▢1 pinch salt</Text>
          </VStack>
          <VStack spacing="1rem" mt="2rem" align={"start"}>
            <Text fontWeight={"semibold"}> Instructions</Text>
            <Text>
              Marinate beef in soy sauce, lemon (or calamansi), and ground black
              pepper for at least 1 hour. Note: marinate overnight for best
              result
            </Text>
            <Text>
              Heat the cooking oil in a pan then pan-fry half of the onions
              until the texture becomes soft. Set aside
            </Text>
            <Text>
              Drain the marinade from the beef. Set it aside. Pan-fry the beef
              on the same pan where the onions were fried for 1 minute per side.
              Remove from the pan. Set aside
            </Text>
            <Text>
              Add more oil if needed. Saute garlic and remaining raw onions
              until onion softens.
            </Text>
            <Text>
              Add beef. Cover the pan and simmer until meat is tender. Note: Add
              water as needed.
            </Text>
            <Text>
              Season with ground black pepper and salt as needed. Top with
              pan-fried onions.
            </Text>
            <Text>
              Transfer to a serving plate. Serve hot. Share and Enjoy!
            </Text>
            <Text mt="2rem" fontSize={"15px"}>
              from Panlasangpinoy.com
            </Text>
          </VStack>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}

BistekModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
export default BistekModal;