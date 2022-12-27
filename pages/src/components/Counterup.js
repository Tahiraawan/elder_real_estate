import React from "react";
import  CountUp  from "react-countup";

const Counterup = (props) => {
    console.log(props)
  return (
    <div className="App">
    <div className="text-[33px]">
      <CountUp
        start={props.start}
        end={props.end}
        duration={props.duration}
      />    
    </div>
  </div>
  );
};

export default Counterup;
