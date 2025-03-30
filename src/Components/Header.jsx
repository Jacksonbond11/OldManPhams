import React from "react";

function Header() {
  return (
    <div className="bg-[#4b5717] shadow-md flex justify-between font-bold md:h-32 h-16">
      <a href="/">
        <div className="">
          <img src="TaiSideLogo.png" className="md:h-32 h-16" />
        </div>
      </a>
      <div className="flex md:flex-wrap justify-content-end md:pt-24 pt-8 gap-2 md:text-xl text-sm">
        <a
          href="/#services"
          className="bg-[#afae81] rounded-t-lg md:w-28 w-20 text-center hover:cursor-pointer hover:bg-[#8a8a65]"
        >
          <div className="m-auto">Services</div>
        </a>
        <a
          href="/#contact"
          className="bg-[#afae81] rounded-t-lg md:w-28 w-20 text-center hover:cursor-pointer hover:bg-[#8a8a65]"
        >
          <div>Contact</div>
        </a>
        <a
          href="/blog"
          className="bg-[#afae81] rounded-t-lg md:w-28 w-20 text-center hover:cursor-pointer hover:bg-[#8a8a65]"
        >
          <div>Blog</div>
        </a>
      </div>
    </div>
  );
}

export default Header;
