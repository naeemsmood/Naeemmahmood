'use client';

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Naeem Mahmood Logo"
              height={50}
              width={150}
              className="h-[50px] w-auto"
              priority={true}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link 
              href="/about" 
              className="text-black hover:text-gray-600 font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/#services" 
              onClick={(e) => handleNavClick(e, '#services')}
              className="text-black hover:text-gray-600 font-medium transition-colors duration-200"
            >
              Services
            </Link>
            <Link 
              href="/speaking" 
              className="text-black hover:text-gray-600 font-medium transition-colors duration-200"
            >
              Speaking
            </Link>
            <Link 
              href="/academy" 
              className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Course
            </Link>
            <Link 
              href="/contact" 
              className="text-black hover:text-gray-600 font-medium transition-colors duration-200"
            >
              Coaching
            </Link>
            <Link 
              href="/contact" 
              className="text-black hover:text-gray-600 font-medium transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-black hover:text-gray-600 p-2 transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-gray-200 space-y-3">
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-black hover:text-gray-600 font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/#services" 
              onClick={(e) => handleNavClick(e, '#services')}
              className="block py-2 text-black hover:text-gray-600 font-medium transition-colors duration-200"
            >
              Services
            </Link>
            <Link 
              href="/speaking" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-black hover:text-gray-600 font-medium transition-colors duration-200"
            >
              Speaking
            </Link>
            <Link 
              href="/academy" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 bg-amber-500 hover:bg-amber-600 text-black font-medium px-4 rounded-lg transition-colors duration-200"
            >
              Course
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-black hover:text-gray-600 font-medium transition-colors duration-200"
            >
              Coaching
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-black hover:text-gray-600 font-medium transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

