import { Box, Center, Text } from "@chakra-ui/react";
import MenuNav from "./components/menuNav";
import Food from "./sections/food";
import Dessert from "./sections/dessert";
import Beverage from "./sections/beverages";
import { useState } from "react";

export const Menu = () => {
  const [activeTab, setActiveTab] = useState("Food");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Box w="100%" h="auto">
      <Center h="10rem">
        <Text
          top="50%"
          position="relative"
          fontSize="25"
          fontWeight="semibold"
          justifyContent="center"
          alignItems="center"
          fontFamily="Abril-Fatface"
        >
          Heartwarming Traditions, Savored in Every Bite!
        </Text>
      </Center>
      <Center paddingTop="5rem">
        <MenuNav activeTab={activeTab} onTabChange={handleTabChange} />
      </Center>
      <Box>
        {activeTab === "Food" && <Food />}
        {activeTab === "Beverages" && <Beverage />}
        {activeTab === "Dessert" && <Dessert />}
      </Box>
    </Box>
  );
};
