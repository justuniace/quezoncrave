import { Box, Center, Text, useMediaQuery } from "@chakra-ui/react";
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

  // Use media query hook to check for screen sizes
  const [isMobileScreen] = useMediaQuery("(max-width: 40em)");
  const [isTabletScreen] = useMediaQuery("(max-width: 768px)");

  return (
    <Box w="100%" h="auto">
      <Center h="10rem">
        <Text
          top="50%"
          position="relative"
          fontSize={isMobileScreen ? "20px" : isTabletScreen ? "22px" : "25px"}
          fontWeight="semibold"
          justifyContent="center"
          textAlign="center"
          fontFamily="Abril-Fatface"
        >
          Heartwarming Traditions, Savored in Every Bite!
        </Text>
      </Center>
      <Center paddingTop="5rem">
        <MenuNav activeTab={activeTab} onTabChange={handleTabChange} />
      </Center>
      <Box>
        {activeTab === "Food" && <Food activeTab={activeTab} />}
        {activeTab === "Beverages" && <Beverage activeTab={activeTab} />}
        {activeTab === "Dessert" && <Dessert activeTab={activeTab} />}
      </Box>
    </Box>
  );
};
