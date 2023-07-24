import { Box, Text} from "@chakra-ui/react";
import aboutImage from "../../assets/aboutimage.webp";
import blob from "../../assets/blob.svg"

export const About = () => {
  return (
    <Box overflow="auto">
        
          <Box mt="150" w="40rem" ml="20px"> 
          <img src = {aboutImage}
          alt="Image 1"
          height="250px"
          width="250px"/>
          </Box>

          <Box mt="-200px" w="30rem" ml="300px">
          <img src = {aboutImage}
          alt="Image 2"
          height="250px"
          width="250px"/>
          </Box>

          <Box mt="-30px" w="30rem" ml="20px">
          <img src = {aboutImage}
          alt="Image 3"
          height="250px"
          width="250px"/>
          </Box>

          <Box mt="-200px" w="30rem" ml="300px">
          <img src = {aboutImage}
          alt="Image 4"
          height="250px"
          width="250px"/>
          </Box>

          <Box mt="-600px" w="30rem" ml="600px">
          <Text
            position="absolute"
            fontSize="50px"
            fontWeight="semibold"
            justifyContent="center"
            alignItems="center"
            fontFamily="Abril-Fatface">
            About <span style={{color:"#FFC700"}}>Us</span>
            <hr style={{ border: "1px solid black", width: "650px", margin: "10px auto" }}/>
          </Text>
          </Box>

          <Box mt="100px" w="30rem" ml="600px">
          <Text
            position="absolute"
            fontSize="25px"
            fontWeight="light"
            justifyContent="center"
            alignItems="center"
            fontFamily="Abril-Fatface">
            Quezoncrave is born out of a strong passion for the flavors, traditions, and rich food culture of Quezon Province. 
            The journey began with a simple longing for the tastes of home that couldn't be satisfied elsewhere. 
            Thus, the mission was born to bring the authentic flavors of Quezon to food enthusiasts both near and far. 
            Beyond tantalizing taste buds, the goal is to preserve and honor the culinary heritage of Quezon Province. 
            This entails deep respect for local farmers, fishermen, and artisans who provide fresh ingredients, and their hard work is showcased in every dish.
            By staying true to Quezon cuisine's authenticity, the aim is to contribute to the sustainability and appreciation of the local food culture.
          </Text>
        </Box>

        <Box mt="700" w="40rem" ml="20px">
          <Text
            position="absolute"
            fontSize="50px"
            fontWeight="semibold"
            justifyContent="center"
            alignItems="center"
            fontFamily="Abril-Fatface">
            You Crave ?<br></br><span style={{color:"#FFC700"}}>We Cook</span>
            <hr style={{ border: "1px solid black", width: "500px", margin: "10px auto" }}/>
          </Text>
        </Box>

        {/* Blob Image */}
      <Box
        position="absolute"
        top="800px" // Adjust the top position as per your requirement
        left="700px" // Adjust the left position as per your requirement
        zIndex="1" // Set a higher zIndex to make it appear in front of other elements
      >
        <img src={blob} alt="Blob Image" height="500px" width="500px" />
      </Box>

           <Box mt="900px" w="30rem" ml="20px">
          <Text
            position="absolute"
            fontSize="25px"
            fontWeight="light"
            justifyContent="center"
            alignItems="center"
            fontFamily="Abril-Fatface"
            maxW="700">
            At Quezoncrave, we understand that there's nothing quite like the taste of home. 
            If you find yourself craving the authentic flavors of Quezon Province, look no further. 
            We are here to bring the deliciousness of Quezon cuisine directly to your table.
            </Text>
        </Box>  

    </Box>
  );
};
