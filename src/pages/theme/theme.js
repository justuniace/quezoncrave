import { extendTheme } from "@chakra-ui/react";

const colors = {
  pallete: {
    primary: "white",
    secodary: "#11111",
    accent: "#FFC700",
    accent_hover: "#EFCA48",
  },
  myCustomColorScheme: {
    50: "#FFC700",
    100: "#FFC700",
    200: "#F8D990",
    
  },
};
const fonts = {
  body: `'Inter', sans-serif`,
  heading: `'Abril-Fatface'`


}
const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
      overflowX: "hidden",
    },
    body: {
      bg: "palette.primary",
      color: "palette.accent",
    },
    _placeholder: {
      color: "rgba(38, 50, 56, .6)",
      fontSize: ".9rem",
    },
  },
};
const theme = extendTheme({ colors, styles, fonts });
export default theme;
