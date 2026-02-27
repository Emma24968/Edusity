import React from "react";
import programs from "../../data";

export default function Program() {
  return (
    <div>
      <h3>Program</h3>
      <h3>What we offer</h3>

      <div>
        {programs.map((program,index)=>{
         return   <img src={program} key={index} alt="" />
        })}
      </div>
    </div>
  );
}
