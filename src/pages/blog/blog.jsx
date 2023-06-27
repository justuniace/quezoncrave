import BlogCarousel  from "./components/carousel";
import { Box, Center, Highlight, Text, VStack, Image } from "@chakra-ui/react";
import Brush from "../../assets/brush.svg";

export const Blog = () => {
  return (
    <Box w="100%" h="auto">
      <Center>
        <VStack>
          <Box>
            <Text
              top="170"
              position="relative"
              fontSize="50px"
              fontWeight="semibold"
              justifyContent="center"
              alignItems="center"
              fontFamily="Abril-Fatface"
            >
              <Highlight
                query="Home"
                styles={{
                  color: "#FFC700",
                }}
              >
                A Taste of Home
              </Highlight>
            </Text>
          </Box>
          <Box ml="14rem" mt="9rem" w="9rem">
            <Image src={Brush} />
          </Box>
        </VStack>
      </Center>
      <BlogCarousel />
    </Box>
  );
};
