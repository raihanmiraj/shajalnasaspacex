import React, { useEffect, useRef } from "react";
import parse from "html-react-parser";

const MathElement = (props) => {
  const { elements } = props;
  const ref = useRef(null);
  const element = parse(props.elements);
  const renderMath = () => {
    window.MathJax.Callback.Queue(() => {
      window.MathJax.Hub.Typeset(elements);
    });
  };
  useEffect(() => {
    renderMath();
  }, [props]);

  return <div ref={ref}>{element}</div>;
};

export default MathElement;
