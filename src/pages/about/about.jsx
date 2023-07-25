import { Box, Text, useMediaQuery, Center, HStack, VStack, Image} from "@chakra-ui/react";
import aboutImage from "../../assets/aboutimage.webp";
import blob from "../../assets/blob.svg";

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
    <Box w="100%" h="auto">
      <Box mt={isMobileScreen ? "120px" : "120px"} 
            w={isMobileScreen ? "100%" : "20rem"} 
            ml={isMobileScreen ? "0" : "-20px"}>
        <img src={aboutImage} alt="Image 1" 
            height="250px" 
            width="250px" 
            style={{ display: "block", margin: "0 auto" }} />
      </Box>

      <Box mt={isMobileScreen ? "10px" : "-200px"} 
            w={isMobileScreen ? "100%" : "30rem"} 
            ml={isMobileScreen ? "0px" : "200px"}>
        <img src={aboutImage} alt="Image 2" 
            height="250px" 
            width="250px" 
            style={{ display: "block", margin: "0 auto" }} />
      </Box>

      <Box mt="10px" w={isMobileScreen ? "100%" : "40rem"} 
            ml={isMobileScreen ? "0px" : "-180px"}>
        <img src={aboutImage} alt="Image 1" 
              height="250px" width="250px" 
              style={{ display: "block", margin: "0 auto" }}/>
      </Box>

      <Box mt={isMobileScreen ? "10px" : "-200px"} 
            w={isMobileScreen ? "100%" : "30rem"} 
            ml={isMobileScreen ? "0px" : "200px"}>
        <img src={aboutImage} alt="Image 4" 
              height="250px" width="250px" 
              style={{ display: "block", margin: "0 auto" }}/>
      </Box>

      <Box mt={isMobileScreen ? "20px" : "-600px"} 
            w={isMobileScreen ? "100%" : "30rem"} 
            ml={isMobileScreen ? "0px" : "600px"}>
        <Text
          position="relative"
          fontSize={isMobileScreen ? "30px" : "50px"}
          fontWeight="semibold"
          justifyContent="center"
          alignItems="center"
          textAlign={isMobileScreen ? "center":""}
          fontFamily="Abril-Fatface"
        >
          About <span style={{ color: "#FFC700" }}>Us</span>
          <hr
            style={{
              border: "1px solid black",
              width: isMobileScreen ? "200px" : "550px",
              margin: "10px auto",
            }}
          />
        </Text>
      </Box>

      <Box mt="20px" w={isMobileScreen ? "100%" : "30rem"} 
            ml={isMobileScreen ? "0" : "650px"}>
        <Text
          position="relative"
          fontSize={isMobileScreen ? "20px" : isTabletScreen ? "22px" : "20px"}
          fontWeight="light"
          justifyContent="center"
          alignItems="center"
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
            ml={isMobileScreen ? "0px" : "30px"}>
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
              width: isMobileScreen ? "200px" : "650px",
              margin: "10px auto",
            }}
          />
        </Text>
      </Box>

      <Box position="relative" top={isMobileScreen ? "0px" : "-200px"} 
            left={isMobileScreen ? "0" : "350px"}>
        <img src={blob} alt="Blob Image" 
              height={isMobileScreen ? "400px" : "500px"} 
              width={isMobileScreen ? "100%" : "500px"} 
              style={{ display: "block", margin: "0 auto" }} />
      </Box>

      <Box mt={isMobileScreen ? "-50px" : "-480px"} 
            w={isMobileScreen ? "100%" : "30rem"} 
            ml={isMobileScreen ? "0" : "100px"}>
        <Text
          position="relative"
          fontSize={isMobileScreen ? "20px" : "20px"}
          fontWeight="light"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          fontFamily="Abril-Fatface"
          maxW={isMobileScreen ? "100%" : "400px"}
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

    <Box w="100%" h="auto" position="relative" mt="50px" ml="-15px" mb="10px">
      <FlipImageCard2/>
    </Box>

    <Box w="100%" h="auto" position="relative" mt="50px" ml="-15px" mb="10px">
      <FlipImageCard3/>
    </Box>

    <Box w="100%" h="auto" position="relative" mt="50px" ml="-30x" mb="10px">
      <FlipImageCard4/>
    </Box>

</HStack>

  </Box>
  );
};
