import Title from "../../../components/Titles";
import { Box, Image, HStack, VStack, Text, Center, Icon } from "@chakra-ui/react";
import Bg from "../../../../assets/explore/explore.webp";
import Rectangle from "../../../../assets/Rectangle.svg";
import Leaves from "../../../../assets/leaves3.svg";
import { RiDoorOpenLine } from "react-icons/ri";
import {TbTruckDelivery} from "react-icons/tb";


export default function Hours() {
  return (
    <Box h="28rem" pos="relative" mt="9rem">
      <Image
        pos="absolute"
        w="100%"
        h="100%"
        zIndex={1}
        src={Bg}
        alt="Background Image"
      />

      <Title title="Business Hours" />
      <Image pos="absolute" mt="5rem" src={Leaves} />
      <Image
        ml="85rem"
        transform="rotate(-80deg)"
        mt="-9rem"
        pos="absolute"
        src={Leaves}
      />
      <Image
        ml="50rem"
        transform="rotate(10deg)"
        mt="23rem"
        pos="absolute"
        src={Leaves}
      />
      <Image
        ml="20rem"
        transform="rotate(-40deg)"
        mt="40rem"
        pos="absolute"
        src={Leaves}
      />
      <HStack
        spacing="20rem"
        mt="12rem"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Box
            position="relative"
            zIndex={2}
            ml="8rem"
            w="20rem"
            h="18rem"
            bgGradient="linear-gradient(360deg, #FFC700 0%, rgba(255, 199, 0, 0.15) 100%)"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.44)"
            borderRadius="7px"
            marginRight="-4.5rem"
          >
            <Center>
              <VStack mt="3.5rem">
                <Text fontFamily="inter" fontWeight="md" fontSize="25px">
                  Weekdays
                </Text>
                <Text fontFamily="inter" fontSize="15px">
                  8:00 AM to 8:00 PM
                </Text>
                <br />
                <Text fontFamily="inter" fontWeight="md" fontSize="25px">
                  Weekends
                </Text>
                <Text fontFamily="inter" fontSize="15px">
                  8:00 AM to 5:00 PM
                </Text>
              </VStack>
            </Center>
          </Box>
          <Box mt="-49rem" zIndex={1}>
            <Image ml="25px" src={Rectangle} h="68rem" w="21rem" />
            <Text
              fontFamily="Inter"
              fontWeight="md"
              position="relative"
              top="-40.5rem"
              left="4rem"
              fontSize="1.5rem"
            >
              Opening Hours <Icon pos="relative" top="1" as={RiDoorOpenLine} />
            </Text>
          </Box>
        </Box>

        <Box>
          <Box
            position="relative"
            zIndex={2}
            ml="8rem"
            w="20rem"
            h="18rem"
            bgGradient="linear-gradient(360deg, #FFC700 0%, rgba(255, 199, 0, 0.20) 100%)"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.44)"
            borderRadius="7px"
          >
            <Center>
              <VStack mt="3.5rem">
                <Text fontFamily="inter" fontWeight="md" fontSize="25px">
                  Weekdays
                </Text>
                <Text fontFamily="inter" fontSize="15px">
                  10:00 AM to 8:00 PM
                </Text>
                <br />
                <Text fontFamily="inter" fontWeight="md" fontSize="25px">
                  Weekends
                </Text>
                <Text fontFamily="inter" fontSize="15px">
                  10:00 AM to 2:00 PM
                </Text>
              </VStack>
            </Center>
          </Box>
          <Box mt="-49rem" zIndex={1}>
            <Image ml="25px" src={Rectangle} h="68rem" w="21rem" />
            <Text
              fontFamily="Abril-Fatface"
              position="relative"
              top="-40.7rem"
              left="4rem"
              fontSize="1.5rem"
              fontWeight="md"
            >
              Delivery Hours {""}
              <Icon pos="relative" top="1" as={TbTruckDelivery} />
            </Text>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}
