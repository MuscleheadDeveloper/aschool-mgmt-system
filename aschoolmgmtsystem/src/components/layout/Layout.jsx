import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout ({children}) {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};

