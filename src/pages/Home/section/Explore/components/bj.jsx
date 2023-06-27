import { Box, HStack } from "@chakra-ui/react";
import ExploreContent from "./ExploreContent";
import Ellipse from "../../../../../assets/explore/explore-ellipse.webp";
import Coconut from "../../../../../assets/explore/coconut-water.webp";

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
          <img src={Ellipse} alt="Circle" style={{ width: "100%" }} />
        </Box>
        <Box w="35rem" position="relative" zIndex={1} mt="5rem" left="-51px">
          <img src={Coconut} alt="Buko Juice" />
        </Box>
      </Box>
      <Box mt="-12em" ml="18px">
        <ExploreContent
          title="Buko Juice"
          details="Lorem ipsum dolor sit amet. Sed laudantium veniam ea dolorum alias aut voluptates dolore qui labore enim nam accusantium incidunt ad harum saepe."
        />
      </Box>
    </HStack>
  );
}

export default BukoJuice;
