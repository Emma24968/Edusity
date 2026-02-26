import React from "react";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-[#413D66] fixed top-0 w-[100%] justify-between items-center px-[4px] py-0 left-0 flex  ">
      <img src={logo} alt="logo" />
      <ul className="text-white flex gap-6">
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonial</li>
        <li>
          <button>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
