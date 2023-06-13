import { useEffect, useMemo, useState, createContext } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext(null);

function Context({ children }) {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const values = useMemo(() => {
    return {
      scrolled,
     
    };
  }, [ scrolled]);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

Context.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Context;
