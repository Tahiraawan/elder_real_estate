import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      fade: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="w-full bg-slate-300">
        <Slider {...settings}>
          <div>
            <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></img>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></img>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></img>
          </div>
          <div>
            <img src="https://media.istockphoto.com/id/1367954158/photo/residential-district-with-luxury-villas-walking-path-and-palm-trees.jpg?b=1&s=170667a&w=0&k=20&c=7fnelIUBmNUXI7Di9Txc6CaaKd0rdevqdHlSK-R1h5s="></img>
          </div>
        </Slider>
      </div>
    );
  }
}
