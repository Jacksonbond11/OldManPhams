import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#4b5717] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex-shrink-0">
            <img src="TaiSideLogo.png" className="h-16 sm:h-20" alt="Old Man Pham's Lawn Care" />
          </a>
          
          <nav className="hidden md:flex items-center gap-3">
            <a
              href="/#services"
              className="px-4 py-2 text-sm font-semibold text-[#4b5717] bg-[#afae81] rounded-lg hover:bg-[#8a8a65] transition-all duration-200 hover:scale-105"
            >
              Services
            </a>
            <a
              href="/#contact"
              className="px-4 py-2 text-sm font-semibold text-[#4b5717] bg-[#afae81] rounded-lg hover:bg-[#8a8a65] transition-all duration-200 hover:scale-105"
            >
              Contact
            </a>
            <a
              href="/blog"
              className="px-4 py-2 text-sm font-semibold text-[#4b5717] bg-[#afae81] rounded-lg hover:bg-[#8a8a65] transition-all duration-200 hover:scale-105"
            >
              Blog
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-[#afae81]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            <a href="/#services" className="block px-4 py-2 text-sm font-semibold text-[#4b5717] bg-[#afae81] rounded-lg text-center">Services</a>
            <a href="/#contact" className="block px-4 py-2 text-sm font-semibold text-[#4b5717] bg-[#afae81] rounded-lg text-center">Contact</a>
            <a href="/blog" className="block px-4 py-2 text-sm font-semibold text-[#4b5717] bg-[#afae81] rounded-lg text-center">Blog</a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
