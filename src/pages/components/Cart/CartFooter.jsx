import { VStack,HStack,Button,Text } from "@chakra-ui/react";

export function CartFooter(){
    return (
      <VStack
        w="100%"
        justifyContent="space-between"
        p=".9rem 2rem"
        spacing="4"
      >
        <HStack justifyContent="flex-start" width="100%">
          <Text fontSize=".8rem" fontFamily="inter">
            Total Amount:
          </Text>
          <Text fontSize="1.3rem" fontWeight="bold">
            ₱
          </Text>
        </HStack>

        <Button
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
          border="1px solid"
          borderColor="#FFC700"
          _hover={{ opacity: ".9" }}
          p="1rem 10rem"
          bg="#FFC700"
          color="#2B2B28"
        >
          Place Order
        </Button>
      </VStack>
    );
}