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
           "Lorem ipsum dolor sit amet. Sed laudantium veniam ea",
        // "Welcome to QuezonCrave, where we bring you the rich, flavorful, and mouthwatering Quezon-inspired culinary delights 
        // of Quezon Province right to your plate! Explore the vibrant and diverse cuisine of this Philippine province known for its unique dishes and exciting flavors.",
    },
    {
      image: Beverage,
      dTitle: "Beverages",
      details:
            " Lorem ipsum dolor sit amet. Sed laudantium veniam ea",
       // "At QuezonCrave, we take pride in crafting a unique and delightful selection of beverages inspired by the rich cultural heritage and natural bounty of Quezon Province. Each sip tells a story, transporting you to the bustling streets and warm hospitality of this beloved region.",
    },
    {
      image: Dessert,
      dTitle: "Dessert",
      details:
      "Lorem ipsum dolor sit amet. Sed laudantium veniam ea"
      //  "Indulge in the rich and delightful flavors of Quezon Province with our delectable array of traditional desserts. Our desserts are inspired by the rich culinary heritage of Quezon, a province known for its brilliant culture and tasty delicacies.",
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
