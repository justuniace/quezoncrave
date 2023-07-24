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
// import { CartContext } from "../../../components/Context/Context";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { BsPatchCheckFill } from "react-icons/bs";
import {MultiDetails} from "./MultiShipDetails";
// import emailjs from "@emailjs/browser";



export function MultipleOrder({ onClose, cartItems, totalAmount }) {
 console.log("cartItems:", cartItems);
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [barangay, setBarangay] = useState("");
  const [street, setStreet] = useState("");
  const [houseno, setHouseno] = useState("");
  const [landmark, setLandMark] = useState("");
  const [message, setMessage] = useState("");
  const [gender, setGender] = useState("");
  const [isMultiDetailsOpen, setIsMultiDetailsOpen] = useState(false);

  
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

   setIsMultiDetailsOpen(true);
   

  //  clearCart();
  };

console.log("Received cartItems:", cartItems);
console.log("Received totalAmount:", totalAmount);
  return (
    <>
      {isMultiDetailsOpen && (
        <MultiDetails
          onClose={() => {
            setIsMultiDetailsOpen(false);
            onClose();
          }}
          cartItems={cartItems} // Pass the cartItems prop here
          totalAmount={totalAmount} // Pass the totalAmount prop here
          shippingDetails={{
            name,
            gender,
            contactNumber,
            barangay,
            street,
            landmark,
            houseno,
            message,
            email,
          }}
        />
      )}
      {!isMultiDetailsOpen && (
        <Modal
          isCentered
          isOpen
          onClose={onClose}
          returnFocusOnClose={false}
          motionPreset="none"
          
        >
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

MultipleOrder.propTypes = {
  onClose: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
  totalAmount: PropTypes.number.isRequired,

};
