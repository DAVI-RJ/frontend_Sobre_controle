import React, { Children } from "react";

import HeaderComponent from "../organisms/header/Header";
import SidebarComponent from "../organisms/siderbar/Sidebar";
import ContainerComponent from "../organisms/container/Container"
import FooterComponent from "../organisms/footer/Footer";

import "./HomeLayout.css"

export default function HomeLayout () {
  return (
    <div>
      <HeaderComponent />
      <div>
        <SidebarComponent />
        <ContainerComponent>
          {Children}
        </ContainerComponent> 
      </div>
      <FooterComponent />
    </div>
  )
}