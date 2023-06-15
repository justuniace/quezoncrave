import { Flex, Center } from "@chakra-ui/react";

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
      <Center h="100%">{/* Content of the footer */}</Center>
    </Flex>
  );
};
