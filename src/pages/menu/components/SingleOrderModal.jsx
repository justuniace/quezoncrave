import PropTypes from "prop-types";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  VStack,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { BsPatchCheckFill } from "react-icons/bs";

import Shipping from "./ShippingDetails";

export function SingleOrder({
  onClose,
  itemName,
  itemPrice,
  itemQuantity,
  itemSize,
}) {
  const [name, setName] = useState("");

  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [barangay, setBarangay] = useState("");
  const [street, setStreet] = useState("");
  const [houseno, setHouseno] = useState("");
  const [landmark, setLandMark] = useState("");
  const [message, setMessage] = useState("");
  const [gender, setGender] = useState("");
  const [isShippingModalOpen, setIsShippingModalOpen] = useState(false);

  const toast = useToast();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleConfirm = async () => {
    if (
      !name ||
      !gender ||
      !contactNumber ||
      !barangay ||
      !street ||
      !houseno ||
      !landmark
    ) {
      toast({
        position: "top",
        title: "Missing Fields!",
        description: "Please fill in all fields.",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        position: "top",
        title: "Invalid Email!",
        description: "Please enter a valid email address.",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
      return;
    }

    setIsShippingModalOpen(true);

    
  };

  return (
    <>
      {isShippingModalOpen && (
        <Shipping
          onClose={() => {
            setIsShippingModalOpen(false);
            onClose();
          }}
          shippingData={{
            name,
            gender,
            contactNumber,
            barangay,
            street,
            landmark,
            houseno,
            message,
            email,
            itemName,
            itemPrice,
            itemQuantity,
            itemSize,
          }}
        />
      )}
      {!isShippingModalOpen && (
        <Modal closeOnOverlayClick={false} isCentered isOpen onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Shipping Information</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack>
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Select
                  fontWeight="light"
                  fontSize="14px"
                  placeholder="Gender"
                  color="gray.600"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </Select>
                <Input
                  type="text"
                  placeholder="Contact Number"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Barangay"
                  value={barangay}
                  onChange={(e) => setBarangay(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="House Number"
                  value={houseno}
                  onChange={(e) => setHouseno(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Landmark"
                  value={landmark}
                  onChange={(e) => setLandMark(e.target.value)}
                />

                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button
                leftIcon={<BsPatchCheckFill />}
                onClick={() => handleConfirm()}
                disabled={!name || !contactNumber || !email}
              >
                Confirm
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

SingleOrder.propTypes = {
  onClose: PropTypes.func.isRequired,
  itemName: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
  itemQuantity: PropTypes.number.isRequired,
  itemSize: PropTypes.string.isRequired,
};
