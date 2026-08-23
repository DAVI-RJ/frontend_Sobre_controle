import React from "react";

import SidebarComponent from "../../organisms/sidebar/Sidebar";
import HeaderComponent from "../../organisms/header/Header";
import FooterComponent from "../../organisms/footer/Footer";

import "./home-layout.css";

export default function HomeLayout({ children, setView }) {
  return (
    <div className="home-layout">
      <SidebarComponent setView={setView} />

      <div className="home-content">
        <HeaderComponent />

        <main className="main-content">{children}</main>

        <FooterComponent />
      </div>
    </div>
  );
}
