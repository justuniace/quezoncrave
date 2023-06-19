import { BeverageList } from "../ItemList/beverageList";
import { Box, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../components/productCard";

function Beverage() {
  return (
    <Box padding="0 7rem">
      <SimpleGrid columns={[1, 2, 3]} rowGap="4rem">
        {BeverageList.map((item, key) => (
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

export default Beverage;
