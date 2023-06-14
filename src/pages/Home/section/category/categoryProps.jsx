import { Box, Image, Text, VStack, WrapItem, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";

function CatProps({ items }) {
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
          <Box
            bgColor="#FFC700"
            borderRadius="5px"
            w="20px"
            h="20px"
            position="absolute"
            left="-0.7rem"
            top="12%"
            zIndex={0}
            opacity="0.5"
          />
        </Flex>
        <Text fontFamily="inter" textAlign="center" mt="1rem">
          {items.details}
        </Text>
      </VStack>
    </WrapItem>
  );
}

CatProps.propTypes = {
  items: PropTypes.shape({
    image: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    dTitle: PropTypes.string.isRequired,
  }).isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default CatProps;
