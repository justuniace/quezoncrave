import { useEffect, useContext} from "react";
import { useInView } from "framer-motion";
import { AppContext } from "/src/pages/components/context";

function useObserver(pageName) {
  const context = useContext(AppContext);
  const [ref, isInView] = useInView();

  useEffect(() => {
    if (isInView) {
      context?.setActiveNav(pageName);
    }
  }, [isInView, context, pageName]);


  return { ref };
}

export default useObserver;
