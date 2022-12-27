import React from 'react'

const Hero = () => {
  return (
    <div
    className=" w-full"
    style={{
      height: "622px",
      backgroundImage: `url(/aboutHero.avif)`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    }}
   >
   <div className="bg-[#3F758E] h-full opacity-[0.6] flex justify-center items-center">
   <span className="font-[700] text-[52px] text-[#ffffff]">Elder Family Office</span>
   </div>
  </div>
  )
}

export default Hero