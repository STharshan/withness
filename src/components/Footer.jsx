import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo and About */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="/logo.png" // replace with your actual logo path
              alt="FitNix"
              className="w-56 h-15 object-contain"
            />
          </div>
          <p className="text-sm mb-6">
            We believe fitness is more than just sets — it’s about building
            confidence.
          </p>
          <div className="flex space-x-4">
            <a href="https://web.facebook.com/witnessthefitness999/?_rdc=1&_rdr#" className="text-primary-hover transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/witnessthefitness999/" className="text-primary-hover transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-primary-hover transition">
              <FaXTwitter />
            </a>
            <a href="#" className="text-primary-hover transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-primary  font-semibold text-lg mb-4">
            QUICK LINK
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-primary-hover transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-primary-hover transition">
                Program
              </a>
            </li>
            <li>
              <a href="#" className="text-primary-hover transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-primary-hover transition">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Utility */}
        <div>
          <h3 className="text-primary  font-semibold text-lg mb-4">UTILITY</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-primary-hover transition">
                404
              </a>
            </li>
            <li>
              <a href="#" className="text-primary-hover transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-primary-hover transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-primary  font-semibold text-lg mb-4">CONTACT</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <FiPhone className="text-primary " />
              <span>+44 7984 936464</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiMail className="text-primary " />
              <span>contact@fitnix.com</span>
            </li>
            <li className="flex items-start space-x-2">
              <FiMapPin className="text-primary  mt-1" />
              <span>
                16 Nell Lane Within, Chorlton Park, 
                <br />
                Manchester M21 7UD, UK
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © 2025 All Right Reserved by{" "}
        <span className="text-primary ">Witness The Fitness</span> | Powered by{" "}
        <span className="text-primary">Ansely</span>
      </div>
    </footer>
  );
}
