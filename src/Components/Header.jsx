import React from "react";

function Header() {
  return (
    <div className="navbar bg-base-100 shadow-md flex justify-between font-bold">
      <div className="">
        <img src="TaiSideLogo.png" className="md:h-32 h-16" />
      </div>
      <div className="">
        <ul className="menu menu-horizontal px-1 flex md:gap-4 gap-2">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
