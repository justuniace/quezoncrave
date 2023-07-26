import { Box, HStack } from "@chakra-ui/react";
import ExploreContent from "./ExploreContent";
import Ellipse from "../../../../../assets/explore/explore-ellipse.webp";
import Coconut from "../../../../../assets/explore/coconut-water.webp";
import { Reveal } from "../../../../components/Observer/useObserver";

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
          <Reveal width="fit-content">
            <img src={Ellipse} alt="Circle" style={{ width: "100%" }} />
          </Reveal>
        </Box>
        <Box w="35rem" position="relative" zIndex={1} mt="5rem" left="-51px">
          <Reveal width="fit-content">
            <img src={Coconut} alt="Buko Juice" />
          </Reveal>
        </Box>
      </Box>
      <Box mt="-12em" ml="10rem">
        <ExploreContent
          title="Buko Juice"
          details="A taste of the countryside. Buko Juice is a drink that feels like a refreshing stop from a hike in the mountain in Quezon! A refreshment straight from the palm trees! if it's what you want experience such nostalgic feelings, Buko Juice is the best!."

          //"Buko Juice is a simple refreshing and very healthy mixture of young coconut water, young coconut meat, and milk."
        />
      </Box>
    </HStack>
  );
}

export default BukoJuice;
