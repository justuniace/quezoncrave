import { useState, useEffect, useContext } from "react";
import EmptyIcon from "/src/assets/order_empty.json";
import Lottie from "lottie-react";
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
import { useToast } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { urlFor } from "../../../client";
import { CartContext } from "../Context/Context";
import { BiCartDownload } from "react-icons/bi";
import { MultipleOrder } from "../../menu/components/MultipleOrder/MultipleOrder";

export function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(true);
const [isMultipleOrderOpen, setMultipleOrderOpen] = useState(false);
const toast = useToast();


 const handlePlaceOrder = () => {
  if (cartItems.length === 0) {
    // Show toast that the cart is empty
    toast({
      title: "",
      description: "Your Cart is Empty!",
      status: "warning",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  } else {
    // Open the modal for placing an order
    setMultipleOrderOpen(true);
  }

   
 };
 

//  const closeMultipleOrder = () => {
//    setMultipleOrderOpen(false);
//  };

  const handleDelete = (id, size) => {
    const updatedCartItems = cartItems.filter(
      (item) => item._id !== id || item.size !== size
    );
    setCartItems(updatedCartItems);
  };

  // const handleDelete = (id) => {
  //   const itemIndex = cartItems.findIndex((item) => item._id === id); // Find the index of the item to delete in the cartItems array
  //   if (itemIndex !== -1) {
  //     const updatedCartItems = [...cartItems];
  //     updatedCartItems.splice(itemIndex, 1); // Remove the item from the updatedCartItems array using splice
  //     setCartItems(updatedCartItems); // Update the cart items state with the updatedCartItems array
  //   }
  // };


  const handleDecrement = (itemId) => {
    const updatedItems = cartItems.map((item) => {
      if (item._id === itemId) {
        const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
        const newPrice = item.price * (newQuantity / item.quantity);

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
        const newPrice = (item.price / item.quantity) * newQuantity;

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

  // Function for calculating the total amount
  const totalAmount = () => {
    let total = 0;

    cartItems.forEach((item) => {
     total += parseFloat(item.price);
    });

    return total.toFixed(2);
  };

  
  useEffect(() => {
    if (cartItems.length > 0) {
      setIsLoading(false);
    }
  }, [cartItems]);

console.log("cartItems in Cart component:", cartItems);

  useEffect(() => {
    setIsLoading(false); 
  }, []);

 

     const isAnimationPlaying = true;
  return (
    <VStack
      minH="100%"
      w="100%"
      h="100vh"
      p="1rem 1"
      gap="1rem"
      align="stretch"
    >
      {isLoading ? (
        <Center flex="1">
          <Text fontSize="1.2rem" fontWeight="light">
            Loading...
          </Text>
        </Center>
      ) : cartItems.length > 0 ? (
        <VStack
          w="100%"
          align="stretch"
          spacing="1rem"
          // overflowY="auto"
          pb="10rem"
        >
          {[...cartItems].reverse().map((item) => {
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
                <Box ml="20px" w="10rem" h="6rem" mb="1">
                  <Image src={urlFor(item.image).url()} w="100%" h="100%" />
                </Box>
                <VStack ml="10px" spacing="1" w="100%" align="start">
                  <HStack justifyContent="space-between" w="20rem">
                    <Text fontSize="1rem" fontWeight="bold">
                      {item.name}
                    </Text>
                    <DeleteIcon
                      cursor="pointer"
                      color="#FFC700"
                      onClick={() => handleDelete(item._id, item.size)}
                    />
                  </HStack>
                  <Text mr="14rem" fontWeight="light" fontSize="12px" w="5rem">
                    {item.size || ""}
                  </Text>
                  <HStack w="100%" aling="start">
                    <Flex align="baseline">
                      <Text fontSize="1.2rem" fontWeight="bold">
                        ₱
                      </Text>
                      <Text fontSize="1.2rem" fontWeight="bold">
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
                      <span style={{ marginLeft: "1rem" }}>
                        {item.quantity}
                      </span>
                      <Button
                        style={{
                          marginLeft: "1rem",
                          borderRadius: "30px",
                          width: "1.5rem",
                          height: "1.5rem",
                          fontSize: "12px",
                          boxShadow: "lg",
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
          })}
        </VStack>
      ) : (
        <Box align="center" mt="10rem">
          <Lottie
            loop
            animationData={EmptyIcon}
            play={isAnimationPlaying.toString()}
            style={{ width: 200, height: 200 }}
          />

          <Text fontSize="1.2rem" fontWeight="light" textAlign="center">
            Your cart is empty!
          </Text>
        </Box>
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
        <HStack justifyContent="flex-start" width="100%">
          <Text fontSize=".8rem" fontFamily="inter">
            Total Amount:
          </Text>
          <Text fontSize="1.3rem" fontWeight="bold">
            ₱ {totalAmount()}
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
          color="white"
          onClick={handlePlaceOrder}
          leftIcon={<BiCartDownload />}
        >
          Place Order
        </Button>
      </Box>
      {isMultipleOrderOpen && (
        <MultipleOrder
          onClose={() => {
            setMultipleOrderOpen(false);
          }}
          cartItems={cartItems}
          totalAmount={totalAmount()}
        />
      )}
    </VStack>
  );
}
