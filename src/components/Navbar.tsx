import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import siteConfig from "../data/site";

function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black px-5 py-3 text-white">
      <nav className="mx-auto flex max-w-4xl items-center justify-between">
        <h1 className="text-xl font-bold text-gray-200">{siteConfig.name}</h1>
        {/* Desktop menu */}
        <ul className="hidden gap-5 md:flex">
          {siteConfig.navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:text-gray-200">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Burger icon */}
        <button
          className="flex h-8 w-8 flex-col items-center justify-center rounded hover:cursor-pointer hover:bg-gray-800 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </nav>
      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col gap-4 px-5 py-4 md:hidden">
          {siteConfig.navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="hover:text-gray-200"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
