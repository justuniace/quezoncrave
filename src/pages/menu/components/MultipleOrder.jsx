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
import emailjs from "@emailjs/browser";

export function MultipleOrder({ onClose, cartItems, totalAmount, clearCart }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const toast = useToast();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleConfirm = async () => {
    if (!name || !address || !contactNumber || !email) {
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
      Address: ${address}
      Contact Number: ${contactNumber}
      Email: ${email}

      Item Details:
      ${cartItems
        .map(
          (item, index) =>
            `Item ${index + 1}:
            Name: ${item.name}
            Price: ${item.price}
            Quantity: ${item.quantity}
            Size: ${item.size}`
        )
        .join("\n\n")}

      Total Amount: ₱ ${totalAmount()}
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
      console.log("Data from response: ", JSON.stringify(response));

      // Clear the input fields
      setName("");
      setAddress("");
      setContactNumber("");
      setEmail("");

      // Close the modal
      onClose();

      // Show success toast
      toast({
        title: "Order Placed.",
        description: "You'll get your order within 20 minutes.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });

      // Clear the cart items
     clearCart();
    } catch (error) {
      console.log(error);

      // Clear the input fields
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

MultipleOrder.propTypes = {
  onClose: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
  totalAmount: PropTypes.number.isRequired,
  clearCart: PropTypes.func.isRequired,
};
