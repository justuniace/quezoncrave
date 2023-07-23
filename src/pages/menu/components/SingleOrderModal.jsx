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
import emailjs from "@emailjs/browser";

export function SingleOrder({ onClose, itemName, itemPrice, itemQuantity, itemSize }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [barangay, setBarangay]= useState("");
  const [street, setStreet] = useState("");
  const [houseno, setHouseno] = useState("");
  const [landmark, setLandMark] = useState("");
  const [message, setMessage] = useState("");
  const [gender, setGender] = useState("");



  const toast = useToast();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleConfirm = async () => {
    if (!name || !gender || !contactNumber || !barangay || !street || !houseno || !landmark) {
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

    const emailContent = `
  Shipping Information:
  Name: ${name}
  Gender: ${gender}
  Contact Number: ${contactNumber}
  Address: ${barangay} +(" ")+ ${street} +(" ")+${houseno}
  Landmark: ${landmark}
  Email: ${email}

  Item Details:
  Name: ${itemName}
  Price: ${itemPrice}
  Quantity: ${itemQuantity}
  Size: ${itemSize}
`;

    const templateParams = {
      to_email: email,
      from_name: name,
      message: emailContent,
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

      setName("");
      setAddress("");
      setContactNumber("");
      setEmail("");
      onClose();

      toast({
        title: "Order Placed.",
        description: "You'll get your order within 20 minutes",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      console.log(error);

      setName("");
      setAddress("");
      setContactNumber("");
      setEmail("");
    }
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
            <Select
              fontWeight="light"
              fontSize="14px"
              placeholder="Gender"
              color="gray.600"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
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
            onClick={handleConfirm}
            disabled={!name || !address || !contactNumber || !email}
          >
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

SingleOrder.propTypes = {
  onClose: PropTypes.func.isRequired,
  itemName: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
  itemQuantity: PropTypes.number.isRequired,
  itemSize: PropTypes.string.isRequired,
};
