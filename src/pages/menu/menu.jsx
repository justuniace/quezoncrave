import { Box, Center, Text, useMediaQuery } from "@chakra-ui/react";
import MenuNav from "./components/menuNav";
import Breakfast from "./sections/breakfast";
import Dessert from "./sections/dessert";
import Beverage from "./sections/beverages";
import Lunch from "./sections/lunch";
import Dinner from "./sections/dinner";
import { useState } from "react";
import B1 from "../../assets/explore/explore.webp";

export const Menu = () => {
  const [activeTab, setActiveTab] = useState("Breakfast");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

 
  const [isMobileScreen] = useMediaQuery("(max-width: 40em)");
  const [isTabletScreen] = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      w="100%"
      h="auto"
      style={{
        backgroundImage: `url(${B1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
       
      }}
    >
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
      <Box mb="4rem">
        {activeTab === "Breakfast" && <Breakfast activeTab={activeTab} />}
        {activeTab === "Beverages" && <Beverage activeTab={activeTab} />}
        {activeTab === "Dessert" && <Dessert activeTab={activeTab} />}
        {activeTab === "Lunch" && <Lunch activeTab={activeTab} />}
        {activeTab === "Dinner" && <Dinner activeTab={activeTab} />}
      </Box>
    </Box>
  );
};
