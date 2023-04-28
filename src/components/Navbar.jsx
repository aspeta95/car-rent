import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "./HomeIcon";

function getClassName(isActive) {
  if (isActive) {
    return "border-b-2 border-orange-600 font-bold";
  }
}

const Navbar = () => {
  return (
    <div className="container mx-auto bg-white px-40 py-4 border-b-2">
      <nav className="flex justify-between items-center">
        <HomeIcon />
        <ul className="flex">
          <li className="font-bold px-4 hover:text-orange-600">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="font-bold px-4 hover:text-orange-600">
            <NavLink to="/vehicles">Vehicles</NavLink>
          </li>
          <li className="font-bold px-4 hover:text-orange-600">
            <NavLink to="/reviews">Reviews</NavLink>
          </li>
          <li className="font-bold px-4 hover:text-orange-600">
            <NavLink to="/team">Team</NavLink>
          </li>
          <li className="font-bold px-4 hover:text-orange-600">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
