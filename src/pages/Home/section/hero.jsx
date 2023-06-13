import { Flex,Box, Image , Text, VStack, Highlight, Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <Flex
      h="100vh"
      w="100%"
      position="fixed"
      bg="#262424"
      justifyContent="center"
      alignItems="center"
      top="0"
      bottom="0"
      left="0"
      right="0"
    >
      <Box>
        {/* background image */}
        <Image
          width="8rem"
          src="./src/assets/b1.png"
          position="fixed"
          left="70%"
          top="0"
          h="50rem"
          w="40rem"
          opacity="0.1"
          zIndex="-1"
        />
      </Box>
      <Box>
        {/* background image left */}
        <Image
          width="8rem"
          src="./src/assets/b1.png"
          position="absolute"
          right="70%"
          top="12"
          h="50rem"
          w="40rem"
          opacity="0.1"
          zIndex="-1"
        />
      </Box>
      {/* hero-image */}
      <Box>
        <Image
          src="./src/assets/hero-image.png"
          position="absolute"
          left="30%"
          top="30%"
        />
      </Box>
      {/* leaves1 bottom */}
      <Box>
        <Image
          src="./src/assets/leaves1.png"
          position="absolute"
          left="75%"
          top="64%"
          w="50%"
        />
      </Box>
      {/* leaves right */}
      <Box>
        <Image
          src="./src/assets/leaves2.png"
          position="absolute"
          top="15%"
          left="82%"
          w="20%"
          transform="rotate(150deg)"
          zIndex="-1"
        />
      </Box>
      {/* leaves left */}
      <Box>
        <Image
          src="./src/assets/leaves2.png"
          position="absolute"
          top="18%"
          left="44%"
          w="20%"
          transform="rotate(20deg)"
          zIndex="-1"
        />
      </Box>

      <Flex left="8%" top="20%" position="absolute" w="47rem">
        <VStack align="start" w={{ base: "100%", md: "55%" }}>
          <Text
            lineHeight="120px"
            color="white"
            fontSize="7rem"
            fontWeight="bold"
            fontFamily="Abril-Fatface"
          >
            <Highlight
              query="Home"
              styles={{
                color: "pallete.accent",
              }}
            >
              A Taste of Home
            </Highlight>
          </Text>
          <Text
            color="white"
            marginTop="10px"
            fontFamily="Inter"
            fontWeight="thin"
            fontSize="20px"
          >
            Indulge in Nostalgia with Every Scrumptious Bite.
          </Text>
          <Link to="/menu">
            <Button
              marginTop="10px"
              padding="20px 90px"
              borderRadius="15px"
              variant="ghost"
              borderColor="#FFC700"
              boxShadow="0 0 0 3px #FFC700"
              color="#FFC700"
              position="absolute"
              top="110%"
              fontFamily="Inter"
              fontWeight="light"
              _hover={{
                bg: "#FFC700",
                color: "white",
              }}
              _active={{
                bg: "#FFC700",
                color: "white",
              }}
            >
              Order Now
            </Button>
          </Link>
        </VStack>
      </Flex>
    </Flex>
  );
}
