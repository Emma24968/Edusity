import React from "react";
import logo from "../../assets/logo.png";
import heroImage from "../../assets/hero.png";
import Darkarrow from '../../assets/dark-arrow.png'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-screen bg-[#191444] overflow-hidden">
      <img
        src={heroImage}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
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
      <div className="relative z-10 text-white px-[10%] mt-32 text-center">
        <h3 className="text-6xl font-bold">
          We Ensure better education <br /> for a better world
        </h3>

        <p className="mt-4 text-1xl">
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills,
          <br /> and experiences needed to excel in the dynamic field of
          education
        </p>
        <button className="bg-white text-black flex items-center gap-2 justify-center mx-auto mt-6 px-6 py-3 rounded-full">Explore more <span><img src={Darkarrow} width={20} /></span></button>
      </div>{" "}
    </nav>
  );
}

export default Navbar;
