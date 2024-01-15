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
        <ModalHeader>Laing</ModalHeader>
        <ModalCloseButton onClick={toggleModal} />
        <ModalBody>
          <VStack align={"start"}>
            <Text fontWeight={"semibold"}>Ingredients</Text>
            <Text>▢4 ounces dried taro leaves</Text>
            <Text>▢2 packs Knorr Ginataang Gulay Recipe Mix 40 grams each</Text>
            <Text>▢½ lb pork sliced into ¼ inch thick pieces</Text>
            <Text>▢5 pieces Thai chili pepper</Text>
            <Text>▢5 cloves garlic crushed</Text>
            <Text>▢2 thumbs ginger crushed</Text>
            <Text>▢1 piece onion sliced into thin strips</Text>
            <Text>▢5 cups water</Text>
          </VStack>
          <VStack spacing="1rem" mt="2rem" align={"start"}>
            <Text fontWeight={"semibold"}> Instructions</Text>
            <Text>
              Prepare the gata by combining Knorr Ginataang Gulay Recipe Mix
              with 5 cups water. Stir until the powder completely dilutes.
            </Text>
            <Text>
              Arrange pork, garlic, onion, and ginger in a pot. Pour 3 ½ cups
              gata. Put on a stovetop and apply heat. Continue to cook for 10
              minutes after the liquid boils.
            </Text>
            <Text>
              Add dried taro leaves. Cover the pot and continue to cook until
              the liquid is almost gone.
            </Text>
            <Text>
              Add chili peppers and then pour remaining coconut milk. Stir and
              continue to cook until the liquid completely evaporates.
            </Text>
            <Text>
              Transfer to a serving plate. Serve with rice! Share and enjoy!
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
