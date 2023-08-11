import React from "react";
import logo from '../../images/logo-grey.svg';
import "./navbar.scss";

const menuOptionsData = [
  { id: 1, label: "Map", link: "/map" },
  { id: 2, label: "Dashboard", link: "/dashboard" },
  { id: 3, label: "Table", link: "/table" },
];

function Navbar() {
  return (
    <nav className="navbar">
         <div className="logo">
        <img src={logo} alt="Logo" />
    </div>
      <ul className="menu-options">
        {menuOptionsData.map((option) => (
          <li key={option.id}>
            <a href={option.link}>{option.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
