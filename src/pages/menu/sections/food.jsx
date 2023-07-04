import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { FoodModal } from "../components/FoodModal";
import { client,urlFor } from "../../../client";


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

function Food({ activeTab }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [food, setFood] = useState([])

  useEffect(() => {
    const token =
      "skC7esqEi6B0CSrHxGBpfJTU3mAVYd3FgnPuwBW1ZfCPvREVbO2SDlq0PIOhS1Yv4lloM7W0pKuc2wp9HnyYGufQJepH2Oshd5QcVqEyNFzCKzf3g36BmxVeZcQ9LnqcmebjpAyF3xWPBHBllmcrUNOzJnS804VjDdYFQxcvjFDXX2FBR02a";
    client
      .fetch(
        `*[_type == "food"]{
      _id,
      name,
      description,
      slug,
      price,
      image {asset -> {url}}
    }`,
    {
       headers: {
        Authorization: `Bearer ${token}`,
      },
    }
      )
      .then((data) => {
        console.log(data); // Check the value of data
        setFood(data);
      })
      .catch(console.error);
  }, []);


  const openModal = (food) => {
    setSelectedFood(food);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box padding="0 7rem">
      <Wrap spacing="4rem" justify="center">
        {food.map((item) => (
          <WrapItem key={item.slug.current} width="calc((90% - 10rem) / 3)">
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
                    src={urlFor(item.image).url()}
                    w="70%"
                    h="70%"
                    top="3rem"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    filter="drop-shadow(1px 1px 16px rgba(0, 0, 0, .3))"
                  />
                  <Box mt="8rem">
                    <Text textAlign="center" fontSize="20px" fontWeight="bold">
                      {item.name}
                    </Text>
                    <Text mt="1rem" textAlign="center">
                      {item.description}
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
      {isModalOpen && activeTab === "Food" && (
        <FoodModal onClose={closeModal} food={selectedFood} />
      )}
    </Box>
  );
}

Food.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

export default Food;
