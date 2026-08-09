import React from "react";

import "./container.css";

const ContentContainer = ({ children }) => {
  return <section className="container">{children}</section>;
};

export default ContentContainer;
