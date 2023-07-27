import {
  Flex,
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Highlight,
  useMediaQuery,
} from "@chakra-ui/react";

import CustomButton from "../../../components/buttons";
import { SlMagnifier } from "react-icons/sl";
import { FaOpencart } from "react-icons/fa";
//import { BiBowlHot } from "react-icons/bi";
import L1 from "../../../../assets/hero/leaves1.webp";
import L2 from "../../../../assets/hero/leaves2.webp";
import Pork from "../../../../assets/hero/hero.svg";
import Bg from "../../../../assets/hero/b1.webp";
// import { motion } from "framer-motion";
//import {Reveal} from "../../../components/Observer/useObserver"

export default function Hero() {
  const [isMobileScreen] = useMediaQuery("(max-width: 40em)");

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
        {/* background image right*/}
      <Box>
      
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
          top={isMobileScreen ? "16%" : "25%"}
          left={isMobileScreen ? "80%" : "78%"}
          w="20%"
          transform="rotate(150deg)"
        />
      </Box>
      {/* leaves left */}
      <Box>
        <Image
          src={L2}
          position="absolute"
          top={isMobileScreen ? "23%" : "16%"}
          left={isMobileScreen ? "59%" : "45%"}
          w={isMobileScreen ? "20%" : "20%"}
          transform="rotate(20deg)"
          zIndex=""
        />
      </Box>

      {/* hero-image */}
      {/* <Reveal width="fit-content"> */}
      <Box w={isMobileScreen ? "13rem" : ""}>
        <Image
          src={Pork}
          position="absolute"
          left={isMobileScreen ? "60%" : "50%"}
          top={isMobileScreen ? "16%" : "5%"}
          w={isMobileScreen ? "15rem" : "75rem"}
          zIndex="1"
        />
      </Box>
      {/* </Reveal> */}
      {/* leaves1 bottom */}
      <Box>
        <Image
          src={L1}
          position="absolute"
          left={isMobileScreen ? "80%" : "72%"}
          top={isMobileScreen ? "28%" : "64%"}
          w={isMobileScreen ? "36%" : "50%"}
          zIndex="2"
        />
      </Box>

      {/* Hero Text */}
      <Flex
        left="10%"
        top={isMobileScreen ? "15%" : "24%"}
        position="absolute"
        w="40rem"
      >
        <VStack align="start" w={{ base: "100%", md: "55%" }}>
          <Box w={isMobileScreen ? "10rem" : "40rem"}>
            <Text
              lineHeight={isMobileScreen ? "2rem" : "120px"}
              color="white"
              fontSize={isMobileScreen ? "2rem" : "6rem"}
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
          </Box>

          <Box w={isMobileScreen ? "10rem" : "30rem"}>
            <Text
              color="white"
              marginTop={isMobileScreen ? "45px" : "30px"}
              fontFamily="inter"
              fontWeight="medium"
              fontSize={isMobileScreen ? "12px" : "18px"}
            >
              Delight Your Palate with Quezon`s Finest. {""}
              {/* <Icon as={BiBowlHot} /> */}
            </Text>
          </Box>
          <Box mt="50px" zIndex={1}>
            <HStack spacing={isMobileScreen ? "10rem" : "15rem"}>
              <CustomButton
                icon={<FaOpencart />}
                buttonText="Order Now!"
                buttonLink="/menu"
                width={isMobileScreen ? "10rem" : "13rem"}
              />
              <CustomButton
                icon={<SlMagnifier />}
                buttonLink="/blog"
                buttonText="Explore"
                hasBorder={false}
                isYellowButton={true}
                width={isMobileScreen ? "1.2rem" : "13rem"}
              />
            </HStack>
          </Box>
        </VStack>
      </Flex>
    </Flex>
  );
}
