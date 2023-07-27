import PropTypes from "prop-types";
import { useState, useContext, useEffect} from "react";
import { AiOutlineShoppingCart, AiFillStar } from "react-icons/ai";

import { BiCartDownload } from "react-icons/bi";
import { urlFor } from "../../../../client";
import {
  Icon,
  Box,
  VStack,
  Flex,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  HStack,
  Text,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { CartContext } from "../../../components/Context/Context";
import { SingleOrder } from "../SingleOrderModal";

export function BeveragesModal({ onClose, beverages }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, size, setSize } = useContext(CartContext); // Use size and setSize from the context
  const [isSingleOrderOpen, setSingleOrderOpen] = useState(false);
  const { cartItems, setCartItems } = useContext(CartContext);
  const imageUrl = urlFor(beverages.image).url();

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateTotalPrice = () => {
    let basePrice = beverages.price;

    if (size === "24oz") {
      basePrice += 20;
    } else if (size === "32oz") {
      basePrice += 40;
    }
    const totalPrice = basePrice * quantity;
    return totalPrice.toFixed(2);
  };

const handleAddToCart = () => {
  const item = {
    ...beverages,
    quantity: quantity,
    size: size,
    price:calculateTotalPrice(),
  };

  const existingItem = cartItems.find(
    (cartItem) => cartItem._id === item._id && cartItem.size === item.size
  );

  if (existingItem) {
    const updatedItems = cartItems.map((cartItem) => {
      if (
        cartItem._id === existingItem._id &&
        cartItem.size === existingItem.size
      ) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + item.quantity,
        };
      }
      return cartItem;
    });

    setCartItems(updatedItems);
  } else {
    addToCart(item);
  }

  onClose();
  resetState();
};

const resetState = () => {
  setQuantity(1);
  setSize("16oz");
};

  // placeorder button
  const handlePlaceOrder = () => {
    setSingleOrderOpen(true);
  };

 
    useEffect(() => {
      setSize("16oz");
    }, []);

  return (
    <>
      {isSingleOrderOpen && (
        <SingleOrder
          onClose={() => {
            setSingleOrderOpen(false);
            onClose();
          }}
          beverages={beverages}
          itemName={beverages.name}
          itemPrice={calculateTotalPrice()}
          itemQuantity={quantity}
          itemSize={size}
        />
      )}
      {!isSingleOrderOpen && (
        <Modal isCentered isOpen onClose={onClose}>
          <ModalOverlay />
          <ModalContent padding="0 1rem ">
            <ModalHeader>
              {" "}
              <Flex
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Image
                  src={imageUrl}
                  alt={beverages.name}
                  w="15rem"
                  h="18rem"
                />
              </Flex>
              <HStack margin="0 18px">
                <Text fontSize="lg" fontWeight="bold">
                  {beverages.name}
                </Text>
                <Text ml="145px" color="#FFC700" fontSize="20px">
                  ₱{calculateTotalPrice()}
                </Text>
              </HStack>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody margin="0 20px">
              <Text fontSize="15px" mb="15px">
                {beverages.description}
              </Text>
              <HStack>
                <Icon as={AiFillStar} color="#FFC700" fontSize="22px" />
                <Text fontSize="12px">{beverages.rating}</Text>
                <Text fontSize="12px">( {beverages.people} )</Text>
              </HStack>

              <HStack justifyContent="space-between">
                <Box>
                  <Text
                    mt="5"
                    color="#434242"
                    fontWeight="light"
                    fontSize="13px"
                  >
                    Size
                  </Text>
                  <RadioGroup mt="3" value={size} onChange={setSize}>
                    <VStack align="start">
                      <Radio
                        sx={{
                          color: "#FFC700",
                          _checked: { bg: "#FFC700", borderColor: "#FFC700" },
                        }}
                        value="16oz"
                      >
                        16oz
                      </Radio>
                      <Radio
                        sx={{
                          color: "#FFC700",
                          _checked: { bg: "#FFC700", borderColor: "#FFC700" },
                        }}
                        value="24oz"
                      >
                        24oz
                      </Radio>
                      <Radio
                        sx={{
                          color: "#FFC700",
                          _checked: { bg: "#FFC700", borderColor: "#FFC700" },
                        }}
                        value="32oz"
                      >
                        32oz
                      </Radio>
                    </VStack>
                  </RadioGroup>
                </Box>
                <Box mb="2rem">
                  <Text color="#434242" fontWeight="light" fontSize="13px">
                    Quantity
                  </Text>

                  <HStack justifyContent="space-between">
                    <HStack mt="3" spacing="5">
                      <Button
                        borderRadius="30"
                        w="2rem"
                        h="2rem"
                        fontSize="12px"
                        onClick={decrementQuantity}
                        boxShadow="md"
                      >
                        -
                      </Button>
                      <span style={{ color: "#FFC700" }}>{quantity}</span>
                      <Button
                        borderRadius="30"
                        w="2rem"
                        h="2rem"
                        fontSize="12px"
                        onClick={incrementQuantity}
                        boxShadow="md"
                      >
                        +
                      </Button>
                    </HStack>
                  </HStack>
                </Box>
              </HStack>
            </ModalBody>
            <ModalFooter margin="0 20px">
              <HStack>
                <Button
                  fontWeight="light"
                  bg="#FFC700"
                  w="10rem"
                  color="white"
                  leftIcon={<AiOutlineShoppingCart />}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Button
                  w="10rem"
                  bg="#EEEEEE"
                  fontWeight="light"
                  variant="ghost"
                  leftIcon={<BiCartDownload />}
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </Button>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

BeveragesModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  beverages: PropTypes.object,
};
