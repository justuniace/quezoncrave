import { Flex, Center, VStack , Image,Text,Box} from "@chakra-ui/react";
import Logo from "/logo.webp"
export const Footer = () => {
  const backgroundImageUrl =
    "url(https://drive.google.com/uc?export=view&id=1D-d8rAye8tmo3NRtu86Rp-DZ2DxRLY-U)";

  return (
    <Flex
      className="Footer"
      w="100%"
      h="70vh"
      backgroundImage={backgroundImageUrl}
      backgroundSize="cover"
      backgroundPosition="center"
      position="absolute"
    >
      <Center h="100%">
        <VStack ml="7rem" mt="12rem" align="start">
          <Box w="10rem" h="10rem" marginLeft="2rem" marginTop="-1rem">
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
    </Flex>
  );
};
