import { Box, useMediaQuery } from "@chakra-ui/react";
import BlogCarousel from "./carousel";
import Title from "../../../components/Titles";
import B1 from "../../../../assets/explore/explore.webp";
function Satisfied() {
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  const carouselItems = [
    {
      text: "Delicious food that I will surely come back for!",
      author: "John Doe",
    },
    { text: "Excellent service and quality dishes!", author: "Jane Smith" },
    {
      text: "Best restaurant in town! I highly recommend it.",
      author: "Alex Johnson",
    },
    {
      text: "Best restaurant in town! I highly recommend it.",
      author: "Alex Johnson",
    },
    {
      text: "Best restaurant in town! I highly recommend it.",
      author: "Alex Johnson",
    },
    {
      text: "Best restaurant in town! I highly recommend it.",
      author: "Alex Johnson",
    },
    {
      text: "Best restaurant in town! I highly recommend it.",
      author: "Alex Johnson",
    },
    {
      text: "Best restaurant in town! I highly recommend it.",
      author: "Alex Johnson",
    },

    // Add more carousel items as needed
  ];

  return (
    <Box w="100%" mt="5rem" position="relative" backgroundImage={B1}>
      <Title
        fontSize={isMobile ? "20px" : "25px"}
        title="Our Satisfied Customer"
      />

      <BlogCarousel carouselItems={carouselItems} />
    </Box>
  );
}
export default Satisfied;
