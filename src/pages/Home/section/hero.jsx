import { Flex,Box, Image , Text, VStack, Highlight, Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <Flex
      h="103vh"
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
        {/* background image */}
        <Image
          width="8rem"
          src="./src/assets/b1.png"
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
          src="./src/assets/b1.png"
          position="absolute"
          right="70%"
          top="12"
          h="50rem"
          w="40rem"
          opacity="0.1"
        />
      </Box>
      {/* leaves right */}
      <Box>
        <Image
          src="./src/assets/leaves2.png"
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
          src="./src/assets/leaves2.png"
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
          src="./src/assets/hero-image.png"
          position="absolute"
          left="32%"
          top="30%"
          w="70rem"
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
          zIndex="1"
        />
      </Box>

      {/* Hero Text */}
      <Flex left="8%" top="20%" position="absolute" w="56rem">
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

          <Box w="20rem">
            <Text
              color="white"
              marginTop="30px"
              fontFamily="Inter"
              fontWeight="thin"
              fontSize="20px"
            >
              Indulge in Nostalgia with Every Scrumptious Bite.
            </Text>
          </Box>

          <Link to="/menu">
            <Button
              marginTop="30px"
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
