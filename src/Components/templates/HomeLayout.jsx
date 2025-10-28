import React from "react";
import HeaderComponent from "../organisms/header/Header";
import ContainerComponent from "../organisms/container/Container"
import FooterComponent from "../organisms/footer/Footer";

import "./HomeLayout.css"

export default function HomeLayout ({children}) {
  return (
    <div>
      <HeaderComponent className="pageHomeClass"/>
      <div>
        <ContainerComponent>
          {children}
        </ContainerComponent> 
      </div>
      <FooterComponent />
    </div>
  )
}