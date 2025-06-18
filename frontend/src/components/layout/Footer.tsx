"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiHeart } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & CTA Section */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Ready to work together?
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Let's create something amazing. I'm always open to discussing new opportunities and exciting projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                <FiMail className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <FiDownload className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Navigation</h4>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                Portfolio
              </Link>
              <Link
                href="/skills"
                className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                Skills
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Connect</h4>
            <div className="flex flex-col space-y-3">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                <FiGithub className="w-4 h-4 mr-2" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                <FiLinkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
              <a
                href="mailto:your.email@example.com"
                className="flex items-center text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                <FiMail className="w-4 h-4 mr-2" />
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-sm text-gray-500 mb-4 md:mb-0">
              <span>&copy; {currentYear} portfolionew003. Built with</span>
              <FiHeart className="w-4 h-4 mx-1 text-red-500" />
              <span>and lots of coffee.</span>
            </div>

            <div className="flex items-center space-x-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-500 hover:text-indigo-600 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-500 hover:text-indigo-600 transition-colors duration-200"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;