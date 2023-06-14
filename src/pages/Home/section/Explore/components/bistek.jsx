import { Box, HStack } from "@chakra-ui/react";
import ExploreContent from "./ExploreContent";

function Bistek() {
  return (
    <HStack alignItems="center">
      <Box position="relative" w="90%" justifyContent="center" left="9%">
        <Box position="absolute" mt="6rem">
          <img
            src="https://drive.google.com/uc?export=view&id=1KCyPj9x2ovMt1BH9FfUQQ5Erv5_9Xj51"
            alt="Circle"
            style={{ width: "100%" }}
          />
        </Box>
        <Box position="relative" zIndex={1} mt="-0.5rem" left="12px">
          <img
            src="https://drive.google.com/uc?export=view&id=1wDqCru67n3hWtp3sLd4IWJlwiLqT-mle"
            alt="Bistek"
          />
        </Box>
      </Box>
      <ExploreContent
        title="Bistek Tagalog"
        details="Lorem ipsum dolor sit amet. Sed laudantium veniam ea dolorum alias aut voluptates dolore qui labore enim nam accusantium incidunt ad harum saepe."
      />
     
    </HStack>
  );
}

export default Bistek;
