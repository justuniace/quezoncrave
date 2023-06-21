
import {HStack, Flex, Text, Box, Image} from "@chakra-ui/react";
import PorkSteak from "../../../assets/pork-steak.webp";


export function CartBody()
{
    return (
      <Flex flexDir="column" p="1rem" gap="1rem" w="100%" h="100%">
        <HStack
          w="100%"
          borderRadius=".5em"
          p="0.5rem 1rem"
          justifyContent="space-between"
         
          bg="white"
          align="center"
         
        >
         <HStack>
            <Box w="4rem" mb="1">
                <Image src={PorkSteak}/>
            </Box>
            <Text>Pork Steak</Text>
         </HStack>


        </HStack>
      </Flex>
    );
}