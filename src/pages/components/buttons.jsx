import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

function CustomButton({ buttonText, buttonLink, isBlackButton }) {
  const handleClick = () => {
   
    console.log("Button clicked!");
  };

  return (
    <Link to={buttonLink}>
      <Button
        position="absolute"
        padding="20px 90px"
        bg={isBlackButton ? "transparent" : "#FFC700"}
        borderRadius="15px"
        boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)" // Dropdown shadow effect
        color={isBlackButton ? "black" : "white"}
        border={isBlackButton ? "2px solid #FFC700" : "2px solid #FFC700"} // Border color
        fontFamily="Inter"
        fontWeight="Medium"
        _hover={{
          bg: isBlackButton ? "#FFC700" : "transparent",
          color: isBlackButton ? "white" : "white",
        }}
        _active={{
          bg: isBlackButton ? "white" : "transparent",
          color: isBlackButton ? "white" : "white",
        }}
        onClick={handleClick}
      >
        {buttonText}
      </Button>
    </Link>
  );
}

CustomButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  isBlackButton: PropTypes.bool, // New prop for black button styling
};

CustomButton.defaultProps = {
  isBlackButton: false, // Default value for isBlackButton prop
};

export default CustomButton;
