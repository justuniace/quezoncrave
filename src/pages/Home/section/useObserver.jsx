import { useRef } from "react";

function useObserver() {
  const ref = useRef(null);

  return { ref };
}

export default useObserver;
