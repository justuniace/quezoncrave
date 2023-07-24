import PropTypes from "prop-types";
import { Heading, HStack, Text, VStack, Divider, Spacer } from "@chakra-ui/react";

const SingleSend = ({
  name,
  contactNumber,
  gender,
  barangay,
  street,
  houseno,
  message,
  landmark,
  email,
  itemName,
  itemPrice,
  itemQuantity,
  itemSize,
}) => {
 

  return (
    <VStack align="start">
      <Heading fontSize="20px">Shipping Details:</Heading>
      <HStack gap="5rem">
        <Text fontWeight="bold">Name: </Text>
        <Text> {name} </Text>
      </HStack>
      <HStack gap="4.2rem">
        <Text fontWeight="bold">Gender: </Text>
        <Text> {gender}</Text>
      </HStack>

      <HStack gap="1.9rem">
        <Text fontWeight="bold">Contact No.: </Text>
        <Text>{contactNumber}</Text>
      </HStack>
      <HStack gap="3.7rem">
        <Text fontWeight="bold">Address:</Text>
        <Text>
          Barangay {barangay} {street}, {houseno}
        </Text>
      </HStack>
      <HStack gap="3rem">
        <Text fontWeight="bold">Landmark: </Text>
        <Text>{landmark}</Text>
      </HStack>
      <HStack gap="5rem">
        <Text fontWeight="bold">Email: </Text>
        <Text> {email} </Text>
      </HStack>
      <VStack align="start">
        <Text fontWeight="bold">Message: </Text>
        <Text>{message}</Text>
      </VStack>

      <Spacer />
      <Heading fontSize="20px">Order Details:</Heading>
      <HStack gap="5rem">
        <Text>{itemName}</Text>
        <Text fontSize="14px">x{itemQuantity}</Text>
      </HStack>
      <HStack gap="6rem">
        <Text>{itemSize}</Text>
        <Text> {itemPrice}</Text>
      </HStack>
      <Divider borderWidth="2px" w="12rem" />
      <HStack gap="6rem">
        <Text>Total:</Text>
        <Text fontWeight="bold" fontSize="20px">
          {itemPrice}
        </Text>
      </HStack>
    </VStack>
  );
};

SingleSend.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  contactNumber: PropTypes.number.isRequired,
  landmark: PropTypes.string.isRequired,
  barangay: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  houseno: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
  itemQuantity: PropTypes.number.isRequired,
  itemSize: PropTypes.string.isRequired,
};

export default SingleSend;
