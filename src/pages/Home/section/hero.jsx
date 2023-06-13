import { Flex,Box, Image , Text, VStack, Highlight} from "@chakra-ui/react";

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
        <Image
          transition="all .3s ease"
          width="8rem"
          borderRadius="1rem"
          src="./src/assets/b1.png"
          position="fixed"
          left="70%"
          top="0"
          h="50rem"
          w="40rem"
          opacity="0.3"
          zIndex="-1"
        />
      </Box>
      {/* hero-image */}
      <Box>
        <Image
          src="./src/assets/hero-image.png"
          position="absolute"
          left="20%"
          top="30%"
        />
      </Box>
      {/* leaves1 */}
      <Box>
        <Image
          src="./src/assets/leaves1.png"
          position="absolute"
          left="70%"
          top="64%"
          w="50%"
        />
      </Box>
      <Box>
        <Image
          src="./src/assets/leaves2.png"
          position="absolute"
          top="15%"
          left="80%"
          w="20%"
          transform="rotate(150deg)"
          zIndex="-1"
        />
      </Box>
      <Box>
        <Image
          src="./src/assets/leaves2.png"
          position="absolute"
          top="15%"
          left="40%"
          w="20%"
          transform="rotate(15deg)"
          zIndex="-1"
        />
      </Box>

      <Flex 
      left="8%"
      top="30%"
      position="absolute" 
      >
        <VStack
          align="start"
          w={{ base: "100%", md: "55%" }}
        >
          <Text
          fontSize="50">
            <Highlight
              query="HOME"
              styles={{
                color: "pallete.accent",              
              }}
            >
              A Taste of HOME
            </Highlight>
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
}
