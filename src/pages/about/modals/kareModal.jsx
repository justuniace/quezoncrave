import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  VStack
} from "@chakra-ui/react";

import PropTypes from "prop-types";

function KareModal({ isOpen, onClose, toggleModal }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Kare-Kare</ModalHeader>
        <ModalCloseButton onClick={toggleModal} />
        <ModalBody>
          <VStack align={"start"}>
            <Text fontWeight={"semibold"}>Ingredients</Text>
            <Text>
              ▢3 lbs oxtail cut in 2 inch slices you an also use tripe or beef
              slices
            </Text>
            <Text>▢1 piece small banana flower bud sliced</Text>
            <Text>▢1 bundle pechay or bok choy</Text>
            <Text>▢1 bundle string beans cut into 2 inch slices</Text>
            <Text>▢4 pieces eggplants sliced</Text>
            <Text>▢1 cup ground peanuts</Text>
            <Text>▢1/2 cup peanut butter</Text>
            <Text>▢1/2 cup shrimp paste</Text>
            <Text>▢34 Ounces water about 1 Liter</Text>
            <Text>▢1/2 cup annatto seeds soaked in a cup of water</Text>
            <Text>▢1/2 cup toasted ground rice</Text>
            <Text>▢1 tbsp garlic minced</Text>
            <Text>▢1 piece onion chopped</Text>
            <Text>▢salt and pepper</Text>
          </VStack>
          <VStack spacing="1rem" mt="2rem" align={"start"}>
            <Text fontWeight={"semibold"}> Instructions</Text>
            <Text>1. In a large pot, bring the water to a boil</Text>
            <Text>
              2. Put in the oxtail followed by the onions and simmer for 2.5 to
              3 hrs or until tender (35 minutes if using a pressure cooker)
            </Text>
            <Text>
              3. Once the meat is tender, add the ground peanuts, peanut butter,
              and coloring (water from the annatto seed mixture) and simmer for
              5 to 7 minutes
            </Text>
            <Text>4. Add the toasted ground rice and simmer for 5 minutes</Text>
            <Text>
              5. On a separate pan, saute the garlic then add the banana flower,
              eggplant, and string beans and cook for 5 minutes
            </Text>
            <Text>
              6. Transfer the cooked vegetables to the large pot (where the rest
              of the ingredients are)
            </Text>
            <Text>7. Add salt and pepper to taste</Text>
            <Text>8. Serve hot with shrimp paste. Enjoy!</Text>
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

KareModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
export default KareModal;
