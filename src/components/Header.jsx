import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <button>
          <Link to={"/"}>Autocomplete</Link>
        </button>
        <button>
          <Link to={"/loan-calculator"}>Loan Calculator</Link>
        </button>
        <button>
          <Link to={"/nested-checkbox"}>Nested Checkboxes</Link>
        </button>
        <button>
          <Link to={"/otp-input"}>OTP Input</Link>
        </button>
      </nav>
    </div>
  );
};

export default Header;
