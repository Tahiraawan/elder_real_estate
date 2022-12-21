import React from "react";
import Image from "next/image";

const Carditems = (props) => {
  return (
    <div
      className="grid grid-cols-3 px-[100px] mt-6"
      style={{ backgroundColor: props.id % 2 == 1 ? "#F2F2F2" : "white" }}
    >
      <div
        className="col-span-2 pt-[80px]"
        style={{ order: props.id % 2 == 1 ? "0" : "1" }}
      >
        <h1 className="font-bold text-[#336699] text-2xl leading-10">
          {props.title}
        </h1>
        <span className="font-[600] text-2xl leading-10">{props.name}</span>
        <p className="text-lg">{props.paragraph}</p>
      </div>
      <div>
        <Image src={props.image} 
        className="py-16"/>
      </div>
    </div>
  );
};

export default Carditems;
