import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
//import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Box,  VStack, Text } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ChefCarousel({ carouselItems }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const sliderRef = useRef(null);

  const NextArrow = ({ onClick }) => (
    <div
      style={{
        position: "absolute",
        cursor: isSliding ? "default" : "pointer",
        top: "110%",
        right: "45%",
        transform: "translateY(-50%)",
        zIndex: 10,
      }}
      onClick={isSliding ? null : onClick}
    >
      <BsFillArrowRightCircleFill style={{ fontSize: "30px" }} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      style={{
        position: "absolute",
        cursor: isSliding ? "default" : "pointer",
        top: "110%",
        left: "45%",
        transform: "translateY(-50%)",
        zIndex: 10,
      }}
      onClick={isSliding ? null : onClick}
    >
      <BsFillArrowLeftCircleFill
        style={{
          fontSize: "30px",
          boxShadow: "2xl",
          _hover: { transform: "scale(5)" },
          transition: "transform 0.1s",
        }}
      />
    </div>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleBeforeChange = (_, next) => {
    setIsSliding(true);
    setImageIndex(next);
  };

  const handleAfterChange = () => {
    setIsSliding(false);
  };

  const settings = {
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
    ref: sliderRef,
  };

  return (
    <Box
      w="80%"
      margin=" 7rem  10rem 12rem"
      textAlign="center"
      position="relative"
    >
      <Slider {...settings}>
        {carouselItems.map((item, idx) => (
          <Box
            key={idx}
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
            sx={{
              opacity: idx === imageIndex ? 1 : 0.5,
              transform: `scale(${idx === imageIndex ? 1.1 : 0.7})`,
              transition: "transform 300ms",
              zIndex: idx === imageIndex ? 1 : 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "gray",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              border: "2px solid white",
              borderRadius: "100px",
               w:"21rem",
        h:"27rem",
              padding: "30px",
              boxSizing: "border-box",
            }}
          >
            <VStack spacing="2rem">
              <Box>
                <img
                  src={item.image}
                
                  style={{
                    width: "300px",
                    height: "280px",
                    borderRadius: "55px",
                    marginTop: "5px",
                    marginRight: "5px",
                    marginBottom: "5px",
                    marginLeft: "5px",
                  }}
                />
              </Box>
              <Text fontSize="18px" mt="-4">
                {item.author}
              </Text>
            </VStack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
ChefCarousel.propTypes = {
  onClick: PropTypes.func.isRequired,
  carouselItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired, // Add the author propType
    })
  ).isRequired,
};

export default ChefCarousel;
