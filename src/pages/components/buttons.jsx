import { Link } from "react-router-dom";
import { Button, useMediaQuery} from "@chakra-ui/react";
import PropTypes from "prop-types";

function CustomButton({
  icon,
  buttonText,
  buttonLink,
  isYellowButton,
  width,
  hasBorder,
}) {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  const [isMobileScreen] = useMediaQuery("(max-width: 40em)");

  return (
    <Link to={buttonLink}>
      <Button
     
        fontSize={isMobileScreen ? "10px" :""}
        position="absolute"
        padding="20px 90px"
        bg={isYellowButton ? "transparent" : "#FFC700"}
        borderRadius="15px"
        boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
        color={isYellowButton ? "#FFC700" : "white"}
        border={
          hasBorder
            ? isYellowButton
              ? "2px solid #FFC700"
              : "2px solid #FFC700"
            : "none"
        }
        fontFamily="Inter"
        fontWeight="bold"
        leftIcon={icon}
        _hover={{
          bg: isYellowButton ? "#FFC700" : "transparent",
          color: isYellowButton ? "white" : "#FFC700",
        }}
        _active={{
          bg: isYellowButton ? "white" : "transparent",
          color: isYellowButton ? "white" : "white",
        }}
        onClick={handleClick}
        width={width}
      >
        {buttonText}
      </Button>
    </Link>
  );
}

CustomButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  isYellowButton: PropTypes.bool,
  icon: PropTypes.elementType.isRequired,
  width: PropTypes.string,
  hasBorder: PropTypes.bool, 
};

CustomButton.defaultProps = {
  isYellowButton: false,
  width: "auto",
  hasBorder: true, 
};

export default CustomButton;
