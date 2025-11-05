import React from "react";
import HeaderComponent from "../organisms/header/Header";
import DashboardComponent from "../organisms/dashboard/Dashboard";
import ContainerComponent from "../organisms/container/Container"
import FooterComponent from "../organisms/footer/Footer";

import "./HomeLayout.css"

export default function HomeLayout ({children}) {
  return (
    <div className="home-layout">
      <HeaderComponent className="header-layout"/>
      <DashboardComponent className="dashboard-layout"/>
        <ContainerComponent>
          {children}
        </ContainerComponent> 
      <FooterComponent className="footer-layout"/>
    </div>
  )
}