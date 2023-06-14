import {
  Flex,
  Box,
  Image,
  Text,
  VStack,
  Highlight

} from "@chakra-ui/react";

import CustomButton from "../../../components/buttons";
export default function Hero() {
  return (
    <Flex
      h="105vh"
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
          src="https://drive.google.com/uc?export=view&id=1dOOjY4uLDWFUQfGjIW90Ws0sdl16EnvW"
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
          src="https://drive.google.com/uc?export=view&id=1dOOjY4uLDWFUQfGjIW90Ws0sdl16EnvW"
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
          src="https://drive.google.com/uc?export=view&id=1COkxwrhf8iCrF5XosqAN8CGLKwTZa0y6"
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
          src="https://drive.google.com/uc?export=view&id=1COkxwrhf8iCrF5XosqAN8CGLKwTZa0y6"
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
          src="https://drive.google.com/uc?export=view&id=1NDWrdQk6B-fzBB582-wUVwj6bxZ9QDEH"
          position="absolute"
          left="32%"
          top="30%"
          w="70rem"
        />
      </Box>
      {/* leaves1 bottom */}
      <Box>
        <Image
          src="https://drive.google.com/uc?export=view&id=14jD0wyMU5pQ5hPmAlODGtlExu8k8sNcn"
          position="absolute"
          left="72%"
          top="64%"
          w="50%"
          zIndex="1"
        />
      </Box>

      {/* Hero Text */}
      <Flex left="8%" top="24%" position="absolute" w="56rem">
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

          <Box mt="50px">
            <CustomButton buttonText="Order Now" buttonLink="/menu" />
          </Box>
        </VStack>
      </Flex>
    </Flex>
  );
}
