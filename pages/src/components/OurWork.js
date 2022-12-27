import React from 'react';
import WorkSlider from '../components/WorkSlider'

const OurWork = () => {
  return (
    <div className='py-20 bg-[#F5F5EF]'>
      <h1 className="font-[700] text-[45px] leading-[60px] text-center pb-3">Check Out Our Work</h1>
      <p className="font-[400] text-[25px] leading-[40px] text-center pb-7">Take a peek inside our Wonderworld</p>
      <WorkSlider/>
    </div>
  )
}

export default OurWork