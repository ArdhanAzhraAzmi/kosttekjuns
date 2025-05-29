"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-8 py-4 shadow-lg sticky top-0 z-50 font-satoshi text-gray-900">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center cursor-pointer select-none">
          <Image
            src="/logo11.png"
            alt="KostKu Logo"
            width={80}
            height={80}
            priority
            className="object-contain max-h-16 mr-3"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link
            href="/about"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger button - Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 text-gray-900"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <Link
              href="/"
              className="hover:text-yellow-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-yellow-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-yellow-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
