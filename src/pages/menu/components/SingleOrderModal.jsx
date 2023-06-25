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
} from "@chakra-ui/react";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { BsPatchCheckFill } from "react-icons/bs";


export function SingleOrder({ onClose }) {

const [name, setName] = useState("");
const [address, setAddress] = useState("");
const [contactNumber, setContactNumber] = useState("");
const [email, setEmail] = useState("");
const toast = useToast();

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};


const handleConfirm = () => {

  if(!name || !address || !contactNumber || !email)
 {
    toast({
      position: 'top',
      title: "Missing Fields!",
      description: "Please fill in all fields.",
      status: "error",
      duration: 1000,
      isClosable: true,

    })
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

 onClose();
};



  return (
    <Modal isCentered isOpen onClose={onClose}>
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
            <Input
              type="text"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button leftIcon={<BsPatchCheckFill />} onClick={handleConfirm}>
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

SingleOrder.propTypes = {
  onClose: PropTypes.func.isRequired,
};
