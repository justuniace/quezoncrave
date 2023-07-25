import { Box, Image, Text, VStack, WrapItem, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";

function HowProps({ items }) {
  return (
    <WrapItem w="20rem" position="relative">
      <VStack>
       
        <Box>
          <Image src={items.image} alt="Icon" w="8rem" h="8rem" />
        </Box>
        <Flex alignItems="center" position="relative">
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
        </Flex>
        <Text fontFamily="inter" textAlign="center" mt="1rem">
          {items.details}
        </Text>
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
