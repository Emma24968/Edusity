import React from "react";
import logo from "../../assets/logo.png";
import hero from "../../assets/hero.png";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-screen bg-[#413D66] overflow-hidden">
      <img
        src={hero}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Overlay Color (optional but recommended) */}
      <div className="absolute inset-0 bg-[#413D66]/70"></div>

      <div className="relative z-10 flex justify-between items-center px-[10%] py-4">
        <img src={logo} alt="logo" width={180} />

        <ul className="text-white flex items-center gap-6">
          <li>Home</li>
          <li>Program</li>
          <li>About us</li>
          <li>Campus</li>
          <li>Testimonial</li>
          <li>
            <button className="bg-white text-black p-2 rounded-full">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
