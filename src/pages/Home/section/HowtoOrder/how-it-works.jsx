import Title from "../../../components/Titles";
import HowProps from "./howProps";
import Menu from "../../../../assets/how-it-works/menu.svg";
import Meal from "../../../../assets/how-it-works/meal.svg";
import Delivery from "../../../../assets/how-it-works/delivery.svg";
import { Box, Flex, Wrap, useMediaQuery } from "@chakra-ui/react";

function How() {

   const [isMobile] = useMediaQuery("(max-width: 767px)");

  const items = [
    {
      image: Menu,
      dTitle: "Order from the Menu",
      details: "Browse through our menu for your authentic quezon cravings",
    },
    {
      image: Meal,
      dTitle: "We Make Your Meal",
      details:
        "Rest assured that your order is freshly made hot and ready to go.",
    },
    {
      image: Delivery,
      dTitle: "We Deliver",
      details: "Fast and safe delivery right to your door!",
    },
  ];

  return (
    <Flex className="How" mt="-10rem" position="relative">
      <Box w="100%">
        <Title fontSize={isMobile ? "20px" : "30px"} title="How To Order" />
        <Wrap justify="center" spacing="8rem" mt="5rem">
          {items.map((item) => (
            <HowProps items={item} key={item.details} />
          ))}
        </Wrap>
      </Box>
    </Flex>
  );
}

export default How;
