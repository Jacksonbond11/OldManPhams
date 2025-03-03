import React from "react";

function Header() {
  return (
    <div className="navbar bg-base-100 shadow-md flex justify-between font-bold p-6 ">
      <div className="">
        <a className="btn btn-ghost md:text-xl text-md">Old Man Pham's</a>
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
