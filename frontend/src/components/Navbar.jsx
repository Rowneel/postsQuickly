import { React, useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isOpen, SetIsOpen] = useState(false);
  const [loggedIn, SetIsLoggedIn] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    SetIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        SetIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);


  const handleMenuClick = (event) => {
    // Close menu on any child click (event delegation)
    SetIsOpen(false);
  };

  return (
    <nav className=" sticky top-0 flex justify-between items-center h-16 px-16 bg-primary-500 text-white">
      <div className="relative w-full lg:w-auto flex justify-between">
        <div className="pr-5 text-3xl">PostsQuickly</div>
        <button className="lg:hidden" onClick={toggleMenu}>
          {/* Menu icon toggles between hamburger and close */}
          {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </div>
      <div className="hidden lg:block">
        <ul className="flex gap-8 whitespace-nowrap items-center">
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>About Us</li>
          {loggedIn ? (
            <div>Profile</div>
          ) : (
            <>
              <li>Login</li>
              <li><button className="bg-white text-black px-8 p-1 rounded-lg">Signup</button></li>
            </>
          )}
        </ul>
      </div>

      <div
        ref={menuRef}
        className={`absolute top-16 left-0 w-full p-6 bg-white text-black transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <ul className="flex gap-8 whitespace-nowrap flex-col items-center" onClick={handleMenuClick}>
          <li><a href="#Features">Features</a></li>
          <li>Pricing</li>
          <li><a href="#Testimonials">Testimonials</a></li>
          <li>About Us</li>
          {loggedIn ? (
            <div>Profile</div>
          ) : (
            <>
              <li>Login</li>
              <li>Signup</li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
