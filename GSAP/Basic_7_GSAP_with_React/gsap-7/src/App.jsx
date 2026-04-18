import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./index.css";



const App = () => {
  const [xState, setXState] = useState(0);
  const [yState, setYState] = useState(0);
  const boxRef = useRef(null);

  function btnFunction() {
    setXState(gsap.utils.random(500, 1000, 30));
    setYState(gsap.utils.random(500, 500, 30));
  }

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: xState,
      y:yState,
      duration: 2,
      ease: "power2.out",
    });
  }, { dependencies: [xState,yState] });

  return (
    <div>
      <button className="move-btn" onClick={btnFunction}>
        Click me
      </button>
      <div ref={boxRef} className="box"></div>
    </div>
  );
};

export default App;
