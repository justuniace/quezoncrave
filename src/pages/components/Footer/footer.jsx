import { Flex, Center, VStack, Image, Text, Box } from "@chakra-ui/react";
import Logo from "/logo.webp";
import ft from "../../../assets/footer.webp";
import Spoon from "../../../assets/footer-img.webp";

export const Footer = () => {
  return (
    <Flex
      className="Footer"
      w="100%"
      h="100vh"
      backgroundImage={ft}
      backgroundSize="cover"
      backgroundPosition="center"
      position="absolute"
    >
      <Center h="100%">
        <VStack ml="7rem" mt="12rem" align="start">
          <Box w="10rem" h="10rem" marginLeft="2rem" marginTop="10rem">
            <Image src={Logo} alt="Logo" />
          </Box>
          <Box
            w="20rem"
            marginLeft="2.9rem"
            marginTop="-3rem"
            fontWeight="300"
            fontFamily="Inter"
          >
            <Text color="white">
              Lorem ipsum dolor sit amet. Sed laudantium veniam ea dolorum
            </Text>
          </Box>
        </VStack>
      </Center>
      <Image
        src={Spoon}
        transform="rotate(180deg)"
        ml="50rem"
        pos="absolute"
        mt="-20"
        zIndex={1}
        w="60rem"
        h="50rem"
      />
    </Flex>
  );
};
