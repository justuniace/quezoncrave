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

function PorkModal({ isOpen, onClose, toggleModal }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Pork Adobo</ModalHeader>
        <ModalCloseButton onClick={toggleModal} />
        <ModalBody>
          <VStack align={"start"}>
            <Text fontWeight={"semibold"}>Ingredients</Text>
            <Text>▢2 lbs pork belly (note 1)</Text>
            <Text>▢2 tablespoons garlic (note 2)</Text>
            <Text>▢5 dried bay leaves (note 3)</Text>
            <Text>▢4 tablespoons vinegar (note 4)</Text>
            <Text>▢1/2 cup soy sauce (note 5)</Text>
            <Text>▢1 tablespoon peppercorn (note 6)</Text>
            <Text>▢2 cups water</Text>
            <Text>▢Salt to taste</Text>
          </VStack>
          <VStack spacing="1rem" mt="2rem" align={"start"}>
            <Text fontWeight={"semibold"}> Instructions</Text>
            <Text>
              1. Combine the pork belly, soy sauce, and garlic then marinade for
              at least 1 hour
            </Text>
            <Text>
              2 Heat the pot and put-in the marinated pork belly then cook for a
              few minutes
            </Text>
            <Text>3 Pour remaining marinade including garlic</Text>
            <Text>
              4. Add water, whole pepper corn, and dried bay leaves then bring
              to a boil. Simmer for 40 minutes to 1 hour
            </Text>
            <Text>5. Put-in the vinegar and simmer for 12 to 15 minutes</Text>
            <Text>6. Add salt to taste</Text>
            <Text>7.Serve hot. Share and enjoy!</Text>
            <Text  mt="2rem" fontSize={"15px"}>from Panlasangpinoy.com</Text>
          </VStack>
        </ModalBody>

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
