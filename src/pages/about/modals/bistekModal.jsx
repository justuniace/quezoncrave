import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";


function BistekModal ()
{
    const { isOpen,  onClose } = useDisclosure();
   
 return (
   <Modal  isOpen={isOpen} onClose={onClose}>
     <ModalOverlay />
     <ModalContent>
       <ModalHeader>Modal Title</ModalHeader>
       <ModalCloseButton />
       <ModalBody>
        jkjkkk
       </ModalBody>

       <ModalFooter>
         
       </ModalFooter>
     </ModalContent>
   </Modal>
 );
}
export default BistekModal;