import React from "react";
import { Outlet } from "react-router";
import Nav from "./Nav";
import Bgcolour from "./Bgcolour";

function Layout() {
  return (
    <div className="h-screen overflow-hidden"  style={{
      backgroundImage : `url('https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
  }}>
      <Nav />
      <div className="w-screen h-[100%] flex justify-center items-center  overflow-hidden">
        <Outlet />
        <Bgcolour />
      </div>
    </div>
  );
}

export default Layout;
