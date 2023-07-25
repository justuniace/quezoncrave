import { Flex, Box, Wrap, VStack,useMediaQuery } from "@chakra-ui/react";
import Title from "../../../components/Titles";
import Bistek from "./components/bistek";
import Nilupak from "./components/nilupak";
import BukoJuice from "./components/bj";
import CustomButton from "../../../components/buttons";
import B1 from "../../../../assets/explore/explore.webp";
import F1 from "../../../../assets/explore/firstArrow.webp";
import F2 from "../../../../assets/explore/secondArrow.webp";

import { TfiBook } from "react-icons/tfi";

function Explore() {

 const [isMobile] = useMediaQuery("(max-width: 767px)");

  return (
    <Flex top="-15rem" className="explore" w="100%" position="relative">
      <Box
        h="242vh"
        bg="white"
        w="100%"
        backgroundImage={B1}
        backgroundSize="cover"
      >
        <Box mt="10rem" zIndex="2" pos="relative">
          <Title fontSize={isMobile ? "20px" : "30px"} title="Popular Dishes" />
        </Box>
        <Wrap w="100%">
          <VStack>
            <Bistek />
            <Box
              style={{
                marginTop: "-10rem",
                marginLeft: "2%",
                transform: "rotate(25deg)",
              }}
            >
              <img style={{ width: "30rem" }} src={F1} />
            </Box>
            <Nilupak />
            <Box
              style={{
                marginTop: "-28rem",
                marginLeft: "1%",
                transform: "rotate(-10deg)",
              }}
            >
              <img style={{ width: "35rem" }} src={F2} />
            </Box>
            <BukoJuice />
          </VStack>
          <Box ml="72rem" mt="5rem">
            <CustomButton
              icon={<TfiBook />}
              buttonText="See Menu"
              buttonLink="/menu"
              isYellowButton={true}
            />
          </Box>
        </Wrap>
      </Box>
    </Flex>
  );
}

export default Explore;
