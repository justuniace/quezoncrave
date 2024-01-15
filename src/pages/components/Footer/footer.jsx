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

  // const history = useHistory();

   const facebookProfileURL =
     "https://web.facebook.com/profile.php?id=100095034350090&mibextid=2JQ9oc&_rdc=1&_rdr";

     const Instagram =
       "https://instagram.com/quezoncrave?igshid=ZDc4ODBmNjlmNQ==";

  const gmail = 'quezoncrave@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${gmail}?subject=Your%20Subject%20Here&body=Your%20message%20goes%20here.%0A%0ARegards,%0AYour%20Name`;
  };
  const handleScrollToTop = () => {
    // Find the element to scroll to (documentElement for modern browsers, body for older ones)
    const element = document.documentElement || document.body;
    // Scroll to the top of the page smoothly
    element.scrollIntoView({ behavior: "smooth" });
  };

  const googleMapURL = "https://goo.gl/maps/dmBL5TTeF6honCwH8";

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
      //mt="4rem"
      p="1rem"
      w="100%"
      h={isMobile ? "auto" : "25rem"}
      bg="#262424"
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

            <Box
              w={isMobile ? "16rem" : isTablet ? "9rem" : "16rem"}
              mt="-2rem"
            >
              <Text
                w={isMobile ? "16rem" : isTablet ? "9rem" : "16rem"}
                ml={isMobile ? "4rem" : isTablet ? "1rem" : "4rem"}
                fontSize={isMobile ? "14px" : isTablet ? "12px" : "14px"}
                color="white"
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
              <Box
                as="a"
                href={facebookProfileURL}
                target="_blank"
                rel="noopener noreferrer"
                color="white"
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.2)",
                  transition: "transform 0.3s ease",
                }}
              >
                <BsFacebook />
              </Box>
              <Box
                as="a"
                href={Instagram}
                target="_blank"
                rel="noopener noreferrer"
                color="white"
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.2)",
                  transition: "transform 0.3s ease",
                }}
              >
                <AiFillInstagram />
              </Box>
              <Box
                as="span"
                onClick={handleEmailClick}
                color="white"
                _hover={{
                  transform: "scale(1.2)",
                  transition: "transform 0.3s ease",
                }}
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                <GrMail />
              </Box>
            </HStack>
            <HStack
              fontFamily="inter"
              spacing="1rem"
              fontSize="1rem"
              opacity=".8"
              color="white"
              mt="1.7rem"
              mb="2rem"
              ml={isMobile ? "" : "2rem"}
            >
              <Box
                color="white"
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.2)",
                  transition: "transform 0.3s ease",
                }}
              >
                <BsTelephoneFill />
              </Box>
              <Text fontSize="14px">0994 575 4100 </Text>
            </HStack>
          </VStack>

          <VStack
            align="center"
            ml={isMobile ? "4.5rem" : isTablet ? "5rem" : ""}
            mt={isMobile ? "3rem" : "7rem"}
            color="white"
            onClick={handleScrollToTop}
          >
            <Text
              mb="1rem"
              fontSize={isTablet ? "12px" : isMobile ? "18px" : "18px"}
              fontWeight="medium"
            >
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

          <VStack mt={isMobile ? "5rem" : "7.1rem"} color="white">
            <Text mr={isMobile ? "" : "7.1rem"} fontWeight="medium">
              Get In Touch
            </Text>
            <HStack mt="1rem" mr={isMobile ? "" : "7.1rem"}>
              <Input
                color="black"
                type="email"
                placeholder="Email"
                bg="white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                onClick={handleSubscribe}
                style={{
                  cursor: "pointer",
                  fontSize: "12px",
                  background: "#FFF0DC",
                }}
              >
                Subscribe
              </Button>
            </HStack>
            <HStack
              onClick={() => window.open(googleMapURL, "_blank")}
              fontFamily="inter"
              spacing="1rem"
              opacity=".8"
              color="white"
              mt="1rem"
              mr={isMobile ? "" : "10rem"}
              align="center"
            >
              <Box
                fontSize="1.8rem"
                as="a"
                href="#"
                color="white"
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.2)",
                  transition: "transform 0.3s ease",
                }}
              >
                <MdLocationOn />
              </Box>
              <Text
                //whiteSpace="nowrap"
                //overflow="hidden"
                style={{ cursor: "pointer" }}
                textOverflow="ellipsis"
                fontSize={isMobile ? "12px" : "15px"}
              >
                752 P. Burgos Ave, San Roque, Cavite City, 4100 Cavite
              </Text>
            </HStack>
          </VStack>
        </Stack>
        <Stack
          mt={isMobile ? "2rem" : "2rem"}
          direction={{ base: "column", md: "row" }}
          fontFamily="inter"
          w="90%"
          align={{ base: "center", md: "start" }}
          justifyContent="space-between"
          color="white"
          fontSize={isMobile ? "7px" : "12px"}
          opacity=".8"
        >
          <Text>Copyright 2023 Quezon Crave.</Text>
          <HStack mr={isMobile ? "" : "6rem"} onClick={handleScrollToTop}>
            <Link to="privacy-policy">
              <Text>Privacy Policy</Text>
            </Link>{" "}
            <Text>| All rights reserved.</Text>
          </HStack>
        </Stack>
      </Center>
    </Center>
  );
};
