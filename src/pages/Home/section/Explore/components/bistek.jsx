import { Box, HStack } from "@chakra-ui/react";
import ExploreContent from "./ExploreContent";
import Ellipse from "../../../../../assets/explore/explore-ellipse.webp";
import Steak from "../../../../../assets/explore/steak.webp";
import { Reveal } from "../../../../components/Observer/useObserver";


function Bistek() {
  return (
    <HStack alignItems="center">
      <Box position="relative" w="90%" justifyContent="center" left="9%">
        <Box position="absolute" mt="6rem">
          <Reveal width="fit-content">
            <img src={Ellipse} alt="Circle" style={{ width: "100%" }} />
          </Reveal>
        </Box>
        <Box position="relative" zIndex={1} mt="-0.5rem" left="12px">
          <Reveal width="fit-content">
            <img src={Steak} alt="Bistek" />
          </Reveal>
        </Box>
      </Box>
      <Box ml="18px">
        <ExploreContent
          title="Bistek Tagalog"
          details="A dish taste like home, Bistek Tagalog with its tender and flavorful meat. A taste home cooked that makes you feel at ease after a tiring day at work or school and you just want to rest  "
          //"Bistek Tagalog is made of thinly sliced sirloin braised in a mixture of citrus, soy sauce, onions, and garlic. This Filipino beef steak is hearty, tasty, and perfect with steamed rice."
        />
      </Box>
    </HStack>
  );
}

export default Bistek;
