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
      text: "Absolutely the best restaurant in town! Highly recommended! 🌟🍽️",
      author: "Alex Johnson",
    },
    {
      text: "You have to try this place! Quezon Crave's is hands down the best restaurant in town 🍴😊",
      author: "Sarah Chu",
    },
    {
      text: "Best restaurant in town! I highly recommend it.",
      author: "Carl Joe",
    },
    {
      text: " Town's finest! Must-try! 👌🍽️😍",
      author: "Alexa Isno",
    },
    {
      text: "Don't miss out on Quezon's Crave - culinary bliss! 🍽️😋",
      author: "David Lim",
    },
    {
      text: "Exquisite culinary gem! Unmissable experience! 🌟🍽️😍",
      author: "Kim Molina",
    },

    // Add more carousel items as needed
  ];

  return (
    <Box w="100%" mt="7rem" position="relative" backgroundImage={B1}>
      <Title
        fontSize={isMobile ? "20px" : "30px"}
        title="Our Satisfied Customer"
      />

      <BlogCarousel carouselItems={carouselItems} />
    </Box>
  );
}
export default Satisfied;
