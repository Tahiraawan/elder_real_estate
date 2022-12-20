import React from "react";
import Link from "next/link";

const Navbar = () => {
 
  return (
    <nav className="flex justify-between px-28 py-7 bg-gray-400 font-bold text-white">
      <div>
     <Link href="/">logo</Link>

      </div>
      <div>
        <ul className="flex md:space-x-[45px] ">
            <li className="cursor-pointer">HOME</li>
            <li className="cursor-pointer">ABOUT</li>
            <li className="cursor-pointer">PORTFOLIO</li>
            <li className="cursor-pointer">MARKET INSIGHT</li>
            <li className="cursor-pointer">CONTACT</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
