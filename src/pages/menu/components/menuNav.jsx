import { Box } from "@chakra-ui/react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function MenuNav({ activeTab, onTabChange }) {
  const tabs = [
    { label: "Food", link: "Food" },
    { label: "Beverages", link: "Beverages" },
    { label: "Dessert", link: "" },
  ];

  const handleTabClick = (tab) => {
    onTabChange(tab);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="4rem"
        w="22rem"
        top="14.2rem"
        position="absolute"
        borderRadius="20px"
        background="linear-gradient(145deg, #ececec, #ffffff)"
        boxShadow="28px 28px 55px #d4d4d4, -28px -28px 55px #ffffff"
        zIndex="-1"
      ></Box>
      <Box>
        <Tabs variant="soft-rounded" colorScheme="myCustomColorScheme">
          <TabList sx={{ gap: "20px" }}>
            {tabs.map((item) => (
              <Tab
                key={item.label}
                style={{
                  color: "#42403F",
                  fontWeight: item.label === activeTab ? "bold" : "normal",
                }}
                onClick={() => handleTabClick(item.label)}
              >
                {item.label}
              </Tab>
            ))}
          </TabList>
          <TabPanels paddingTop="50px">
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
