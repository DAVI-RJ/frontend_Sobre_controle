import React from 'react';
import "./container.css"

// src/components/WaveBackground.jsx
/*
const WaveBackground = () => {
  return (
    <svg
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"

      className='svgClass'
     
    >
      <path fill="cyan" >
        <animate 
          attributeName="d" 
          dur="20s" 
          repeatCount="indefinite" 
          keyTimes="0;0.33;0.667;1" 
          calcMode="spline" 
          keySplines="0.2 0 0.2 1; 0.2 0 0.2 1; 0.2 0 0.2 1" 
          values="
            M0,80 C480,150 960,10 1440,80 L1440,320 L0,320 Z;
            M0,120 C480,50 960,200 1440,120 L1440,320 L0,320 Z;
            M0,80 C480,120 960,50 1440,80 L1440,320 L0,320 Z;
            M0,80 C480,150 960,10 1440,80 L1440,320 L0,320 Z
          "
        />
      </path>
    </svg>
  );
};

export default WaveBackground;
*/
const ContainerComponent = ({children}) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default ContainerComponent; 