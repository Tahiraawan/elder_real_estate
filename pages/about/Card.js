import React from "react";
import Carditems from "./Carditems";
import { data } from "./data";

const Card = () => {
  return (
    <div className="">
      {data.map((info,index) => {
        return (
          <Carditems
            id={info.id}
            title={info.title}
            name={info.name}
            paragraph={info.paragraph}
            image={info.image}
          />
        );
      })}
    </div>
  );
};

export default Card;
