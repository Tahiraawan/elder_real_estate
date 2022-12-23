import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '../../../public/logo.png'

const Footer = () => {
  return (
    <div className="bg-[#001c38] pt-[70px] pb-[50px] flex flex-col gap-10 ">
      <div className="grid grid-cols-3 space-x-48">
        <div className="text-white grid ml-[200px]">
          <image 
          src="/logo.png"
          />
          <p className="text-[#ADADAD] font-[400] text-[13px]">
            We believe that intellectual and human capital is essential to
            future growth.
          </p>
        </div>
        <div className="text-white">
          <h1 className="pb-2 font-[700] text-xl">Important Links</h1>
          <ul className="text-[#ADADAD]">
            <Link href="/">
              <li className="cursor-pointer pb-1">Home</li>
            </Link>
            <Link href="/about">
              <li className="cursor-pointer pb-1">About</li>
            </Link>
            <li className="cursor-pointer pb-1">Portfolio</li>
            <li className="cursor-pointer pb-1">Market Insight</li>
            <li className="cursor-pointer pb-1">Contact</li>
          </ul>
        </div>
        <div className="text-white">
          <h1 className="pb-2 font-[700] text-xl">Portfolio</h1>
          <ul className="text-[#ADADAD]">
            <li className="cursor-pointer pb-1">Acquisition</li>
            <li className="cursor-pointer pb-1">Acquisition</li>
            <li className="cursor-pointer pb-1">Acquisition</li>
            <li className="cursor-pointer pb-1">Acquisition</li>
            <li className="cursor-pointer pb-1">Acquisition</li>
          </ul>
        </div>
      </div>
      <p className="text-[#ADADAD] font-[400] text-[13px] text-justify border-y-[1px] border-[#ffffff30] p-5 px-[142px] ">This material is provided for educational purposes only and is not intended to be relied upon as a forecast or investment advise. It is not a recommendation or solicitation to adopt any investment strategy. The opinion presented are subject to change. Reliance upon information in this material is at the sole risk and discretion of the reader. Material was prepared with regard to specific objectives. Any changes to assumptions that may have been made in preparing this material could have a material impact on the investment returns that are presented herein. Past performance is not a reliable indicator of current or future results. This material is not to be reproduced or distributed to persons other than the recipient.</p>
      <p className="text-[#ADADAD] font-[400] text-[13px] text-center">
        Copyright © 2022 All rights reserved | Elder Real Estate Fund | Powered
        by: Vigorant, Inc.
      </p>
    </div>
  );
};

export default Footer;
