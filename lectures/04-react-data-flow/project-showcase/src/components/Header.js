import React from "react";

function Header({ name, logo = "//" }) {
  return (
    <header>
      <h1>
        <span className="logo">{logo}</span>
        {name}
      </h1>
      <button>Dark Mode</button>
    </header>
  );
}

export default Header;
