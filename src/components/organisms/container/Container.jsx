import React from 'react';

import "./Container.css"

const ContainerComponent = ({children}) => {
  return (
    <main className="container">
      {children}
    </main>
  )
}

export default ContainerComponent; 