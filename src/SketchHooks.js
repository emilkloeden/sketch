import React, { useRef, useEffect } from "react";
import p5 from "p5";

const useSketch = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    new p5(children, ref.current);
  }, []);
  return <div ref={ref} />;
};

export default useSketch;
