import { Box, Text, VStack } from "@chakra-ui/react";

import breakPoints from "../../theme/breakpoints"

function Recipe1() {
 
  return (
    <Box w={breakPoints} margin="auto" paddingBlockStart="12rem">
      <Box maxW="60rem" margin="auto">
        <Text fontWeight="bold" fontFamily="inter" fontSize="1.2rem">
          Privacy Policy for Quezon Crave
        </Text>
        <VStack gap="1rem" marginTop="2rem">
          <Text>
            This Privacy Policy governs the manner in which Quezon Crave
            collects, uses, maintains, and discloses information collected from
            users of the https://quezon.vercel.app/
            This Privacy Policy applies to the
            Site and all products and services offered by Quezon Crave.
          </Text>
          </VStack>
      </Box>
    </Box>
  );
}

export default Recipe1;
