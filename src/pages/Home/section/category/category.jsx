import Title from "../../../components/Titles";
import CatProps from "./categoryProps";
import Food from "../../../../assets/category/food.svg";
import Beverage from "../../../../assets/category/beverages.svg";
import Dessert from "../../../../assets/category/dessert.svg";
import { Box, Wrap, Image } from "@chakra-ui/react";
import Elipse from "../../../../assets/categories-elipse.webp";

function Category() {
  const items = [
    {
      image: Food,
      dTitle: "Food",
      details:
        "Lorem ipsum dolor sit amet. Sed laudantium veniam ea dolorum alias aut voluptates dolore qui labore enim nam accusantium incidunt ad harum saepe.",
    },
    {
      image: Beverage,
      dTitle: "Beverages",
      details:
        "Lorem ipsum dolor sit amet. Sed laudantium veniam ea dolorum alias aut voluptates dolore qui labore enim nam accusantium incidunt ad harum saepe.",
    },
    {
      image: Dessert,
      dTitle: "Dessert",
      details:
        "Lorem ipsum dolor sit amet. Sed laudantium veniam ea dolorum alias aut voluptates dolore qui labore enim nam accusantium incidunt ad harum saepe.",
    },
  ];

  return (
    <Box position="relative" bg="#262424">
      <Image
        top="0"
        h="80vh"
        w="100%"
        pos="absolute"
        zIndex="1"
        src={Elipse}
        alt="Background Image"
      />

      <Box
        position="relative"
        top="5rem"
        left={0}
        right={0}
        zIndex={1}
        textAlign="center"
        color="palette.secondary"
        fontFamily="inter"
      >
        <Title title="Categories" />
        <Wrap justify="center" spacing="8rem" mt="5rem">
          {items.map((item) => (
            <CatProps items={item} key={item.details} />
          ))}
        </Wrap>
      </Box>
    </Box>
  );
}

export default Category;
