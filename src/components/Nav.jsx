import React from "react";
import { NavLink, Link } from "react-router";

function Nav() {
  return (
    <div className="w-screen h-[50px] bg-gray-900 text-white   flex z-[1000] justify-end">
      <div className="mr-2">
        <ul className="flex justify-around h-full items-center font-semibold text-xl  w-full gap-x-2 md:gap-x-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-orange-400" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/counter"
              className={({ isActive }) => (isActive ? "text-orange-400" : "")}
            >
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/passwordGenerator"
              className={({ isActive }) => (isActive ? "text-orange-400" : "")}
            >
              Passwordgenerator
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/currencyconverter"
              className={({ isActive }) => (isActive ? "text-orange-400" : "")}
            >
              Currency Converter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/task"
              className={({ isActive }) => (isActive ? "text-orange-400" : "")}
            >
              Task
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
