import { Box, useMediaQuery } from "@chakra-ui/react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function MenuNav({ activeTab, onTabChange }) {
  const tabs = [
    { label: "Breakfast", link: "Breakfast" },
    {label: "Lunch", link:"Lunch"},
    {label:"Dinner", link:"Dinner"},
    { label: "Beverages", link: "Beverages" },
    { label: "Dessert", link: "Dessert" },
  ];

  const handleTabClick = (tab) => {
    onTabChange(tab);
  };

  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const [isTablet] = useMediaQuery("(max-width: 1023px)");

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        h={isMobile ? "3rem" : "5rem"}
        w={isMobile ? "93%" : isTablet ? "72%" : "38rem"}
        top={isMobile ? "14.5rem" : "14rem"}
        position="absolute"
        borderRadius="20px"
        background="linear-gradient(145deg, #F6F4EB, #f0f0f0)"
        boxShadow="0px 0px 20px #d4d4d4, 0px 0px 10px #d4d4d4"
        zIndex="-1"
      ></Box>
      <Box>
        <Tabs
          variant="soft-rounded"
          colorScheme="myCustomColorScheme"
          display={isMobile ? "block" : "flex"}
        >
          <TabList
            sx={{
              ml: isMobile ? "2px" : isTablet ? "40px" : "2rem",
              gap: isMobile ? "2px" : "18px",
              pb: isMobile ? "2rem" : isTablet ? "5rem" : "8rem",
            }}
          >
            {tabs.map((item) => (
              <Tab
                key={item.label}
                style={{
                  color: "#42403F",
                  fontSize: isMobile ? "10px" : "18px",
                  fontWeight: item.label === activeTab ? "bold" : "normal",
                }}
                onClick={() => handleTabClick(item.label)}
              >
                {item.label}
              </Tab>
            ))}
          </TabList>
          <TabPanels paddingTop="20px">
            {tabs.map((item) => (
              <TabPanel key={item.label} />
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

MenuNav.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};
