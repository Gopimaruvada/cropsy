import React from "react";
import logo from "../../images/logo-grey.svg";
import "./navbar.scss";
import WarningIcon from "@mui/icons-material/Warning";

const menuOptionsData = [
  { id: 1, label: "Map", link: "" },
  { id: 2, label: "Dashboard", link: "" },
  { id: 3, label: "Table", link: "/table" },
];

function Navbar() {
  // Calculate the aggregated pruned percentage
  const aggregatedPrunedPercentage = 79;

  // Determine the color of the warning icon based on the pruned percentage
  const warningIconColor = aggregatedPrunedPercentage < 80 ? "red" : "grey";

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
      <div className="warning-icon">
        <WarningIcon style={{ color: warningIconColor }} />
      </div>
    </nav>
  );
}

export default Navbar;
