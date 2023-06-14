import { Box, HStack } from "@chakra-ui/react";
import ExploreContent from "./ExploreContent";

function BukoJuice() {
  return (
    <HStack alignItems="center">
      <Box
        position="relative"
        w="90%"
        justifyContent="center"
        mt="-20rem"
        left="9%"
      >
        <Box position="absolute" mt="6rem">
          <img
            src="https://drive.google.com/uc?export=view&id=1KCyPj9x2ovMt1BH9FfUQQ5Erv5_9Xj51"
            alt="Circle"
            style={{ width: "100%" }}
          />
        </Box>
        <Box w="35rem" position="relative" zIndex={1} mt="5rem" left="-51px">
          <img
            src="https://drive.google.com/uc?export=view&id=1_BYJPY2Uhd0jM7nGEL3qvPibuhonHdrL"
            alt="Buko Juice"
          />
        </Box>
      </Box>
      <Box mt="-12em" ml="-8rem">
        <ExploreContent
          title="Bistek Tagalog"
          details="Lorem ipsum dolor sit amet. Sed laudantium veniam ea dolorum alias aut voluptates dolore qui labore enim nam accusantium incidunt ad harum saepe."
        />
      </Box>
    </HStack>
  );
}

export default BukoJuice;
