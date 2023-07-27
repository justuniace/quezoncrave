import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
//import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Box,Icon,HStack,VStack, Text} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  AiFillStar } from "react-icons/ai";


const BlogCarousel = ({carouselItems}) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const sliderRef = useRef(null);

 const NextArrow = ({ onClick }) => (
   <div
     style={{
       position: "absolute",
       cursor: isSliding ? "default" : "pointer",
       top: "130%",
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
        top: "130%",
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
    <Box w="80%" margin=" 7rem  10rem 12rem" textAlign="center" position="relative">
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
              background: "#262424",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              border: "2px solid white",
              borderRadius: "50px",
              height: "13rem",
              width: "10rem",
              padding: "30px",
              boxSizing: "border-box",
             
             
            }}
          >
            <VStack spacing="2rem">
              <HStack mt="2" justifyContent="center">
                <Icon as={AiFillStar} color="#FFC700" fontSize="22px" />
                <Icon as={AiFillStar} color="#FFC700" fontSize="22px" />
                <Icon as={AiFillStar} color="#FFC700" fontSize="22px" />
                <Icon as={AiFillStar} color="#FFC700" fontSize="22px" />
                <Icon as={AiFillStar} color="#FFC700" fontSize="22px" />
              </HStack>
              <Text fontSize="14px" fontWeight="light">
                &ldquo;{item.text}&ldquo;
              </Text>
              <Text fontSize="18px" mt="-4">
                {item.author}
              </Text>
            </VStack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

BlogCarousel.propTypes = {
  onClick: PropTypes.func.isRequired,
  carouselItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired, // Add the author propType
    })
  ).isRequired,
};

export default BlogCarousel;
