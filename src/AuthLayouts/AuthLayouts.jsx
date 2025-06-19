import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router";

const AuthLayouts = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header>
        <Header></Header>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayouts;
