import {
  Flex,
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Highlight,
 
} from "@chakra-ui/react";

import CustomButton from "../../../components/buttons";
import { SlMagnifier } from "react-icons/sl";
import { FaOpencart } from "react-icons/fa";
//import { BiBowlHot } from "react-icons/bi";
import L1 from "../../../../assets/hero/leaves1.webp";
import L2 from "../../../../assets/hero/leaves2.webp";
import Pork from "../../../../assets/hero/hero.svg";
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
          left="50%"
          top="0"
          h="50rem"
          w="40rem"
          opacity="0.1"
        />
      </Box>
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
          top="25%"
          left="78%"
          w="20%"
          transform="rotate(150deg)"
        />
      </Box>
      {/* leaves left */}
      <Box>
        <Image
          src={L2}
          position="absolute"
          top="16%"
          left="45%"
          w="20%"
          transform="rotate(20deg)"
          zIndex=""
        />
      </Box>

      {/* hero-image */}
      <Box>
        <Image
          src={Pork}
          position="absolute"
          left="50%"
          top="5%"
          w="75rem"
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
      <Flex left="10%" top="24%" position="absolute" w="60rem">
        <VStack align="start" w={{ base: "100%", md: "55%" }}>
          <Text
            lineHeight="120px"
            color="white"
            fontSize="6rem"
            fontWeight="semi-bold"
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
          </Text>
          <Box w="30rem">
            <Text
              color="white"
              marginTop="30px"
              fontFamily="inter"
              fontWeight="medium"
              fontSize="18px"
            >
              Delight Your Palate with Quezon`s Finest. {""}
              {/* <Icon as={BiBowlHot} /> */}
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
