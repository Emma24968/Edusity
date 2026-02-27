import React from "react";
import Darkarrow from "../../assets/dark-arrow.png";
import heroImage from "../../assets/hero.png";

export default function Hero() {
  return (
    <div className="relative z-10 w-full h-[100vh] text-white px-[10%]  bg-[#191444] text-center">
      <img
        src={heroImage}
        alt="hero"
        className="absolute  inset-0 w-full h-full object-cover opacity-40"
      />
      <h3 className="text-6xl font-bold">
        We Ensure better education <br /> for a better world
      </h3>

      <p className="mt-4 text-1xl">
        Our cutting-edge curriculum is designed to empower students with the
        knowledge, skills,
        <br /> and experiences needed to excel in the dynamic field of education
      </p>
      <button className="bg-white text-black flex items-center gap-2 justify-center mx-auto mt-6 px-6 py-3 rounded-full">
        Explore more{" "}
        <span>
          <img src={Darkarrow} width={20} />
        </span>
      </button>
    </div>
  );
}
