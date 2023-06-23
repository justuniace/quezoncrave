// Beverages.js
import { useState } from "react";
import PropTypes from "prop-types";
import { BeveragesList } from "../ItemList/beverageList";
import { BeveragesModal } from "../components/BeveragesModal";
import {
  Box,
  Wrap,
  WrapItem,
  Card,
  VStack,
  Text,
  Image,
  Divider,
  Flex,
  HStack,
  Button,
} from "@chakra-ui/react";

function Beverages({activeTab}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

 const openModal = () => {
   setIsModalOpen(true);
 };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box padding="0 7rem">
      <Wrap spacing="4rem" justify="center">
        {BeveragesList.map((item, key) => (
          <WrapItem key={key} width="calc((90% - 10rem) / 3)">
            <Card
              w="100%"
              h="29rem"
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
                    src={item.image}
                    w="70%"
                    h="70%"
                    top="3rem"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    filter="drop-shadow(1px 1px 16px rgba(0, 0, 0, .3))"
                    alt={item.altText}
                  />
                  <Box mt="8rem">
                    <Text textAlign="center" fontSize="20px" fontWeight="bold">
                      {item.name}
                    </Text>
                    <Text mt="1rem" textAlign="center">
                      {item.details}
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
                  <Text fontSize="1.2rem">{item.price}</Text>
                  <Divider orientation="vertical" h="50px" />
                  <Button
                    bg="#FFC700"
                    size="md"
                    fontWeight="light"
                    _hover={{ opacity: 0.8 }}
                    onClick={() => openModal(item)}
                  >
                    Add to Cart
                  </Button>
                </HStack>
              </Flex>
            </Card>
          </WrapItem>
        ))}
      </Wrap>
      {isModalOpen && activeTab === "Beverages" && (
        <BeveragesModal onClose={closeModal} />
      )}
    </Box>
  );
}

Beverages.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

export default Beverages;
