import  { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import PropTypes from "prop-types";

export  const  Reveal = ({ children, width = "fit-content" }) => {

   Reveal.propTypes = {
     children: PropTypes.node.isRequired,
     width: PropTypes.oneOf(["fit-content", "100%"]),
   };

   
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    console.log("isInView changed:", isInView);
    if (isInView) {
      mainControls.start("visible");
    }
    console.log(isInView);
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
