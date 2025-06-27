import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="min-h-[calc(100vh-292px)] pt-19">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
