import {
  Card,
  VStack,
  Box,
  Text,
  Image,
  Divider,
  Flex,
  HStack,
  Button,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

function ProductCard({ image, name, details, price, altText }) {
  return (
    <Wrap spacing="2rem" justify="center">
      <WrapItem>
        <Card
          w="21rem"
          h="27rem" // Adjust the height as per your requirement
          boxShadow="2xl"
          borderRadius="30px"
          marginTop="50px"
          overflow="visible"
          display="flex"
          flexDirection="column"
          cursor="pointer"
          _hover={{ transform: "scale(1.05)" }}
          transition={{ duration: 10 }}
        >
          <Flex flexDir="column" h="100%" justifyContent="space-between">
            <VStack
              w="100%"
              p="1rem"
              justify="center"
              flex={1}
              spacing={4}
              align="center"
              marginBottom="-5rem"
            >
              <Image
                position="absolute"
                src={image}
                w="70%" // Adjust the width as per your requirement
                h="70%" // Adjust the height as per your requirement
                top="3rem"
                left="50%"
                transform="translate(-50%, -50%)" // Center the image
                filter="drop-shadow(1px 1px 16px rgba(0, 0, 0, .3))"
                alt={altText}
              />
              <Box mt="8rem">
                <Text textAlign="center" fontSize="20px" fontWeight="bold">
                  {name}
                </Text>
                <Text mt="1rem" textAlign="center">
                  {details}
                </Text>
              </Box>
              <Divider

              w="16.5rem"
                mt="4"
                borderWidth="1.5px"
                borderRadius="1rem"
              
              />
            </VStack>
            <HStack p="2rem" justifyContent="space-around" align="center">
              <Text fontSize="1.2rem">₱</Text>
              <Text fontSize="1.2rem">{price}</Text>
              <Divider orientation="vertical" h="50px" />
              <Button
                bg="#FFC700"
                size="md"
                fontWeight="light"
                _hover={{ opacity: 0.8 }}
              >
                Add to Cart
              </Button>
            </HStack>
          </Flex>
        </Card>
      </WrapItem>
    </Wrap>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default ProductCard;
