import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Food from "../../../assets/Blog/carousel.jpg";
import Food1 from "../../../assets/Blog/adobs.webp";
import Food2 from "../../../assets/Blog/bistek.webp";
import Food3 from "../../../assets/Blog/kare.webp";
import Food4 from "../../../assets/Blog/sinigang.webp";




const BlogCarousel = () => {
  const images = [Food, Food1, Food2, Food3, Food4];
  const [imageIndex, setImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const sliderRef = useRef(null);

  const NextArrow = ({ onClick }) => (
    <div
      style={{
        position: "absolute",
        cursor: isSliding ? "default" : "pointer",
        top: "120%",
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
        top: "120%",
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

  const slidesToShow = useBreakpointValue({ base: 1, md: 3, lg: 3});

  const settings = {
    centerMode: true,
    centerPadding: "10px",
    slidesToShow,
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
      w="100%"
      margin="10rem 0"
      h="200%"
      textAlign="center"
      position="relative"
      px={{ base: "20px", md: "50px" }}
    >
      <Slider {...settings}>
        {images.map((img, idx) => (
          <Box
            key={idx}
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
            sx={{
              borderRadius: "50px",
              opacity: idx === imageIndex ? 1 : 0.5,
              transform: `scale(${idx === imageIndex ? 1.1 : 0.9})`,
              transition: "transform 300ms",
              zIndex: idx === imageIndex ? 1 : 0,
            }}
          >
            <img src={img} alt={`Slide ${idx + 1}`} width="95%" />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

BlogCarousel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BlogCarousel;