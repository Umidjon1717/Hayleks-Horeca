import Header from "../components/header/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Info from "../components/info/Info";

const Layout = () => {
  return (
    <>
    <Info/>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default React.memo(Layout);
