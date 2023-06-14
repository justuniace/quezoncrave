import { Box, HStack } from "@chakra-ui/react";
import ExploreContent from "./ExploreContent";

function Nilupak() {
  return (
    <HStack alignItems="center">
      <Box
        position="relative"
        w="90%"
        justifyContent="center"
        left="45rem"
        top="-15rem"
      >
        <Box position="absolute" mt="6rem">
          <img
            src="https://drive.google.com/uc?export=view&id=1KCyPj9x2ovMt1BH9FfUQQ5Erv5_9Xj51"
            alt="Circle"
            style={{ width: "100%" }}
          />
        </Box>
        <Box w="25rem"position="relative" zIndex={1} mt="-0.3rem" left="26px">
          <img
            src="https://drive.google.com/uc?export=view&id=1fXRufRjGzlpLfSmG7jIsKHMJYh4ZWKm4"
            alt="Nilupak"
          />
        </Box>
      </Box>
      <Box w="100%" mt="-21rem" ml="-40rem">
  
        <ExploreContent
          title="Nilumpak/Niyubak"
          details="Lorem ipsum dolor sit amet. Sed laudantium veniam ea dolorum alias aut voluptates dolore qui labore enim nam accusantium incidunt ad harum saepe."
        />
      </Box>
    </HStack>
  );
}

export default Nilupak;
