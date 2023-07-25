import { Box, Text, useMediaQuery, Center, Highlight, VStack, Image} from "@chakra-ui/react";
import aboutImage from "../../assets/aboutimage.webp";
import blob from "../../assets/blob.svg";

 import BlogCarousel  from "./components/carousel";
import Brush from "../../assets/brush.svg";

export const About = () => {
  const [isMobileScreen] = useMediaQuery("(max-width: 60em)");
  const [isTabletScreen] = useMediaQuery("(max-width: 768px)");

  return (
    <Box w="100%" h="auto">
      <Box mt={isMobileScreen ? "120px" : "120px"} w={isMobileScreen ? "100%" : "20rem"} ml={isMobileScreen ? "0" : "-20px"}>
        <img src={aboutImage} alt="Image 1" height="250px" width="250px" style={{ display: "block", margin: "0 auto" }} />
      </Box>

      <Box mt={isMobileScreen ? "10px" : "-200px"} w={isMobileScreen ? "100%" : "30rem"} ml={isMobileScreen ? "0px" : "200px"}>
        <img src={aboutImage} alt="Image 2" height="250px" width="250px" style={{ display: "block", margin: "0 auto" }} />
      </Box>

      <Box mt="10px" w={isMobileScreen ? "100%" : "40rem"} ml={isMobileScreen ? "0px" : "-180px"}>
        <img src={aboutImage} alt="Image 1" height="250px" width="250px" style={{ display: "block", margin: "0 auto" }}/>
      </Box>

      <Box mt={isMobileScreen ? "10px" : "-200px"} w={isMobileScreen ? "100%" : "30rem"} ml={isMobileScreen ? "0px" : "200px"}>
        <img src={aboutImage} alt="Image 4" height="250px" width="250px" style={{ display: "block", margin: "0 auto" }}/>
      </Box>

      <Box mt={isMobileScreen ? "20px" : "-600px"} w={isMobileScreen ? "100%" : "30rem"} ml={isMobileScreen ? "0px" : "600px"}>
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
              width: isMobileScreen ? "200px" : "500px",
              margin: "10px auto",
            }}
          />
        </Text>
      </Box>

      <Box mt="20px" w={isMobileScreen ? "100%" : "30rem"} ml={isMobileScreen ? "0" : "650px"}>
        <Text
          position="relative"
          fontSize={isMobileScreen ? "20px" : isTabletScreen ? "22px" : "20px"}
          fontWeight="light"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          fontFamily="Abril-Fatface"
          maxW={isMobileScreen ? "100%" : "400px"}
        >
          Quezoncrave is born out of a strong passion for the flavors, traditions, and rich food culture of Quezon Province.
          The journey began with a simple longing for the tastes of home that couldn't be satisfied elsewhere.
          Thus, the mission was born to bring the authentic flavors of Quezon to food enthusiasts both near and far.
          Beyond tantalizing taste buds, the goal is to preserve and honor the culinary heritage of Quezon Province.
          This entails deep respect for local farmers, fishermen, and artisans who provide fresh ingredients, and their hard work is showcased in every dish.
          By staying true to Quezon cuisine's authenticity, the aim is to contribute to the sustainability and appreciation of the local food culture.
        </Text>
      </Box>

      <Box mt={isMobileScreen ? "20px" : "150px"} w={isMobileScreen ? "100%" : "40rem"} ml={isMobileScreen ? "0px" : "30px"}>
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

      <Box position="relative" top={isMobileScreen ? "px" : "-250px"} left={isMobileScreen ? "0" : "350px"}>
        <img src={blob} alt="Blob Image" height={isMobileScreen ? "400px" : "500px"} width={isMobileScreen ? "100%" : "500px"} style={{ display: "block", margin: "0 auto" }} />
      </Box>

      <Box mt={isMobileScreen ? "-50px" : "-480px"} w={isMobileScreen ? "100%" : "30rem"} ml={isMobileScreen ? "0" : "100px"}>
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

     <Box w="100%" h="auto">
       <Center>
         <VStack>
           <Box>
             <Text
               top="170"
               position="relative"
               fontSize="50px"
               fontWeight="semibold"
               justifyContent="center"
               alignItems="center"
               fontFamily="Abril-Fatface"
             >
               <Highlight
                 query="Home"
                 styles={{
                   color: "#FFC700",
                 }}
               >
                 A Taste of Home
               </Highlight>
             </Text>
           </Box>
           <Box ml="14rem" mt="9rem" w="9rem">
             <Image src={Brush} />
           </Box>
         </VStack>
       </Center>
       <BlogCarousel />
    </Box>

    </Box>
  );
};
