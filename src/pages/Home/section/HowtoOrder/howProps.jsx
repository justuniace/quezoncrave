import { Box, Image, Text, VStack, WrapItem, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import {Reveal} from "../../../components/Observer/useObserver";


function HowProps({ items }) {
  return (
    <WrapItem w="20rem" position="relative">
      <VStack>
        <Box>
          <Reveal width="fit-content">
            <Image src={items.image} alt="Icon" w="8rem" h="8rem" />
          </Reveal>
        </Box>
        <Flex alignItems="center" position="relative">
          <Reveal width="fit-content">
            <Text
              fontFamily="inter"
              fontWeight="bold"
              fontSize="18px"
              textAlign="center"
              position="relative"
              zIndex={1}
            >
              {items.dTitle}
            </Text>
          </Reveal>
        </Flex>
        <Reveal width="fit-content">
          <Text fontFamily="inter" textAlign="center" mt="1rem">
            {items.details}
          </Text>
        </Reveal>
      </VStack>
    </WrapItem>
  );
}

HowProps.propTypes = {
  items: PropTypes.shape({
    image: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    dTitle: PropTypes.string.isRequired,
  }).isRequired,

};

export default HowProps;
