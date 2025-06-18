"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiDownload, FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
              portfolionew003
            </Link>
            <div className="ml-2 text-xs text-gray-500 hidden sm:block">
              Personal Portfolio
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Social Links & CTA - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Icons */}
            <div className="flex items-center space-x-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 transition-all duration-300 hover:scale-110"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>

            {/* Resume Download */}
            <Link
              href="/resume.pdf"
              target="_blank"
              className="flex items-center text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <FiDownload className="mr-1 w-4 h-4" />
              Resume
            </Link>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="flex items-center bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <FiMail className="mr-2 w-4 h-4" />
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 border-t border-gray-200"
              : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex items-center space-x-4 px-3 py-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition-all duration-300"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 transition-all duration-300"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="px-3 py-2 space-y-2">
              <Link
                href="/resume.pdf"
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center text-gray-600 hover:text-blue-600 border border-gray-300 hover:border-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 w-full"
              >
                <FiDownload className="mr-2 w-4 h-4" />
                Download Resume
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 w-full"
              >
                <FiMail className="mr-2 w-4 h-4" />
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;