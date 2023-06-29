import {
  Flex,
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Highlight,
  Icon,
} from "@chakra-ui/react";

import CustomButton from "../../../components/buttons";
import { SlMagnifier } from "react-icons/sl";
import { FaOpencart } from "react-icons/fa";
import { BiBowlHot } from "react-icons/bi";
import L1 from "../../../../assets/hero/leaves1.webp";
import L2 from "../../../../assets/hero/leaves2.webp";
import Pork from "../../../../assets/hero/hero-image.webp";
import Bg from "../../../../assets/hero/b1.webp";

export default function Hero() {
  return (
    <Flex
      h="100%"
      w="100%"
      position="relative"
      bg="#262424"
      justifyContent="center"
      alignItems="center"
      top="0"
      bottom="0"
      left="0"
      right="0"
    >
      <Box>
        {/* background image right*/}
        <Image
          width="8rem"
          src={Bg}
          position="relative"
          left="70%"
          top="0"
          h="50rem"
          w="40rem"
          opacity="0.1"
        />
      </Box>
      <Box>
        {/* background image left */}
        <Image
          width="8rem"
          src={Bg}
          position="absolute"
          right="63%"
          top="12"
          h="50rem"
          w="40rem"
          opacity="0.1"
        />
      </Box>
      {/* leaves right */}
      <Box>
        <Image
          src={L2}
          position="absolute"
          top="12%"
          left="82%"
          w="20%"
          transform="rotate(120deg)"
        />
      </Box>
      {/* leaves left */}
      <Box>
        <Image
          src={L2}
          position="absolute"
          top="16%"
          left="40%"
          w="20%"
          transform="rotate(30deg)"
        />
      </Box>
      {/* hero-image */}
      <Box>
        <Image
          src={Pork}
          position="absolute"
          left="32%"
          top="30%"
          w="70rem"
          zIndex="1"
        />
      </Box>
      {/* leaves1 bottom */}
      <Box>
        <Image
          src={L1}
          position="absolute"
          left="72%"
          top="64%"
          w="50%"
          zIndex="2"
        />
      </Box>

      {/* Hero Text */}
      <Flex left="8%" top="24%" position="absolute" w="60rem">
        <VStack align="start" w={{ base: "100%", md: "55%" }}>
          <Text
            lineHeight="120px"
            color="white"
            fontSize="6rem"
            fontWeight="bold"
            fontFamily="Abril-Fatface"
          >
            <Highlight
              query="Cravings."
              styles={{
                color: "#FFC700",
              }}
            >
              Satisfy Your Cravings.
            </Highlight>

            {/* <span style={{ color: "white" }}>A Taste of</span>{" "}
            <span style={{ color: "#FFC700" }}>Ho</span>
            <Box display="inline-block" position="relative" top="10px">
              <Icon as={HiHome} boxSize={20} color="pallete.accent" />
            </Box>
            <span style={{ color: "#FFC700" }}>e</span> */}
          </Text>
          <Box w="20rem">
            <Text
              color="white"
              marginTop="30px"
              fontFamily="inter"
              fontWeight="thin"
              fontSize="20px"
            >
              Delight Your Palate with Quezon`s Finest {""}
              <Icon as={BiBowlHot} />
            </Text>
          </Box>
          <Box mt="50px" zIndex={1}>
            <HStack spacing="15rem">
              <CustomButton
                icon={<FaOpencart />}
                buttonText="Order Now!"
                buttonLink="/menu"
                width="13rem"
              />
              <CustomButton
                icon={<SlMagnifier />}
                buttonLink="/blog"
                buttonText="Explore"
                hasBorder={false}
                isYellowButton={true}
                width="13rem"
              />
            </HStack>
          </Box>
        </VStack>
      </Flex>
    </Flex>
  );
}
