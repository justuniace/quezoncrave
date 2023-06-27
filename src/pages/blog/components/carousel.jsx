import Food from "../../../assets/Blog/carousel.jpg";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BlogCarousel = () => {
  const images = [Food, Food, Food];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
  };

  return (
    <Box w="50%" margin="10rem auto" h="200px">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </Box>
  );
};
