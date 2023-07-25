import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";


function useObserver() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return { ref, isInView };
}

export default useObserver;
