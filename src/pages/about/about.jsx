import { Box, Text, useMediaQuery, Center, HStack, VStack, Image} from "@chakra-ui/react";
//import aboutImage from "../../assets/aboutimage.webp";
import blob from "../../assets/blob.svg";
import AboutUsBg from "../../assets/aboutUsBg.webp";
import B1 from "../../assets/explore/explore.webp";
import BlogCarousel  from "./components/carousel";

import FlipImageCard1 from './components/FlipImage1';
 import FlipImageCard2 from './components/FlipImage2';
import FlipImageCard3 from './components/FlipImage3';
import FlipImageCard4 from './components/FlipImage4';
import {Reveal} from "../components/Observer/useObserver"
import ChefModal from "../about/components/chefModal";
import Eu from "../../assets/eu.jpg";
import mc from "../../assets/mc.webp";
import cha from "../../assets/cha.webp";
import arv from "../../assets/arv.webp";
import dan from "../../assets/dan.webp";




export const Blog = () => {
  const [isMobileScreen] = useMediaQuery("(max-width: 60em)");
  const [isTabletScreen] = useMediaQuery("(max-width: 768px)");
  
  
   const carouselItems = [
    
     { image: mc, 
     author: "Mc Vincent Paredes" },
     {
       image: Eu,
       author: "Eunice C. Valdez",
     },
     {
       image: arv,
       author: "Arvin Lroga",
     },
     {
       image:cha,
       author: "Chrishalyn Apor",
     },
     {
       image:dan,
       author: "Jan Daniel Garduna",
     },
    

    
   ];


  return (
    <Box
      w="100%"
      h="auto"
      style={{
        backgroundImage: `url(${B1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box />
      <Box w="100%" h="100vh" bg="black" opacity="0.9">
        <Image
          src={AboutUsBg}
          position="relative"
          justifyContent="center"
          alignItems="center"
          left="0"
          right="0"
          h="100vh"
          w="100%"
          opacity="0.2"
          zIndex={2}
        />
        <VStack spacing="5rem" align={"center"}>
          <Box zIndex={2} mt={"-37rem"}>
            <Reveal width="fit-content">
              <Text
                position="relative"
                fontSize={isMobileScreen ? "30px" : "50px"}
                fontWeight="semibold"
                justifyContent="center"
                alignItems="center"
                textAlign={isMobileScreen ? "center" : "center"}
                fontFamily="Abril-Fatface"
                color="white"
              >
                Quezon <span style={{ color: "#FFC700" }}>Crave</span>
                {/* <hr
              style={{
                border: "1px solid black",
                width: isMobileScreen ? "200px" : "500px",
                margin: "10px auto",
              }}
            /> */}
              </Text>
            </Reveal>
          </Box>

          <Box w="50rem" zIndex={2}>
            <Reveal width="fit-content">
              <Text
                fontStyle="inter"
                fontWeight="thin"
                color="white"
                opacity={2}
                fontSize={
                  isMobileScreen ? "20px" : isTabletScreen ? "22px" : "20px"
                }
                textAlign="center"
              >
                Quezoncrave is born out of a strong passion for the flavors,
                traditions, and rich food culture of Quezon Province. The
                journey began with a simple longing for the tastes of home that
                couldn`t be satisfied elsewhere. Thus, the mission was born to
                bring the authentic flavors of Quezon to food enthusiasts both
                near and far. Beyond tantalizing taste buds, the goal is to
                preserve and honor the culinary heritage of Quezon Province.
                This entails deep respect for local farmers, fishermen, and
                artisans who provide fresh ingredients, and their hard work is
                showcased in every dish. By staying true to Quezon cuisine`s
                authenticity, the aim is to contribute to the sustainability and
                appreciation of the local food culture.
              </Text>
            </Reveal>
          </Box>
        </VStack>
      </Box>
      <HStack ml="10rem">
        <VStack spacing={"4rem"} align={"start"}>
          <Box>
            <Reveal width="fit-content">
              <Text
                fontSize={isMobileScreen ? "30px" : "40px"}
                fontWeight="semibold"
                justifyContent="justify"
                alignItems="center"
                textAlign={isMobileScreen ? "center" : ""}
                fontFamily="Abril-Fatface"
              >
                You Crave ? <span style={{ color: "#FFC700" }}>We Cook</span>
              </Text>
            </Reveal>
          </Box>
          <Box>
            <Reveal width="fit-content">
              <Text
                position="relative"
                fontSize={isMobileScreen ? "20px" : "20px"}
                fontWeight="light"
                justifyContent="justify"
                fontFamily="Abril-Fatface"
                maxW={isMobileScreen ? "100%" : "500px"}
              >
                At Quezoncrave, we understand that there`s nothing quite like
                the taste of home. If you find yourself craving the authentic
                flavors of Quezon Province, look no further. We are here to
                bring the deliciousness of Quezon cuisine directly to your
                table.
              </Text>
            </Reveal>
          </Box>
        </VStack>

        <Box ml="10rem">
          <Reveal width="fit-content">
            <img
              src={blob}
              alt="Blob Image"
              height={isMobileScreen ? "400px" : "700px"}
              width={isMobileScreen ? "100%" : "700px"}
            />
          </Reveal>
        </Box>
      </HStack>

      <VStack spacing="4rem">
        <Box>
          <Reveal width="fit-content">
            <Text
              position="relative"
              fontSize={isMobileScreen ? "30px" : "50px"}
              fontWeight="semibold"
              justifyContent="center"
              alignItems="center"
              textAlign={isMobileScreen ? "center" : ""}
              fontFamily="Abril-Fatface"
            >
              A Taste of <span style={{ color: "#FFC700" }}>Home</span>
            </Text>
          </Reveal>
        </Box>
        <Reveal width="fit-content">
          <Text>
            A taste of quezon for those that craves authentic dish from the
            region. home cooked giving it the vibe of home!
          </Text>
        </Reveal>
      </VStack>

      <Center>
        <Box width="90%" height="200%" mt="-4rem" ml="10">
          <BlogCarousel />
        </Box>
      </Center>

      <VStack mt="5rem">
        <Box>
          <Reveal width="fit-content">
            <Text
              position="relative"
              fontSize={isMobileScreen ? "30px" : "50px"}
              fontWeight="semibold"
              textAlign={isMobileScreen ? "center" : ""}
              fontFamily="Abril-Fatface"
            >
              Our <span style={{ color: "#FFC700" }}>Best Sellers</span>
            </Text>
          </Reveal>
        </Box>
      </VStack>

      <VStack mt="2rem">
        <Reveal width="fit-content">
          <HStack spacing={"10rem"}>
            <FlipImageCard1 />
            <FlipImageCard2 />
          </HStack>
          <HStack spacing={"10rem"}>
            <FlipImageCard3 />
            <FlipImageCard4 />
          </HStack>
        </Reveal>
      </VStack>

      <VStack mt="10rem">
        <Box>
          <Reveal width="fit-content">
            <Text
              position="relative"
              fontSize={isMobileScreen ? "30px" : "50px"}
              fontWeight="semibold"
              textAlign={isMobileScreen ? "center" : ""}
              fontFamily="Abril-Fatface"
            >
              Meet <span style={{ color: "#FFC700" }}>Our Chefs</span>
            </Text>
          </Reveal>
        </Box>
      </VStack>
     <ChefModal carouselItems={carouselItems}/>
      
    </Box>
  );
};
