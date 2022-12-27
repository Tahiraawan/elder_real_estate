import React from "react";
import Counterup from "./Counterup";

const PowerNumbers = () => {
  return (
    <div
      className=" w-full text-white"
      style={{
        height: "520px",
        backgroundImage: `url(/powernumber.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="h-full w-full opacity-[0.6] font-bold text-center">
        <div className="grid grid-cols-3 h-[500]">
          <div>
            <div className="border-4 p-10 m-20 font-bold">
              <Counterup start={0} end={885} duration={3} />
              <p className="pt-5">UNITS OWNED & OPERATED</p>
            </div>
          </div>
          <div>
            <div className="border-4 p-10 m-20 font-bold">
              <Counterup start={0} end={375} duration={3} />
              <p className="pt-5 text-white font-bold">
                ASSET VALUE (MILLION DOLLAR)
              </p>
            </div>
          </div>
          <div>
            <div className="border-4 p-10 m-20 font-bold ">
              <Counterup start={0} end={2150} duration={3} />
              <p className="pt-5">AVG. MONTHLY RENT / UNIT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerNumbers;
