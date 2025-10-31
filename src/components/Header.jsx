import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="nav">
        <NavLink to="/" className="nav-link">
          Autocomplete
        </NavLink>
        <NavLink to="/loan-calculator" className="nav-link">
          Loan Calculator
        </NavLink>
        <NavLink to="/nested-checkbox" className="nav-link">
          Nested Checkboxes
        </NavLink>
        <NavLink to="/otp-input" className="nav-link">
          OTP Input
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
