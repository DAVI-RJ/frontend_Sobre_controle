// atoms/TransitionWrapper.jsx
import { useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import "./transition-wrapper.css";

export default function TransitionWrapper({ children, stateKey }) {
  const nodeRef = useRef(null);

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={stateKey}
        classNames="fade"
        addEndListener={(done) => {
          nodeRef.current.addEventListener("transitionend", done, false);
        }}
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>{children}</div>
      </CSSTransition>
    </SwitchTransition>
  );
}
