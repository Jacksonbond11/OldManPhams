import React from "react";

function Header() {
  return (
    <div className="navbar bg-base-100 shadow-md flex justify-between font-bold">
      <div className="">
        <img src="TaiSideLogo.png" className="h-32" />
      </div>
      <div className="">
        <ul className="menu menu-horizontal px-1 flex md:gap-4 gap-2">
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
