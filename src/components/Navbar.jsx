import React, { useState } from "react";
import {
  FiFacebook,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "About", href: "/#about" },
    { name: "Classes", href: "/#services" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
  ];

  // const socialLinks = [
  //   {
  //     icon: <FiFacebook />,
  //     href: "https://www.facebook.com/people/RS-Mobile-Services/100092690151352/",
  //   },
  // ];

  return (
    <nav className="bg-black text-white px-6 md:px-12 lg:px-20 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-18">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="RS Mobile Services Logo"
            className="w-56 h-20 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              smooth
              href={item.href}
              className="flex items-center gap-1 font-semibold text-white text-primary-hover transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex items-center gap-3">
           <button
            className="md:flex items-center gap-1 font-semibold hidden text-white text-primary-hover border rounded-lg p-2 transition-colors"
          >
            Become a Member
          </button>
        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            className="flex items-center gap-1 font-semibold text-white border text-primary-hover rounded-lg p-2 transition-colors"
          >
            Become a Member
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-primary p-2 rounded-full text-xl"
          >
            {menuOpen ? <FiX className="text-black"/> : <FiMenu className="text-black"/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 bg-[#222] rounded-lg p-4 space-y-3">
          {navLinks.map((item) => (
            <a
              key={item.name}
              smooth
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-200 text-primary-hover border-b border-gray-700 last:border-0 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
