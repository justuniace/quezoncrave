import {
  VStack,
  HStack,
  Text,
  Image,
  Flex,
  Box,
  Center,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { urlFor } from "../../../client";
import PropTypes from "prop-types";

import { BiCartDownload } from "react-icons/bi";

export function Cart({ cartItems }) {
 const calculateTotalAmount = () => {
   let total = 0;

   cartItems.forEach((item) => {
     const { food, beverages, dessert, quantity } = item;
     const details = food || beverages || dessert;

     if (
       details &&
       typeof details.price === "number" &&
       typeof quantity === "number"
     ) {
       total += details.price * quantity;
     }
   });

   return total;
 };



  return (
    <VStack w="100%" h="100%" p="1rem" gap="1rem">
      {cartItems.length > 0 ? (
        cartItems.map((item) => {
          const { food, beverages, dessert, quantity, size } = item;
          const details = food || beverages || dessert;

          if (!details || quantity === undefined) {
            return null;
          }

          const { name, image, price } = details;

          return (
            <HStack
              key={item.id}
              w="100%"
              p=".5rem 1rem"
              bg="white"
              borderRadius=".5em"
              justifyContent="space-between"
              align="center"
            >
              <Box w="6rem" mb="1">
                <Image src={urlFor(image).url()} />
              </Box>
              <VStack spacing="1">
                <HStack justifyContent="space-between" w="20rem">
                  <Text ml="1rem" fontSize="1rem" fontWeight="bold">
                    {name}
                  </Text>
                  <DeleteIcon
                    cursor="pointer"
                    color="#FFC700"
                    // onClick={() => handleDelete(item.id)}
                  />
                </HStack>
                <Text mr="14rem" fontWeight="light" fontSize="12px" w="5rem">
                  {size || ""}
                </Text>
                <HStack w="100%">
                  <Flex align="baseline">
                    <Text ml="1rem" fontSize="1.2rem" fontWeight="bold">
                      ₱
                    </Text>
                    <Text ml="0.5rem" fontSize="1.2rem" fontWeight="bold">
                      {price}
                    </Text>
                  </Flex>
                  <Flex>
                    <button
                      style={{
                        marginLeft: "7.4rem",
                        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                        padding: "0rem 0.5rem",
                      }}
                    >
                      -
                    </button>
                    <span style={{ marginLeft: "1rem" }}>{quantity}</span>
                    <button
                      style={{
                        marginLeft: "1rem",
                        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                        padding: "0rem 0.5rem",
                      }}
                    >
                      +
                    </button>
                  </Flex>
                </HStack>
              </VStack>
            </HStack>
          );
        })
      ) : (
        <Center flex="1">
          <Text fontSize="1.2rem" fontWeight="light">
            There is no item in the cart
          </Text>
        </Center>
      )}

      <HStack justifyContent="flex-start" width="100%">
        <Text fontSize=".8rem" fontFamily="inter">
          Total Amount:
        </Text>
        <Text fontSize="1.3rem" fontWeight="bold">
          ₱ {calculateTotalAmount()}
        </Text>
      </HStack>

      <Button
        boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
        border="1px solid"
        borderColor="#FFC700"
        _hover={{ opacity: ".9" }}
        p="1rem 10rem"
        bg="#FFC700"
        color="#2B2B28"
        leftIcon={<BiCartDownload />}
      >
        Place Order
      </Button>
    </VStack>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};
