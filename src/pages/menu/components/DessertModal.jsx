import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiCartDownload } from "react-icons/bi";
import { SingleOrder } from "./SingleOrderModal";
import { CartContext } from "../../components/Context/Context";
import {
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

export function DessertModal({ onClose, dessert }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, size, setSize  } = useContext(CartContext);
  const [isSingleOrderOpen, setSingleOrderOpen] = useState(false);
  const { cartItems, setCartItems } = useContext(CartContext);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

//total amount
  const calculateTotalPrice = () => {
    let basePrice = dessert.price;

    if (size === "Single") {
      basePrice += 20;
    } else if (size === "Family") {
      basePrice += 40;
    }
    else if(size === "Party")
    {
       basePrice += 50;
    }
    const totalPrice = basePrice * quantity;
    return totalPrice.toFixed(2);
  };



const handleAddToCart = () => {
  const item = {
    ...dessert,
    quantity: quantity,
    size: size,
    price: calculateTotalPrice(),
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
};

  
  //placeorder button
  const handlePlaceOrder = () => {
    setSingleOrderOpen(true);
  };

  const closeSingleOrder = () => {
    setSingleOrderOpen(false);
  };

  return (
    <>
      <Modal isCentered isOpen onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{dessert && dessert.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack justifyContent="space-between">
              <Text color="#434242" ml="2" fontWeight="light" fontSize="13px">
                Quantity
              </Text>
              <Text
                color="#434242"
                mr="30px"
                fontWeight="light"
                fontSize="13px"
              >
                Amount
              </Text>
            </HStack>

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
              <Text mr="15" color="#FFC700" fontSize="20px">
                ₱{calculateTotalPrice()}
              </Text>
            </HStack>
            <Text mt="5" color="#434242" fontWeight="light" fontSize="13px">
              Size
            </Text>
            <RadioGroup mt="3" value={size} onChange={setSize}>
              <HStack>
                <Radio
                  sx={{
                    color: "#FFC700",
                    _checked: { bg: "#FFC700", borderColor: "#FFC700" },
                  }}
                  value="Single"
                >
                  Single Order
                </Radio>
                <Radio
                  sx={{
                    color: "#FFC700",
                    _checked: { bg: "#FFC700", borderColor: "#FFC700" },
                  }}
                  value="Family"
                >
                  Family Size
                </Radio>
                <Radio
                  sx={{
                    color: "#FFC700",
                    _checked: { bg: "#FFC700", borderColor: "#FFC700" },
                  }}
                  value="Party"
                >
                  Party Size
                </Radio>
              </HStack>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              fontWeight="light"
              bg="#FFC700"
              mr={3}
              color="white"
              leftIcon={<AiOutlineShoppingCart />}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <Button
              bg="#EEEEEE"
              fontWeight="light"
              variant="ghost"
              leftIcon={<BiCartDownload />}
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {isSingleOrderOpen && (
        <SingleOrder
          onClose={closeSingleOrder}
          dessert={dessert}
          quantity={quantity}
          size={size}
        />
      )}
    </>
  );
}

DessertModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  dessert: PropTypes.object,
};
