import {
  Box,
  VStack,
  HStack,
  Center,
  Stack,
  Image,
  Text,
  Input,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import Logo from "/logo.webp";
import breakPoints from "../../theme/breakpoints";
import { BsFacebook, BsTelephoneFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Footer = () => {
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const [isTablet] = useMediaQuery("(max-width: 1023px)");

  const [email, setEmail] = useState("");
  const toast = useToast();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async () => {
    if (!validateEmail(email)) {
      toast({
        position: "bottom",
        title: "Invalid Email!",
        description: "Please enter a valid email address.",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
      return;
    }

    const currentDate = new Date().toLocaleString();
    const templateParams = {
      currentDate: currentDate,
      to_email: email,
      email: email,
    };

    try {
      const response = await emailjs.send(
        "service_t7yfpdy",
        "template_4jw3rg2",
        templateParams,
        "0MPeBbhDXkAoLiHTN"
      );
      console.log(response);
      console.log("data from response ", JSON.stringify(response));
      setEmail("");
      toast({
        title: "Subscribed!",

        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Center
      mt="4rem"
      p="1rem"
      w="100%"
      h={isMobile ? "auto" : "20rem"}
      bg="#452B1A"
      display="flex"
    >
      <Center w={breakPoints} margin="5rem" flexDir="column">
        <Stack
          justifyContent="space-between"
          align="start"
          w="100%"
          direction={{ base: "column", md: "row" }}
        >
          <VStack align={{ base: "center", md: "center" }}>
            <Box width="10rem">
              <Image src={Logo} />
            </Box>

            <Box w={isTablet ? "" : "16rem"} mt="-2rem">
              <Text
                w={isTablet ? "10rem" : "16rem"}
                ml={isMobile ? "" : isTablet ? "2rem" : "4rem"}
                fontSize={isMobile ? "14px" : isTablet ? "12px" : "14px"}
                color="#FFF0DC"
                justifyContent={isMobile ? "center" : "justify"}
              >
                Indulge in Nostalgia with Every Scrumptious Bite.
              </Text>
            </Box>
            <HStack
              mr={isMobile ? "" : "1rem"}
              fontFamily="inter"
              spacing="1rem"
              fontSize="1.5rem"
              opacity=".8"
              mt="2rem"
            >
              <Box color="#FFF0DC">
                <BsFacebook />
              </Box>
              <Box color="#FFF0DC">
                <AiFillInstagram />
              </Box>
              <Box color="#FFF0DC">
                <GrMail />
              </Box>
            </HStack>
            <HStack
              fontFamily="inter"
              spacing="1rem"
              fontSize="1rem"
              opacity=".8"
              color="#FFF0DC"
              mt="1.7rem"
              mb="2rem"
              ml={isMobile ? "" : "2rem"}
            >
              <Box>
                <BsTelephoneFill />
              </Box>
              <Text>0994 575 4100 </Text>
            </HStack>
          </VStack>

          <VStack
            align="center"
            ml={isMobile ? "4.5rem":isTablet ?"5rem" : ""}
            mt={isMobile ? "3rem" : "7rem"}
            color="#FFF0DC"
          >
            <Text mb="1rem" fontSize={isTablet ?"12px":"18px"} fontWeight="medium">
              Quick Links
            </Text>
            <Link to="/">
              <Text fontSize="15px">Home</Text>
            </Link>
            <Link to="/menu">
              <Text fontSize="15px">Menu</Text>
            </Link>
            <Link to="/blog">
              <Text fontSize="15px">Blog</Text>
            </Link>
          </VStack>

          <VStack mt={isMobile ? "5rem" : "7.1rem"} color="#FFF0DC">
            <Text mr={isMobile ? "" : "7.1rem"} fontWeight="medium">
              Get In Touch
            </Text>
            <HStack mt="1rem" mr={isMobile ? "" : "7.1rem"}>
              <Input
                color="black"
                type="email"
                placeholder="Email"
                bg="#FFF0DC"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                onClick={handleSubscribe}
                style={{
                  fontSize: "12px",
                  background: "#FFF0DC",
                }}
              >
                Subscribed
              </Button>
            </HStack>
            <HStack
              fontFamily="inter"
              spacing="1rem"
              opacity=".8"
              color="#FFF0DC"
              mt="1rem"
              mr={isMobile ? "" : "10rem"}
              align="center"
            >
              <Box fontSize="1.8rem">
                <MdLocationOn />
              </Box>
              <Text
                //whiteSpace="nowrap"
                //overflow="hidden"
                textOverflow="ellipsis"
                fontSize={isMobile ? "12px" : "15px"}
              >
                Anong Location Natin
              </Text>
            </HStack>
          </VStack>
        </Stack>
      </Center>
    </Center>
  );
};

// import { Flex, Center, VStack, Image, Text, Box } from "@chakra-ui/react";
// import Logo from "/logo.webp";
// import ft from "../../../assets/footer.webp";
// import Spoon from "../../../assets/footer-img.webp";

// export const Footer = () => {
//   return (
//     <Flex
//       className="Footer"
//       w="100%"
//       h="100vh"
//       backgroundImage={ft}
//       backgroundSize="cover"
//       backgroundPosition="center"
//       position="absolute"
//     >
//       <Center h="100%">
//         <VStack ml="7rem" mt="12rem" align="start">
//           <Box w="10rem" h="10rem" marginLeft="2rem" marginTop="10rem">
//             <Image src={Logo} alt="Logo" />
//           </Box>
//           <Box
//             w="20rem"
//             marginLeft="2.9rem"
//             marginTop="-3rem"
//             fontWeight="300"
//             fontFamily="Inter"
//           >
//             <Text color="white">
//               Lorem ipsum dolor sit amet. Sed laudantium veniam ea dolorum
//             </Text>
//           </Box>
//         </VStack>
//       </Center>
//       <Image
//         src={Spoon}
//         transform="rotate(180deg)"
//         ml="50rem"
//         pos="absolute"
//         mt="-20"
//         zIndex={1}
//         w="60rem"
//         h="50rem"
//       />
//     </Flex>
//   );
// };
