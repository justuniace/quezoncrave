import {
  HStack,
  Flex,
  Box,
  Image,
  VStack,
  Text,
  Highlight,
} from "@chakra-ui/react";
import Food from "../../../../assets/hero/hero.svg";
//import { BiBowlHot } from "react-icons/bi";
import { SlMagnifier } from "react-icons/sl";
import { FaOpencart } from "react-icons/fa";
import CustomButton from "../../../components/buttons";
import Pepper from "../../../../assets/hero/pepper.svg";
import L1 from "../../../../assets/hero/leaves1.webp";
import L2 from "../../../../assets/hero/pngwing.png";
import Bg from "../../../../assets/hero/b1.webp";
export default function Hero() {
  return (
    <Flex
      h="100vh"
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
      <Box>
        <Image
          src={Food}
          position="absolute"
          left="55%"
          top="20%"
          w="40rem"
          zIndex="1"
        />
      </Box>
      <Box>
        <Image
          src={Pepper}
          position="absolute"
          top="15%"
          left="42%"
          w="40%"
          //  opacity="0.9"
          //transform="rotate(30deg)"
        />
      </Box>
      <Box>
        <Image
          src={L1}
          position="absolute"
          left="68%"
          top="60%"
          w="30%"
          transform="rotate(-30deg)"
          //  zIndex="2"
        />
      </Box>
      <Box>
        <Image
          src={L2}
          position="absolute"
          w="20%"
          left="60%"
          bottom="50%"
          transform="rotate(-80deg)"
          // zIndex={2}
        />
      </Box>
      <Box>
        <Image
          src={L2}
          position="absolute"
          w="20%"
          left="78%"
          bottom="30%"
          transform="rotate(10deg)"
          zIndex={2}
        />
      </Box>
      <Flex left="8%" top="24%" position="absolute" w="60rem">
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
