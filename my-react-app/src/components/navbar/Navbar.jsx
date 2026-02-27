import React from "react";
import logo from "../../assets/logo.png";
import heroImage from "../../assets/hero.png";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full  bg-black overflow-hidden">
      
      <div className="relative z-10 flex justify-between items-center px-[10%] py-4">
        <img src={logo} alt="logo" width={180} />

        <ul className="text-white flex  items-center gap-6">
          <li>Home</li>
          <li>Program</li>
          <li>About us</li>
          <li>Campus</li>
          <li>Testimonial</li>
          <li>
            <button className="bg-white text-black px-6 py-3 rounded-full">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
