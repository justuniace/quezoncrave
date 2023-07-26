import React from 'react';
import bistekTagalog from "../../../assets/Blog/bistekTagalog.webp";
import { Center, Box, Button ,Text} from '@chakra-ui/react';

const FlipImageCard = ({ frontText}) => {

  const shapeStyles = {
    width: '300px',
    height: '400px',
    borderRadius: '10px',
    background: '#FFF0DC',
    transition: 'transform 2.5s',
    transformStyle: 'preserve-3d',
  };

  return (

    <Box
    className="container1"
    bg="gray.100"
    boxShadow="2xl"
    _hover={{ transform: "scale(1.05)" }}
    transition={{ duration: 10 }}
  >
      <Box className="front" style={shapeStyles}>
        <Center>
      <img
          src={bistekTagalog}
          alt="Front Image"
          style={{ width: '280px', 
          height: '300px', 
          borderRadius: '10px', 
          marginTop: "5px",
          marginRight: "5px",
          marginBottom: "5px",
          marginLeft: "5px"}}
        />
        </Center>
        <h2>{frontText}</h2>
        <Text textAlign="center"
              fontWeight="semibold"
              fontSize="20px"
              fontFamily="Abril-Fatface">
          Bistek Tagalog
        </Text>
        <Center mt="1rem">
          <Button onClick="Recipe-1" 
                  colorScheme="yellow" 
                  backgroundColor="#452B1A">
                    See Recipe 
                    </Button>
        </Center>
      </Box>
    </Box>
  );
};

const App = () => {
    return (
      <Box className="container">
        <FlipImageCard/>
      </Box>
    );
  };
  

export default App;
