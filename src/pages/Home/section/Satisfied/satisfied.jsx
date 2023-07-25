import { Box, useMediaQuery } from "@chakra-ui/react";
import BlogCarousel from "./carousel";
import Title from "../../../components/Titles";
function Satisfied() {
    const [isMobile] = useMediaQuery("(max-width: 767px)");
    return(
<Box  w="100%" position="relative" >
  
    <Title fontSize={isMobile ? "20px" : "25px"} title="Our Satisfied Customer" />
    <BlogCarousel/>
  </Box>
    )
  
}
export default Satisfied;
