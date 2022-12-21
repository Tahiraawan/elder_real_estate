import React from "react";

const Platform = () => {
  return (
    <div className="grid grid-cols-2 gap-20 py-20 bg-[#F5F5EF]">
      <div className="text-justify pl-[150px] pt-8">
        <h1 className="font-[900] text-[45px] leading-[60px] text-center pb-7">Our Platform</h1>
        <div>
         <p className="font-[400] text-[17px] leading-[33px] pb-[20px]"> Led by CEO Saef Elder, the Elder Real Estate Fund (EREF) is one of the
          largest privately owned and operated real estate funds in the San
          Francisco Bay Area and Phoenix Metro. The firm employs several
          strategies in acquisitions, construction, and property management. The
          firm’s value-add strategy targets quality discounted properties,
          recapitalized equity, and maximized profitability with cash-flow
          positive rentals.</p>
          <p className="font-[400] text-[17px] leading-[33px] pb-[20px]">
          The firm believes intellectual and human capital is essential to
          future growth. The fund projects annual double-digit growth with the
          goal of acquiring an additional 1,000 properties by 2023.</p>
          <p className="font-[400] text-[17px] leading-[33px] pb-[25px]"> So far, we are on pace to exceed that goal as we have purchased over
          559 units since the beginning of 2021.</p>
        </div>
        <button className="text-[#FFFFFF] bg-[#1063AF] hover:bg-[#06549d] font-[600]  text-[17px] leading-[25px] px-[25px] py-[10px] hover:scale-125 rounded ease-in duration-300 drop-shadow-2xl">Read More</button>
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
