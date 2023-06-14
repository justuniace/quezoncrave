import Title from "../../../components/Titles";
import HowProps from "./howProps";
import Menu from "../../../../assets/how-it-works/menu.svg";
import Meal from "../../../../assets/how-it-works/meal.svg";
import Delivery from "../../../../assets/how-it-works/delivery.svg";
import { Box,  Flex , Wrap} from "@chakra-ui/react";

function How() {
  const items = [
    {
      image: Menu,
      dTitle: "Menu",
      details:
        "Lorem ipsum dolor sit amet. Sed laudantium veniam ea dolorum alias aut voluptates dolore qui labore enim nam accusantium incidunt ad harum saepe.",
    },
    {
      image: Meal,
      dTitle: "Meal",
      details:
        "Lorem ipsum dolor sit amet. Sed laudantium veniam ea dolorum alias aut voluptates dolore qui labore enim nam accusantium incidunt ad harum saepe.",
    },
    {
      image: Delivery,
      dTitle: "Delivery",
      details:
        "Lorem ipsum dolor sit amet. Sed laudantium veniam ea dolorum alias aut voluptates dolore qui labore enim nam accusantium incidunt ad harum saepe.",
    },
  ];

  return (
    <Flex className="explore" mt="180%" h="100vh" w="100%" position="absolute">
      <Box mt="-18rem" h="100vh" w="100%">
        <Title title="How It Works" />
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
