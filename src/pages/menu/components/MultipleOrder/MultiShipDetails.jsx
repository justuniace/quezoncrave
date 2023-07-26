import PropTypes from "prop-types";
import { BsPatchCheckFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
//import { useToast } from "@chakra-ui/react";
import ConfirmModal from "../ConfirmationModal";
import { CartContext } from "../../../components/Context/Context";
import { useState, useEffect, useContext } from "react";
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

export function MultiDetails({
  onClose,
  cartItems,
  totalAmount,
  shippingDetails,
}) {
 // const toast = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

const { setCartItems } = useContext(CartContext);

  const totalPrice = (totalAmount) => {
    let shippingFee = 20;
    shippingFee += parseFloat(totalAmount);
    return shippingFee.toFixed(2);
  };

  const total = totalPrice(totalAmount);
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
  } = shippingDetails;

  const OrderDetails = `
   ${cartItems
     .map(
       (item, index) =>
         `Item ${index + 1}:
            ${item.name}     
            x ${item.quantity}  
            ${item.size}       
            ${item.price}
            
            `
     )

     .join("\n")}
  `;

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

      totalAmount: totalAmount,
      total: total,
      details: OrderDetails,
    };
    console.log(templateParams);
    console.log("Sending email with the following data:");
   

    try {
      const response = await emailjs.send(
        "service_c7917pd",
        "template_5thc0tq",
        templateParams,
        "adU95kGqRHf8v9br6"
      );
      console.log(response);
      console.log("data from response ", JSON.stringify(response));

      // toast({
      //   title: "Order Placed.",
      //   description: "Send Successfully",
      //   status: "success",
      //   duration: 3000,
      //   isClosable: true,
      //   position: "top",
      // });

      setEmailSent(true);
          setIsModalOpen(false);
         setCartItems([]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (emailSent) {
      setIsModalOpen(true); // Show the ConfirmModal after the email is sent
    }
  }, [emailSent]);


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
              <Heading size="md">Cart Items:</Heading>
              {cartItems.map((item) => (
                <VStack key={item._id} align="start" spacing={1}>
                  <HStack gap="4rem">
                    <Text fontWeight="bold"> {item.name}</Text>
                    <Text fontSize="12px">x {item.quantity}</Text>
                  </HStack>
                  <HStack gap="6rem">
                    <Text fontSize="14px">{item.size}</Text>
                    <Text> ₱{item.price}</Text>
                  </HStack>
                  <br />
                </VStack>
              ))}

              <Divider borderWidth="2px" w="12rem" />
              <HStack gap="4.5rem">
                <Text fontSize="13px">Delivery Fee</Text>
                <Text fontSize="13px">20</Text>
              </HStack>
              <HStack gap="2rem">
                <Text fontWeight="bold">Total Amount: </Text>
                <Text fontWeight="bold" fontSize="18px">
                  {" "}
                  ₱ {total}
                </Text>
              </HStack>
            </VStack>
            <Text>
              We only accept Cash on Delivery!
            </Text>
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

MultiDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
  shippingDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    contactNumber: PropTypes.string.isRequired,
    barangay: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    houseno: PropTypes.string.isRequired,
    landmark: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      size: PropTypes.string.isRequired,
    })
  ).isRequired,
  totalAmount: PropTypes.number.isRequired,
};

export default MultiDetails;
