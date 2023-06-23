import { Flex, Box, Wrap, VStack } from "@chakra-ui/react";
import Title from "../../../components/Titles";
import Bistek from "./components/bistek";
import Nilupak from "./components/nilupak";
import BukoJuice from "./components/bj";
import CustomButton from "../../../components/buttons";

function Explore() {
  return (
    <Flex className="explore" h="100vh" w="100%" position="absolute">
      <Box
        h="242vh"
        bg="white"
        w="100%"
        backgroundImage="https://drive.google.com/uc?export=view&id=1xUnGklxZ0BlUP4IkoNgD4AMfcmZCAvQp"
        backgroundSize="cover"
      >
        <Box mt="10%" zIndex="1" pos="relative">
          <Title title="Explore Our Best Menu" />
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
              <img
                style={{ width: "30rem" }}
                src="https://drive.google.com/uc?export=view&id=1tzpdDamRErSIMLuV10ckbyf0-GXA08T6"
              />
            </Box>
            <Nilupak />
            <Box
              style={{
                marginTop: "-28rem",
                marginLeft: "1%",
                transform: "rotate(-10deg)",
              }}
            >
              <img
                style={{ width: "35rem" }}
                src="https://drive.google.com/uc?export=view&id=1QUaSOkUtOMs2uxWM3GxUoVvPl09w0Lky"
              />
            </Box>
            <BukoJuice />
          </VStack>
          <Box ml="72rem" mt="5rem">
            <CustomButton
              buttonText="See Menu"
              buttonLink="/menu"
              isBlackButton={true}
            />
          </Box>
        </Wrap>
      </Box>
    </Flex>
  );
}

export default Explore;
