import { FoodList } from "../ItemList/foodList";
import { Box, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../components/productCard";

function Food() {
  return (
    <Box padding="0 7rem">
      <SimpleGrid columns={[1, 2, 3]} rowGap="4rem">
        {FoodList.map((item, key) => (
          <ProductCard
            key={key}
            image={item.image}
            name={item.name}
            details={item.details}
            price={item.price}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Food;
