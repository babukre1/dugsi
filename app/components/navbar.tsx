"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Use Link for faster client-side navigation
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current URL path

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F7F7F7]/80 backdrop-blur-xl border-b border-gray-200">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={180}
              height={0}
              style={{ height: "auto" }}
              priority
              className="w-28 md:w-44"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all pb-1 font-medium ${
                  isActive
                    ? "text-[#1A365D] font-bold border-b-2 border-[#1A365D]"
                    : "text-slate-600 hover:text-[#1A365D]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden md:block text-slate-600 font-medium px-4 py-2 hover:text-[#1A365D] transition-all">
            Login
          </button>
          
          <button className="hidden md:block bg-[#48BB78] text-white rounded-xl font-bold hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-[#48BB78]/20 px-6 py-2.5">
            Get Started
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-[#1A365D]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#F7F7F7] border-b border-gray-200 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg transition-colors ${
                  isActive ? "text-[#1A365D] font-bold" : "text-slate-600 font-medium"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <hr className="border-gray-200" />
          <button className="bg-[#48BB78] text-white rounded-xl font-bold py-3 hover:opacity-90 active:scale-95 transition-all text-center">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}