
import CatProps from "./categoryProps";
import Order from "../../../../assets/category/order.png";
import Deliver from "../../../../assets/category/deliver.png";
import Quality from "../../../../assets/category/quality.png";
import { Box, Wrap, Image } from "@chakra-ui/react";
import Elipse from "../../../../assets/categories-elipse.webp";

function Category() {
  const items = [
    {
      image: Order,
      dTitle: "Easy to Order",
      details: "Customer friendly navigation and ordering method.",
    },
    {
      image: Deliver,
      dTitle: "Faster Delivery",
      details: "Rest easy as we ensure a quick delivery of your order.",
    },
    {
      image: Quality,
      dTitle: "Best Quality",
      details:
        "Finest authentic foods from Quezon Province!",
    },
  ];

  return (
    <Box position="relative" bg="#262424">
      <Box
        position="absolute"
        top="5rem"
        left="0"
        right="0"
        zIndex="2"
        textAlign="center"
        color="palette.secondary"
        fontFamily="inter"
      >
        <Wrap justify="center" spacing="8rem" mt="5rem">
          {items.map((item) => (
            <CatProps items={item} key={item.details} />
          ))}
        </Wrap>
      </Box>

      <Image
        top="0"
        h="80vh"
        w="100%"
        pos="relative"
        zIndex="1"
        src={Elipse}
        alt="Background Image"
      />
    </Box>
  );
}

export default Category;
