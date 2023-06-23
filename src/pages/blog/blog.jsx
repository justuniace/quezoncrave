
import { Box,Center, Text, VStack } from "@chakra-ui/react";

export const Blog = () => {
  return (
    <Box w="100%" h="auto">
      <Center>
        <VStack>
          <Text
            top="150"
            position="absolute"
            fontSize="30px"
            fontWeight="semibold"
            justifyContent="center"
            alignItems="center"
            fontFamily="Abril-Fatface"
          >
            Lorem Ipsum
          </Text>
          <Box mt="200" w="30rem" textAlign="center">
            <Text fontWeight="light" fontSize="14px">
              Lorem ipsum dolor sit amet. Sed laudantium veniam ea dolorum alias
              aut voluptates dolore quiLorem ipsum dolor sit amet.
            </Text>
          </Box>
        </VStack>
      </Center>
    </Box>
  );
};
