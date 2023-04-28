import React from "react";
import CarLogo from "../assets/img/rentacar.png";
import { Link } from "react-router-dom";

const HomeIcon = () => {
  return (
    <Link to="/">
      <div className="flex items-center">
        <img src={CarLogo} />
      </div>
    </Link>
  );
};

export default HomeIcon;
