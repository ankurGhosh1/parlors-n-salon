import { useState } from "react";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5"; // Import close icon
import Image from "next/image";
import Container from "./Container";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // apply for sticky nav -->  'fixed z-10 top-0' to nav tag

    <nav className=" w-full ">
      <Container>
        <div className=" mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              height={120}
              width={140}
              alt="logo"
              loading="eager"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden sm:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-gray-900 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
            <Link
              href="/location"
              className="text-gray-900 hover:text-blue-600 font-medium"
            >
              Location
            </Link>
            <Link
              href="/contact"
              className="bg-dark px-5 py-2 text-white hover:text-blue-600 font-medium rounded-md"
            >
              Get Listed
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-900 hover:text-blue-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-gray-100 shadow-lg py-5">
            <Link
              href="/"
              className="block text-gray-900 hover:bg-gray-300 px-4 py-2 font-medium"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/location"
              className="block text-gray-900 hover:bg-gray-300 px-4 py-2 font-medium"
              onClick={toggleMobileMenu}
            >
              Location
            </Link>
            <Link
              href="/contact"
              className="block text-gray-900 hover:bg-gray-300 px-4 py-2 font-medium"
              onClick={toggleMobileMenu}
            >
              Get Listed
            </Link>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
