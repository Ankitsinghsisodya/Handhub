import React from "react";
import { Outlet } from "react-router";
import Nav from "./Nav";
import Bgcolour from "./Bgcolour";

function Layout() {
  return (
    <div className="h-screen">
      <Nav />
      <div className="w-full h-[100%] flex justify-center items-center">
        <Outlet />
        <Bgcolour />
      </div>
    </div>
  );
}

export default Layout;
