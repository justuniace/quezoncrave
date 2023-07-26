import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Box } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogCarousel = () => {
  const rectangleColors = ["#FF5733", "#33FF57", "#5733FF", "#FF33A0", "#33FFEC"];
  const [imageIndex, setImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const sliderRef = useRef(null);

  const NextArrow = ({ onClick }) => (
    <div
      style={{
        position: "absolute",
        cursor: isSliding ? "default" : "pointer",
        top: "50%",
        right: 20,
        transform: "translateY(-50%)",
        zIndex: 10,
        marginRight: "-90px",
      }}
      onClick={isSliding ? null : onClick}
    >
      <FaArrowRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      style={{
        position: "absolute",
        cursor: isSliding ? "default" : "pointer",
        top: "50%",
        left: 20,
        transform: "translateY(-50%)",
        zIndex: 10,
        marginLeft: "-90px",
      }}
      onClick={isSliding ? null : onClick}
    >
      <FaArrowLeft />
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
      margin="10rem 10rem"
      h="200px"
      textAlign="center"
      position="relative"
    >
      <Slider {...settings}>
        {rectangleColors.map((color, idx) => (
          <Box
            key={idx}
            className={idx === imageIndex ? "activeSlide" : ""}
            sx={{
              backgroundColor: color,
              opacity: idx === imageIndex ? 1 : 0.5,
              transform: `scale(${idx === imageIndex ? 1.1 : 0.9})`,
              transition: "transform 300ms",
              zIndex: idx === imageIndex ? 1 : 0,
              width: "95%",
              height: "100%",
              borderRadius: "10px",
            }}
          ></Box>
        ))}
      </Slider>
    </Box>
  );
};

BlogCarousel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BlogCarousel;
