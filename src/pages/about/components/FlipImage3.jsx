import React from 'react';
import Flip from "../../../assets/Flip.webp";
import { Center, Box } from '@chakra-ui/react';

const FlipImageCard = ({ frontText, backText, shape }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const shapeStyles = {
    width: '300px',
    height: '400px',
    borderRadius: '10px',
    background: '#FFC700',
    transition: 'transform 2.5s',
    transformStyle: 'preserve-3d',
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
  };

  const frontStyles = {
    position: 'relative',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backfaceVisibility: 'hidden', // Hide the backface of the card
  };


  return (
    <Box
    className="container1"
    onMouseEnter={() => setIsFlipped(true)}

    onClick={flipCard} // Toggle the flip state on click
    onTouchStart={flipCard}
    style={shapeStyles}
  >
      <Box className="front" style={frontStyles}>
        <Center>
      <img
          mt="5px"
          src={Flip}
          alt="Front Image"
          style={{ width: '95%', height: '100%', borderRadius: '10px'}}
        />
        </Center>
        <h2>{frontText}</h2>
        <p>
          Dish Name
        </p>
      </Box>
      <Box className="back" style={{ ...frontStyles, transform: 'rotateY(180deg)' }}>
        <h2>{backText}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, nisi.
        </p>
      </Box>
    </Box>
  );
};

const App = () => {
    return (
      <Box className="container">
        <FlipImageCard frontText="Recipe 3" />
      </Box>
    );
  };
  

export default App;
