import { Box, HStack } from "@chakra-ui/react";
import ExploreContent from "./ExploreContent";
import Ellipse from "../../../../../assets/explore/explore-ellipse.webp";
import Niyubak from "../../../../../assets/explore/nilupak.webp";
import { Reveal } from "../../../../components/Observer/useObserver";


function Nilupak() {
  return (
    <HStack alignItems="center">
      <Box
        position="relative"
        w="90%"
        justifyContent="center"
        left="55rem"
        top="-15rem"
      >
        <Box position="absolute" mt="6rem">
          <Reveal width="fit-content">
            <img src={Ellipse} alt="Circle" style={{ width: "100%" }} />
          </Reveal>
        </Box>
        <Box w="25rem" position="relative" zIndex={1} mt="-0.3rem" left="26px">
          <Reveal width="fit-content">
            <img src={Niyubak} alt="Nilupak" />
          </Reveal>
        </Box>
      </Box>
      <Box w="100%" mt="-21rem" ml="-60rem">
        <ExploreContent
          title="Nilupak/Niyubak"
          details="A sweet that feels like a day in the barrio, a stop from the busy streets municipality. A dessert that can be a staple from anything! If a taste like your childhood is what you desire, Nilupak/Niyubak is your stop for desserts!."
          //"Nilupak is a class of traditional Filipino delicacies made from mashed or pounded starchy foods mixed with coconut milk (or condensed milk and butter) and sugar. They are molded into various shapes and traditionally served on banana leaves with toppings of grated young coconut (buko), various nuts, cheese, butter, or margarine."
        />
      </Box>
    </HStack>
  );
}

export default Nilupak;
