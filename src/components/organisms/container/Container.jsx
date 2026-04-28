import React from 'react';

import "./container.css"

const ContainerComponent = ({children}) => {
  return (
    <main className="container">
      {children}
    </main>
  )
}

export default ContainerComponent; 