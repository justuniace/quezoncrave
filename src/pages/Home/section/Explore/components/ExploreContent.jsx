import { Box, Text, Flex, VStack } from "@chakra-ui/react";
import PropTypes from "prop-types";

function ExploreContent({ title, details }) {
  return (
    <VStack w="100%" h="50%" align="start" spacing="1rem">
      <Flex alignItems="center">
        <Box
          bgColor="#FFC700"
          borderRadius="10px"
          w="22px"
          h="22px"
          ml="-15px"
          mt="-3"
          position="absolute"
          zIndex={0}
          opacity="0.5"
        />
        <Text fontFamily="inter" fontWeight="bold" fontSize="25px">
          {title}
        </Text>
      </Flex>
      <Box   w="40%">
        <Text
        
          fontSize="18px"
          fontFamily="inter"
          textAlign="justify"
          mt="1rem"
        >
          {details}
        </Text>
      </Box>
    </VStack>
  );
}

ExploreContent.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default ExploreContent;
