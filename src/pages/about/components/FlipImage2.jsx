import { useState } from "react";
import laing from "../../../assets/Blog/laing.webp";
import { Card, Flex, VStack, Box, Text, Button } from "@chakra-ui/react";
import LaingModal from "../modals/laingModal";
function FlipImageCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card
        w="21rem"
        h="27rem"
      
        bg="gray.200"
        boxShadow="l"
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
          <VStack spacing={6}>
            <Box>
              <img
                src={laing}
                style={{
                  width: "300px",
                  height: "280px",
                  borderRadius: "10px",
                  marginTop: "5px",
                  marginRight: "5px",
                  marginBottom: "5px",
                  marginLeft: "5px",
                }}
              />
            </Box>
            <Text fontWeight="semibold" fontSize="20px">
              Laing
            </Text>
            <Button onClick={toggleModal} bg="#FFC700">
              Recipe
            </Button>
          </VStack>
        </Flex>
      </Card>
      <LaingModal
        isOpen={isModalOpen}
        onClose={closeModal}
        toggleModal={toggleModal}
      />
    </>
  );
}

export default FlipImageCard;
