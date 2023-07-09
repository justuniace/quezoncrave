import { Box, HStack } from "@chakra-ui/react";
import ExploreContent from "./ExploreContent";
import Ellipse from "../../../../../assets/explore/explore-ellipse.webp";
import Steak from "../../../../../assets/explore/steak.webp";

function Bistek() {
  return (
    <HStack alignItems="center">
      <Box position="relative" w="90%" justifyContent="center" left="9%">
        <Box position="absolute" mt="6rem">
          <img src={Ellipse} alt="Circle" style={{ width: "100%" }} />
        </Box>
        <Box position="relative" zIndex={1} mt="-0.5rem" left="12px">
          <img src={Steak} alt="Bistek" />
        </Box>
      </Box>
      <Box ml="18px">
        <ExploreContent
          title="Bistek Tagalog"
          details="Lorem ipsum dolor sit amet. Sed laudantium veniam ea dolorum alias aut voluptates dolore qui labore enim nam accusantium incidunt ad harum saepe."
          //"Bistek Tagalog is made of thinly sliced sirloin braised in a mixture of citrus, soy sauce, onions, and garlic. This Filipino beef steak is hearty, tasty, and perfect with steamed rice."
        />
      </Box>
    </HStack>
  );
}

export default Bistek;
