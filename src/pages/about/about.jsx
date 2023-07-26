import { Box, Text, useMediaQuery, Center, HStack, VStack, Image} from "@chakra-ui/react";
import aboutImage from "../../assets/aboutimage.webp";
import blob from "../../assets/blob.svg";
import AboutUsBg from "../../assets/aboutUsBg.webp";
import B1 from "../../assets/explore/explore.webp";
import BlogCarousel  from "./components/carousel";
import Brush from "../../assets/brush.svg";
import FlipImageCard1 from './components/FlipImage1';
import FlipImageCard2 from './components/FlipImage2';
import FlipImageCard3 from './components/FlipImage3';
import FlipImageCard4 from './components/FlipImage4';

export const About = () => {
  const [isMobileScreen] = useMediaQuery("(max-width: 60em)");
  const [isTabletScreen] = useMediaQuery("(max-width: 768px)");
  
  return (
    <Box w="100%" h="auto" 
            style={{
              backgroundImage: `url(${B1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",}}>
    <Center>
    <Box>
    <Image
          src={AboutUsBg}
          position="absolute"
          justifyContent="center"
          alignItems="center"
          left="0"
          right="0"
          h="45rem"
          w="90rem"
          opacity="0.3"
        />
    </Box>
    </Center>

    <Center>
      <Box mt={isMobileScreen ? "20px" : "130px"} 
            w={isMobileScreen ? "100%" : "30rem"} 
            ml={isMobileScreen ? "0px" : "10px"}>
        <Text
          position="relative"
          fontSize={isMobileScreen ? "30px" : "50px"}
          fontWeight="semibold"
          justifyContent="center"
          alignItems="center"
          textAlign={isMobileScreen ? "center":"center"}
          fontFamily="Abril-Fatface"
        >
          About <span style={{ color: "#FFC700" }}>Us</span>
          <hr
            style={{
              border: "1px solid black",
              width: isMobileScreen ? "200px" : "500px",
              margin: "10px auto",
            }}
          />
        </Text>
      </Box>
      </Center>

      <Box mt="20px" w={isMobileScreen ? "100%" : "30rem"} 
            ml={isMobileScreen ? "0" : "410px"}>
        <Text
          fontSize={isMobileScreen ? "20px" : isTabletScreen ? "22px" : "20px"}
          fontWeight="light"
          textAlign="center"
          fontFamily="Abril-Fatface"
          maxW={isMobileScreen ? "100%" : "500px"}
        >
          Quezoncrave is born out of a strong passion for the flavors, traditions, and rich food culture of Quezon Province.
          The journey began with a simple longing for the tastes of home that couldn't be satisfied elsewhere.
          Thus, the mission was born to bring the authentic flavors of Quezon to food enthusiasts both near and far.
          Beyond tantalizing taste buds, the goal is to preserve and honor the culinary heritage of Quezon Province.
          This entails deep respect for local farmers, fishermen, and artisans who provide fresh ingredients, and their hard work is showcased in every dish.
          By staying true to Quezon cuisine's authenticity, the aim is to contribute to the sustainability and appreciation of the local food culture.
        </Text>
      </Box>
      

      <Box mt={isMobileScreen ? "20px" : "150px"} 
            w={isMobileScreen ? "100%" : "40rem"} 
            ml={isMobileScreen ? "0px" : "100px"}>
        <Text
          position="relative"
          fontSize={isMobileScreen ? "30px" : "50px"}
          fontWeight="semibold"
          justifyContent="center"
          alignItems="center"
          textAlign={isMobileScreen ? "center":""}
          fontFamily="Abril-Fatface"
        >
          You Crave ?<br /><span style={{ color: "#FFC700" }}>We Cook</span>
          <hr
            style={{
              border: "1px solid black",
              width: isMobileScreen ? "200px" : "500px",
              margin: "10px auto",
              marginLeft: "0px",
            }}
          />
        </Text>
      </Box>

      <Box position="relative" top={isMobileScreen ? "0px" : "-300px"} 
            left={isMobileScreen ? "0" : "350px"}>
            <img src={blob} alt="Blob Image" 
              height={isMobileScreen ? "400px" : "700px"} 
              width={isMobileScreen ? "100%" : "700px"} 
              style={{ display: "block", margin: "0 auto" }} />
      </Box>

      <Box mt={isMobileScreen ? "-50px" : "-700px"} 
            w={isMobileScreen ? "100%" : "30rem"} 
            ml={isMobileScreen ? "0" : "120px"}>
        <Text
          position="relative"
          fontSize={isMobileScreen ? "20px" : "20px"}
          fontWeight="light"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          fontFamily="Abril-Fatface"
          maxW={isMobileScreen ? "100%" : "500px"}
        >
          At Quezoncrave, we understand that there's nothing quite like the taste of home.
          If you find yourself craving the authentic flavors of Quezon Province, look no further.
          We are here to bring the deliciousness of Quezon cuisine directly to your table.
        </Text>
      </Box>

      <Box mt={isMobileScreen ? "20px" : "50px"} 
            w={isMobileScreen ? "100%" : "40rem"} 
            ml={isMobileScreen ? "0px" : "300px"}>
       <Center>
         <VStack>
           <Box>
             <Text
                mt="150"
                position="relative"
                fontSize={isMobileScreen ? "30px" : "50px"}
                fontWeight="semibold"
                justifyContent="center"
                alignItems="center"
                textAlign={isMobileScreen ? "center":""}
                fontFamily="Abril-Fatface">
              A Taste of <span style={{ color: "#FFC700" }}>Home</span>
          </Text>
           </Box>
           <Box ml="14rem" mt="-1rem" w="9rem">
             <Image src={Brush} />
           </Box>
         </VStack>
       </Center>
       <Center>
       <Box width="180%" height="200%" mt="-100px" ml="10">
       <BlogCarousel/>
       </Box>
       </Center>
    </Box>

    <Box mt={isMobileScreen ? "20px" : "-10px"} 
            w={isMobileScreen ? "100%" : "40rem"} 
            ml={isMobileScreen ? "0px" : "300px"}>
       <Center>
         <VStack>
           <Box>
           <Text
            position="relative"
            fontSize={isMobileScreen ? "30px" : "50px"}
            fontWeight="semibold"
            justifyContent="center"
            alignItems="center"
            textAlign={isMobileScreen ? "center":""}
            fontFamily="Abril-Fatface">
              Our <span style={{ color: "#FFC700" }}>Best Sellers</span>
          </Text>
           </Box>
           <Box ml="100px" mt="-15px" w="200px">
             <Image src={Brush}/>
           </Box>
         </VStack>
       </Center>
    </Box>

<HStack>
    <Box w="100%" h="auto" position="relative" mt="50px" ml="10px" mb="10px">
      <FlipImageCard1/>
    </Box>

    <Box w="100%" h="auto" position="relative" mt="50px" ml="-5px" mr="px" mb="10px">
      <FlipImageCard2/>
    </Box>

    <Box w="100%" h="auto" position="relative" mt="50px" ml="-5px" mr="-5px" mb="10px">
      <FlipImageCard3/>
    </Box>

    <Box w="100%" h="auto" position="relative" mt="50px" ml="-15x" mb="10px">
      <FlipImageCard4/>
    </Box>
</HStack>

<Box mt={isMobileScreen ? "20px" : "100px"} 
            w={isMobileScreen ? "100%" : "40rem"} 
            ml={isMobileScreen ? "0px" : "300px"}>
       <Center>
         <VStack>
           <Box>
           <Text
            position="relative"
            fontSize={isMobileScreen ? "30px" : "50px"}
            fontWeight="semibold"
            justifyContent="center"
            alignItems="center"
            textAlign={isMobileScreen ? "center":""}
            fontFamily="Abril-Fatface">
              Meet <span style={{ color: "#FFC700" }}>Our Chefs</span>
          </Text>
           </Box>
           <Box ml="100px" mt="-15px" w="200px">
             <Image src={Brush}/>
           </Box>
         </VStack>
       </Center>
    </Box>

    <Center>
       <Box width="180%" height="200%" mt="-100px" ml="10">
       
       </Box>
       </Center>

       
  </Box>
  );
};
