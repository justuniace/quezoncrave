import "./menu.css";
import { Box } from "@chakra-ui/react";

import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
export default function MenuNav() {
  const tabs = [
    { label: "Food", link: "Food" },
    { label: "Beverages", link: "Beverages" },
    { label: "Dessert", link: "" },
  ];


  return (
    <>
      <Box
        h="4rem"
        w="20rem"
        top="13.2rem"
        position="absolute"
        borderRadius="20px"
        background="linear-gradient(145deg, #ececec, #ffffff)"
        boxShadow="28px 28px 55px #d4d4d4, -28px -28px 55px #ffffff"
        zIndex="-1"
      ></Box>
      <Box>
        <Tabs variant="soft-rounded" colorScheme="yellow" placeholder="#FFFFF">
          <TabList sx={{ gap: "20px" }}>
            {tabs.map((item) => (
              <Tab key={item.label} style={{ color: "black" }}>
                {item.label}
              </Tab>
            ))}
          </TabList>
          <TabPanels paddingTop="50px">
            {tabs.map((item) => (
              <TabPanel key={item.label}>
                <p>{item.label}!</p>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}