import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#001c38] py-[70px] flex flex-col px-[200px] ">
      <div className="grid grid-cols-3 space-x-48">
        <div className="text-white border grid">
          image
          <p className="text-[#ADADAD] font-[400] text-[13px]">
            We believe that intellectual and human capital is essential to
            future growth.
          </p>
        </div>
        <div className="text-white border">
          <h1>Important Links</h1>
          <ul className="">
            <Link href="/">
              <li className="cursor-pointer">HOME</li>
            </Link>
            <Link href="/about">
              <li className="cursor-pointer">ABOUT</li>
            </Link>
            <li className="cursor-pointer">PORTFOLIO</li>
            <li className="cursor-pointer">MARKET INSIGHT</li>
            <li className="cursor-pointer">CONTACT</li>
          </ul>
        </div>
        <div className="text-white">
          <h1>Portfolio</h1>
          <ul className="">
            <li className="cursor-pointer">Acquisition</li>
            <li className="cursor-pointer">Acquisition</li>
            <li className="cursor-pointer">Acquisition</li>
            <li className="cursor-pointer">Acquisition</li>
            <li className="cursor-pointer">Acquisition</li>
          </ul>
        </div>
      </div>
      {/* <p className="text-[#ADADAD] font-[400] text-[13px] text-justify">This material is provided for educational purposes only and is not intended to be relied upon as a forecast or investment advise. It is not a recommendation or solicitation to adopt any investment strategy. The opinion presented are subject to change. Reliance upon information in this material is at the sole risk and discretion of the reader. Material was prepared with regard to specific objectives. Any changes to assumptions that may have been made in preparing this material could have a material impact on the investment returns that are presented herein. Past performance is not a reliable indicator of current or future results. This material is not to be reproduced or distributed to persons other than the recipient.</p> */}
      <p className="text-[#ADADAD] font-[400] text-[13px] text-center">
        Copyright © 2022 All rights reserved | Elder Real Estate Fund | Powered
        by: Vigorant, Inc.
      </p>
    </div>
  );
};

export default Footer;
