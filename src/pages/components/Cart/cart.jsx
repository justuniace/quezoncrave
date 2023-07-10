import { useContext } from "react";
import {
  VStack,
  HStack,
  Text,
  Image,
  Flex,
  Box,
  Center,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { urlFor } from "../../../client";
import { CartContext } from "../Context/Context";
import { BiCartDownload } from "react-icons/bi";

export function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleDelete = (id) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem._id !== id
    );
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (itemId) => {
    const updatedItems = cartItems.map((item) => {
      if (item._id === itemId) {
        const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
        const newPrice = item.price /item.quantity * newQuantity;

        return {
          ...item,
          quantity: newQuantity,
          price: newPrice,
        };
      }
      return item;
    });

    setCartItems(updatedItems);
  };

  const handleIncrement = (itemId) => {
    const updatedItems = cartItems.map((item) => {
      if (item._id === itemId) {
        const newQuantity = item.quantity + 1;
        const newPrice = item.price /item.quantity * newQuantity;

        return {
          ...item,
          quantity: newQuantity,
          price: newPrice,
        };
      }
      return item;
    });

    setCartItems(updatedItems);
  };

  //function for total amount
  const calculateTotalAmount = () => {
    let total = 0;

    cartItems.forEach((item) => {
      total += item.price;
    });

    return total;
  };

  console.log(cartItems);

  return (
    <VStack w="100%" h="100vh" p="1rem 1" gap="1rem" align="stretch">
      {cartItems.length > 0 ? (
        [...cartItems].reverse().map((item) => {
          return (
            <HStack
              key={item._id}
              w="100%"
              p="1rem 1rem"
              bg="white"
              borderRadius=".5em"
              justifyContent="space-between"
              align="center"
              maxW="500px"
            >
              <Box w="10rem" h="6rem" mb="1">
                <Image
                  src={urlFor(item.image).url()}
                  w="100%"
                  h="100%"
                  //  objectFit="cover"
                />
              </Box>
              <VStack spacing="1">
                <HStack justifyContent="space-between" w="20rem">
                  <Text ml="1rem" fontSize="1rem" fontWeight="bold">
                    {item.name}
                  </Text>
                  <DeleteIcon
                    cursor="pointer"
                    color="#FFC700"
                    onClick={() => handleDelete(item._id)}
                  />
                </HStack>
                <Text mr="14rem" fontWeight="light" fontSize="12px" w="5rem">
                  {item.size || ""}
                </Text>
                <HStack w="100%">
                  <Flex align="baseline">
                    <Text ml="1rem" fontSize="1.2rem" fontWeight="bold">
                      ₱
                    </Text>
                    <Text ml="0.5rem" fontSize="1.2rem" fontWeight="bold">
                      {item.price}
                    </Text>
                  </Flex>
                  <Flex>
                    <Button
                      style={{
                        marginLeft: "7.4rem",
                        borderRadius: "30px",
                        width: "1.5rem",
                        height: "1.5rem",
                        fontSize: "12px",
                        boxShadow: "md",
                        padding: "0rem",
                      }}
                      onClick={() => handleDecrement(item._id)}
                    >
                      -
                    </Button>
                    <span style={{ marginLeft: "1rem" }}>{item.quantity}</span>
                    <Button
                      style={{
                        marginLeft: "1rem",
                        borderRadius: "30px",
                        width: "1.5rem",
                        height: "1.5rem",
                        fontSize: "12px",
                        boxShadow: "lg",
                        padding: "0rem",
                      }}
                      onClick={() => handleIncrement(item._id)}
                    >
                      +
                    </Button>
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
      {/* Footer */}
      <Spacer />
      <Box
        bg="white"
        py="1rem"
        px="2rem"
        borderTop="1px solid #E2E8F0"
        position="fixed"
        bottom="0"
        width="100%"
        left="0"
        right="0"
        style={{
          zIndex: "1",
        }}
      >
        {/* Total amount */}
        <HStack justifyContent="flex-start" width="100%">
          <Text fontSize=".8rem" fontFamily="inter">
            Total Amount:
          </Text>
          <Text fontSize="1.3rem" fontWeight="bold">
            ₱ {calculateTotalAmount()}
          </Text>
        </HStack>

        {/* Place order button */}
        <Button
          mt="1rem"
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
      </Box>
    </VStack>
  );
}
