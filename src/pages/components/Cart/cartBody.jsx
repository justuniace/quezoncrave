import { HStack, Flex, Text, Box, Image, VStack, Center } from "@chakra-ui/react";
import { useState , useEffect} from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";

export function CartBody({ image, name, size, price, quantity }) {
  const [count, setCount] = useState(quantity);
  const hasItems = quantity > 0;

   useEffect(() => {
     setCount(quantity);
   }, [quantity]);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Flex flexDir="column" p="1rem" gap="1rem" w="100%" h="100%">
      {hasItems ? (
        <HStack
          w="100%"
          borderRadius=".5em"
          p=".5rem 1rem"
          justifyContent="space-between"
          bg="white"
          align="center"
        >
          <HStack>
            <Box w="6rem" mb="1">
              <Image src={image} />
            </Box>
            <VStack spacing="1">
              <HStack justifyContent="space-between">
                {/* Displaying the name of the dish */}
                <Text ml="1rem" fontSize="1rem" fontWeight="bold" w="20rem">
                  {name}
                </Text>
                <Box
                  cursor="pointer"
                  color="#FFC700"
                  ml="15.8rem"
                  position="absolute"
                >
                  <DeleteIcon />
                </Box>
              </HStack>
              {/* Displaying the serving size */}
              <Text mr="14rem" fontWeight="light" fontSize="12px" w="5rem">
                {size}
              </Text>
              {/* Displaying the currency symbol and passing the value or price */}
              <HStack w="100%">
                <Flex align="baseline">
                  <Text ml="1rem" fontSize="1.2rem" fontWeight="bold">
                    ₱
                  </Text>
                  <Text ml="0.5rem" fontSize="1.2rem" fontWeight="bold">
                    {price}
                  </Text>
                  <button
                    onClick={decrement}
                    style={{
                      marginLeft: "7.4rem",
                      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                      padding: "0rem 0.5rem",
                    }}
                  >
                    -
                  </button>
                  <span style={{ marginLeft: "1rem" }}>{count}</span>
                  <button
                    onClick={increment}
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
        </HStack>
      ) : (
        <Center flex="1">
          <Text fontSize="1.2rem" fontWeight="light">
            There is no Item in the cart
          </Text>
        </Center>
      )}
    </Flex>
  );
}

// Define PropTypes for the component props
CartBody.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
