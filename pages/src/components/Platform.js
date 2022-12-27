import React from "react";

const Platform = ({ data }) => {
  console.log(data);
  return (
    <div className="grid grid-cols-2 gap-20 py-20 bg-[#F5F5EF]">
      <div className="text-justify pl-[150px] pt-8">
        <h1 className="font-[900] text-[45px] leading-[60px] text-center pb-7">
          {data?.headline}
        </h1>
        <p className="font-[400] text-[17px] leading-[33px] pb-[20px]">
          {data?.description}
        </p>
        <button className="text-[#FFFFFF] bg-[#1063AF] hover:bg-[#06549d] font-[600]  text-[17px] leading-[25px] px-[25px] py-[10px] hover:scale-125 rounded ease-in duration-300 drop-shadow-2xl">
          Read More
        </button>
      </div>
      <div
        className="h-[600px] py-[66px]"
        style={{
          backgroundImage: `url(https://elderrealestatefund.com/wp-content/uploads/2021/01/u3.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default Platform;
