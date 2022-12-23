import React from "react";
import { useState,useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false)

useEffect(() => {
  function handleScroll(){
    if(window.scrollY>10){
      setNav(true)
    }
    else{
      setNav(false)
    }
  }
  
window.addEventListener("scroll",handleScroll)
  return () => {
   window.removeEventListener("scroll",handleScroll) 
  }
}, [])

  
  return (
   <div className="fixed w-full z-40 " >
     <div className={`flex justify-between px-28 py-7 ${nav?"bg-white":"bg-transparent"} font-bold ${nav? "text-[#6E6699]":"text-white"}`}>
      <div className="">
        <Link href="/">logo</Link>
      </div>
      <div className={``}>
        <ul className="flex md:space-x-[45px] ">
          <Link href="/">
            <li className={`cursor-pointer `}>HOME</li>
          </Link>
          <Link href="/about">
            <li className="cursor-pointer">ABOUT</li>
          </Link>
          <li className="cursor-pointer">PORTFOLIO</li>
          <li className="cursor-pointer">MARKET INSIGHT</li>
          <li className="cursor-pointer">CONTACT</li>
        </ul>
      </div>
    </div>
   </div>
  );
};

export default Navbar;
