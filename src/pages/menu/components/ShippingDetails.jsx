import PropTypes from "prop-types";
import { BsPatchCheckFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
//import { useToast } from "@chakra-ui/react";
import ConfirmModal from "./ConfirmationModal";
import { useState, useEffect } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  VStack,
  Heading,
  Spacer,
  HStack,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

export function Shipping({ onClose, shippingData }) {
  //const toast = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const toast = useToast();

  const {
    name,
    gender,
    contactNumber,
    barangay,
    street,
    houseno,
    landmark,
    message,
    email,
    itemName,
    itemPrice,
    itemQuantity,
    itemSize,
  } = shippingData;

  const handleConfirm = async () => {
    const currentDate = new Date().toLocaleString();
    const templateParams = {
      currentDate: currentDate,
      to_email: email,
      from_name: name,
      name: name,
      gender: gender,
      contactNumber: contactNumber,
      email: email,
      barangay: barangay,
      street: street,
      houseno: houseno,
      landmark: landmark,
      message: message,
      itemName: itemName,
      itemQuantity: itemQuantity,
      itemSize: itemSize,
      itemPrice: itemPrice,
      total: total,
    };

    console.log("Sending email with the following data:");
    console.log(templateParams);

    try {
      const response = await emailjs.send(
        "service_c7917pd",
        "template_m0l0zdm",
        templateParams,
        "adU95kGqRHf8v9br6"
      );
      console.log(response);
      console.log("data from response ", JSON.stringify(response));

      toast({
        title: "Order Placed.",
        description: "Send Successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });

      setEmailSent(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (emailSent) {
      setIsModalOpen(true); // Show the ConfirmModal after the email is sent
    }
  }, [emailSent]);

  const totalAmount = (itemPrice) => {
    let shippingFee = 20;
    shippingFee += parseFloat(itemPrice);
    return shippingFee.toFixed(2);
  };

  const total = totalAmount(itemPrice);

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isCentered
        isOpen={!emailSent && !isModalOpen}
        onClose={onClose}
        returnFocusOnClose={false}
        motionPreset="none"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
                  Barangay {barangay} St. {street}, {houseno}
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
              <HStack gap="4rem">
                <Text fontSize="13px">Delivery Fee</Text>
                <Text fontSize="13px">20</Text>
              </HStack>

              <HStack gap="5rem">
                <Text fontWeight="bold" fontSize="20px">
                  Total:
                </Text>
                <Text fontWeight="bold" fontSize="20px">
                  {total}
                </Text>
              </HStack>
            </VStack>
            <Text fontSize={"15px"} mt="2rem">We only accept Cash on Delivery!</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => handleConfirm()}
              leftIcon={<BsPatchCheckFill />}
            >
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {emailSent && (
        <ConfirmModal
          onClose={() => {
            setIsModalOpen(false);
            onClose();
          }}
        />
      )}
    </>
  );
}

Shipping.propTypes = {
  onClose: PropTypes.func.isRequired,
  shippingData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    contactNumber: PropTypes.string.isRequired,
    barangay: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    houseno: PropTypes.string.isRequired,
    landmark: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    itemPrice: PropTypes.number.isRequired,
    itemQuantity: PropTypes.number.isRequired,
    itemSize: PropTypes.string.isRequired,
  }).isRequired,
};

export default Shipping;
