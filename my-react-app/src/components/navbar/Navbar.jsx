import React from "react";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-[#413D66] h-[100vh]">
      <img src={logo} alt="logo" width={50} />
      <ul className="text-white">
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonial</li>
        <li><button>Contact</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
