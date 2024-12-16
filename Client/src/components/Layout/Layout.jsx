import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import MobileHeader from "../Header/MobileHeader";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div>
      <div className="hidden md:block">
        <Header />
      </div>

      <div className="md:hidden">
        <MobileHeader />
      </div>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
